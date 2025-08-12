import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#Services', hasDropdown: true, dropdownKey: 'services' },
    { name: 'Projets', href: '#Projets' },
    { name: 'Moyens', href: '#Moyens', hasDropdown: true, dropdownKey: 'moyens' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#Contact' },
  ];

  const servicesDropdown = [
    { name: 'Travaux Construction', href: '#construction' },
    { name: 'Installation Eau Potable', href: '#eau-potable' },
    { name: 'Vente de Matériaux de Construction', href: '#vente-materiaux' },
  ];

  const moyensDropdown = [
    { name: 'Moyen humain', href: '#moyen-humain' },
    { name: 'Moyen matériel', href: '#moyen-materiel' },
  ];

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

 

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 mx-auto max-w-[1100px] rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 px-6 relative">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full">
              <img src={logo} alt="logo" className="h-14 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.dropdownKey)}
                    className="text-gray-900 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-150 hover:text-orange-500 hover:-translate-y-0.5 cursor-pointer select-none"
                  >
                    {item.name}
                  </button>

                  {openDropdown === item.dropdownKey && (
                    <ul className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      {(item.dropdownKey === 'services'
                        ? servicesDropdown
                        : moyensDropdown
                      ).map((option) => (
                        <li key={option.name}>
                          <a
                            href={option.href}
                            className="block px-4 py-2 text-gray-900 text-sm hover:text-orange-500 transition-colors"
                            onClick={() => setOpenDropdown(null)} 
                          >
                            {option.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-150 hover:text-orange-500 hover:-translate-y-0.5"
                >
                  {item.name}
                </a>
              )
            )}
          </div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        setOpenDropdown((prev) =>
                          prev === item.dropdownKey ? null : item.dropdownKey
                        )
                      }
                      className="w-full text-left px-3 py-2 text-gray-900 text-base font-medium rounded-md hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </button>
                    {openDropdown === item.dropdownKey && (
                      <ul className="pl-4">
                        {(item.dropdownKey === 'services'
                          ? servicesDropdown
                          : moyensDropdown
                        ).map((option) => (
                          <li key={option.name}>
                            <a
                              href={option.href}
                              className="block px-3 py-2 text-gray-900 text-base font-medium rounded-md hover:text-orange-500 transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              {option.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-900 text-base font-medium rounded-md hover:text-orange-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
                >
                  Candidater
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
