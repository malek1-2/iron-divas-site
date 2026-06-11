import { RequestHandler } from "express";
import { CreateOrderRequest, Order } from "@shared/api";

let orders: Order[] = [];

export const listOrders: RequestHandler = (_req, res) => {
  res.json(orders);
};

export const createOrder: RequestHandler = (req, res) => {
  const orderData = req.body as CreateOrderRequest;

  if (
    !orderData.nom ||
    !orderData.prenom ||
    !orderData.telephone ||
    !orderData.localisation ||
    !Array.isArray(orderData.items) ||
    orderData.items.length === 0 ||
    orderData.items.some((item) => (
      !item.produitId ||
      !item.productName ||
      !item.quantity ||
      item.quantity < 1 ||
      item.unitPrice < 0 ||
      item.totalPrice < 0
    ))
  ) {
    res.status(400).json({ message: "Commande invalide", received: orderData, body: req.body });
    return;
  }

  const order: Order = {
    ...orderData,
    id: Date.now(),
    date: new Date().toLocaleDateString("fr-FR"),
  };

  orders = [order, ...orders];
  res.status(201).json(order);
};

export const deleteOrder: RequestHandler = (req, res) => {
  const orderId = Number(req.params.id);
  orders = orders.filter((order) => order.id !== orderId);
  res.status(204).send();
};

