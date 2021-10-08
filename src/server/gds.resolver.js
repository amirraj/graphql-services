const Publication = require("./gds-publications.model");
const HCP = require("./gds-hcp.model");
const ClinicalTrial = require("./gds-clinical-trials.model");
const Conference = require("./gds-conferences.model");
const Guideline = require("./gds-guidelines.model");
const { Op } = require("sequelize");

const filterKeys = (dict) => {
  Object.keys(dict.where).forEach((key, index) => {
    if (dict.where[key] === undefined) {
      delete dict.where[key];
    }
  });

  return dict;
};

async function getHCPs(args) {
  try {
    let query = {};
    let where = {
      where: {
        expert_id: args.expert_id,
        id: args.id,
        onekey_id: args.onekey_id,
        country: args.country,
        full_name: args.full_name,
        first_name: args.first_name,
        middle_name: args.middle_name,
        last_name: args.last_name,
        affiliation: args.affiliation,
      },
    };

    dict = filterKeys(where);

    query =
      args.offset || args.limit
        ? {
            ...args,
            ...dict,
          }
        : dict;

    const hcp_details = await HCP.findAll(query);
    return hcp_details;
  } catch (err) {
    console.log(err);
  }
}

async function getTrials(args) {
  try {
    let query = {};
    let where = {
      where: {
        expert_id: args.expert_id,
        id: args.id,
        onekey_id: args.onekey_id,
        country: args.country,
        clinical_trial_id: args.clinical_trial_id,
        expert_name: args.expert_name,
        trial_title: args.trial_title,
      },
    };

    dict = filterKeys(where);

    query =
      args.offset || args.limit
        ? {
            ...args,
            ...dict,
          }
        : dict;

    const trial_details = await ClinicalTrial.findAll(query);
    return trial_details;
  } catch (err) {
    console.log(err);
  }
}

async function getGuidelines(args) {
  try {
    let query = {};
    let where = {
      where: {
        id: args.id,
        guideline_id: args.guideline_id,
        expert_id: args.expert_id,
        expert_name: args.expert_name,
        country: args.country,
        name_of_the_guideline: args.name_of_the_guideline,
      },
    };

    dict = filterKeys(where);

    query =
      args.offset || args.limit
        ? {
            ...args,
            ...dict,
          }
        : dict;

    const guideline_details = await Guideline.findAll(query);
    return guideline_details;
  } catch (err) {
    console.log(err);
  }
}

async function getConferences(args) {
  try {
    let query = {};
    let where = {
      where: {
        id: args.id,
        conference_id: args.conference_id,
        conference_title_id: args.conference_title_id,
        expert_id: args.expert_id,
        onekey_id: args.onekey_id,
        country: args.country,
        meeting_name: args.meeting_name,
      },
    };

    dict = filterKeys(where);

    query =
      args.offset || args.limit
        ? {
            ...args,
            ...dict,
          }
        : dict;

    const conference_details = await Conference.findAll(query);
    return conference_details;
  } catch (err) {
    console.log(err);
  }
}

async function getPublications(args) {
  try {
    let query = {};
    let where = {
      where: {
        id: args.id,
        additional_publication_id: args.additional_publication_id,
        publication_id: args.publication_id,
        expert_id: args.expert_id,
        onekey_id: args.onekey_id,
        expert_name: args.expert_name,
        country: args.country,
        article_title: args.article_title,
      },
    };

    dict = filterKeys(where);

    query =
      args.offset || args.limit
        ? {
            ...args,
            ...dict,
          }
        : dict;

    const publication_details = await Publication.findAll(query);
    return publication_details;
  } catch (err) {
    console.log(err);
  }
}

var root = {
  getHCPs: getHCPs,
  getClinicalTrials: getTrials,
  getConferences: getConferences,
  getGuidelines: getGuidelines,
  getPublications: getPublications,
};

module.exports = root;
