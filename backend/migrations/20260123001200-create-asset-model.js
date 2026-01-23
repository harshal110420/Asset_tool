"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("assets", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      asset_tag: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      serial_number: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },

      asset_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "asset_categories", key: "id" },
      },

      asset_sub_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "asset_sub_categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      asset_model_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "asset_models",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      manufacturer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "manufacturers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      vendor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "vendors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      procurement_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "asset_procurements",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      purchase_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },

      purchase_cost: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: true,
      },

      warranty_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "warranty_types",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      warranty_start_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },

      warranty_end_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },

      asset_status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "asset_statuses",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      asset_condition_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "asset_conditions",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      current_location_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "locations",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      capitalization_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },

      is_active: {
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
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("assets");
  },
};
