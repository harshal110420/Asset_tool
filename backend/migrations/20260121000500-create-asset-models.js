// migrations/xxxx-create-asset-models.js
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("asset_models", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      modelName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      modelNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      assetCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "asset_categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      assetSubCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "asset_sub_categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      manufacturerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "manufacturers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      defaultWarrantyTypeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "warranty_types",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      specification: {
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
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },

      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
        ),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("asset_models");
  },
};
