"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("menus", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      parentCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      // 🔗 FK → modules.id
      moduleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "modules",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      type: {
        type: Sequelize.ENUM("Master", "Transaction", "Report"),
        allowNull: false,
      },

      menuId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },

      orderBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      // 🧾 Audit fields
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      // ⏱ timestamps
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

  async down(queryInterface, Sequelize) {
    // ENUM clean-up is important (MySQL / Postgres safety)
    await queryInterface.dropTable("menus");
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_menus_type";',
    );
  },
};
