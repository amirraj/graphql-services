const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {ppi_db,ct_db} = require('./src/config/database');
const root = require('./src/server/gds.resolver')
//const root = require('./src/server/hcp-articles.resolver')
//const schema = require('./src/server/hcp-articles.schema')
const schema = require('./src/server/gds.schema')
const dotenv = require('dotenv');
const cors = require('cors');
const DataProviderFactory = require('./src/server/DataProviderFactory');

const factory = new DataProviderFactory(process.env.GDS_DATABASE_URL);

// ct_db.authenticate()
//   .then(() => console.log('CT Database connected...'))
//   .catch(err => console.log('Error: ' + err))

factory.db.authenticate()
  .then(() => console.log('GDS Database connected using factory...'))
  .catch(err => console.log('Error: ' + err))

const app = express();
app.get('/',(req,res)=> res.send('Index'));
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));