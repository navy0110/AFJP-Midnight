
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Building, Coins, FileText, Clock } from 'lucide-react';
import HealthDiscountSimulator from './HealthDiscountSimulator';
import TokenInheritanceInfo from './TokenInheritanceInfo';
import QRPaymentBenefit from './QRPaymentBenefit';

const BenefitsSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Beneficios Exclusivos</h2>
        <p className="text-foreground/70">
          Como afiliado de AFJP Cripto, accedes a múltiples beneficios adicionales a tu jubilación.
        </p>
      </div>
      
      {/* Benefits Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Real Estate Benefits */}
        <Card className="border-border/50 glass-card">
          <CardHeader className="pb-3">
            <div className="h-12 w-12 rounded-full bg-polkadot-gradient flex items-center justify-center mb-2">
              <Building className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl">Inmobiliarios</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Badge className="mt-1 bg-polkadot-gradient">25%</Badge>
                <span>Descuento en alquileres de propiedades del fondo</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge className="mt-1 bg-polkadot-gradient">Prioridad</Badge>
                <span>Acceso anticipado a nuevos desarrollos inmobiliarios</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge className="mt-1 bg-polkadot-gradient">Financiación</Badge>
                <span>Planes de pago especiales para compra de propiedades</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" className="w-full">Ver Propiedades</Button>
          </CardFooter>
        </Card>
        
        {/* Health Benefits */}
        <Card className="border-border/50 glass-card">
          <CardHeader className="pb-3">
            <div className="h-12 w-12 rounded-full bg-polkadot-gradient flex items-center justify-center mb-2">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl">Salud</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Badge className="mt-1 bg-polkadot-gradient">30%</Badge>
                <span>Descuento en medicamentos en farmacias afiliadas</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge className="mt-1 bg-polkadot-gradient">20%</Badge>
                <span>Descuento en consultas médicas con especialistas</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge className="mt-1 bg-polkadot-gradient">Gratis</Badge>
                <span>Chequeo médico anual preventivo</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" className="w-full">Ver Farmacias</Button>
          </CardFooter>
        </Card>
        
        {/* Inheritance Benefits */}
        <Card className="border-border/50 glass-card">
          <CardHeader className="pb-3">
            <div className="h-12 w-12 rounded-full bg-polkadot-gradient flex items-center justify-center mb-2">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl">Herencia</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Badge className="mt-1 bg-polkadot-gradient">100%</Badge>
                <span>Transferencia de tokens a beneficiarios designados</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge className="mt-1 bg-polkadot-gradient">Simple</Badge>
                <span>Proceso automatizado mediante smart contracts</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge className="mt-1 bg-polkadot-gradient">Seguro</Badge>
                <span>Sin trámites legales tradicionales</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" className="w-full">Designar Beneficiarios</Button>
          </CardFooter>
        </Card>
        
        {/* Token Benefits */}
        <Card className="border-border/50 glass-card">
          <CardHeader className="pb-3">
            <div className="h-12 w-12 rounded-full bg-polkadot-gradient flex items-center justify-center mb-2">
              <Coins className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl">Tokens</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Badge className="mt-1 bg-polkadot-gradient">Dividendos</Badge>
                <span>Participación en ganancias del fondo</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge className="mt-1 bg-polkadot-gradient">Liquidez</Badge>
                <span>Compra y venta en el submercado interno</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge className="mt-1 bg-polkadot-gradient">Staking</Badge>
                <span>Recompensas adicionales por mantener tokens</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" className="w-full">Ir al Mercado</Button>
          </CardFooter>
        </Card>
      </div>
      
      <Separator />
      
      {/* QR Payment Benefit */}
      <QRPaymentBenefit />
      
      <Separator />
      
      {/* Interactive sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Health Discount Simulator */}
        <HealthDiscountSimulator />
        
        {/* Token Inheritance Information */}
        <TokenInheritanceInfo />
      </div>
    </div>
  );
};

export default BenefitsSection;
