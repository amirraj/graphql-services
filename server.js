const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const db = require('./src/config/database');
const root = require('./src/server/hcp-articles.resolver')
const schema = require('./src/server/hcp-articles.schema')
const dotenv = require('dotenv');
const cors = require('cors');

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();
app.get('/',(req,res)=> res.send('Index'));
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: false,
}));
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));