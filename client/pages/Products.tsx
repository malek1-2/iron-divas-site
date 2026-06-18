import { ChevronLeft, ChevronRight, ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { useState } from 'react';

// Products data
const products = [
  {
    id: 1,
    name: 'Gym grip',
    category: 'Gym grip',
    price: 25,
    currency: 'DNT',
    quantity: 12,
    image: '/products/gym-grip-2.jpg',
    images: [
      '/products/gym-grip-2.jpg',
      '/products/gym-grip-1.jpg',
    ],
    color: 'bg-gray-100',
    isImage: true,
  },
  {
    id: 2,
    name: 'Protein powder bottle',
    category: 'Accessoires',
    price: 18,
    currency: 'DNT',
    quantity: 18,
    image: '/products/protein-powder-bottle-1.jpg',
    images: [
      '/products/protein-powder-bottle-1.jpg',
      '/products/protein-powder-bottle-2.jpg',
      '/products/protein-powder-bottle-3.jpg',
      '/products/protein-powder-bottle-4.jpg',
    ],
    color: 'bg-gray-100',
    isImage: true,
  },
  {
    id: 3,
    name: 'Tee-shirt "I\'m Just A Messy Girl"',
    category: 'Tee-shirts',
    quantity: 15,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F1c180f37018b4105b74355fd5b24b052%2Fcacfb3b313cf4a12ba0420c36f9079b4?format=webp&width=400&height=600',
    color: 'bg-gray-100',
    isImage: true,
    comingSoon: true,
  },
  {
    id: 4,
    name: 'Tee-shirt "Born to Gym" Noir',
    category: 'Tee-shirts',
    quantity: 22,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F1c180f37018b4105b74355fd5b24b052%2F05fd70af4f8e45dcba553832ce7e2729?format=webp&width=400&height=600',
    color: 'bg-gray-100',
    isImage: true,
    comingSoon: true,
  },
  {
    id: 5,
    name: 'Tee-shirt "Born to Gym" Blanc',
    category: 'Tee-shirts',
    quantity: 18,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F1c180f37018b4105b74355fd5b24b052%2F08f0e7f66e734b909bf2e91967490a14?format=webp&width=400&height=600',
    color: 'bg-gray-100',
    isImage: true,
    comingSoon: true,
  },
  {
    id: 6,
    name: 'Tee-shirt Caractère Rose',
    category: 'Tee-shirts',
    quantity: 20,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F1c180f37018b4105b74355fd5b24b052%2F1420390edf144847bde6f14f17b9b021?format=webp&width=400&height=600',
    color: 'bg-gray-100',
    isImage: true,
    comingSoon: true,
  },
  {
    id: 7,
    name: 'Tee-shirt Caractère Noir',
    category: 'Tee-shirts',
    quantity: 19,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F1c180f37018b4105b74355fd5b24b052%2Fa6ab53c9c80941e1962605b554be074c?format=webp&width=400&height=600',
    color: 'bg-gray-100',
    isImage: true,
    comingSoon: true,
  },
];

const categories = ['Tous', 'Gym grip', 'Tee-shirts', 'Accessoires'];

const ProductCard = ({ product, onAddToCart }: any) => {
  const [orderQty, setOrderQty] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const productImages = product.images ?? [product.image];
  const currentImage = productImages[imageIndex];
  const hasMultipleImages = productImages.length > 1;
  const isComingSoon = Boolean(product.comingSoon);

  const handleAddToCart = () => {
    if (!isComingSoon && orderQty > 0) {
      onAddToCart({ ...product, orderQty });
      setOrderQty(0);
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-pink-100 hover:shadow-xl transition-all">
      {/* Product Image */}
      <div
        className={`${product.color} h-56 flex items-center justify-center relative overflow-hidden group ${isComingSoon ? '' : 'cursor-zoom-in'}`}
        onClick={() => {
          if (!isComingSoon) setIsGalleryOpen(true);
        }}
      >
        {isComingSoon ? (
          <div className="flex h-full w-full items-center justify-center bg-pink-50 text-center">
            <span className="px-4 text-2xl font-bold text-primary">Coming soon</span>
          </div>
        ) : product.isImage ? (
          <img
            src={currentImage}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        ) : (
          <span className="text-5xl">{product.image}</span>
        )}
        {!isComingSoon && <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-black/10 group-hover:to-black/20 transition-all" />}
        {!isComingSoon && hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setImageIndex((imageIndex - 1 + productImages.length) % productImages.length);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/90 text-gray-900 shadow-md flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setImageIndex((imageIndex + 1) % productImages.length);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/90 text-gray-900 shadow-md flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Photo suivante"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {productImages.map((image: string, index: number) => (
                <button
                  key={image}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setImageIndex(index);
                  }}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === imageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Photo ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {!isComingSoon && isGalleryOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setIsGalleryOpen(false)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsGalleryOpen(false)}
              className="absolute -top-12 right-0 h-10 w-10 rounded-full bg-white text-gray-900 shadow-lg flex items-center justify-center hover:bg-pink-50 transition-colors"
              aria-label="Fermer la galerie"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative bg-white rounded-lg overflow-hidden">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full max-h-[78vh] object-contain bg-white"
              />

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={() => setImageIndex((imageIndex - 1 + productImages.length) % productImages.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/95 text-gray-900 shadow-lg flex items-center justify-center hover:bg-pink-50 transition-colors"
                    aria-label="Photo précédente"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageIndex((imageIndex + 1) % productImages.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/95 text-gray-900 shadow-lg flex items-center justify-center hover:bg-pink-50 transition-colors"
                    aria-label="Photo suivante"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {hasMultipleImages && (
              <div className="mt-4 flex justify-center gap-3 overflow-x-auto pb-2">
                {productImages.map((image: string, index: number) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setImageIndex(index)}
                    className={`h-16 w-16 shrink-0 rounded-md overflow-hidden border-2 ${
                      index === imageIndex ? 'border-primary' : 'border-white/70'
                    }`}
                    aria-label={`Afficher la photo ${index + 1}`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Info */}
      <div className="p-5">
        <p className="text-xs text-pink-600 font-semibold mb-1">{product.category}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
        {isComingSoon && (
          <div className="mt-4 rounded-lg border border-pink-200 bg-pink-50 px-4 py-3 text-center">
            <p className="text-lg font-bold text-primary">Coming soon</p>
          </div>
        )}
        {false && isComingSoon && (
          <div className="mt-4 rounded-lg border border-pink-200 bg-pink-50 px-4 py-3 text-center">
            <p className="text-lg font-bold text-primary">BientÃ´t disponible</p>
          </div>
        )}
        {!isComingSoon && (
          <>
        
        {/* Stock */}
        <p className="text-sm text-gray-500 mb-4">
          <span className="font-semibold text-gray-700">{product.quantity}</span> en stock
        </p>

        {/* Price */}
        <p className="text-2xl font-bold text-primary mb-4">
          {product.currency === 'DNT' ? `${product.price} DNT` : `$${product.price}`}
        </p>

        {/* Quantity Selector */}
        <div className="mb-4 p-3 bg-pink-50 rounded-lg border border-pink-200">
          <label className="text-xs font-semibold text-gray-700 block mb-2">Quantité</label>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setOrderQty(Math.max(0, orderQty - 1))}
              className="p-1 hover:bg-pink-200 rounded transition"
            >
              <Minus className="w-4 h-4 text-gray-700" />
            </button>
            <span className="text-lg font-bold text-gray-900 w-8 text-center">{orderQty}</span>
            <button
              onClick={() => setOrderQty(orderQty + 1)}
              className="p-1 hover:bg-pink-200 rounded transition"
            >
              <Plus className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Commander Button */}
        <Button 
          onClick={handleAddToCart}
          disabled={orderQty === 0}
          className="w-full bg-primary hover:bg-pink-700 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Commander
        </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = selectedCategory === 'Tous' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: any) => {
    setCart([...cart, product]);
    alert(`${product.name} x${product.orderQty} ajouté au panier!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100">
      <Header cartCount={cart.length} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Produits</h1>
          <p className="text-lg text-gray-600">Découvrez notre collection exclusive</p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-pink-200 hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

