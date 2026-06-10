import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { useState } from 'react';

// Gants/Trapes products
const gloves = [
  {
    id: 1,
    name: 'Gants Rose Premium',
    price: '$34.99',
    quantity: 12,
    image: '🧤',
    color: 'bg-pink-400',
  },
  {
    id: 2,
    name: 'Gants Noir Cuir',
    price: '$44.99',
    quantity: 8,
    image: '🧤',
    color: 'bg-black',
  },
  {
    id: 3,
    name: 'Gants Thermique',
    price: '$39.99',
    quantity: 15,
    image: '🧤',
    color: 'bg-gray-800',
  },
  {
    id: 4,
    name: 'Gants Sport Athlétique',
    price: '$36.99',
    quantity: 10,
    image: '🧤',
    color: 'bg-red-600',
  },
];

// T-shirts products
const tshirts = [
  {
    id: 5,
    name: 'Tee-shirt Rose Classique',
    price: '$29.99',
    quantity: 20,
    image: '👕',
    color: 'bg-pink-500',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 6,
    name: 'Tee-shirt Noir Minimaliste',
    price: '$24.99',
    quantity: 25,
    image: '👕',
    color: 'bg-gray-900',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 7,
    name: 'Tee-shirt Blanc Essentiel',
    price: '$22.99',
    quantity: 30,
    image: '👕',
    color: 'bg-white border-2 border-gray-300',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 8,
    name: 'Tee-shirt Bleu Marine',
    price: '$27.99',
    quantity: 18,
    image: '👕',
    color: 'bg-blue-900',
    sizes: ['S', 'M', 'XL'],
  },
  {
    id: 9,
    name: 'Tee-shirt Vert Sage',
    price: '$26.99',
    quantity: 16,
    image: '👕',
    color: 'bg-green-600',
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 10,
    name: 'Tee-shirt Gris Charbon',
    price: '$25.99',
    quantity: 22,
    image: '👕',
    color: 'bg-gray-600',
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

const ProductCard = ({ name, price, quantity, image, color, sizes = null }: any) => {
  const [cartQty, setCartQty] = useState(0);
  const [selectedSize, setSelectedSize] = useState(sizes ? sizes[0] : null);

  const addToCart = () => {
    setCartQty(cartQty + 1);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-pink-100 hover:shadow-xl transition-all hover:border-pink-300">
      {/* Product Image */}
      <div className={`${color} h-56 flex items-center justify-center text-5xl relative overflow-hidden group`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-black/10 group-hover:to-black/20 transition-all" />
        {image}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{name}</h3>
        
        {/* Quantity Available */}
        <p className="text-sm text-gray-500 mb-3">
          <span className="font-semibold text-gray-700">{quantity}</span> en stock
        </p>

        {/* Sizes for T-shirts */}
        {sizes && (
          <div className="mb-4">
            <label className="text-sm font-semibold text-gray-700 block mb-2">Tailles disponibles:</label>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded border-2 transition-all font-medium ${
                    selectedSize === size
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price and Cart */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <p className="text-2xl font-bold text-primary">{price}</p>
          <Button 
            size="sm" 
            className="bg-primary hover:bg-pink-700 text-white flex items-center gap-1"
            onClick={addToCart}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Ajouter</span>
          </Button>
        </div>

        {/* Cart Quantity Indicator */}
        {cartQty > 0 && (
          <div className="mt-3 p-2 bg-pink-50 rounded text-sm text-center font-semibold text-primary">
            {cartQty} ajouté(s) au panier
          </div>
        )}
      </div>
    </div>
  );
};

const BackgroundLogo = () => (
  <div className="fixed inset-0 pointer-events-none opacity-4 z-0 overflow-hidden">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 -rotate-12">
      {[...Array(16)].map((_, i) => (
        <div key={i} className="flex items-center justify-center">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2F1c180f37018b4105b74355fd5b24b052%2Fd7e6bf1e21184b24b89a844089311797?format=webp&width=200&height=300" 
            alt="" 
            className="w-32 h-32 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100 relative overflow-hidden">
      {/* Background Logo Grid */}
      <BackgroundLogo />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Page Title */}
        <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-8 max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              TeeStyle
            </h1>
            <p className="text-lg text-gray-600">
              Découvrez notre collection exclusive de T-shirts et Gants premium
            </p>
          </div>
        </section>

        {/* Gants/Trapes Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span>🧤</span> Gants / Trapes
            </h2>
            <p className="text-gray-600">Nos gants premium pour tous les styles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gloves.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t-2 border-pink-200" />

        {/* Tee-shirts Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span>👕</span> Tee-shirts
            </h2>
            <p className="text-gray-600">Nos T-shirts essentiels dans toutes les tailles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tshirts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-pink-600 to-rose-500 rounded-3xl p-12 sm:p-16 text-center text-white shadow-xl">
            <h2 className="text-4xl font-bold mb-4">Prêt à shopper?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Obtenez 15% de réduction sur votre première commande avec le code: WELCOME15
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 text-lg font-semibold px-8">
              Voir le Panier
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
