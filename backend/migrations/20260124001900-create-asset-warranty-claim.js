module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("asset_warranty_claims", {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },

      asset_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "assets", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      warranty_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "warranty_types", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      claim_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },

      issue_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      claim_status: {
        type: Sequelize.ENUM(
          "OPEN",
          "IN_PROGRESS",
          "APPROVED",
          "REJECTED",
          "CLOSED",
        ),
        allowNull: false,
      },

      vendor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "vendors", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      resolution_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },

      remarks: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      raised_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
      deleted_at: { type: Sequelize.DATE, allowNull: true },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("asset_warranty_claims");
  },
};
