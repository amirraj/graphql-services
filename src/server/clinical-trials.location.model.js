const { DataTypes } = require('sequelize');
const {ct_db} = require('../config/database')
const HcpProfiles = require('./hcp-profile.model');

let locationModel = {
    name: 'locations',
    db_properties: {
        id: {
            allowNull: true,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        location_status: {
            unique: false,
            allowNull: true,
            type: DataTypes.STRING(1024)
        },
        location_facility: {
            unique: false,
            allowNull: true,
            type: DataTypes.STRING(1024)
        },
        location_city: {
            unique: false,
            allowNull: true,
            type: DataTypes.STRING(1024)
        },
        location_zip: {
            unique: false,
            allowNull: true,
            type: DataTypes.STRING(1024)
        },
        location_country: {
            unique: false,
            allowNull: true,
            type: DataTypes.STRING(1024)
        },
        lat: {
            unique: false,
            allowNull: true,
            type: DataTypes.FLOAT()
        },
        lng: {
            unique: false,
            allowNull: true,
            type: DataTypes.FLOAT()
        }
    },
    db_schema: {
        schema: `clinical-trials`,
        tableName: 'locations',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
};

const Location = ct_db.define(locationModel.name, locationModel.db_properties, locationModel.db_schema);

Location.hasMany(HcpProfiles, { as: "hcps" });
HcpProfiles.belongsTo(Location, {
  foreignKey: "locationId",
  as: "location",
});

HcpProfiles.belog

module.exports = Location;
