const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const AssetProcurement = dashMatrixSequelize.define(
    "AssetProcurement",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      vendorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      procurementType: {
        type: DataTypes.ENUM("Purchase", "Lease", "Rental", "Donation"),
        allowNull: false,
        defaultValue: "Purchase",
      },

      poNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      grnNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      invoiceNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      invoiceDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      purchaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      totalQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      totalAmount: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
      },

      taxAmount: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
      },

      currency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "INR",
      },

      procurementStatus: {
        type: DataTypes.ENUM(
          "Draft",
          "Ordered",
          "Partially Received",
          "Received",
          "Cancelled",
        ),
        allowNull: false,
        defaultValue: "Draft",
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
      tableName: "asset_procurements",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );

  return AssetProcurement;
};
