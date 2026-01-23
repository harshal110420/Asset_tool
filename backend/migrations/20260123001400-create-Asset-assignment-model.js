"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("asset_assignments", {
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

      assignedToUserId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      assignedToDepartmentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "departments",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      assignedByUserId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      assignmentDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      expectedReturnDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      actualReturnDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      assignmentType: {
        type: Sequelize.ENUM("Permanent", "Temporary", "Project"),
        allowNull: false,
        defaultValue: "Permanent",
      },

      assignmentStatus: {
        type: Sequelize.ENUM("Assigned", "Returned", "Lost", "Damaged"),
        allowNull: false,
        defaultValue: "Assigned",
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
    await queryInterface.dropTable("asset_assignments");
  },
};
