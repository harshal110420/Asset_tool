"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("vendors", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      vendorType: {
        type: Sequelize.ENUM("Supplier", "Service", "Both"),
        allowNull: false,
        defaultValue: "Supplier",
      },

      vendorCategory: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      contactPerson: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      city: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      state: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      gstNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      panNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      paymentTerms: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      isPreferred: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable("vendors");
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_vendors_vendorType";',
    );
  },
};
