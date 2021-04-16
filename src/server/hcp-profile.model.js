const { DataTypes } = require('sequelize');
const {ct_db} = require('../config/database')

let hcpDetailsModel = {
    name: 'hcps',
    db_properties: {
        id: {
            allowNull: true,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        first_name: {
            allowNull: true,
            type: DataTypes.STRING
        },
        last_name: {
            allowNull: true,
            type: DataTypes.STRING
        },
        title: {
            allowNull: true,
            type: DataTypes.STRING
        },
        speciality: {
            allowNull: true,
            type: DataTypes.STRING
        },
        contract_status: {
            allowNull: true,
            type: DataTypes.STRING
        },
        graduation_year: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
        uuid: {
            allowNull: true,
            type: DataTypes.UUID
        },
        individual_identifier: {
            allowNull: true,
            type: DataTypes.STRING
        },
        workplace_id: {
            allowNull: true,
            type: DataTypes.STRING
        },
        birth_year: {
            allowNull: true,
            type: DataTypes.STRING
        }
    },
    db_schema: {
        schema: `clinical-trials`,
        tableName: 'hcps',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
};

const HCP = ct_db.define(hcpDetailsModel.name, hcpDetailsModel.db_properties, hcpDetailsModel.db_schema);

module.exports = HCP;
