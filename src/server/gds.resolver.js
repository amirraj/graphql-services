const Publication = require("./gds-publications.model");
const HCP = require("./gds-hcp.model");
const ClinicalTrial = require("./gds-clinical-trials.model");
const Conference = require("./gds-conferences.model");
const Guideline = require("./gds-guidelines.model");
const { Op } = require("sequelize");

async function getHCPs(args) {
  try {
    let query = {};
    let where = { where: {
      expert_id: args.expert_id,
      id: args.id,
      onekey_id: args.onekey_id,
      country: args.country,
      full_name: args.full_name,
      first_name: args.first_name,
      middle_name: args.middle_name,
      last_name: args.last_name,
      affiliation: args.affiliation
    }};

    Object.keys(where.where).forEach((key, index) => {
      if(where.where[key] === undefined){
        delete where.where[key];
      }
    });



    query = (args.offset || args.limit)? {
        ...args,
        ...where
      } :  where;

    const hcp_details = await HCP.findAll(query);
    return hcp_details;
  } catch (err) {
    console.log(err);
  }
}

async function getTrials(args) {
  try {
    const trial_details = await ClinicalTrial.findAll({
        limit: args.limit,
        offset: args.offset
    });
    return trial_details;
  } catch (err) {
    console.log(err);
  }
}

async function getGuidelines(args) {
  try {
    const guideline_details = await Guideline.findAll({
        limit: args.limit,
        offset: args.offset
    });
    return guideline_details;
  } catch (err) {
    console.log(err);
  }
}

async function getConferences(args) {
  try {
    const conference_details = await Conference.findAll({
        limit: args.limit,
        offset: args.offset
    });
    return conference_details;
  } catch (err) {
    console.log(err);
  }
}

async function getPublications(args) {
  try {
    const publication_details = await Publication.findAll({
        limit: args.limit,
        offset: args.offset
    });
    return publication_details;
  } catch (err) {
    console.log(err);
  }
}

async function getHCPById(args) {
  const expert_id = args.expert_id;
  try {
    const hcp_details = await HCP.findAll({
      where: {
        expert_id: expert_id,
      },
    });
    return hcp_details;
  } catch (err) {
    console.log(err);
  }
}

async function getClinicalTrialById(args) {
  const clinical_trial_id = args.clinical_trial_id;
  try {
    const trial_details = await ClinicalTrial.findAll({
      where: {
        clinical_trial_id: clinical_trial_id,
      },
    });
    return trial_details;
  } catch (err) {
    console.log(err);
  }
}

async function getGuidelineById(args) {
  const guideline_id = args.guideline_id;
  try {
    const guideline_details = await Guideline.findAll({
      where: {
        guideline_id: guideline_id,
      },
    });
    return guideline_details;
  } catch (err) {
    console.log(err);
  }
}

async function getConferenceById(args) {
  const conference_id = args.conference_id;
  try {
    const conference_details = await Conference.findAll({
      where: {
        conference_id: conference_id,
      },
    });
    return conference_details;
  } catch (err) {
    console.log(err);
  }
}

async function getPublicationById(args) {
  const publication_id = args.publication_id;
  try {
    const publication_details = await Publication.findAll({
      where: {
        publication_id: publication_id,
      },
    });
    return publication_details;
  } catch (err) {
    console.log(err);
  }
}


var root = {
  getAllHCPs: getHCPs,
  getHCPById: getHCPById,
  getAllClinicalTrials: getTrials,
  getAllConferences: getConferences,
  getAllGuidelines: getGuidelines,
  getAllPublications: getPublications,
  getClinicalTrialById: getClinicalTrialById,
  getGuidelineById: getGuidelineById,
  getConferenceById: getConferenceById,
  getPublicationById: getPublicationById,
};

module.exports = root;
