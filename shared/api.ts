/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export interface OrderItem {
  produitId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Order {
  id: number;
  date: string;
  nom: string;
  prenom: string;
  telephone: string;
  localisation: string;
  items: OrderItem[];
  deliveryFee: number;
  totalPrice: number;
}

export type CreateOrderRequest = Omit<Order, "id" | "date">;
