"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("asset_procurements", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      vendorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "vendors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      procurementType: {
        type: Sequelize.ENUM("Purchase", "Lease", "Rental", "Donation"),
        allowNull: false,
        defaultValue: "Purchase",
      },

      poNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      grnNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      invoiceNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      invoiceDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      purchaseDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      totalQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      totalAmount: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: true,
      },

      taxAmount: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: true,
      },

      currency: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "INR",
      },

      procurementStatus: {
        type: Sequelize.ENUM(
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
    await queryInterface.dropTable("asset_procurements");
  },
};
