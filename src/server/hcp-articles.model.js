const { DataTypes } = require('sequelize');
const {ppi_db} = require('../config/database')

const HcpArticles = ppi_db.define('hcp_articles', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    author_name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    article_title: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    article_abstract: {
        allowNull: true,
        type: DataTypes.TEXT
    },
    article_url: {
        allowNull: false,
        type: DataTypes.STRING
    },
    citation_count: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    co_authors: {
        allowNull: true,
        type: DataTypes.STRING
    },
    individual_id_onekey: {
        allowNull: false,
        type: DataTypes.STRING
    }, 
    uuid: {
        allowNull: false,
        type: DataTypes.STRING
    }
}, {
    schema: `ppi`,
    tableName: 'hcp_articles',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = HcpArticles; 