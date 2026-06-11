import { RequestHandler } from "express";
import { CreateOrderRequest, Order } from "@shared/api";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export const listOrders: RequestHandler = async (_req, res) => {
  try {
    const keys = await redis.keys("order:*");
    if (keys.length === 0) return res.json([]);
    const orders = await Promise.all(keys.map((key) => redis.get(key)));
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
    await redis.set(`order:${order.id}`, JSON.stringify(order));
    res.status(201).json(order);
  } catch (e) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export const deleteOrder: RequestHandler = async (req, res) => {
  try {
    await redis.del(`order:${req.params.id}`);
    res.status(204).send();
  } catch (e) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};
