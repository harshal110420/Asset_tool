const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const Manufacturer = dashMatrixSequelize.define(
    "Manufacturer",
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

      website: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      supportEmail: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      supportPhone: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      country: {
        type: DataTypes.STRING,
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
      tableName: "manufacturers",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );

  return Manufacturer;
};
