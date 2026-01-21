"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("manufacturers", {
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

      website: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      supportEmail: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      supportPhone: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      country: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("manufacturers");
  },
};
