import express from "express";
import { Clientes } from "../model/clientes.js";

export const getIndex = async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.send(error.message);
  }
};

export const getObrigado = (req, res) => {
  try {
    res.render("obrigado");
  } catch (error) {
    res.send(error.message);
  }
};

export const getLeads = async (req, res) => {
  try {
    const listClientes = await Clientes.findAll();
    const cliente = await Clientes.findByPk(req.params.id);
    res.render("leadsfacebook", {
      listClientes,
      cliente,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const postCriar = async (req, res) => {
  const { nome, email, whatsapp, tipodeimovel, valor, datanasc } = req.body;
  try {
    if (!nome || !email || !whatsapp || !tipodeimovel || !valor || !datanasc) {
      res.send("Todos os campos são obrigatórios!");
    } else {
      await Clientes.create({
        nome,
        email,
        whatsapp,
        tipodeimovel,
        valor,
        datanasc,
      });
      res.redirect("obrigado");
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const deletar = async (req, res) => {
  try {
    await Clientes.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/leadsfacebook");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const clientesDetalhes = await Clientes.findByPk(req.params.id);
    res.render("detalhes.ejs", {
      clientesDetalhes,
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};
