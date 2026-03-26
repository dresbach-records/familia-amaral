"use client";

import { PageWrapper } from '@/components/PageWrapper';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Users, 
  ScrollText, 
  MapPin, 
  Calendar, 
  Award, 
  LogOut,
  ChevronRight,
  Bell
} from 'lucide-react';
import Link from 'next/link';

export default function PainelPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#f8f6f0] pb-24">
        {/* Dashboard Header */}
        <section className="bg-primary pt-24 pb-32 text-center border-b-[6px] border-accent relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-2 rounded-full mb-6 text-accent animate-pulse">
              <Award className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Descendente Autenticado</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4 uppercase tracking-widest">
              Área do Descendente
            </h1>
            <p className="text-white/70 italic max-w-xl mx-auto text-lg">
              Bem-vindo ao centro administrativo da sua história familiar.
            </p>
          </div>
        </section>

        {/* Dashboard Content */}
        <div className="container mx-auto px-4 -mt-16 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* User Profile Card */}
            <Card className="lg:col-span-1 border-2 border-accent/20 shadow-xl rounded-[3rem] overflow-hidden bg-white">
              <div className="h-2 bg-accent w-full"></div>
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-accent/20">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-xl font-headline font-bold text-primary mb-1 uppercase">Membro Honorário</h2>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6 font-bold">Linhagem Amaral</p>
                
                <div className="space-y-4 text-left border-t border-muted pt-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm text-primary/80">Inscrito em Março de 2024</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-sm text-primary/80">Acesso Global</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-10 border-primary/20 text-primary hover:bg-red-50 hover:text-red-600 hover:border-red-200 rounded-full py-6 transition-all font-bold uppercase tracking-widest text-[10px]" asChild>
                  <Link href="/login"><LogOut className="w-4 h-4 mr-2" /> Encerrar Sessão</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Main Dashboard Actions */}
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Action Cards */}
                <Link href="/arvore" className="group">
                  <Card className="h-full border-none shadow-xl bg-white hover:bg-primary transition-all duration-500 rounded-[2.5rem] overflow-hidden">
                    <CardContent className="p-8 flex items-center gap-6">
                      <div className="p-4 bg-primary/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                        <Shield className="w-8 h-8 text-primary group-hover:text-accent" />
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-primary group-hover:text-white transition-colors">Árvore Completa</h3>
                        <p className="text-xs text-muted-foreground group-hover:text-white/60 transition-colors">Acesse toda a linhagem</p>
                      </div>
                      <ChevronRight className="ml-auto text-accent opacity-0 group-hover:opacity-100 transition-all" />
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/historia" className="group">
                  <Card className="h-full border-none shadow-xl bg-white hover:bg-primary transition-all duration-500 rounded-[2.5rem] overflow-hidden">
                    <CardContent className="p-8 flex items-center gap-6">
                      <div className="p-4 bg-primary/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                        <ScrollText className="w-8 h-8 text-primary group-hover:text-accent" />
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-primary group-hover:text-white transition-colors">Anais de Honra</h3>
                        <p className="text-xs text-muted-foreground group-hover:text-white/60 transition-colors">Documentos e registros</p>
                      </div>
                      <ChevronRight className="ml-auto text-accent opacity-0 group-hover:opacity-100 transition-all" />
                    </CardContent>
                  </Card>
                </Link>

              </div>

              {/* Announcements Section */}
              <Card className="border-none shadow-xl rounded-[3rem] bg-white overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-primary/5 p-8">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-primary font-headline text-lg flex items-center gap-3">
                      <Bell className="w-5 h-5 text-accent" /> Comunicados do Conselho
                    </CardTitle>
                    <span className="text-[10px] bg-accent text-white px-3 py-1 rounded-full font-bold uppercase tracking-widest">3 Novos</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="border-b border-muted pb-4">
                    <h4 className="font-bold text-primary text-sm mb-1">Atualização da Árvore (Ramo Beira Alta)</h4>
                    <p className="text-xs text-muted-foreground">Novas conexões foram validadas pelo historiador da família para o período de 1450-1510.</p>
                  </div>
                  <div className="border-b border-muted pb-4">
                    <h4 className="font-bold text-primary text-sm mb-1">Encontro Anual de Descendentes</h4>
                    <p className="text-xs text-muted-foreground">Abertas as sugestões para o local do próximo conclave da linhagem.</p>
                  </div>
                  <div className="pb-4">
                    <h4 className="font-bold text-primary text-sm mb-1">Preservação Digital</h4>
                    <p className="text-xs text-muted-foreground">O processo de digitalização de certidões antigas avançou 15% este mês.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
