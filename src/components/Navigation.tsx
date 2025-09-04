import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logomobil.png';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/Services' },
    { name: 'Projet', href: '/Projet' },
    { name: 'Moyens', href: '/moyens', hasDropdown: true, dropdownKey: 'moyens' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/Contact' },
  ];

  const servicesDropdown = [
    { name: 'Travaux Construction', href: '#construction' },
    { name: 'Installation Eau Potable', href: '#eau-potable' },
    { name: 'Vente de Matériaux de Construction', href: '#vente-materiaux' },
  ];

  const moyensDropdown = [
    { name: 'Moyen humain', href: '/moyen-humain' },
    { name: 'Moyen matériel', href: '/moyen-materiel' },
  ];

  const highlightColor = "#E5702A";

  return (
    <nav
      className={`
        fixed top-8 left-0 right-0 z-50 mx-auto max-w-[1100px] rounded-full
        md:bg-white/90 md:backdrop-blur-md md:shadow-lg md:border md:border-gray-200
        bg-transparent shadow-none border-0
      `}
    >
      <div className="flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="logo" className="h-14 w-auto cursor-pointer" />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center space-x-6 flex-1 relative">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} className="relative flex flex-col items-center">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.dropdownKey ? null : item.dropdownKey)
                  }
                  className={`text-black font-medium transition-colors duration-200`}
                  onMouseEnter={e => e.currentTarget.style.color = highlightColor}
                  onMouseLeave={e => e.currentTarget.style.color = 'black'}
                >
                  {item.name}
                </button>

                {/* Dropdown Menu */}
                {openDropdown === item.dropdownKey && (
                  <div className="absolute top-full mt-2 bg-white shadow-md rounded-md overflow-hidden min-w-[180px] z-50">
                    <ul>
                      {(item.dropdownKey === "services" ? servicesDropdown : moyensDropdown).map(
                        (option) => (
                          <li key={option.name}>
                            <a
                              href={option.href}
                              className="block px-4 py-2 text-black transition-colors duration-200"
                              onMouseEnter={e => e.currentTarget.style.color = highlightColor}
                              onMouseLeave={e => e.currentTarget.style.color = 'black'}
                            >
                              {option.name}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-black font-medium transition-colors duration-200"
                onMouseEnter={e => e.currentTarget.style.color = highlightColor}
                onMouseLeave={e => e.currentTarget.style.color = 'black'}
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center z-50">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setOpenDropdown(null);
            }}
            className="
      p-2.5 rounded-full bg-[#6C2E0A]  // لون بني ثابت
      focus:outline-none
    "
          >
            {isOpen ? (
              <X className="h-8 w-8 text-white" />
            ) : (
              <Menu className="h-8 w-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === item.dropdownKey ? null : item.dropdownKey
                      )
                    }
                    className="w-full text-left px-3 py-2 text-black text-base font-medium transition-colors duration-200"
                    onMouseEnter={e => e.currentTarget.style.color = highlightColor}
                    onMouseLeave={e => e.currentTarget.style.color = 'black'}
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
                            className="block px-3 py-2 text-black text-base transition-colors duration-200"
                            onMouseEnter={e => e.currentTarget.style.color = highlightColor}
                            onMouseLeave={e => e.currentTarget.style.color = 'black'}
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
                  className="block px-3 py-2 text-black text-base transition-colors duration-200"
                  onMouseEnter={e => e.currentTarget.style.color = highlightColor}
                  onMouseLeave={e => e.currentTarget.style.color = 'black'}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
