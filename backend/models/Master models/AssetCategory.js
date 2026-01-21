const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const AssetCategory = dashMatrixSequelize.define(
    "AssetCategory",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      categoryType: {
        type: DataTypes.ENUM(
          "IT",
          "Non-IT",
          "Vehicle",
          "Machinery",
          "Software",
          "Safety",
          "Consumables",
          "Others",
        ),
        allowNull: false,
        defaultValue: "IT",
      },
      
      description: {
        type: DataTypes.STRING,
        allowNull: true,
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
      tableName: "asset_categories",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );

  return AssetCategory;
};
