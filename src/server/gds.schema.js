const { buildSchema } = require("graphql");

module.exports = buildSchema(
  `
     type Query {
         getHCPs(limit: Int, offset: Int, id: String, expert_id: String, onekey_id: String, full_name: String, middle_name: String, first_name: String, last_name: String, country: String, affiliation: String): [HCP]
         getConferences(limit: Int, offset: Int, id: String, conference_id: String, conference_title_id: String, expert_id: String, onekey_id: String, country: String, meeting_name: String) : [Conference]
         getClinicalTrials(limit: Int, offset: Int, id: String, clinical_trial_id: String, expert_id: String, onekey_id: String, expert_name: String, country: String, trial_title: String) : [ClinicalTrial]
         getGuidelines(limit: Int, offset: Int, id: String, guideline_id: String, expert_id: String, onekey_id: String, expert_name: String, country: String, name_of_the_guideline: String) : [Guideline]
         getPublications(limit: Int, offset: Int, id: String, additional_publication_id: String, publication_id: String, expert_id: String, onekey_id: String, expert_name: String, country: String, article_title: String) : [Publication]
     }

     type HCP {
         id: ID!
         expert_id: String
         onekey_id: String
         full_name: String
         first_name: String
         middle_name: String
         last_name: String
         affiliation: String
         country: String

     }

     type Conference {
        id: ID!
        conference_id: String
        conference_title_id: String
        expert_id: String
        onekey_id: String
        country: String
        meeting_name: String
    }

    type ClinicalTrial {
        id: ID!
        clinical_trial_id: String
        expert_id: String
        onekey_id: String
        expert_name: String
        country: String
        trial_title: String
    }

     type Guideline {
        id: ID!
        guideline_id: String
        expert_id: String
        onekey_id: String
        expert_name: String
        country: String
        name_of_the_guideline: String 
    }

    
    type Publication {
        id: ID!
        additional_publication_id: String
        publication_id: String
        expert_id: String
        onekey_id: String
        expert_name: String
        country: String
        article_title: String
    }
    `
);
