import { Heart, Leaf, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-pink-100">
      <Header />
      
      {/* Background Logo */}
      <div className="fixed -right-32 -top-20 opacity-5 pointer-events-none z-0">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets%2F1c180f37018b4105b74355fd5b24b052%2Fd7e6bf1e21184b24b89a844089311797?format=webp&width=500&height=750" 
          alt="Background" 
          className="w-96 h-96 object-contain"
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500">TeeStyle</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We believe in creating premium, sustainable apparel that makes you feel confident and comfortable. Every piece is crafted with care and delivered with love.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable</h3>
              <p className="text-gray-600">
                We source eco-friendly materials and use sustainable manufacturing practices to protect our planet.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                Every item is meticulously crafted with premium fabrics and rigorous quality control standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We're building a community of conscious consumers who care about style, quality, and the environment.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-pink-600 to-rose-500 rounded-3xl p-12 sm:p-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join the Iron divas Family</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of our journey to redefine sustainable fashion. Subscribe for updates, exclusive offers, and a 15% discount on your first order.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100">
              Subscribe Now
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
