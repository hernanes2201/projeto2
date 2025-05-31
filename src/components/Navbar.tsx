import React, { useState, useEffect } from 'react';
import { Menu, X, CreditCard, Phone, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent("Olá, estou interessado em saber mais sobre seus serviços de consultoria empresarial");
  const whatsappLink = `https://wa.me/5561985976557?text=${whatsappMessage}`;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <CreditCard className={`h-8 w-8 ${isScrolled ? 'text-primary' : 'text-white'} mr-2`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>HGK Consultoria</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <a href="#inicio" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-primary transition-colors font-bold`}>Início</a>
              <a href="#servicos" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-primary transition-colors font-bold`}>Serviços</a>
              <a href="#sobre" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-primary transition-colors font-bold`}>Sobre</a>
              <a href="#depoimentos" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-primary transition-colors font-bold`}>Depoimentos</a>
            </div>
            
            <div className="flex items-center space-x-4 border-l pl-8 ml-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isScrolled ? 'text-primary' : 'text-white'} hover:text-primary-dark transition-colors inline-flex items-center`}
              >
                <Phone size={18} className="mr-2" />
                (61) 98597-6557
              </a>
              <a 
                href="mailto:hernaneshgk@gmail.com" 
                className={`${isScrolled ? 'text-primary' : 'text-white'} hover:text-primary-dark transition-colors inline-flex items-center`}
              >
                <Mail size={18} className="mr-2" />
                hernaneshgk@gmail.com
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? 'text-black' : 'text-white'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white w-full absolute top-16 left-0 shadow-md">
            <div className="flex flex-col px-4 py-2 space-y-3">
              <a 
                href="#inicio" 
                className="text-black hover:text-primary py-2 transition-colors font-bold"
                onClick={() => setIsOpen(false)}
              >
                Início
              </a>
              <a 
                href="#servicos" 
                className="text-black hover:text-primary py-2 transition-colors font-bold"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#sobre" 
                className="text-black hover:text-primary py-2 transition-colors font-bold"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#depoimentos" 
                className="text-black hover:text-primary py-2 transition-colors font-bold"
                onClick={() => setIsOpen(false)}
              >
                Depoimentos
              </a>
              <div className="border-t pt-3 space-y-2">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors inline-flex items-center"
                >
                  <Phone size={18} className="mr-2" />
                  (61) 98597-6557
                </a>
                <a 
                  href="mailto:hernaneshgk@gmail.com" 
                  className="text-primary hover:text-primary-dark transition-colors inline-flex items-center"
                >
                  <Mail size={18} className="mr-2" />
                  hernaneshgk@gmail.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;