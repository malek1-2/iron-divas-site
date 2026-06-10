import { Mail, MessageCircle, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const whatsappNumber = '+216 24476163';
  const instagramProfile = '@Iron_divas_';

  return (
    <footer className="bg-white border-t-2 border-pink-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-2">Iron divas</h3>
            <p className="text-gray-600 mb-4">
              Votre destination premium pour T-shirts et accessoires de qualité.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-500 hover:text-white transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href={`https://instagram.com/${instagramProfile}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-500 hover:text-white transition-all"
                title="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:sywarrnjoumy@gmail.com"
                className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                title="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+216 21476163"
                className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-500 hover:text-white transition-all"
                title="Téléphone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`https://instagram.com/${instagramProfile}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:contact@teestyle.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 Iron divas. Tous les droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                Politique de Confidentialité
              </a>
              <a href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                Conditions d'Utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
