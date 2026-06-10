import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { CreateOrderRequest } from '@shared/api';

interface OrderData {
  nom: string;
  prenom: string;
  telephone: string;
  localisation: string;
}

const products = [
  { id: '1', name: 'Gym grip', price: 25, currency: 'DNT' },
  { id: '2', name: 'Protein powder bottle', price: 18, currency: 'DNT' },
];

const DELIVERY_FEE = 8;
const PHONE_PREFIX = '+216';

const initialQuantities = () => Object.fromEntries(products.map((product) => [product.id, 0]));

export default function OrderForm() {
  const [formData, setFormData] = useState<OrderData>({
    nom: '',
    prenom: '',
    telephone: '',
    localisation: '',
  });
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>(initialQuantities);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedItems = products
    .map((product) => {
      const quantity = itemQuantities[product.id] ?? 0;
      return {
        produitId: product.id,
        productName: product.name,
        quantity,
        unitPrice: product.price,
        totalPrice: product.price * quantity,
      };
    })
    .filter((item) => item.quantity > 0);

  const cartCount = selectedItems.reduce((total, item) => total + item.quantity, 0);
  const subtotalPrice = selectedItems.reduce((total, item) => total + item.totalPrice, 0);
  const totalPrice = subtotalPrice + DELIVERY_FEE;
  const formatPrice = (price: number) => `${price.toFixed(2)} DNT`;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nom.trim()) newErrors.nom = 'Le nom est obligatoire';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est obligatoire';
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est obligatoire';
    } else if (!/^\d{8}$/.test(formData.telephone.replace(/\s/g, ''))) {
      newErrors.telephone = 'Entrez un numéro de téléphone valide à 8 chiffres';
    }
    if (!formData.localisation.trim()) newErrors.localisation = 'La localisation est obligatoire';
    if (selectedItems.length === 0) newErrors.items = 'Choisissez au moins un article';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const order: CreateOrderRequest = {
      ...formData,
      telephone: `${PHONE_PREFIX} ${formData.telephone.replace(/\s/g, '')}`,
      items: selectedItems,
      deliveryFee: DELIVERY_FEE,
      totalPrice,
    };

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error('Order request failed');
      }
    } catch (_error) {
      setErrors({ submit: 'Impossible d envoyer la commande. Reessayez.' });
      setIsSubmitting(false);
      return;
    }

    setSubmitted(true);
    setErrors({});
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({
        nom: '',
        prenom: '',
        telephone: '',
        localisation: '',
      });
      setItemQuantities(initialQuantities());
      setSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nextValue = name === 'telephone' ? value.replace(/\D/g, '').slice(0, 8) : value;

    setFormData((currentData) => ({
      ...currentData,
      [name]: nextValue,
    }));

    if (errors[name]) {
      setErrors((currentErrors) => {
        const newErrors = { ...currentErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleItemQuantityChange = (productId: string, value: string) => {
    const quantity = Math.max(0, parseInt(value.replace(/\D/g, ''), 10) || 0);

    setItemQuantities((currentQuantities) => ({
      ...currentQuantities,
      [productId]: quantity,
    }));

    if (errors.items) {
      setErrors((currentErrors) => {
        const newErrors = { ...currentErrors };
        delete newErrors.items;
        return newErrors;
      });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100">
        <Header cartCount={0} />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Commande confirmée!</h2>
            <p className="text-lg text-gray-600 mb-2">
              Merci {formData.prenom} {formData.nom}
            </p>
            <p className="text-gray-600">Votre commande contient {cartCount} article(s).</p>
            <div className="mt-8 p-4 bg-pink-50 rounded-lg">
              <p className="text-sm text-gray-600">Numéro de commande temporaire: {Date.now()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100">
      <Header cartCount={cartCount} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Formulaire de Commande</h1>
          <p className="text-lg text-gray-600">Choisissez plusieurs articles puis complétez vos informations</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.submit && (
              <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <p className="text-red-700 font-semibold">{errors.submit}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                  errors.nom ? 'border-red-500 bg-red-50' : 'border-pink-200 focus:border-primary'
                }`}
                placeholder="Entrez votre nom"
              />
              {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Prénom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                  errors.prenom ? 'border-red-500 bg-red-50' : 'border-pink-200 focus:border-primary'
                }`}
                placeholder="Entrez votre prénom"
              />
              {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Numéro de Téléphone <span className="text-red-500">*</span>
              </label>
              <div
                className={`flex items-center rounded-lg border-2 transition-all ${
                  errors.telephone
                    ? 'border-red-500 bg-red-50'
                    : 'border-pink-200 bg-white focus-within:border-primary'
                }`}
              >
                <span className="shrink-0 border-r border-pink-200 px-4 py-3 font-bold text-gray-800">
                  {PHONE_PREFIX}
                </span>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  inputMode="numeric"
                  maxLength={8}
                  className="w-full bg-transparent px-4 py-3 transition-all focus:outline-none"
                  placeholder="XX XXX XXX"
                />
              </div>
              {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Localisation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="localisation"
                value={formData.localisation}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                  errors.localisation ? 'border-red-500 bg-red-50' : 'border-pink-200 focus:border-primary'
                }`}
                placeholder="Ville, pays, adresse..."
              />
              {errors.localisation && <p className="text-red-500 text-sm mt-1">{errors.localisation}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Articles <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {products.map((product) => {
                  const quantity = itemQuantities[product.id] ?? 0;
                  return (
                    <div
                      key={product.id}
                      className="grid grid-cols-[1fr_88px] gap-3 rounded-lg border-2 border-pink-200 bg-pink-50 p-4 sm:grid-cols-[1fr_120px]"
                    >
                      <div>
                        <p className="font-bold text-gray-900">{product.name}</p>
                        <p className="text-sm font-semibold text-primary">{formatPrice(product.price)}</p>
                        {quantity > 0 && (
                          <p className="mt-1 text-sm text-gray-600">
                            Total article: {formatPrice(product.price * quantity)}
                          </p>
                        )}
                      </div>
                      <input
                        type="number"
                        min="0"
                        value={quantity}
                        onChange={(event) => handleItemQuantityChange(product.id, event.target.value)}
                        className="h-12 w-full self-center rounded-lg border-2 border-pink-200 bg-white px-3 text-center font-bold focus:border-primary focus:outline-none"
                        aria-label={`Quantité ${product.name}`}
                      />
                    </div>
                  );
                })}
              </div>
              {errors.items && <p className="text-red-500 text-sm mt-2">{errors.items}</p>}
            </div>

            <div className="p-4 bg-pink-50 rounded-lg border-2 border-pink-200">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-gray-700">
                  <span className="font-semibold">Sous-total:</span>
                  <span className="font-bold">{formatPrice(subtotalPrice)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <span className="font-semibold">Frais de livraison:</span>
                  <span className="font-bold">{formatPrice(DELIVERY_FEE)}</span>
                </div>
                <div className="flex justify-between items-center border-t border-pink-200 pt-3">
                  <span className="font-semibold text-gray-700">Total:</span>
                  <span className="text-3xl font-bold text-primary">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-pink-700 text-white font-bold py-3 text-lg"
            >
              {isSubmitting ? 'Envoi...' : 'Confirmer la Commande'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
