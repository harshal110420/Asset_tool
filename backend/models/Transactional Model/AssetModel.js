const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const Asset = dashMatrixSequelize.define(
    "Asset",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      // ---- Identification ----
      assetTag: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      serialNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },

      // ---- Master References ----
      assetCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      assetSubCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      assetModelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      manufacturerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      // ---- Procurement ----
      vendorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      procurementId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      purchaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },

      purchaseCost: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
      },

      // ---- Warranty ----
      warrantyTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      warrantyStartDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },

      warrantyEndDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },

      // ---- Status & Location ----
      assetStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      assetConditionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      currentLocationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      // ---- Lifecycle ----
      capitalizationDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      // ---- Audit ----
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
      tableName: "assets",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );

  return Asset;
};
