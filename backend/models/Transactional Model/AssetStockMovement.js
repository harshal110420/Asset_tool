const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const AssetStockMovement = dashMatrixSequelize.define(
    "AssetStockMovement",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },

      asset_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      location_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      movement_type: {
        type: DataTypes.ENUM("IN", "OUT", "ADJUSTMENT"),
        allowNull: false,
      },

      reference_type: {
        type: DataTypes.ENUM(
          "PROCUREMENT",
          "TRANSFER",
          "ASSIGNMENT",
          "MAINTENANCE",
          "DISPOSAL",
          "MANUAL",
        ),
        allowNull: false,
      },

      reference_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      quantity_before: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },

      quantity_moved: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      quantity_after: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      remarks: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      created_by: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      tableName: "asset_stock_movements",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      paranoid: true,
      deletedAt: "deleted_at",
    },
  );

  return AssetStockMovement;
};
