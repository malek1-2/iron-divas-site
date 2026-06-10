import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

export default function Shop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-pink-100">
      <Header />
      
      {/* Background Logo */}
      <div className="fixed -right-32 top-32 opacity-5 pointer-events-none z-0">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets%2F1c180f37018b4105b74355fd5b24b052%2Fd7e6bf1e21184b24b89a844089311797?format=webp&width=500&height=750" 
          alt="Background" 
          className="w-96 h-96 object-contain"
        />
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
          <div className="mb-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Shop Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500">Collection</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Browse our complete range of premium t-shirts and gloves
            </p>
          </div>
        </section>

        {/* Shop Content */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
            <ShoppingCart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shop Page Coming Soon</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Our complete shop with filtering, sorting, and detailed product views is being prepared. Check back soon for the full shopping experience!
            </p>
            <Button className="bg-primary hover:bg-pink-700 text-white">
              View Featured Collection
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
