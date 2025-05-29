import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    // For now, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Obrigado pelo contato! Retornaremos em breve.',
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  const whatsappMessage = encodeURIComponent("Olá, estou interessado em saber mais sobre seus serviços de consultoria empresarial");
  const whatsappLink = `https://wa.me/5561985976557?text=${whatsappMessage}`;

  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="lg:w-2/5 bg-primary p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black mb-6">Entre em Contato</h2>
              
              <p className="text-black mb-8">
                Estou à disposição para ajudar sua empresa a encontrar as melhores soluções financeiras. Entre em contato e vamos conversar sobre como posso contribuir para o crescimento do seu negócio.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <p className="text-black text-sm">Telefone</p>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black font-medium hover:text-accent transition-colors"
                    >
                      (61) 98597-6557
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <p className="text-black text-sm">E-mail</p>
                    <p className="text-black font-medium">hernaneshgk@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <p className="text-black text-sm">Localização</p>
                    <p className="text-black font-medium">Brasília - DF</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicite uma Consultoria</h3>
              
              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="(61) 98597-6557"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-1">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <label htmlFor="message" className="block text-gray-700 mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Descreva sua necessidade..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="mt-6 bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-medium inline-flex items-center transition-colors"
                >
                  Enviar Mensagem
                  <Send className="h-4 w-4 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;