"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("asset_maintenances", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      assetId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "assets",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      vendorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "vendors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      maintenanceType: {
        type: Sequelize.ENUM("Preventive", "Corrective", "Breakdown", "AMC"),
        allowNull: false,
      },

      maintenanceDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      nextMaintenanceDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      cost: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: true,
      },

      downtimeHours: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      maintenanceStatus: {
        type: Sequelize.ENUM(
          "Scheduled",
          "In Progress",
          "Completed",
          "Cancelled",
        ),
        allowNull: false,
        defaultValue: "Scheduled",
      },

      remarks: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },

      created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("asset_maintenances");
  },
};
