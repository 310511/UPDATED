import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, Tag } from 'lucide-react';

const MobileFooterNav: React.FC = () => {
  const location = useLocation();

  const navigation = [
    { 
      name: "Hotels", 
      href: "/", 
      icon: Home, 
      label: "Hotels"
    },
    {
      name: "Destinations",
      href: "/destinations",
      icon: MapPin,
      label: "Destinations"
    },
    { 
      name: "Deals", 
      href: "/deals", 
      icon: Tag, 
      label: "Deals"
    },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="mobile-footer-nav fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl md:hidden">
      <div className="flex items-center justify-around px-2 py-3 safe-area-bottom">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
          <Link
            key={item.name}
            to={item.href}
              className={`flex flex-col items-center justify-center py-2 px-4 rounded-xl transition-all duration-200 min-w-0 flex-1 ${
              isActive(item.href)
                ? 'text-primary bg-primary/10'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center mb-1">
                <Icon 
                  className={`w-6 h-6 transition-all duration-200 ${
                    isActive(item.href) ? 'text-primary' : 'text-gray-600'
                }`}
              />
            </div>
              <span className={`text-xs font-semibold transition-all duration-200 ${
              isActive(item.href) ? 'text-primary' : 'text-gray-600'
            }`}>
              {item.label}
            </span>
          </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileFooterNav;
