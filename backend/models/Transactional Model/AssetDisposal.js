const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const AssetDisposal = dashMatrixSequelize.define(
    "AssetDisposal",
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

      disposal_type: {
        type: DataTypes.ENUM("SALE", "SCRAP", "DONATION", "WRITE_OFF", "LOST"),
        allowNull: false,
      },

      disposal_reason: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      disposal_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      original_cost: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
      },

      accumulated_depreciation: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
      },

      disposal_value: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
      },

      gain_or_loss: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
      },

      vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      reference_no: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },

      disposed_by: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      approved_by: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      remarks: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "asset_disposals",
      underscored: true,
      paranoid: true,
      timestamps: true,
    },
  );

  return AssetDisposal;
};
