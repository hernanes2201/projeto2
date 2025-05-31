import React from 'react';
import { TrendingUp, ArrowRight, Phone, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappMessage = encodeURIComponent("Olá, estou interessado em saber mais sobre seus serviços de consultoria empresarial");
  const whatsappLink = `https://wa.me/5561985976557?text=${whatsappMessage}`;

  return (
    <section 
      id="inicio" 
      className="min-h-screen hero-background"
    >
      <div className="container mx-auto px-4 py-16 hero-content">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Consultoria Financeira <span className="text-accent">Especializada</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md">
              Alavanque o crescimento do seu negócio com 15 anos de experiência no mercado financeiro. Especialista em crédito PJ e consórcio.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <a 
                href="#sobre" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
              >
                Saiba Mais
              </a>
            </div>
            <a 
              href="https://drive.google.com/file/d/1Lh15RwXZVZ3kPSG4Q7nC60jLLEdToJns/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-white text-primary hover:bg-white/90 py-3 px-6 rounded-lg font-medium transition-colors mb-6"
            >
              <Download size={18} className="mr-2" />
              Download E-book Grátis
            </a>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white inline-flex items-center hover:text-accent transition-colors"
              >
                <Phone size={18} className="mr-2" />
                (61) 98597-6557
              </a>
              <a 
                href="mailto:hernaneshgk@gmail.com" 
                className="text-white inline-flex items-center hover:text-accent transition-colors"
              >
                <Mail size={18} className="mr-2" />
                hernaneshgk@gmail.com
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl">
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-accent h-8 w-8 mr-3" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">Resultados Comprovados</h3>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-accent text-sm">✓</span>
                    </div>
                    <span>Redução de custos financeiros</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-accent text-sm">✓</span>
                    </div>
                    <span>Acesso a linhas de crédito especiais</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-accent text-sm">✓</span>
                    </div>
                    <span>Planejamento financeiro estratégico</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-accent text-sm">✓</span>
                    </div>
                    <span>Soluções personalizadas para seu negócio</span>
                  </li>
                </ul>
              </div>
              <div className="absolute -top-4 -right-4 h-24 w-24 bg-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;