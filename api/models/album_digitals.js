'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class album_digitals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  album_digitals.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    tel_whats: DataTypes.STRING,
    email: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    nome_responsavel: DataTypes.STRING,
    cpf_responsavel: DataTypes.STRING,
    titulo_foto: DataTypes.STRING,
    nome_fotografa: DataTypes.STRING,
    nome_foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'album_digitals',
  });
  return album_digitals;
};