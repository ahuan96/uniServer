const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    content: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "content"
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    typeId: {
      type: DataTypes.STRING(10),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "type_id"
    },
    styleId: {
      type: DataTypes.STRING(10),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "style_id"
    },
    isgap: {
      type: DataTypes.STRING(10),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "isgap"
    },
    colorId: {
      type: DataTypes.STRING(10),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "color"
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "author"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdAt"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updatedAt"
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_id"
    },
    state: {
      type: DataTypes.STRING(10),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: "0 未发布 1待审核 2已通过",
      field: "state"
    }
  };
  const options = {
    tableName: "articles",
    comment: "",
    indexes: []
  };
  const ArticlesModel = sequelize.define("articlesModel", attributes, options);
  return ArticlesModel;
};