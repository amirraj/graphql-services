const {buildSchema} = require('graphql');

module.exports = buildSchema(
    `
     type Query {
         getAllHCPs(limit: Int, offset: Int, id: String, expert_id: String, onekey_id: String, full_name: String, middle_name: String, first_name: String, last_name: String, country: String, affiliation: String): [HCP]
         getHCPById(expert_id: String) :[HCP]
         getAllConferences(limit: Int, offset: Int) : [Conference]
         getConferenceById(conference_id: String) :[Conference]
         getAllClinicalTrials(limit: Int, offset: Int) : [ClinicalTrial]
         getClinicalTrialById(clinical_trial_id: String) :[ClinicalTrial]
         getAllGuidelines(limit: Int, offset: Int) : [Guideline]
         getGuidelineById(guideline_id: String) :[Guideline]
         getAllPublications(limit: Int, offset: Int) : [Publication]
         getPublicationById(publication_id: String) :[Publication]         
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