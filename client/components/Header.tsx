import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartCount?: number;
}

export default function Header({ cartCount = 0 }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-200 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/logo.jpg"
              alt="Iron divas Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-primary hidden sm:inline">
              Iron divas
            </span>
          </Link>

          {/* Navigation - Produits */}
          <nav className="flex items-center gap-6 sm:gap-8">
            <Link to="/products" className="text-gray-700 hover:text-primary transition-colors font-semibold text-sm sm:text-base">
              Produits
            </Link>

            {/* Menu dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors font-semibold text-sm sm:text-base flex items-center gap-1">
                Menu
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-pink-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/"
                  className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-pink-50 rounded-t-lg transition-colors"
                >
                  Accueil
                </Link>
                <button
                  className="w-full text-left px-4 py-3 text-gray-700 hover:text-primary hover:bg-pink-50 transition-colors cursor-not-allowed opacity-50"
                  disabled
                >
                  À propos (Bientôt)
                </button>
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-pink-50 rounded-b-lg transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>

          {/* Cart Button */}
          <Link to="/order-form">
            <Button className="bg-primary hover:bg-pink-700 text-white flex items-center gap-2 text-sm sm:text-base">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Panier</span>
              {cartCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white text-primary rounded-full text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
