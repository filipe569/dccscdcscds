'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animação de scroll suave para as seções
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-netflix-black text-netflix-text">
      {/* Header/Navigation estilo Netflix */}
      <header className="fixed top-0 w-full header-netflix z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-3xl font-bold text-netflix-red">
            StreamIPTV
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <button onClick={() => scrollToSection('home')} className="hover:text-netflix-text transition-colors">Início</button>
            <button onClick={() => scrollToSection('featured')} className="hover:text-netflix-text transition-colors">Em Destaque</button>
            <button onClick={() => scrollToSection('plans')} className="hover:text-netflix-text transition-colors">Planos</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-netflix-text transition-colors">Avaliações</button>
          </div>

          {/* Botão CTA Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => scrollToSection('plans')} className="btn-netflix">
              Assinar
            </button>
          </div>

          {/* Menu Mobile */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-netflix-dark-gray border-t border-netflix-gray">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-netflix-red transition-colors">Início</button>
              <button onClick={() => scrollToSection('featured')} className="block w-full text-left py-2 hover:text-netflix-red transition-colors">Em Destaque</button>
              <button onClick={() => scrollToSection('plans')} className="block w-full text-left py-2 hover:text-netflix-red transition-colors">Planos</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 hover:text-netflix-red transition-colors">Avaliações</button>
              <button onClick={() => scrollToSection('plans')} className="btn-netflix w-full mt-4">
                Assinar Agora
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section estilo Netflix */}
      <section id="home" className="hero-netflix flex items-center justify-center relative">
        <div className="overlay-gradient absolute inset-0"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fadeInUp max-w-4xl mx-auto">
            <h1 className="title-netflix mb-6">
              Entretenimento
              <span className="gradient-text block">Sem Limites</span>
            </h1>
            <p className="subtitle-netflix mb-8 max-w-2xl mx-auto">
              Milhares de filmes, séries e canais ao vivo. Qualidade 4K, sem travamentos, sem limites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('plans')} className="btn-netflix text-lg">
                ▶ Começar a Assistir
              </button>
              <button onClick={() => scrollToSection('featured')} className="btn-netflix-secondary text-lg">
                ⓘ Mais Informações
              </button>
            </div>
          </div>

          {/* Stats estilo Netflix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slideIn">
            <div className="text-center">
              <div className="text-4xl font-bold text-netflix-red mb-2">15K+</div>
              <div className="text-netflix-text-secondary text-sm">Canais 4K</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-netflix-green mb-2">50K+</div>
              <div className="text-netflix-text-secondary text-sm">Filmes & Séries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-netflix-blue mb-2">99.9%</div>
              <div className="text-netflix-text-secondary text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-netflix-yellow mb-2">24/7</div>
              <div className="text-netflix-text-secondary text-sm">Suporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Em Destaque estilo Netflix */}
      <section id="featured" className="content-section">
        <div className="content-row">
          <h2 className="content-title">🔥 Em Destaque</h2>
          <div className="content-grid">
            {[
              {
                title: "Canais Premium 4K",
                description: "Os melhores canais em ultra alta definição",
                icon: "🎬",
                gradient: "from-red-600 to-red-800"
              },
              {
                title: "Filmes Blockbuster",
                description: "Lançamentos e clássicos do cinema",
                icon: "🍿", 
                gradient: "from-blue-600 to-blue-800"
              },
              {
                title: "Séries Originais",
                description: "Conteúdo exclusivo e premiado",
                icon: "📺",
                gradient: "from-purple-600 to-purple-800"
              },
              {
                title: "Esportes ao Vivo",
                description: "Todos os jogos e competições",
                icon: "⚽",
                gradient: "from-green-600 to-green-800"
              },
              {
                title: "Documentários",
                description: "Conhecimento e entretenimento",
                icon: "🌍",
                gradient: "from-yellow-600 to-yellow-800"
              },
              {
                title: "Infantil",
                description: "Diversão segura para toda família",
                icon: "🎈",
                gradient: "from-pink-600 to-pink-800"
              }
            ].map((item, index) => (
              <div key={index} className="card-netflix hover-cinematic p-6" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`h-32 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-6xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-netflix-text">{item.title}</h3>
                <p className="text-netflix-text-secondary text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="content-row">
          <h2 className="content-title">⚡ Por que escolher nosso IPTV?</h2>
          <div className="content-grid">
            {[
              {
                icon: "�",
                title: "Qualidade Superior",
                description: "Transmissão em 4K/8K sem travamentos"
              },
              {
                icon: "📱",
                title: "Todos os Dispositivos",
                description: "TV, celular, tablet, computador"
              },
              {
                icon: "🌐",
                title: "Conteúdo Global",
                description: "Canais de todos os países e idiomas"
              },
              {
                icon: "🔒",
                title: "100% Seguro",
                description: "Conexão criptografada e privada"
              }
            ].map((feature, index) => (
              <div key={index} className="card-netflix hover-cinematic p-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-netflix-text">{feature.title}</h3>
                <p className="text-netflix-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Planos estilo Netflix */}
      <section id="plans" className="content-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-netflix-text">
              Escolha seu <span className="gradient-text">Plano</span>
            </h2>
            <p className="subtitle-netflix max-w-3xl mx-auto">
              Desfrute de entretenimento ilimitado com nossos planos flexíveis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Básico",
                price: "29,90",
                features: [
                  "5.000+ canais HD",
                  "10.000+ filmes e séries",
                  "2 dispositivos simultâneos",
                  "Suporte por email",
                  "EPG básico"
                ],
                popular: false
              },
              {
                name: "Premium",
                price: "49,90",
                features: [
                  "10.000+ canais HD/4K",
                  "30.000+ filmes e séries",
                  "4 dispositivos simultâneos",
                  "Suporte 24/7",
                  "EPG completo",
                  "Canais adultos",
                  "PPV inclusos"
                ],
                popular: true
              },
              {
                name: "Ultra",
                price: "79,90",
                features: [
                  "15.000+ canais 4K/8K",
                  "50.000+ filmes e séries",
                  "Dispositivos ilimitados",
                  "Suporte VIP 24/7",
                  "EPG premium",
                  "Todos os canais premium",
                  "Lançamentos exclusivos",
                  "Configuração grátis"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`plan-card ${plan.popular ? 'plan-popular' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-netflix-text">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-sm text-netflix-text-secondary">R$</span>
                    <span className="text-5xl font-bold text-netflix-text">{plan.price}</span>
                    <span className="text-netflix-text-secondary">/mês</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-netflix-text">
                      <span className="text-netflix-green mr-3 text-lg">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${
                  plan.popular 
                    ? 'btn-netflix' 
                    : 'btn-netflix-secondary'
                }`}>
                  Assinar {plan.name}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 space-y-4">
            <div className="flex justify-center items-center space-x-8 text-netflix-text-secondary">
              <div className="flex items-center">
                <span className="text-2xl mr-2">💳</span>
                <span>PIX, Cartão, Débito</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🔒</span>
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                <span>Ativação Imediata</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Avaliações estilo Netflix */}
      <section id="testimonials" className="content-section">
        <div className="content-row">
          <h2 className="content-title">⭐ O que nossos assinantes dizem</h2>
          <div className="content-grid">
            {[
              {
                name: "Carlos Silva",
                role: "Assinante Premium",
                comment: "Melhor serviço de IPTV que já usei! Qualidade incrível, nunca trava.",
                rating: 5,
                avatar: "C"
              },
              {
                name: "Ana Santos", 
                role: "Assinante Ultra",
                comment: "Variedade incrível de conteúdo. Vale cada centavo investido.",
                rating: 5,
                avatar: "A"
              },
              {
                name: "João Oliveira",
                role: "Assinante Básico", 
                comment: "Excelente custo-benefício. Funciona perfeitamente em todos dispositivos.",
                rating: 5,
                avatar: "J"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card-netflix hover-cinematic p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 gradient-netflix rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-netflix-text text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-netflix-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-netflix-text-secondary mb-4 italic">&ldquo;{testimonial.comment}&rdquo;</p>
                <div className="flex text-netflix-yellow text-xl">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final estilo Netflix */}
      <section className="content-section">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-netflix-text">
              Pronto para <span className="gradient-text">começar</span>?
            </h2>
            <p className="subtitle-netflix mb-12">
              Junte-se a milhares de pessoas que já descobriram o futuro do entretenimento
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button onClick={() => scrollToSection('plans')} className="btn-netflix text-xl px-12 py-4">
                🎬 Assinar Agora
              </button>
              <a href="https://wa.me/5511999999999" className="btn-netflix-secondary text-xl px-12 py-4">
                💬 Falar no WhatsApp
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <h4 className="font-bold mb-2 text-netflix-text">Suporte 24/7</h4>
                <p className="text-netflix-text-secondary">Atendimento especializado sempre disponível</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="font-bold mb-2 text-netflix-text">Compra Segura</h4>
                <p className="text-netflix-text-secondary">Transações protegidas e criptografadas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="font-bold mb-2 text-netflix-text">Ativação Imediata</h4>
                <p className="text-netflix-text-secondary">Comece a assistir em minutos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer estilo Netflix */}
      <footer className="bg-netflix-dark-gray py-16 px-6 border-t border-netflix-gray">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-3xl font-bold text-netflix-red mb-6">StreamIPTV</h3>
              <p className="text-netflix-text-secondary leading-relaxed">
                A revolução do entretenimento chegou. Streaming IPTV de alta qualidade para toda família.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-netflix-text">Planos</h4>
              <ul className="space-y-3 text-netflix-text-secondary">
                <li className="hover:text-netflix-red cursor-pointer transition-colors">Básico</li>
                <li className="hover:text-netflix-red cursor-pointer transition-colors">Premium</li>
                <li className="hover:text-netflix-red cursor-pointer transition-colors">Ultra</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-netflix-text">Suporte</h4>
              <ul className="space-y-3 text-netflix-text-secondary">
                <li className="hover:text-netflix-red cursor-pointer transition-colors">Central de Ajuda</li>
                <li className="hover:text-netflix-red cursor-pointer transition-colors">WhatsApp</li>
                <li className="hover:text-netflix-red cursor-pointer transition-colors">Email</li>
                <li className="hover:text-netflix-red cursor-pointer transition-colors">Telefone</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-netflix-text">Contato</h4>
              <ul className="space-y-3 text-netflix-text-secondary">
                <li>📞 (11) 99999-9999</li>
                <li>📧 contato@streamiptv.com</li>
                <li>💬 WhatsApp 24h</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-netflix-gray pt-8 text-center text-netflix-text-secondary">
            <p>&copy; 2024 StreamIPTV Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
