const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const AssetAssignment = dashMatrixSequelize.define(
    "AssetAssignment",
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

      assignedToUserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      assignedToDepartmentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      assignedByUserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      assignmentDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      expectedReturnDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      actualReturnDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      assignmentType: {
        type: DataTypes.ENUM("Permanent", "Temporary", "Project"),
        allowNull: false,
        defaultValue: "Permanent",
      },

      assignmentStatus: {
        type: DataTypes.ENUM("Assigned", "Returned", "Lost", "Damaged"),
        allowNull: false,
        defaultValue: "Assigned",
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
      tableName: "asset_assignments",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );

  return AssetAssignment;
};
