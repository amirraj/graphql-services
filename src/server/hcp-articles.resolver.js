const HcpArticles = require('./hcp-articles.model');
const HcpProfiles = require('./hcp-profile.model');
const Trial = require('./clinical-trials.trial.model');
const Location = require('./clinical-trials.location.model');
const { Op } = require('sequelize');

async function getArticles() {
    try{
        const article_details = await HcpArticles.findAll();
        return article_details;
    } catch (err) {
        console.log(err);
    }
}

async function getTrials() {
    try{
        const trial_details = await Trial.findAll();
        return trial_details;
    } catch (err) {
        console.log(err);
    }
}
async function getLocations(args) {
    const trialId = args.trialId;
    try{
        const location_details = await Location.findAll({
            where:{
                clinicalTrialId:trialId
            }
        });
        return location_details;
    } catch (err) {
        console.log(err);
    }
}

async function getHCPs(args) {
    //const locationId = args.locationId;
    try{
        const hcp_details = await HcpProfiles.findAll();
        return hcp_details;
    } catch (err) {
        console.log(err);
    }
}

async function getArticle(args) {
    const id = args.uuid? args.uuid:'';
    const oneKeyID = args.oneKeyID? args.oneKeyID:'';
    try{
        const article_details = await HcpArticles.findAll({
            where: {
                [Op.or]: [
                {uuid: id},
                {individual_id_onekey:oneKeyID }
                ]}
        });
        console.log('the result is ',article_details);
        return article_details;
    } catch (err) {
        console.log(err);
    }
}

var root = {
    getAllArticles: getArticles,
    getArticleById: getArticle,
    getAllTrials: getTrials,
    getAllLocations: getLocations,
    getHCPs: getHCPs
}

module.exports = root;