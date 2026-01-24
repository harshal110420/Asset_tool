const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const AssetInspection = dashMatrixSequelize.define(
    "AssetInspection",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      asset_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      inspection_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      inspection_type: {
        type: DataTypes.ENUM("ROUTINE", "AUDIT", "SURPRISE"),
        allowNull: false,
      },

      condition_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      remarks: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      inspected_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "asset_inspections",
      underscored: true,
      timestamps: true,
      paranoid: true,
    },
  );

  return AssetInspection;
};
