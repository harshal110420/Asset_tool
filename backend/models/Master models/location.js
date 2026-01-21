const { DataTypes } = require("sequelize");
const { dashMatrixSequelize } = require("../../config/db");

module.exports = () => {
  const Location = dashMatrixSequelize.define(
    "Location",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      parentLocationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      locationType: {
        type: DataTypes.ENUM(
          "Office",
          "Branch",
          "Warehouse",
          "Floor",
          "Room",
          "Remote",
        ),
        allowNull: false,
        defaultValue: "Office",
      },

      address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      isHeadOffice: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "locations",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );

  // Optional: Self-referencing association
  Location.associate = (models) => {
    Location.hasMany(models.Location, {
      foreignKey: "parentLocationId",
      as: "childLocations",
    });

    Location.belongsTo(models.Location, {
      foreignKey: "parentLocationId",
      as: "parentLocation",
    });
  };

  return Location;
};
