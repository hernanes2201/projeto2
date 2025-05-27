import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "A consultoria foi fundamental para conseguirmos a linha de crédito que precisávamos para expandir nosso negócio. O atendimento personalizado e o conhecimento do mercado fizeram toda a diferença.",
    author: "Carlos Silva",
    role: "Diretor",
    company: "Tecnologia Integrada Ltda"
  },
  {
    content: "Conseguimos reestruturar nossas dívidas e melhorar significativamente nosso fluxo de caixa. A experiência bancária do consultor nos deu acesso a condições que nem sabíamos que existiam.",
    author: "Maria Oliveira",
    role: "CEO",
    company: "Oliveira Comércio"
  },
  {
    content: "O consórcio empresarial foi a melhor solução para adquirirmos nossa frota sem comprometer o capital de giro. Recomendo fortemente este serviço de consultoria.",
    author: "Roberto Mendes",
    role: "Proprietário",
    company: "RM Logística"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados reais para empresas que confiaram em nossa consultoria financeira.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative">
            <div className="absolute -top-3 -right-3">
              <div className="bg-accent/20 p-2 rounded-full">
                <Star className="h-6 w-6 text-accent fill-accent" />
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="mt-4">
                <p className="font-bold text-gray-800">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full mx-1.5 ${
                  currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;