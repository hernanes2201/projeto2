import React from 'react';
import { CreditCard, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappMessage = encodeURIComponent("Olá, estou interessado em saber mais sobre seus serviços de consultoria empresarial");
  const whatsappLink = `https://wa.me/5561985976557?text=${whatsappMessage}`;

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-accent mr-2" />
              <span className="text-xl font-bold">HGK Consultoria</span>
            </div>
            <p className="text-gray-400 mb-4">
              Consultoria financeira especializada em crédito PJ e consórcio, com 15 anos de experiência no mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hernaneshgk@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Crédito PJ</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Consórcio Empresarial</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Reestruturação Financeira</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Planejamento Tributário</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Consultoria Financeira</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-accent mr-3 mt-0.5" />
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (61) 98597-6557
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-accent mr-3 mt-0.5" />
                <a 
                  href="mailto:hernaneshgk@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  hernaneshgk@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-lg font-medium mt-2 transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} HGK Consultoria Financeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;