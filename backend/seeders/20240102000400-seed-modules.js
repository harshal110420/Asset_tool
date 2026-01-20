"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("modules", [
      {
        moduleId: "ADMIN",
        name: "Administration",
        path: "admin-module",
        version: "1.0",
        isActive: true,
        orderBy: 2,
        created_by: null,
        updated_by: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        moduleId: "SYSTEM",
        name: "System",
        path: "system-module",
        version: "1.0",
        isActive: true,
        orderBy: 1,
        created_by: null,
        updated_by: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("modules", null, {});
  },
};
