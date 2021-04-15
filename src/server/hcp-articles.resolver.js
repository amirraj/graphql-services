const HcpArticles = require('./hcp-articles.model');
const { Op } = require('sequelize');

async function getArticles() {
    try{
        const article_details = await HcpArticles.findAll();
        return article_details;
    } catch (err) {
        console.log(err);
    }
}

async function getArticle(args) {
    const id = args.uuid? args.uuid:'';
    const oneKeyID = args.oneKeyID? args.oneKeyID:'';
    try{
        const article_details = await HcpArticles.findAll({
            // where:{
            //     uuid: id
            // }
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
    getArticleById: getArticle
}

module.exports = root;