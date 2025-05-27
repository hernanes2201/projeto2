import React from 'react';
import { Award, Calendar, Building2, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="bg-primary/10 p-3 rounded-full absolute -top-4 -left-4 z-10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="rounded-lg overflow-hidden relative z-0">
                <img 
                  src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Profissional de consultoria financeira" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-white text-sm">Experiência em</p>
                      <p className="text-white font-bold">Bradesco & Santander</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent/10 h-32 w-32 rounded-full blur-2xl z-0"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Experiência que faz a diferença
            </h2>
            
            <p className="text-gray-600 mb-6">
              Com mais de 15 anos de atuação no mercado financeiro, trabalhando em grandes instituições como Bradesco e Santander, desenvolvi expertise em soluções financeiras personalizadas para empresas de todos os portes.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-lg mr-4 mt-1">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">15 anos de experiência</h3>
                  <p className="text-gray-600">No mercado financeiro, atuando com empresas de todos os portes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-lg mr-4 mt-1">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Experiência em grandes bancos</h3>
                  <p className="text-gray-600">Bradesco e Santander, conhecendo por dentro os processos e critérios</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-lg mr-4 mt-1">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Formação acadêmica</h3>
                  <p className="text-gray-600">Formado há 13 anos, com especialização em análise financeira</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 font-medium mb-6">
              "Meu objetivo é utilizar minha experiência para ajudar empresários a tomarem as melhores decisões financeiras, proporcionando crescimento sustentável e resultados concretos."
            </p>
            
            <a 
              href="#contato" 
              className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-medium inline-flex items-center transition-colors"
            >
              Entre em contato
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;