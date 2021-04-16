const {buildSchema} = require('graphql');

module.exports = buildSchema(
    `
     type Query {
         getAllArticles : [Article]
         getArticleById(uuid: String, oneKeyID: String) :[ Article]
         getAllTrials : [ Trial]
         getAllLocations(trialId: String) : [ Location]
         getHCPs : [HCP]
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

     type Location {
        id: ID!
        location_status: String
        location_facility: String
        location_city: String
        location_zip: String
        location_country: String
        lat: Float
        lng: Float
        clinicalTrialId: String
    }

    type HCP {
        id: ID!
        first_name: String
        last_name: String
        title: String
        speciality: String
        contract_status: String
        graduation_year: Int
        uuid: String
        individual_identifier: String
        workplace_id: String
        birth_year: Int
        locationId: String
    }

     type Trial {
        id: ID!
        protocol_number: String
        sponsor: String
        gov_identifier: String
        clinical_trial_brief_summary: String
        clinical_trial_brief_title: String
        gender: String
        min_age: Int 
        max_age: Int 
        std_age: String 
        phase: String 
        trial_status: String 
        type_of_drug: String 
        eudract_number: String 
        trial_start_date: String 
        trial_end_date: String 
        story_telling: String 
        official_title: String 
        indication: String 
        indication_group: String 
        trial_fixed_id: String 
        inclusion_criteria: String 
        exclusion_criteria: String 
        note_criteria: String 
        
    }
    `
);