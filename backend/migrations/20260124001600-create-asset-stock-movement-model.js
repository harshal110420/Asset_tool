"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("asset_stock_movements", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      asset_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "assets",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      location_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "locations",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      movement_type: {
        type: Sequelize.ENUM("IN", "OUT", "ADJUSTMENT"),
        allowNull: false,
      },

      reference_type: {
        type: Sequelize.ENUM(
          "PROCUREMENT",
          "TRANSFER",
          "ASSIGNMENT",
          "MAINTENANCE",
          "DISPOSAL",
          "MANUAL",
        ),
        allowNull: false,
      },

      reference_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },

      quantity_before: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },

      quantity_moved: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      quantity_after: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      remarks: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
        ),
      },

      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("asset_stock_movements");
  },
};
