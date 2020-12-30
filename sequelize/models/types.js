const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "type_id"
    },
    typeName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "type_name"
    }
  };
  const options = {
    tableName: "types",
    comment: "",
    indexes: []
  };
  const TypesModel = sequelize.define("typesModel", attributes, options);
  return TypesModel;
};