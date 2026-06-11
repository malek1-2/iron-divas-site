import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method === "GET") {
    try {
      const keys = await redis.keys("order:*");
      if (keys.length === 0) return res.json([]);
      const orders = await Promise.all(keys.map((key) => redis.get(key)));
      return res.json(orders.filter(Boolean).sort((a, b) => b.id - a.id));
    } catch (e) {
      return res.json([]);
    }
  }

  if (req.method === "POST") {
    const orderData = req.body;
    if (!orderData.nom || !orderData.prenom || !orderData.telephone || !orderData.localisation || !Array.isArray(orderData.items) || orderData.items.length === 0) {
      return res.status(400).json({ message: "Commande invalide" });
    }
    const order = { ...orderData, id: Date.now(), date: new Date().toLocaleDateString("fr-FR") };
    await redis.set(`order:${order.id}`, JSON.stringify(order));
    return res.status(201).json(order);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
