const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const AssetTransfer = dashMatrixSequelize.define(
    "AssetTransfer",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },

      asset_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      transfer_code: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },

      // FROM
      from_location_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      from_user_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      from_department_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      // TO
      to_location_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      to_user_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      to_department_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      transfer_type: {
        type: DataTypes.ENUM("location", "user", "department"),
        allowNull: false,
      },

      transfer_reason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      status: {
        type: DataTypes.ENUM("pending", "approved", "rejected", "completed"),
        defaultValue: "pending",
      },

      requested_by: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      approved_by: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      approved_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      transferred_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "asset_transfers",
      timestamps: true,
      paranoid: true,
    },
  );

  return AssetTransfer;
};
