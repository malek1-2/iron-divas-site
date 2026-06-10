import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { ShoppingBag, Users, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100">
      <Header cartCount={0} />

      {/* Background Logo Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0 overflow-hidden">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-8">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F1c180f37018b4105b74355fd5b24b052%2Fd7e6bf1e21184b24b89a844089311797?format=webp&width=200&height=300" 
                alt="" 
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6">
              Bienvenue chez <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">Iron divas</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez notre collection exclusive de T-shirts et Gants premium
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-primary hover:bg-pink-700 text-white text-lg px-10">
                Commencer le shopping
              </Button>
            </Link>
          </div>
        </section>

        {/* Menu Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Menu</h2>
            <p className="text-lg text-gray-600">Explorez les différentes sections de notre site</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Produits */}
            <Link to="/products" className="group">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-2 border-pink-100 hover:border-primary">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary rounded-full group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">Produits</h3>
                <p className="text-gray-600 text-center mb-6">
                  Parcourez nos collections de T-shirts et Gants premium avec tous les détails produits.
                </p>
                <div className="text-center">
                  <span className="inline-block px-6 py-2 bg-pink-50 text-primary font-semibold rounded-full">
                    Voir →
                  </span>
                </div>
              </div>
            </Link>

            {/* À propos */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-2 border-pink-100 hover:border-primary">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-500 rounded-full group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">À propos</h3>
                <p className="text-gray-600 text-center mb-6">
                  Découvrez l'histoire de Iron divas et notre engagement envers la qualité et la durabilité.
                </p>
                <div className="text-center">
                  <span className="inline-block px-6 py-2 bg-blue-50 text-blue-600 font-semibold rounded-full cursor-not-allowed opacity-50">
                    Bientôt →
                  </span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-2 border-pink-100 hover:border-primary">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-500 rounded-full group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">Contact</h3>
                <p className="text-gray-600 text-center mb-6">
                  Vous avez des questions? Contactez-nous pour plus d'informations ou de support client.
                </p>
                <div className="text-center">
                  <span className="inline-block px-6 py-2 bg-green-50 text-green-600 font-semibold rounded-full cursor-not-allowed opacity-50">
                    Bientôt →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">✨ Qualité Premium</h3>
              <p className="text-gray-600">
                Tous nos produits sont fabriqués avec les meilleurs matériaux pour garantir votre confort.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚚 Livraison Rapide</h3>
              <p className="text-gray-600">
                Nous livrons vos commandes rapidement dans toute la région.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💬 Support Client</h3>
              <p className="text-gray-600">
                Notre équipe est disponible pour répondre à toutes vos questions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-pink-600 to-rose-500 rounded-3xl p-12 sm:p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Prêt à commencer?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Explorez notre collection et passez votre première commande dès maintenant!
            </p>
            <Link to="/products">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg font-semibold px-10">
                Voir les Produits
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
