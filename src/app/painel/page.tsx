
"use client";

import { DashboardWrapper } from '@/components/DashboardWrapper';
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
  Bell,
  Search,
  FileText
} from 'lucide-react';
import Link from 'next/link';

export default function PainelPage() {
  return (
    <DashboardWrapper>
      <div className="min-h-screen bg-[#f8f6f0] pb-24">
        {/* Dashboard Hero Section */}
        <section className="bg-primary pt-12 pb-24 text-center border-b-[6px] border-accent relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-2 rounded-full mb-6 text-accent animate-pulse">
              <Award className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Descendente Autenticado</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4 uppercase tracking-widest">
              Gabinete da Linhagem
            </h1>
            <p className="text-white/70 italic max-w-xl mx-auto text-lg leading-relaxed">
              "Bem-vindo, nobre descendente. Aqui sua história é preservada com honra."
            </p>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="container mx-auto px-4 -mt-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar: Profile Summary */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-2 border-accent/20 shadow-2xl rounded-[3rem] overflow-hidden bg-white">
                <div className="h-2 bg-accent w-full"></div>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-accent/20 relative">
                    <Users className="w-8 h-8 text-primary" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center border-2 border-white">
                      <Shield className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h2 className="text-lg font-headline font-bold text-primary mb-1 uppercase">Membro de Honra</h2>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-6 font-bold">Linhagem Amaral</p>
                  
                  <div className="space-y-4 text-left border-t border-muted pt-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-xs text-primary/80">Entrada: Março de 2024</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-xs text-primary/80">Origem: Beira Alta</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-8 border-primary/20 text-primary hover:bg-red-50 hover:text-red-600 hover:border-red-200 rounded-full py-5 transition-all font-bold uppercase tracking-widest text-[9px]" asChild>
                    <Link href="/login"><LogOut className="w-4 h-4 mr-2" /> Sair do Arquivo</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Research Progress Tool */}
              <Card className="border-none shadow-xl rounded-[2.5rem] bg-primary text-white p-8">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent" /> Meta de Pesquisa
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-[10px] uppercase font-bold text-white/60">
                    <span>Geração 14 (1560)</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-accent"></div>
                  </div>
                  <p className="text-[10px] italic text-white/50 leading-relaxed">
                    Ajude-nos a preencher as lacunas do ramo de Viseu enviando suas certidões.
                  </p>
                </div>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* Quick Action Navigation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/arvore" className="group">
                  <Card className="h-full border-none shadow-xl bg-white hover:bg-primary transition-all duration-500 rounded-[2.5rem] overflow-hidden">
                    <CardContent className="p-8 flex items-center gap-6">
                      <div className="p-4 bg-primary/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                        <Users className="w-8 h-8 text-primary group-hover:text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-headline font-bold text-primary group-hover:text-white transition-colors">Árvore</h3>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-white/60 transition-colors">Explorar Linhagem</p>
                      </div>
                      <ChevronRight className="text-accent opacity-0 group-hover:opacity-100 transition-all" />
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/historia" className="group">
                  <Card className="h-full border-none shadow-xl bg-white hover:bg-primary transition-all duration-500 rounded-[2.5rem] overflow-hidden">
                    <CardContent className="p-8 flex items-center gap-6">
                      <div className="p-4 bg-primary/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                        <ScrollText className="w-8 h-8 text-primary group-hover:text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-headline font-bold text-primary group-hover:text-white transition-colors">Crônicas</h3>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-white/60 transition-colors">Ler Anais</p>
                      </div>
                      <ChevronRight className="text-accent opacity-0 group-hover:opacity-100 transition-all" />
                    </CardContent>
                  </Card>
                </Link>

                <Link href="#" className="group">
                  <Card className="h-full border-none shadow-xl bg-white hover:bg-primary transition-all duration-500 rounded-[2.5rem] overflow-hidden">
                    <CardContent className="p-8 flex items-center gap-6">
                      <div className="p-4 bg-primary/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                        <Search className="w-8 h-8 text-primary group-hover:text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-headline font-bold text-primary group-hover:text-white transition-colors">Busca</h3>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-white/60 transition-colors">Localizar Membro</p>
                      </div>
                      <ChevronRight className="text-accent opacity-0 group-hover:opacity-100 transition-all" />
                    </CardContent>
                  </Card>
                </Link>
              </div>

              {/* Feed/Announcements - FamilySearch style */}
              <Card className="border-none shadow-xl rounded-[3rem] bg-white overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-primary/5 p-8">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-primary font-headline text-lg flex items-center gap-3">
                      <Bell className="w-5 h-5 text-accent" /> Novidades da Linhagem
                    </CardTitle>
                    <span className="text-[10px] bg-accent text-white px-3 py-1 rounded-full font-bold uppercase tracking-widest">Atividade Recente</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-muted">
                    {[
                      { 
                        title: "Novo Documento Identificado", 
                        desc: "Certidão de casamento de Gonçalo Amaral (1723) foi digitalizada e anexada ao Ramo Porto.", 
                        time: "Há 2 horas",
                        type: "DOC"
                      },
                      { 
                        title: "Sugestão de Parentesco", 
                        desc: "Baseado em sua localidade, você pode estar conectado ao ramo 'Amaral de Oliveira' do Rio de Janeiro.", 
                        time: "Há 1 dia",
                        type: "HINT"
                      },
                      { 
                        title: "Encontro Mundial de Descendentes", 
                        desc: "As inscrições para o Grande Conclave em Viseu (2025) serão abertas no próximo mês.", 
                        time: "Há 3 dias",
                        type: "EVENT"
                      }
                    ].map((item, i) => (
                      <div key={i} className="p-8 hover:bg-muted/30 transition-colors group cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-primary text-sm group-hover:text-accent transition-colors">{item.title}</h4>
                          <span className="text-[9px] font-bold text-muted-foreground uppercase">{item.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 bg-primary/5 text-center">
                    <Button variant="ghost" className="text-primary text-[10px] font-bold uppercase tracking-widest hover:text-accent">
                      Ver todo o histórico de atividades
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}
