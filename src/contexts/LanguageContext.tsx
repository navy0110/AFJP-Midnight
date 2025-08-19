import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header Navigation
    'header.why-polkadot': 'Why Polkadot',
    'header.advantages': 'Advantages',
    'header.presentation': 'Presentation',
    'header.learn-more': 'Learn More',
    
    // Navigation
    'nav.home': 'Home',
    'nav.dashboard': 'Dashboard',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'The Future of Retirement is Here',
    'hero.subtitle': 'Join the blockchain revolution that will transform how we save for retirement. Transparent, secure, and profitable.',
    'hero.cta': 'Start Your Journey',
    'hero.learn-more': 'Learn More',
    
    // Dashboard
    'dashboard.welcome': 'Welcome to your AFJP Dashboard',
    'dashboard.title': 'AFJP Dashboard',
    'dashboard.balance': 'Your Balance',
    'dashboard.afjp-tokens': 'AFJP Tokens',
    'dashboard.usd-value': 'USD Value',
    'dashboard.monthly-contribution': 'Monthly Contribution',
    'dashboard.total-contributed': 'Total Contributed',
    'dashboard.projected-retirement': 'Projected at Retirement',
    'dashboard.recent-activity': 'Recent Activity',
    'dashboard.news-updates': 'News & Updates',
    'dashboard.contribute-now': 'Contribute Now',
    'dashboard.retirement-tokens': 'Retirement Tokens',
    'dashboard.total-estimated-value': 'Total Estimated Value',
    'dashboard.per-token': 'per token',
    'dashboard.contribute': 'Contribute',
    'dashboard.contribute-desc': 'Add funds to your retirement account',
    'dashboard.submarket': 'Token Market',
    'dashboard.submarket-desc': 'Buy, sell and exchange tokens',
    'dashboard.benefits': 'Benefits',
    'dashboard.benefits-desc': 'Access your retirement benefits',
    'dashboard.recent-transactions': 'Recent Transactions',
    'dashboard.fund-news': 'Fund News',
    
    // Tabs
    'tabs.overview': 'Overview',
    'tabs.contribute': 'Contribute',
    'tabs.tokenburn': 'Token Burn',
    'tabs.marketplace': 'Marketplace',
    'tabs.realestate': 'Real Estate',
    'tabs.benefits': 'Benefits',
    
    // Marketplace
    'marketplace.title': 'Token Marketplace',
    'marketplace.subtitle': 'Buy, sell, and burn AFJP tokens to optimize your retirement strategy',
    'marketplace.buy-tokens': 'Buy Tokens',
    'marketplace.sell-tokens': 'Sell Tokens',
    'marketplace.simulation': 'SIMULATION',
    'marketplace.buy-confirmation': 'Buy {tokens} tokens for ${cost} USD',
    'marketplace.sell-confirmation': 'Sell {tokens} tokens for ${value} USD',
    
    // Token Exchange (replacing Token Burn)
    'tokenexchange.title': 'Token Exchange',
    'tokenexchange.subtitle': 'Exchange your AFJP tokens for JUVENTUD tokens to access premium benefits',
    'tokenexchange.exchange-title': 'Exchange Tokens',
    'tokenexchange.exchange-description': 'Exchange AFJP tokens for JUVENTUD tokens at a fixed rate',
    'tokenexchange.afjp-balance': 'AFJP Balance',
    'tokenexchange.juventud-balance': 'JUVENTUD Balance',
    'tokenexchange.juventud-tokens': 'JUVENTUD',
    'tokenexchange.amount-to-exchange': 'Amount to Exchange (AFJP)',
    'tokenexchange.rate-info': 'Exchange Rate: {rate} AFJP = 1 JUVENTUD',
    'tokenexchange.you-will-receive': 'You will receive',
    'tokenexchange.confirm-exchange': 'Confirm Exchange',
    'tokenexchange.exchange-warning': '⚠️ Please verify the exchange details',
    'tokenexchange.simulation': 'SIMULATION',
    'tokenexchange.exchange-confirmation': 'Exchange {afjp} AFJP tokens to receive {juventud} JUVENTUD tokens',
    'tokenexchange.benefits-title': 'JUVENTUD Token Benefits',
    'tokenexchange.benefits-description': 'Unlock exclusive advantages with JUVENTUD tokens',
    'tokenexchange.benefit-1': 'Preferential rental rates in our real estate portfolio',
    'tokenexchange.benefit-2': 'Priority access to new property developments',
    'tokenexchange.benefit-3': 'Enhanced voting rights in governance decisions',
    
    // Inheritance Section
    'inheritance.title': 'Token Inheritance',
    'inheritance.beneficiaries-config': 'Beneficiaries Configuration',
    'inheritance.configured-desc': 'Your inheritance is configured and ready',
    'inheritance.not-configured-desc': 'Your inheritance needs to be configured',
    'inheritance.config-status': 'Configuration Status',
    'inheritance.completed': 'Completed',
    'inheritance.designated-beneficiaries': 'Designated Beneficiaries',
    'inheritance.primary-beneficiary': 'Primary Beneficiary',
    'inheritance.secondary-beneficiary': 'Secondary Beneficiary',
    'inheritance.last-update': 'Last updated:',
    'inheritance.how-it-works': 'How It Works',
    'inheritance.description': 'Our token inheritance system ensures your AFJP tokens are safely transferred to your beneficiaries in case of unexpected events, following blockchain security protocols.',
    'inheritance.step1': 'Designate your beneficiaries and assign percentages of your token portfolio',
    'inheritance.step2': 'Submit legal documentation and identity verification for each beneficiary',
    'inheritance.step3': 'The system creates a secure smart contract with your inheritance instructions',
    'inheritance.step4': 'In case of inheritance activation, tokens are automatically distributed according to your wishes',
    'inheritance.modify-beneficiaries': 'Modify Beneficiaries',
    'inheritance.add-documentation': 'Add Documentation',
    'inheritance.not-configured-note': 'Secure your family\'s future by configuring your token inheritance plan',
    'inheritance.configure-beneficiaries': 'Configure Beneficiaries',
    
    // Health Benefits Section
    'health.simulator-title': 'Health Discount Simulator',
    'health.medicine-price': 'Medicine Price (ARS)',
    'health.token-balance': 'JUVENTUD Token Balance',
    'health.more-tokens-desc': 'More tokens provide additional discount (up to',
    'health.base-discount': 'Base Discount',
    'health.additional-discount': 'Additional Discount',
    'health.total-discount': 'Total Discount',
    'health.original-price': 'Original Price',
    'health.applied-discount': 'Applied Discount',
    'health.final-price': 'Final Price',
    'health.simulator-note': 'This is a simulation. Actual discounts may vary based on pharmacy partnerships and availability.',
    
    // Pitch Section
    'pitch.title': 'Why AFJP Will Revolutionize Retirement',
    'pitch.subtitle': 'We are not just another retirement fund. We are the solution the world needs.',
    'pitch.point1.title': 'Unprecedented Efficiency and Transparency',
    'pitch.point1.description': 'We use blockchain technology to eliminate bureaucracy, opacity, and unnecessary costs. Every contribution, every investment, every transaction is immutable and auditable, maximizing returns for our affiliates and the company\'s profitability.',
    'pitch.point2.title': 'Real Wealth Generation',
    'pitch.point2.description': 'We invest in real, tokenized assets, primarily real estate, to protect capital from inflation and grow it robustly. Our affiliates not only accumulate funds but have the security that their money is working for them, not being eroded.',
    'pitch.point3.title': 'Purpose-Driven Business Model ($AFJP and $JUVENTUD)',
    'pitch.point3.description': 'Our tokenomics is a brilliant growth strategy. Affiliates burn $AFJP to obtain $JUVENTUD, which grants them access to preferential rents in our growing real estate portfolio. This not only drives demand for our main token but also guarantees occupancy of our real estate assets, optimizing our revenue and attracting new generations with a real, tangible housing solution.',
    'pitch.execution.title': 'Our Execution Plan and Team Strength',
    'pitch.execution.description': 'We know that a vision of this magnitude requires flawless execution. For that, we will seek your support.',
    
    // Transactions
    'transactions.deposit': 'Deposit',
    'transactions.purchase': 'Purchase',
    'transactions.sale': 'Sale',
    'transactions.reward': 'Reward',
    'transactions.no-recent': 'No recent transactions',
    
    // News
    'news.new-property': 'New Property Added to Portfolio',
    'news.new-property-desc': 'Luxury apartment complex in downtown area now available for investment',
    'news.token-high': 'AFJP Token Reaches New High',
    'news.token-high-desc': 'Token value increases 15% this month due to strong portfolio performance',
    'news.health-benefits': 'New Health Benefits Available',
    'news.health-benefits-desc': 'Premium health insurance now available for all JUVENTUD token holders',
    'news.no-recent': 'No recent news',
    
    // Real Estate
    'realestate.title': 'Real Estate Portfolio',
    'realestate.description': 'Discover our exclusive real estate projects available to AFJP affiliates. Access properties with special benefits and payment options using your tokens.',
    'realestate.exclusive-benefits': 'Exclusive Benefits for Affiliates',
    'realestate.as-affiliate': 'As an AFJP affiliate, you have access to special benefits in our real estate portfolio',
    'realestate.exclusive': 'Exclusive',
    'realestate.discount-25': '25% Discount',
    'realestate.discount-desc': 'Special discount on rental rates for all AFJP affiliates',
    'realestate.special-financing': 'Special Financing',
    'realestate.financing-desc': 'Flexible payment options and preferential terms',
    'realestate.torres-puerto': 'Torres del Puerto',
    'realestate.torres-location': 'Puerto Madero, Buenos Aires',
    'realestate.apartments': 'Apartments',
    'realestate.under-construction': 'Under Construction',
    'realestate.completed': 'Completed',
    'realestate.pre-sale': 'Pre-sale',
    'realestate.express-interest': 'Express Your Interest',
    'realestate.interest-form-desc': 'Leave your information and we will contact you with personalized offers.',
    
    // Form translations
    'form.name-required': 'Name is required',
    'form.invalid-email': 'Please enter a valid email',
    'form.invalid-phone': 'Please enter a valid phone number',
    'form.select-interest': 'Please select your interest',
    'form.sent-title': 'Form Sent!',
    'form.sent-desc': 'We will contact you soon with more information.',
    'form.full-name': 'Full Name',
    'form.your-name': 'Your Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.interested-in': 'I am interested in:',
    'form.rent-property': 'Renting a property',
    'form.buy-property': 'Buying a property',
    'form.receive-info': 'Receiving information only',
    'form.additional-message': 'Additional Message (Optional)',
    'form.additional-placeholder': 'Tell us about your specific needs or preferences...',
    'form.send-request': 'Send Request',
    
    // Footer
    'footer.links': 'Quick Links',
    'footer.resources': 'Resources',
    'footer.official-polkadot': 'Official Polkadot',
    'footer.documentation': 'Documentation',
    'footer.explorer': 'Block Explorer',
    'footer.rights': '© 2024 AFJP Cripto. All rights reserved.',
    
    // Why Polkadot Section
    'why-polkadot.title': 'Why choose',
    'why-polkadot.subtitle': 'Discover the advantages of building our retirement fund on the most advanced blockchain ecosystem',
    'why-polkadot.interoperability': 'Interoperability',
    'why-polkadot.interoperability-desc': 'Connect with multiple blockchains and financial systems seamlessly',
    'why-polkadot.scalability': 'Scalability',
    'why-polkadot.scalability-desc': 'Process thousands of transactions per second with minimal fees',
    'why-polkadot.security': 'Security',
    'why-polkadot.security-desc': 'Shared security model protects all connected parachains',
    'why-polkadot.governance': 'Governance',
    'why-polkadot.governance-desc': 'Democratic governance system for protocol upgrades and decisions',
    
    // Advantages Section
    'advantages.title': 'Competitive Advantages',
    'advantages.subtitle': 'Why AFJP is the best choice for your blockchain-based retirement',
    'advantages.dedicated-parachain': 'Dedicated Parachain',
    'advantages.dedicated-desc': 'Our own blockchain optimized for retirement fund operations',
    'advantages.tokenized-assets': 'Tokenized Real Assets',
    'advantages.tokenized-desc': 'Real estate and traditional assets represented as blockchain tokens',
    'advantages.institutional-security': 'Institutional Security',
    'advantages.institutional-desc': 'Bank-level security with blockchain transparency',
    'advantages.continuous-evolution': 'Continuous Evolution',
    'advantages.continuous-desc': 'Regular updates and improvements without service interruption',
    'advantages.defi-ecosystem': 'DeFi Ecosystem',
    'advantages.defi-desc': 'Access to decentralized finance tools and yield opportunities',
    'advantages.long-term-resistance': 'Long-term Resistance',
    'advantages.long-term-desc': 'Built to last decades with evolving technology standards',
  },
  es: {
    // Header Navigation
    'header.why-polkadot': 'Por qué Polkadot',
    'header.advantages': 'Ventajas',
    'header.presentation': 'Presentación',
    'header.learn-more': 'Saber Más',
    
    // Navigation
    'nav.home': 'Inicio',
    'nav.dashboard': 'Panel',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'El Futuro de la Jubilación Está Aquí',
    'hero.subtitle': 'Únete a la revolución blockchain que transformará cómo ahorramos para la jubilación. Transparente, seguro y rentable.',
    'hero.cta': 'Comienza Tu Viaje',
    'hero.learn-more': 'Saber Más',
    
    // Dashboard
    'dashboard.welcome': 'Bienvenido a tu Panel AFJP',
    'dashboard.title': 'Panel AFJP',
    'dashboard.balance': 'Tu Saldo',
    'dashboard.afjp-tokens': 'Tokens AFJP',
    'dashboard.usd-value': 'Valor en USD',
    'dashboard.monthly-contribution': 'Contribución Mensual',
    'dashboard.total-contributed': 'Total Contribuido',
    'dashboard.projected-retirement': 'Proyectado al Retiro',
    'dashboard.recent-activity': 'Actividad Reciente',
    'dashboard.news-updates': 'Noticias y Actualizaciones',
    'dashboard.contribute-now': 'Contribuir Ahora',
    'dashboard.retirement-tokens': 'Tokens de Jubilación',
    'dashboard.total-estimated-value': 'Valor Total Estimado',
    'dashboard.per-token': 'por token',
    'dashboard.contribute': 'Contribuir',
    'dashboard.contribute-desc': 'Agrega fondos a tu cuenta de jubilación',
    'dashboard.submarket': 'Mercado de Tokens',
    'dashboard.submarket-desc': 'Compra, vende e intercambia tokens',
    'dashboard.benefits': 'Beneficios',
    'dashboard.benefits-desc': 'Accede a tus beneficios de jubilación',
    'dashboard.recent-transactions': 'Transacciones Recientes',
    'dashboard.fund-news': 'Noticias del Fondo',
    
    // Tabs
    'tabs.overview': 'Resumen',
    'tabs.contribute': 'Contribuir',
    'tabs.tokenburn': 'Quemar Tokens',
    'tabs.marketplace': 'Mercado',
    'tabs.realestate': 'Inmuebles',
    'tabs.benefits': 'Beneficios',
    
    // Marketplace
    'marketplace.title': 'Mercado de Tokens',
    'marketplace.subtitle': 'Compra, vende y quema tokens AFJP para optimizar tu estrategia de jubilación',
    'marketplace.buy-tokens': 'Comprar Tokens',
    'marketplace.sell-tokens': 'Vender Tokens',
    'marketplace.simulation': 'SIMULACIÓN',
    'marketplace.buy-confirmation': 'Comprar {tokens} tokens por ${cost} USD',
    'marketplace.sell-confirmation': 'Vender {tokens} tokens por ${value} USD',
    
    // Token Exchange (replacing Token Burn)
    'tokenexchange.title': 'Intercambio de Tokens',
    'tokenexchange.subtitle': 'Intercambia tus tokens AFJP por tokens JUVENTUD para acceder a beneficios premium',
    'tokenexchange.exchange-title': 'Intercambiar Tokens',
    'tokenexchange.exchange-description': 'Intercambia tokens AFJP por tokens JUVENTUD a una tasa fija',
    'tokenexchange.afjp-balance': 'Saldo AFJP',
    'tokenexchange.juventud-balance': 'Saldo JUVENTUD',
    'tokenexchange.juventud-tokens': 'JUVENTUD',
    'tokenexchange.amount-to-exchange': 'Cantidad a Intercambiar (AFJP)',
    'tokenexchange.rate-info': 'Tasa de Cambio: {rate} AFJP = 1 JUVENTUD',
    'tokenexchange.you-will-receive': 'Recibirás',
    'tokenexchange.confirm-exchange': 'Confirmar Intercambio',
    'tokenexchange.exchange-warning': '⚠️ Por favor verifica los detalles del intercambio',
    'tokenexchange.simulation': 'SIMULACIÓN',
    'tokenexchange.exchange-confirmation': 'Intercambiar {afjp} tokens AFJP para recibir {juventud} tokens JUVENTUD',
    'tokenexchange.benefits-title': 'Beneficios del Token JUVENTUD',
    'tokenexchange.benefits-description': 'Desbloquea ventajas exclusivas con tokens JUVENTUD',
    'tokenexchange.benefit-1': 'Tarifas preferenciales de alquiler en nuestro portafolio inmobiliario',
    'tokenexchange.benefit-2': 'Acceso prioritario a nuevos desarrollos inmobiliarios',
    'tokenexchange.benefit-3': 'Derechos de voto mejorados en decisiones de gobernanza',
    
    // Inheritance Section
    'inheritance.title': 'Herencia de Tokens',
    'inheritance.beneficiaries-config': 'Configuración de Beneficiarios',
    'inheritance.configured-desc': 'Tu herencia está configurada y lista',
    'inheritance.not-configured-desc': 'Tu herencia necesita ser configurada',
    'inheritance.config-status': 'Estado de Configuración',
    'inheritance.completed': 'Completado',
    'inheritance.designated-beneficiaries': 'Beneficiarios Designados',
    'inheritance.primary-beneficiary': 'Beneficiario Principal',
    'inheritance.secondary-beneficiary': 'Beneficiario Secundario',
    'inheritance.last-update': 'Última actualización:',
    'inheritance.how-it-works': 'Cómo Funciona',
    'inheritance.description': 'Nuestro sistema de herencia de tokens asegura que tus tokens AFJP sean transferidos de forma segura a tus beneficiarios en caso de eventos inesperados, siguiendo protocolos de seguridad blockchain.',
    'inheritance.step1': 'Designa a tus beneficiarios y asigna porcentajes de tu portafolio de tokens',
    'inheritance.step2': 'Presenta documentación legal y verificación de identidad para cada beneficiario',
    'inheritance.step3': 'El sistema crea un contrato inteligente seguro con tus instrucciones de herencia',
    'inheritance.step4': 'En caso de activación de herencia, los tokens se distribuyen automáticamente según tus deseos',
    'inheritance.modify-beneficiaries': 'Modificar Beneficiarios',
    'inheritance.add-documentation': 'Agregar Documentación',
    'inheritance.not-configured-note': 'Asegura el futuro de tu familia configurando tu plan de herencia de tokens',
    'inheritance.configure-beneficiaries': 'Configurar Beneficiarios',
    
    // Health Benefits Section
    'health.simulator-title': 'Simulador de Descuentos en Salud',
    'health.medicine-price': 'Precio del Medicamento (ARS)',
    'health.token-balance': 'Saldo de Tokens JUVENTUD',
    'health.more-tokens-desc': 'Más tokens proporcionan descuento adicional (hasta',
    'health.base-discount': 'Descuento Base',
    'health.additional-discount': 'Descuento Adicional',
    'health.total-discount': 'Descuento Total',
    'health.original-price': 'Precio Original',
    'health.applied-discount': 'Descuento Aplicado',
    'health.final-price': 'Precio Final',
    'health.simulator-note': 'Esta es una simulación. Los descuentos reales pueden variar según las alianzas con farmacias y disponibilidad.',
    
    // Pitch Section
    'pitch.title': 'Why AFJP Will Revolutionize Retirement',
    'pitch.subtitle': 'We are not just another retirement fund. We are the solution the world needs.',
    'pitch.point1.title': 'Unprecedented Efficiency and Transparency',
    'pitch.point1.description': 'We use blockchain technology to eliminate bureaucracy, opacity, and unnecessary costs. Every contribution, every investment, every transaction is immutable and auditable, maximizing returns for our affiliates and the company\'s profitability.',
    'pitch.point2.title': 'Real Wealth Generation',
    'pitch.point2.description': 'We invest in real, tokenized assets, primarily real estate, to protect capital from inflation and grow it robustly. Our affiliates not only accumulate funds but have the security that their money is working for them, not being eroded.',
    'pitch.point3.title': 'Purpose-Driven Business Model ($AFJP and $JUVENTUD)',
    'pitch.point3.description': 'Our tokenomics is a brilliant growth strategy. Affiliates burn $AFJP to obtain $JUVENTUD, which grants them access to preferential rents in our growing real estate portfolio. This not only drives demand for our main token but also guarantees occupancy of our real estate assets, optimizing our revenue and attracting new generations with a real, tangible housing solution.',
    'pitch.execution.title': 'Our Execution Plan and Team Strength',
    'pitch.execution.description': 'We know that a vision of this magnitude requires flawless execution. For that, we will seek your support.',
    
    // Transactions
    'transactions.deposit': 'Depósito',
    'transactions.purchase': 'Compra',
    'transactions.sale': 'Venta',
    'transactions.reward': 'Recompensa',
    'transactions.no-recent': 'No hay transacciones recientes',
    
    // News
    'news.new-property': 'Nueva Propiedad Agregada al Portafolio',
    'news.new-property-desc': 'Complejo de apartamentos de lujo en el centro ahora disponible para inversión',
    'news.token-high': 'Token AFJP Alcanza Nuevo Máximo',
    'news.token-high-desc': 'El valor del token aumenta 15% este mes debido al fuerte rendimiento del portafolio',
    'news.health-benefits': 'Nuevos Beneficios de Salud Disponibles',
    'news.health-benefits-desc': 'Seguro de salud premium ahora disponible para todos los poseedores de tokens JUVENTUD',
    'news.no-recent': 'No hay noticias recientes',
    
    // Real Estate
    'realestate.title': 'Portafolio Inmobiliario',
    'realestate.description': 'Descubre nuestros proyectos inmobiliarios exclusivos disponibles para afiliados AFJP. Accede a propiedades con beneficios especiales y opciones de pago usando tus tokens.',
    'realestate.exclusive-benefits': 'Beneficios Exclusivos para Afiliados',
    'realestate.as-affiliate': 'Como afiliado AFJP, tienes acceso a beneficios especiales en nuestro portafolio inmobiliario',
    'realestate.exclusive': 'Exclusivo',
    'realestate.discount-25': '25% de Descuento',
    'realestate.discount-desc': 'Descuento especial en tarifas de alquiler para todos los afiliados AFJP',
    'realestate.special-financing': 'Financiamiento Especial',
    'realestate.financing-desc': 'Opciones de pago flexibles y términos preferenciales',
    'realestate.torres-puerto': 'Torres del Puerto',
    'realestate.torres-location': 'Puerto Madero, Buenos Aires',
    'realestate.apartments': 'Departamentos',
    'realestate.under-construction': 'En Construcción',
    'realestate.completed': 'Completado',
    'realestate.pre-sale': 'Pre-venta',
    'realestate.express-interest': 'Expresar Interés',
    'realestate.interest-form-desc': 'Deja tu información y te contactaremos con ofertas personalizadas.',
    
    // Form translations
    'form.name-required': 'El nombre es requerido',
    'form.invalid-email': 'Por favor ingresa un email válido',
    'form.invalid-phone': 'Por favor ingresa un teléfono válido',
    'form.select-interest': 'Por favor selecciona tu interés',
    'form.sent-title': '¡Formulario Enviado!',
    'form.sent-desc': 'Te contactaremos pronto con más información.',
    'form.full-name': 'Nombre Completo',
    'form.your-name': 'Tu Nombre',
    'form.email': 'Email',
    'form.phone': 'Teléfono',
    'form.interested-in': 'Estoy interesado en:',
    'form.rent-property': 'Alquilar una propiedad',
    'form.buy-property': 'Comprar una propiedad',
    'form.receive-info': 'Recibir información solamente',
    'form.additional-message': 'Mensaje Adicional (Opcional)',
    'form.additional-placeholder': 'Cuéntanos sobre tus necesidades específicas o preferencias...',
    'form.send-request': 'Enviar Solicitud',
    
    // Footer
    'footer.links': 'Enlaces Rápidos',
    'footer.resources': 'Recursos',
    'footer.official-polkadot': 'Polkadot Oficial',
    'footer.documentation': 'Documentación',
    'footer.explorer': 'Explorador de Bloques',
    'footer.rights': '© 2024 AFJP Cripto. Todos los derechos reservados.',
    
    // Why Polkadot Section
    'why-polkadot.title': 'Por qué elegir',
    'why-polkadot.subtitle': 'Descubre las ventajas de construir nuestro fondo de jubilación en el ecosistema blockchain más avanzado',
    'why-polkadot.interoperability': 'Interoperabilidad',
    'why-polkadot.interoperability-desc': 'Conecta con múltiples blockchains y sistemas financieros sin problemas',
    'why-polkadot.scalability': 'Escalabilidad',
    'why-polkadot.scalability-desc': 'Procesa miles de transacciones por segundo con tarifas mínimas',
    'why-polkadot.security': 'Seguridad',
    'why-polkadot.security-desc': 'Modelo de seguridad compartida protege todas las parachains conectadas',
    'why-polkadot.governance': 'Gobernanza',
    'why-polkadot.governance-desc': 'Sistema de gobernanza democrática para actualizaciones y decisiones del protocolo',
    
    // Advantages Section
    'advantages.title': 'Ventajas Competitivas',
    'advantages.subtitle': 'Por qué AFJP es la mejor opción para tu jubilación basada en blockchain',
    'advantages.dedicated-parachain': 'Parachain Dedicada',
    'advantages.dedicated-desc': 'Nuestra propia blockchain optimizada para operaciones de fondos de jubilación',
    'advantages.tokenized-assets': 'Activos Reales Tokenizados',
    'advantages.tokenized-desc': 'Bienes raíces y activos tradicionales representados como tokens blockchain',
    'advantages.institutional-security': 'Seguridad Institucional',
    'advantages.institutional-desc': 'Seguridad a nivel bancario con transparencia blockchain',
    'advantages.continuous-evolution': 'Evolución Continua',
    'advantages.continuous-desc': 'Actualizaciones y mejoras regulares sin interrupción del servicio',
    'advantages.defi-ecosystem': 'Ecosistema DeFi',
    'advantages.defi-desc': 'Acceso a herramientas de finanzas descentralizadas y oportunidades de rendimiento',
    'advantages.long-term-resistance': 'Resistencia a Largo Plazo',
    'advantages.long-term-desc': 'Construido para durar décadas con estándares tecnológicos en evolución',
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('es');

  const t = (key: string): string => {
    const currentTranslations = translations[language as keyof typeof translations] || translations.es;
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
