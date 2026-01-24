const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const AssetWarrantyClaim = dashMatrixSequelize.define(
    "AssetWarrantyClaim",
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },

      asset_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      warranty_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      claim_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      issue_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      claim_status: {
        type: DataTypes.ENUM(
          "OPEN",
          "IN_PROGRESS",
          "APPROVED",
          "REJECTED",
          "CLOSED",
        ),
        allowNull: false,
        defaultValue: "OPEN",
      },

      vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      resolution_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },

      remarks: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      raised_by: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      tableName: "asset_warranty_claims",
      underscored: true,
      timestamps: true,
      paranoid: true,
    },
  );

  return AssetWarrantyClaim;
};
