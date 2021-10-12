const hcpModel = require("./gds-hcp.model");
const publicationsModel = require("./gds-publications.model");
const conferencesModel = require("./gds-conferences.model");
const guidelinesModel = require("./gds-guidelines.model");
const clinicalTrialsModel = require("./gds-clinical-trials.model");

const Query = {
  getHCPs: () => {
    return hcpModel.findAll();
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
