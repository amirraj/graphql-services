const {buildSchema} = require('graphql');

module.exports = buildSchema(
    `
     type Query {
         getAllArticles : [Article]
         getArticleById(uuid: String, oneKeyID: String) :[ Article]
     }

     type Article {
         id: ID!
         author_name: String
         article_title: String
         article_abstract: String
         article_url: String
         citation_count: Int
         co_authors: String
         individual_id_onekey: String
         uuid: String

     }
    `
);