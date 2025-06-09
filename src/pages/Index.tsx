import { useState } from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Cart, { CartItem } from "@/components/Cart";
import Checkout from "@/components/Checkout";
import Footer from "@/components/Footer";
import { Product } from "@/components/ProductCard";

// Демо-товары
const demoProducts: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    price: 129990,
    originalPrice: 139990,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    category: "Смартфоны",
    inStock: true,
  },
  {
    id: 2,
    name: 'MacBook Air M2 13"',
    price: 99990,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
    category: "Ноутбуки",
    inStock: true,
  },
  {
    id: 3,
    name: "AirPods Pro 2-го поколения",
    price: 24990,
    originalPrice: 29990,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
    category: "Наушники",
    inStock: true,
  },
  {
    id: 4,
    name: 'iPad Pro 12.9" M2',
    price: 89990,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    category: "Планшеты",
    inStock: false,
  },
  {
    id: 5,
    name: "Samsung Galaxy S24 Ultra",
    price: 119990,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    category: "Смартфоны",
    inStock: true,
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    price: 39990,
    originalPrice: 44990,
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop",
    category: "Умные часы",
    inStock: true,
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: 29990,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
    category: "Наушники",
    inStock: true,
  },
  {
    id: 8,
    name: "Nintendo Switch OLED",
    price: 34990,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    category: "Игровые консоли",
    inStock: true,
  },
];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const removeItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      <main>
        <ProductGrid products={demoProducts} onAddToCart={addToCart} />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        total={cartTotal}
      />
    </div>
  );
};

export default Index;
