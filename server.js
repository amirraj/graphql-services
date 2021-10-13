const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const fs = require("fs");
const root = require("./src/server/gds.resolver");
const schema = require("./src/server/gds.schema");
const dotenv = require("dotenv");
const cors = require("cors");
const DataProviderFactory = require("./src/server/DataProviderFactory");
const Keycloak = require('keycloak-connect')

const { KeycloakContext, KeycloakTypeDefs, KeycloakSchemaDirectives } = require('keycloak-connect-graphql')

const factory = new DataProviderFactory(process.env.GDS_DATABASE_URL);

factory.db
  .authenticate()
  .then()
  .catch((err) => console.log("Error: " + err));

const app = express();
const keycloak = new Keycloak('./keycloak.json');


//app.use(cors());
app.use(keycloak.middleware());
const typeDefs = gql(
  fs.readFileSync("./src/server/gds.schema.graphql", { encoding: "utf8" })
);
const resolvers = require("./src/server/gds.resolver-test");
const apolloServer = new ApolloServer({ 
  typeDefs: [KeycloakTypeDefs, typeDefs],
  schemaDirectives: KeycloakSchemaDirectives,
  resolvers,
  context: ({ req }) => {
    return {
      kauth: new KeycloakContext({ req }) 
    }
  } });
apolloServer.applyMiddleware({ app, path: "/gds" });
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
