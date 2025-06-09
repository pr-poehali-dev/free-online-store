import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Product } from "@/components/ProductCard";

export interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const Cart = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartProps) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={20} />
            Корзина ({itemCount})
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Icon
                name="ShoppingCart"
                size={48}
                className="mx-auto mb-4 opacity-50"
              />
              <p>Корзина пуста</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-3 p-3 border rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    {item.price.toLocaleString("ru-RU")} ₽
                  </p>

                  <div className="flex items-center space-x-2 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        onUpdateQuantity(
                          item.id,
                          Math.max(0, item.quantity - 1),
                        )
                      }
                    >
                      <Icon name="Minus" size={12} />
                    </Button>

                    <Badge variant="secondary" className="px-2">
                      {item.quantity}
                    </Badge>

                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <Icon name="Plus" size={12} />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-600"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <Icon name="Trash2" size={12} />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Итого:</span>
              <span className="text-2xl font-bold text-primary">
                {total.toLocaleString("ru-RU")} ₽
              </span>
            </div>

            <div className="space-y-2">
              <Button className="w-full" size="lg">
                <Icon name="CreditCard" size={16} className="mr-2" />
                Оформить заказ
              </Button>
              <Button variant="outline" className="w-full" onClick={onClose}>
                Продолжить покупки
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
