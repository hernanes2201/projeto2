import React from 'react';
import { CreditCard, BarChart, Calculator, Building, Briefcase, LineChart } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <a 
        href="#contato" 
        className="mt-4 text-primary font-medium inline-flex items-center hover:text-primary-dark transition-colors"
      >
        Saiba mais
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções financeiras personalizadas para empresas de todos os portes, com foco em resultados concretos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<CreditCard className="h-6 w-6 text-primary" />}
            title="Crédito PJ"
            description="Acesso às melhores linhas de crédito para empresas, com taxas competitivas e condições diferenciadas para capital de giro, investimentos e expansão."
          />
          
          <ServiceCard 
            icon={<Briefcase className="h-6 w-6 text-primary" />}
            title="Consórcio Empresarial"
            description="Planejamento e aquisição de bens e serviços através de consórcios, com parcelas que cabem no orçamento da sua empresa e sem juros."
          />
          
          <ServiceCard 
            icon={<BarChart className="h-6 w-6 text-primary" />}
            title="Reestruturação Financeira"
            description="Análise completa da situação financeira da sua empresa, com estratégias para redução de custos, renegociação de dívidas e otimização de recursos."
          />
          
          <ServiceCard 
            icon={<Calculator className="h-6 w-6 text-primary" />}
            title="Planejamento Tributário"
            description="Estratégias para redução da carga tributária de forma legal, maximizando resultados e evitando problemas com o fisco."
          />
          
          <ServiceCard 
            icon={<Building className="h-6 w-6 text-primary" />}
            title="Financiamento Imobiliário"
            description="Consultoria especializada para aquisição ou construção de imóveis comerciais, com as melhores condições do mercado."
          />
          
          <ServiceCard 
            icon={<LineChart className="h-6 w-6 text-primary" />}
            title="Consultoria Financeira"
            description="Acompanhamento personalizado para tomada de decisões estratégicas, análise de investimentos e planejamento financeiro de curto, médio e longo prazo."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;