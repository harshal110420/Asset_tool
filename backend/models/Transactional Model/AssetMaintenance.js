const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const AssetMaintenance = dashMatrixSequelize.define(
    "AssetMaintenance",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      assetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      vendorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      maintenanceType: {
        type: DataTypes.ENUM("Preventive", "Corrective", "Breakdown", "AMC"),
        allowNull: false,
      },

      maintenanceDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      nextMaintenanceDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      cost: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
      },

      downtimeHours: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      maintenanceStatus: {
        type: DataTypes.ENUM(
          "Scheduled",
          "In Progress",
          "Completed",
          "Cancelled",
        ),
        allowNull: false,
        defaultValue: "Scheduled",
      },

      remarks: {
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
      tableName: "asset_maintenances",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );

  return AssetMaintenance;
};
