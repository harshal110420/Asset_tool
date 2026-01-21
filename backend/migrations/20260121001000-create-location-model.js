"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("locations", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      parentLocationId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "locations",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      locationType: {
        type: Sequelize.ENUM(
          "Office",
          "Branch",
          "Warehouse",
          "Floor",
          "Room",
          "Remote",
        ),
        allowNull: false,
        defaultValue: "Office",
      },

      address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      isHeadOffice: {
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
    await queryInterface.dropTable("locations");
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_locations_locationType";',
    );
  },
};
