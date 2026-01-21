"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("asset_conditions", {
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

      conditionType: {
        type: Sequelize.ENUM("New", "Used", "Refurbished", "Damaged"),
        allowNull: false,
        defaultValue: "New",
      },

      isFinal: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

      description: {
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
    await queryInterface.dropTable("asset_conditions");
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_asset_conditions_conditionType";',
    );
  },
};
