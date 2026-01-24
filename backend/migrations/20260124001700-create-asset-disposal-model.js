module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("asset_disposals", {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
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

      disposal_type: {
        type: Sequelize.ENUM("SALE", "SCRAP", "DONATION", "WRITE_OFF", "LOST"),
        allowNull: false,
      },

      disposal_reason: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },

      disposal_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },

      original_cost: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
      },

      accumulated_depreciation: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
      },

      disposal_value: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
      },

      gain_or_loss: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
      },

      vendor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "vendors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      reference_no: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },

      disposed_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      approved_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      remarks: {
        type: Sequelize.TEXT,
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

      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("asset_disposals");
  },
};
