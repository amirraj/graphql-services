const {buildSchema} = require('graphql');

module.exports = buildSchema(
    `
     type Query {
         getAllHCPs : [HCP]
         getHCPById(expert_id: String) :[HCP]
         getAllConferences : [Conference]
         getConferenceById(conference_id: String) :[Conference]
         getAllClinicalTrials : [ClinicalTrial]
         getClinicalTrialById(clinical_trial_id: String) :[ClinicalTrial]
         getAllGuidelines : [Guideline]
         getGuidelineById(guideline_id: String) :[Guideline]
         getAllPublications : [Publication]
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
        country: Int
        article_title: String
    }
    `
);