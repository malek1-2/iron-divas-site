import { RequestHandler } from "express";
import { CreateOrderRequest, Order } from "@shared/api";
import { getStore } from "@netlify/database";

export const listOrders: RequestHandler = async (_req, res) => {
  try {
    const store = getStore("orders");
    const { keys } = await store.list();
    const orders = await Promise.all(
      keys.map(async (key) => {
        const val = await store.get(key.name, { type: "json" });
        return val;
      })
    );
    res.json(orders.filter(Boolean).sort((a: any, b: any) => b.id - a.id));
  } catch (e) {
    res.json([]);
  }
};

export const createOrder: RequestHandler = async (req, res) => {
  const orderData = req.body as CreateOrderRequest;
  if (
    !orderData.nom ||
    !orderData.prenom ||
    !orderData.telephone ||
    !orderData.localisation ||
    !Array.isArray(orderData.items) ||
    orderData.items.length === 0
  ) {
    res.status(400).json({ message: "Commande invalide" });
    return;
  }
  const order: Order = {
    ...orderData,
    id: Date.now(),
    date: new Date().toLocaleDateString("fr-FR"),
  };
  try {
    const store = getStore("orders");
    await store.setJSON(String(order.id), order);
    res.status(201).json(order);
  } catch (e) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export const deleteOrder: RequestHandler = async (req, res) => {
  try {
    const store = getStore("orders");
    await store.delete(req.params.id);
    res.status(204).send();
  } catch (e) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};
