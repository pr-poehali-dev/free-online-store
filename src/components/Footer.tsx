import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Компания */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ТехноМир</h3>
            <p className="text-gray-400 text-sm">
              Ваш надежный партнер в мире технологий. Качественные товары по
              доступным ценам.
            </p>
          </div>

          {/* Покупателям */}
          <div>
            <h4 className="font-semibold mb-4">Покупателям</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Гарантия
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                info@technomir.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={14} />
                Москва, ул. Примерная, 123
              </li>
            </ul>
          </div>

          {/* Соцсети */}
          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 ТехноМир. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
