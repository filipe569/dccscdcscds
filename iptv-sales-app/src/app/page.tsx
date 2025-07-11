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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            StreamIPTV Pro
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Início</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors">Recursos</button>
            <button onClick={() => scrollToSection('plans')} className="hover:text-primary transition-colors">Planos</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">Depoimentos</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contato</button>
          </div>

          {/* Botão CTA Desktop */}
          <div className="hidden md:block">
            <button onClick={() => scrollToSection('plans')} className="btn-primary">
              Assinar Agora
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
          <div className="md:hidden bg-card border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-primary transition-colors">Início</button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 hover:text-primary transition-colors">Recursos</button>
              <button onClick={() => scrollToSection('plans')} className="block w-full text-left py-2 hover:text-primary transition-colors">Planos</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 hover:text-primary transition-colors">Depoimentos</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-primary transition-colors">Contato</button>
              <button onClick={() => scrollToSection('plans')} className="btn-primary w-full mt-4">
                Assinar Agora
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Streaming IPTV
              <span className="gradient-text block">de Alta Qualidade</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-4xl mx-auto">
              Desfrute de milhares de canais, filmes e séries em qualidade 4K. 
              Acesso ilimitado ao melhor entretenimento mundial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('plans')} className="btn-primary text-lg px-8 py-4 hover-glow">
                🚀 Começar Agora
              </button>
              <button onClick={() => scrollToSection('features')} className="btn-secondary text-lg px-8 py-4">
                📺 Ver Recursos
              </button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fadeInUp">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15,000+</div>
              <div className="text-foreground-secondary">Canais HD/4K</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">50,000+</div>
              <div className="text-foreground-secondary">Filmes & Séries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">99.9%</div>
              <div className="text-foreground-secondary">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-foreground-secondary">Suporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-background-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher nosso <span className="gradient-text">IPTV</span>?
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Oferecemos a melhor experiência de streaming com tecnologia avançada e conteúdo premium.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎬",
                title: "Qualidade 4K Ultra HD",
                description: "Transmissão em ultra alta definição com qualidade cinema em casa."
              },
              {
                icon: "📱",
                title: "Multi-Dispositivos",
                description: "Assista em TV, smartphone, tablet, PC ou qualquer dispositivo."
              },
              {
                icon: "🌍",
                title: "Canais Internacionais",
                description: "Acesso a canais de todo o mundo em múltiplos idiomas."
              },
              {
                icon: "⚡",
                title: "Sem Travamentos",
                description: "Servidores de alta performance garantem streaming fluido."
              },
              {
                icon: "🔒",
                title: "100% Seguro",
                description: "Conexão criptografada e dados protegidos com máxima segurança."
              },
              {
                icon: "🎯",
                title: "EPG Completo",
                description: "Guia eletrônico de programação atualizado em tempo real."
              }
            ].map((feature, index) => (
              <div key={index} className="card hover-glow animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Escolha seu <span className="gradient-text">Plano</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Planos flexíveis para atender suas necessidades de entretenimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Básico",
                price: "R$ 29,90",
                period: "/mês",
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
                price: "R$ 49,90",
                period: "/mês",
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
                price: "R$ 79,90",
                period: "/mês",
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
              <div key={index} className={`card relative ${plan.popular ? 'border-2 border-primary hover-glow' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="gradient-primary text-white px-6 py-2 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-foreground-secondary">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <span className="text-secondary mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'btn-primary' 
                    : 'btn-secondary'
                }`}>
                  Assinar {plan.name}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground-secondary mb-4">
              💳 Aceitamos PIX, Cartão de Crédito e Débito
            </p>
            <p className="text-sm text-foreground-secondary">
              📞 Dúvidas? Entre em contato: (11) 99999-9999
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-background-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos <span className="gradient-text">clientes</span> dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                role: "Cliente Premium",
                comment: "Melhor IPTV que já usei! Qualidade excelente e nunca trava. Recomendo!",
                rating: 5
              },
              {
                name: "Ana Santos",
                role: "Cliente Ultra",
                comment: "Incrível variedade de canais e filmes. O suporte é muito eficiente.",
                rating: 5
              },
              {
                name: "João Oliveira",
                role: "Cliente Básico",
                comment: "Ótimo custo-benefício. Funciona perfeitamente em todos os dispositivos.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-foreground-secondary">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground-secondary mb-4">&ldquo;{testimonial.comment}&rdquo;</p>
                <div className="flex text-secondary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para começar sua <span className="gradient-text">jornada</span>?
            </h2>
            <p className="text-xl text-foreground-secondary mb-8">
              Junte-se a milhares de clientes satisfeitos e tenha acesso ao melhor entretenimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button onClick={() => scrollToSection('plans')} className="btn-primary text-lg px-8 py-4 hover-glow">
                🎬 Assinar Agora
              </button>
              <a href="https://wa.me/5511999999999" className="btn-secondary text-lg px-8 py-4">
                💬 Falar no WhatsApp
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-bold mb-2">📞 Suporte 24/7</h4>
                <p className="text-foreground-secondary">Atendimento especializado a qualquer hora</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">🔒 Compra Segura</h4>
                <p className="text-foreground-secondary">Transações protegidas e criptografadas</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">⚡ Ativação Imediata</h4>
                <p className="text-foreground-secondary">Comece a assistir em minutos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-secondary py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">StreamIPTV Pro</h3>
              <p className="text-foreground-secondary">
                A melhor experiência de streaming IPTV do Brasil.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Planos</h4>
              <ul className="space-y-2 text-foreground-secondary">
                <li>Básico</li>
                <li>Premium</li>
                <li>Ultra</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-foreground-secondary">
                <li>Central de Ajuda</li>
                <li>WhatsApp</li>
                <li>Email</li>
                <li>Telefone</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-foreground-secondary">
                <li>📞 (11) 99999-9999</li>
                <li>📧 contato@streamiptv.com</li>
                <li>💬 WhatsApp 24h</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-foreground-secondary">
            <p>&copy; 2024 StreamIPTV Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
