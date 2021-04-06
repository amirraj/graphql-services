const HcpArticles = require('./hcp-articles.model');

async function getArticles() {
    try{
        const article_details = await HcpArticles.findAll();
        return article_details;
    } catch (err) {
        console.log(err);
    }
}

async function getArticle(args) {
    const id = args.uuid;
    try{
        const article_details = await HcpArticles.findAll({
            where:{
                uuid: id
            }
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