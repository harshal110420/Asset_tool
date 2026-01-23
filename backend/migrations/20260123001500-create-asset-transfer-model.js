"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("asset_transfers", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      asset_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },

      transfer_code: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },

      // FROM
      from_location_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      from_user_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      from_department_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },

      // TO
      to_location_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      to_user_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      to_department_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },

      transfer_type: {
        type: Sequelize.ENUM("location", "user", "department"),
        allowNull: false,
      },

      transfer_reason: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      status: {
        type: Sequelize.ENUM("pending", "approved", "rejected", "completed"),
        allowNull: false,
        defaultValue: "pending",
      },

      requested_by: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },

      approved_by: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },

      approved_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      transferred_at: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("asset_transfers");
  },
};
