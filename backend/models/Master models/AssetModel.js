// src/models/master/AssetModel.js
const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const AssetModel = dashMatrixSequelize.define(
    "AssetModel",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      modelName: {
        type: DataTypes.STRING,
        allowNull: false, // Latitude 5420
      },

      modelNumber: {
        type: DataTypes.STRING,
        allowNull: true, // L5420-INTEL
      },

      assetCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      assetSubCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      manufacturerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      defaultWarrantyTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true, // FK → warranty_types
      },

      specification: {
        type: DataTypes.TEXT,
        allowNull: true, // RAM, SSD, Processor
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "asset_models",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );

  return AssetModel;
};
