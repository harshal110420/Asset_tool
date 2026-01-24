module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("asset_inspections", {
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

      inspection_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },

      inspection_type: {
        type: Sequelize.ENUM("ROUTINE", "AUDIT", "SURPRISE"),
        allowNull: false,
      },

      condition_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "asset_conditions", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      remarks: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      inspected_by: {
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
    await queryInterface.dropTable("asset_inspections");
  },
};
