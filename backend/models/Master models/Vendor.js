const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const Vendor = dashMatrixSequelize.define(
    "Vendor",
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

      vendorType: {
        type: DataTypes.ENUM("Supplier", "Service", "Both"),
        allowNull: false,
        defaultValue: "Supplier",
      },

      vendorCategory: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      contactPerson: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      state: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      gstNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      panNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      paymentTerms: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      isPreferred: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
      tableName: "vendors",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );

  return Vendor;
};
