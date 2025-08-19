import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import RealEstateCard from './RealEstateCard';
import RealEstateInterestForm from './RealEstateInterestForm';
import FutureProjectCard from './FutureProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';

const RealEstateProjects: React.FC = () => {
  const { t } = useLanguage();
  
  // Mock projects data
  const projects = [
    {
      id: 1,
      title: t('realestate.torres-puerto'),
      location: t('realestate.torres-location'),
      type: t('realestate.apartments'),
      status: t('realestate.under-construction'),
      completion: 'Dic 2023',
      available: true,
      discount: 25,
      rentalYield: 8.5,
      rentalPriceJuventud: 150,
      purchasePriceLadrillo: 250000,
      images: [
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
      ]
    },
    {
      id: 2,
      title: 'Residencial Bosque Alto',
      location: 'Tigre, Buenos Aires',
      type: 'Casas',
      status: t('realestate.completed'),
      completion: 'Finalizado',
      available: true,
      discount: 25,
      rentalYield: 7.2,
      rentalPriceJuventud: 200,
      purchasePriceLadrillo: 350000,
      images: [
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
        'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg'
      ]
    },
    {
      id: 3,
      title: 'Edificio Libertador',
      location: 'Palermo, Buenos Aires',
      type: 'Oficinas',
      status: t('realestate.pre-sale'),
      completion: 'Jun 2024',
      available: false,
      discount: 25,
      rentalYield: 9.0,
      rentalPriceJuventud: 300,
      purchasePriceLadrillo: 500000,
      images: [
        'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg',
        'https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg'
      ]
    },
  ];

  // Mock future projects data
  const futureProjects = [
    {
      id: 4,
      title: 'Complejo Residencial Verde',
      location: 'Nordelta, Buenos Aires',
      type: 'Departamentos Sustentables',
      status: 'Proyecto Futuro',
      startDate: 'Mar 2025',
      estimatedCompletion: 'Dic 2026',
      fundingGoal: 1500000,
      currentFunding: 450000,
      minInvestment: 5000,
      expectedReturn: 12.5,
      description: 'Complejo residencial eco-friendly con tecnología sustentable y espacios verdes.',
      images: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
        'https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg'
      ]
    },
    {
      id: 5,
      title: 'Centro Comercial Moderna',
      location: 'Rosario, Santa Fe',
      type: 'Espacio Comercial',
      status: 'Proyecto Futuro',
      startDate: 'Jun 2025',
      estimatedCompletion: 'Jun 2027',
      fundingGoal: 2200000,
      currentFunding: 220000,
      minInvestment: 10000,
      expectedReturn: 15.0,
      description: 'Centro comercial moderno con espacios para retail, oficinas y entretenimiento.',
      images: [
        'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg',
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg'
      ]
    },
    {
      id: 6,
      title: 'Residencias Senior Premium',
      location: 'Mendoza, Mendoza',
      type: 'Residencias Asistidas',
      status: 'Proyecto Futuro',
      startDate: 'Sep 2025',
      estimatedCompletion: 'Mar 2027',
      fundingGoal: 1800000,
      currentFunding: 180000,
      minInvestment: 7500,
      expectedReturn: 10.8,
      description: 'Complejo residencial especializado para adultos mayores con servicios médicos integrados.',
      images: [
        'https://images.pexels.com/photos/1396045/pexels-photo-1396045.jpeg',
        'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg'
      ]
    }
  ];
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">{t('realestate.title')}</h2>
        <p className="text-foreground/70">
          {t('realestate.description')}
        </p>
      </div>
      
      <Card className="border-border/50 glass-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{t('realestate.exclusive-benefits')}</CardTitle>
              <CardDescription>{t('realestate.as-affiliate')}</CardDescription>
            </div>
            <Badge className="bg-polkadot-gradient text-white">{t('realestate.exclusive')}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h3 className="font-bold text-lg mb-2">{t('realestate.discount-25')}</h3>
              <p className="text-foreground/70 text-sm">
                {t('realestate.discount-desc')}
              </p>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-200/20">
              <h3 className="font-bold text-lg mb-2">Pago con JUVENTUD</h3>
              <p className="text-foreground/70 text-sm">
                Alquila propiedades pagando directamente con tokens JUVENTUD
              </p>
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-200/20">
              <h3 className="font-bold text-lg mb-2">Compra con LADRILLO</h3>
              <p className="text-foreground/70 text-sm">
                Compra propiedades usando tokens LADRILLO para inversiones inmobiliarias
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h3 className="font-bold text-lg mb-2">{t('realestate.special-financing')}</h3>
              <p className="text-foreground/70 text-sm">
                {t('realestate.financing-desc')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Existing Projects Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Proyectos Disponibles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <RealEstateCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Future Projects Section */}
      <div className="space-y-6">
        <div className="border-t pt-8">
          <h3 className="text-2xl font-bold mb-2">Futuros Proyectos</h3>
          <p className="text-foreground/70 mb-6">
            Invierte con tokens LADRILLO en proyectos inmobiliarios futuros y apoya su desarrollo desde el inicio
          </p>
          
          <Card className="border-border/50 glass-card mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-orange-500 mr-2">🏗️</span>
                Inversión en Proyectos Futuros
              </CardTitle>
              <CardDescription>
                Usa tus tokens LADRILLO para financiar y apoyar el desarrollo de nuevos proyectos inmobiliarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-200/20">
                  <h4 className="font-bold text-lg mb-2">🎯 Financiamiento Directo</h4>
                  <p className="text-foreground/70 text-sm">
                    Contribuye directamente al desarrollo de proyectos usando tokens LADRILLO
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-200/20">
                  <h4 className="font-bold text-lg mb-2">📈 Retornos Atractivos</h4>
                  <p className="text-foreground/70 text-sm">
                    Obtén retornos estimados entre 10% y 15% anual al completarse los proyectos
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-200/20">
                  <h4 className="font-bold text-lg mb-2">🏠 Participación Temprana</h4>
                  <p className="text-foreground/70 text-sm">
                    Accede a oportunidades de inversión antes que el mercado general
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureProjects.map((project) => (
              <FutureProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
      
      <Card className="border-border/50 glass-card mt-8">
        <CardHeader>
          <CardTitle>{t('realestate.express-interest')}</CardTitle>
          <CardDescription>
            {t('realestate.interest-form-desc')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RealEstateInterestForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default RealEstateProjects;
