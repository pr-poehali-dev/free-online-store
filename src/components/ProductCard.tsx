import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {hasDiscount && (
          <Badge className="absolute top-2 left-2 bg-red-500">Скидка</Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Badge variant="secondary">Нет в наличии</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <Badge variant="outline" className="mb-2">
          {product.category}
        </Badge>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">
            {product.price.toLocaleString("ru-RU")} ₽
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              {product.originalPrice?.toLocaleString("ru-RU")} ₽
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className="w-full"
        >
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          {product.inStock ? "В корзину" : "Нет в наличии"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
