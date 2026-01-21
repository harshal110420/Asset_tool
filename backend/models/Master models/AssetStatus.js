const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const AssetStatus = dashMatrixSequelize.define(
    "AssetStatus",
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

      statusType: {
        type: DataTypes.ENUM("Operational", "Maintenance", "Disposal"),
        allowNull: false,
        defaultValue: "Operational",
      },

      isFinal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      description: {
        type: DataTypes.TEXT,
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
      tableName: "asset_statuses",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );

  return AssetStatus;
};
