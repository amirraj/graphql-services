const Publication = require('./gds-publications.model');
const HCP = require('./gds-hcp.model');
const ClinicalTrial = require('./gds-clinical-trials.model');
const Conference = require('./gds-conferences.model');
const Guideline = require('./gds-guidelines.model');
const { Op } = require('sequelize');

async function getHCPs() {
    try{
        const hcp_details = await HCP.findAll();
        return hcp_details;
    } catch (err) {
        console.log(err);
    }
}

async function getTrials() {
    try{
        const trial_details = await ClinicalTrial.findAll();
        return trial_details;
    } catch (err) {
        console.log(err);
    }
}

async function getGuidelines() {
    try{
        const guideline_details = await Guideline.findAll();
        return guideline_details;
    } catch (err) {
        console.log(err);
    }
}

async function getConferences() {
    try{
        const conference_details = await Conference.findAll();
        return conference_details;
    } catch (err) {
        console.log(err);
    }
}

async function getPublications() {
    try{
        const publication_details = await Publication.findAll();
        return publication_details;
    } catch (err) {
        console.log(err);
    }
}

async function getHCPById(args) {
    const expert_id = args.expert_id;
    try{
        const hcp_details = await HCP.findAll({
            where:{
                expert_id:expert_id
            }
        });
        return hcp_details;
    } catch (err) {
        console.log(err);
    }
}

// async function getHCPs(args) {
//     //const locationId = args.locationId;
//     try{
//         const hcp_details = await HcpProfiles.findAll({
//             where:{
//                 locationId:args.locationId
//             }
//         });
//         return hcp_details;
//     } catch (err) {
//         console.log(err);
//     }
// }

// async function getArticle(args) {
//     const id = args.uuid? args.uuid:'';
//     const oneKeyID = args.oneKeyID? args.oneKeyID:'';
//     try{
//         const article_details = await HcpArticles.findAll({
//             where: {
//                 [Op.or]: [
//                 {uuid: id},
//                 {individual_id_onekey:oneKeyID }
//                 ]}
//         });
//         console.log('the result is ',article_details);
//         return article_details;
//     } catch (err) {
//         console.log(err);
//     }
// }

var root = {
    getAllHCPs: getHCPs,
    getHCPById: getHCPById,
    getAllClinicalTrials: getTrials,
    getAllConferences: getConferences,
    getAllGuidelines: getGuidelines,
    getAllPublications: getPublications
}

module.exports = root;