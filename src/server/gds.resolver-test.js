const hcpModel = require("./gds-hcp.model");
const publicationsModel = require("./gds-publications.model");
const conferencesModel = require("./gds-conferences.model");
const guidelinesModel = require("./gds-guidelines.model");
const clinicalTrialsModel = require("./gds-clinical-trials.model");

const filterKeys = (dict) => {
  Object.keys(dict.where).forEach((key, index) => {
    if (dict.where[key] === undefined) {
      delete dict.where[key];
    }
  });

  return dict;
};

const Query = {
  getHCPs: (root, args) => {
    let query = {};
    let where = {
      where: {
        expert_id: args.expert_id,
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

    const hcp_details = hcpModel.findAll(query);

    return hcp_details;
  },
  getPublications: () => publicationsModel.findAll(),
  getGuidelines: () => guidelinesModel.findAll(),
  getConferences: () => conferencesModel.findAll(),
  getClinicalTrials: () => clinicalTrialsModel.findAll(),
};

const HCP = {
  publication: (hcp) =>
    publicationsModel.findAll({
      where: {
        expert_id: hcp.expert_id,
      },
    }),

  conference: (hcp) =>
    conferencesModel.findAll({
      where: {
        expert_id: hcp.expert_id,
      },
    }),

  guideline: (hcp) =>
    guidelinesModel.findAll({
      where: {
        expert_id: hcp.expert_id,
      },
    }),

  clinicalTrial: (hcp) =>
    clinicalTrialsModel.findAll({
      where: {
        expert_id: hcp.expert_id,
      },
    }),
};

module.exports = { Query, HCP };
