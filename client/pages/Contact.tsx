import { Mail, MessageCircle, Instagram, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

export default function Contact() {
  const whatsappNumber = '1234567890'; // Replace with your actual number
  const whatsappMessage = 'Bonjour Iron divas, j\'aimerais en savoir plus sur vos produits!';
  const instagramProfile = 'Iron___divas___'; // Replace with your actual profile

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100">
      <Header cartCount={0} />

      {/* Background Logo */}
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
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Nous Contacter
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vous avez des questions? Contactez-nous via WhatsApp, Instagram ou directement!
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-2 border-pink-100 hover:border-green-400 h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-100 rounded-full group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">WhatsApp</h3>
                <p className="text-gray-600 text-center mb-6">
                  Contactez-nous directement sur WhatsApp pour une réponse rapide.
                </p>
                <div className="text-center">
                  <span className="inline-block px-6 py-3 bg-green-100 text-green-600 font-bold rounded-full group-hover:bg-green-500 group-hover:text-white transition-all">
                    +216 21476163
                  </span>
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={`https://instagram.com/${instagramProfile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-2 border-pink-100 hover:border-pink-500 h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-pink-100 rounded-full group-hover:scale-110 transition-transform">
                    <Instagram className="w-8 h-8 text-pink-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">Instagram</h3>
                <p className="text-gray-600 text-center mb-6">
                  Suivez-nous pour les dernières collections et actualités.
                </p>
                <div className="text-center">
                  <span className="inline-block px-6 py-3 bg-pink-100 text-pink-600 font-bold rounded-full group-hover:bg-pink-500 group-hover:text-white transition-all">
                    @{instagramProfile}
                  </span>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:sywarrnjoumy@gmail.com"
              className="block group"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-2 border-pink-100 hover:border-blue-400 h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-100 rounded-full group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">Email</h3>
                <p className="text-gray-600 text-center mb-6">
                  Envoyez-nous un email et nous répondrons rapidement.
                </p>
                <div className="text-center">
                  <span className="inline-block px-6 py-3 bg-blue-100 text-blue-600 font-bold rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all">
                    sywarrnjoumy@gmail.com
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Additional Info */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-pink-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-pink-100 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Téléphone</h3>
                    <p className="text-gray-600">+216 214 761 63</p>
                    <p className="text-gray-600 text-sm">Disponible du lundi au vendredi</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-pink-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Localisation</h3>
                    <p className="text-gray-600">Tunisie</p>
                    <p className="text-gray-600 text-sm">Service client disponible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Alternative */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-pink-600 to-rose-500 rounded-3xl p-12 sm:p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Besoin d'aide?</h2>
            <p className="text-lg mb-8 opacity-90">
              Parcourez nos produits ou contactez-nous directement pour toute question.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-primary hover:bg-gray-100 text-lg font-semibold px-8"
              >
                Retour aux Produits
              </Button>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-8 w-full sm:w-auto">
                  Contacter sur WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
