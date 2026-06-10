import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Lock, Plus, Trash2 } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';
import { Order } from '@shared/api';

const ADMIN_EMAIL = 'admin@teestyle.com';
const ADMIN_PASSWORD = 'admin123456';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersError, setOrdersError] = useState('');
  const [showNewProductForm, setShowNewProductForm] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        if (!response.ok) {
          throw new Error('Orders request failed');
        }
        const data: Order[] = await response.json();
        setOrders(data);
        setOrdersError('');
      } catch (_error) {
        setOrdersError('Impossible de charger les commandes');
      }
    };

    fetchOrders();
    const intervalId = window.setInterval(fetchOrders, 5000);

    return () => window.clearInterval(intervalId);
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');
    } else {
      setLoginError('Email ou mot de passe incorrect');
    }
  };

  const deleteOrder = async (id: number) => {
    try {
      const response = await fetch(`/api/orders/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Delete request failed');
      }

      setOrders((currentOrders) => currentOrders.filter((order) => order.id !== id));
      setOrdersError('');
    } catch (_error) {
      setOrdersError('Impossible de supprimer la commande');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary rounded-full">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">Admin Login</h1>
          <p className="text-gray-600 text-center mb-8">Connectez-vous pour accéder au panneau d'administration</p>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <p className="text-red-700 font-semibold">{loginError}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-pink-200 focus:border-primary focus:outline-none transition-all"
                placeholder="admin@teestyle.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-pink-200 focus:border-primary focus:outline-none transition-all"
                placeholder="********"
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-pink-700 text-white font-bold py-3">
              Se connecter
            </Button>
          </form>

        </div>
      </div>
    );
  }

  return (
    <AdminLayout onLogout={() => setIsLoggedIn(false)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-4 mb-8 border-b-2 border-pink-200">
          <button className="px-6 py-3 text-lg font-bold text-primary border-b-4 border-primary">
            Commandes ({orders.length})
          </button>
          <button
            onClick={() => setShowNewProductForm(!showNewProductForm)}
            className="px-6 py-3 text-lg font-semibold text-gray-600 hover:text-primary transition-colors"
          >
            Gestion des Produits
          </button>
        </div>

        <div>
          {ordersError && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <p className="text-red-700 font-semibold">{ordersError}</p>
            </div>
          )}

          {orders.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-12 text-center">
              <p className="text-gray-600 text-lg">Aucune commande reçue pour le moment</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl shadow-md p-6 border-2 border-pink-100 hover:shadow-lg transition-all"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Client</p>
                      <p className="text-lg font-bold text-gray-900">
                        {order.prenom} {order.nom}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="text-lg font-bold text-gray-900">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Téléphone</p>
                      <p className="text-lg font-bold text-gray-900">{order.telephone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Localisation</p>
                      <p className="text-lg font-bold text-gray-900">{order.localisation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total</p>
                      <p className="text-lg font-bold text-gray-900">{order.totalPrice.toFixed(2)} DNT</p>
                    </div>
                  </div>

                  <div className="mb-4 rounded-lg border border-pink-100 bg-pink-50 p-4">
                    <p className="mb-3 text-sm font-semibold text-gray-600">Articles</p>
                    <div className="space-y-2">
                      {order.items.map((item) => (
                        <div
                          key={item.produitId}
                          className="flex flex-col justify-between gap-1 rounded-md bg-white px-3 py-2 sm:flex-row sm:items-center"
                        >
                          <span className="font-bold text-gray-900">{item.productName}</span>
                          <span className="text-sm font-semibold text-gray-700">
                            {item.quantity} x {item.unitPrice.toFixed(2)} DNT = {item.totalPrice.toFixed(2)} DNT
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="p-2 hover:bg-red-50 rounded-lg text-red-500 transition-all"
                      title="Supprimer la commande"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {showNewProductForm && (
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Plus className="w-6 h-6" />
              Gestion des Produits
            </h2>
            <p className="text-gray-600 mb-6">Fonctionnalité de gestion des produits en développement...</p>
            <div className="p-6 bg-pink-50 rounded-lg border-2 border-pink-200">
              <p className="text-gray-700">
                Module en cours de développement pour ajouter, modifier et supprimer les produits.
              </p>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
