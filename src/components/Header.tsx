import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">ТехноМир</h1>
          </div>

          {/* Навигация десктоп */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Акции
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Корзина и мобильное меню */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative"
            >
              <Icon name="ShoppingCart" size={20} />
              {cartCount > 0 && (
                <Badge
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  variant="destructive"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Мобильное меню */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="md:hidden border-t mt-2 pt-2 pb-4">
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors py-2"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors py-2"
              >
                Акции
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors py-2"
              >
                О нас
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors py-2"
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
