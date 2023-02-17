import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const Clientes = connection.define(
  "clientes",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    whatsapp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipodeimovel: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    datanasc: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

const initTable = async () => {
  await Clientes.sync();
};

initTable();