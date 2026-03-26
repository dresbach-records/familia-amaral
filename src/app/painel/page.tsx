
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
  FileText,
  PlayCircle,
  Trees,
  History,
  GitBranch
} from 'lucide-react';
import Link from 'next/link';

export default function PainelPage() {
  return (
    <DashboardWrapper>
      <div className="min-h-screen bg-[#f8f6f0] pb-24">
        {/* Dashboard Hero Section */}
        <section className="bg-primary pt-12 pb-24 text-center border-b-[6px] border-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10"><History className="w-32 h-32 text-white" /></div>
            <div className="absolute bottom-10 right-10"><Trees className="w-40 h-40 text-white" /></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-2 rounded-full mb-6 text-accent animate-pulse">
              <Award className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Descendente Autenticado</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4 uppercase tracking-widest">
              Gabinete da Linhagem
            </h1>
            <p className="text-white/70 italic max-w-xl mx-auto text-lg leading-relaxed">
              "Bem-vindo, nobre descendente. O passado e o futuro da nossa história convergem aqui."
            </p>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="container mx-auto px-4 -mt-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-2 border-accent/20 shadow-2xl rounded-[3rem] overflow-hidden bg-white">
                <div className="h-2 bg-accent w-full"></div>
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-primary/5 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-accent/10 relative">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border border-accent/20">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute bottom-1 right-1 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <Shield className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h2 className="text-xl font-headline font-bold text-primary mb-1 uppercase tracking-tight">Membro Vini</h2>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-8 font-bold">Linhagem Imperial</p>
                  
                  <div className="space-y-5 text-left border-t border-muted pt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center"><Calendar className="w-4 h-4 text-accent" /></div>
                      <div>
                         <span className="block text-[9px] uppercase font-bold text-muted-foreground tracking-widest">Acesso desde</span>
                         <span className="text-xs text-primary font-bold">Março, 2024</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center"><MapPin className="w-4 h-4 text-accent" /></div>
                      <div>
                         <span className="block text-[9px] uppercase font-bold text-muted-foreground tracking-widest">Origem Regional</span>
                         <span className="text-xs text-primary font-bold">Viseu, Beira Alta</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-10 border-primary/20 text-primary hover:bg-red-50 hover:text-red-600 hover:border-red-200 rounded-full py-7 transition-all font-bold uppercase tracking-widest text-[9px]" asChild>
                    <Link href="/login"><LogOut className="w-4 h-4 mr-2" /> Sair do Gabinete</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Research Progress Tool */}
              <Card className="border-none shadow-xl rounded-[3rem] bg-primary text-white p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <ScrollText className="w-20 h-20 rotate-12" />
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent" /> Objetivo de Pesquisa
                </h3>
                <div className="space-y-5 relative z-10">
                  <div className="flex justify-between text-[10px] uppercase font-bold text-white/60">
                    <span>Geração 14 (1560)</span>
                    <span className="text-accent">75%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-accent shadow-[0_0_10px_rgba(201,162,39,0.5)]"></div>
                  </div>
                  <p className="text-[10px] italic text-white/50 leading-relaxed">
                    Ajude-nos a completar o Ramo de Porto enviando novos documentos digitalizados.
                  </p>
                  <Button className="w-full bg-white/10 hover:bg-white/20 border-none rounded-full py-4 text-[9px] font-bold uppercase tracking-widest" asChild>
                    <Link href="/ajuda">Contribuir</Link>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* FamilySearch-style Quick Navigation */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Árvore", sub: "Explorar", icon: <GitBranch />, link: "/arvore" },
                  { title: "Registros", sub: "Documentos", icon: <Search />, link: "/registros" },
                  { title: "Estudar", sub: "Aprendizado", icon: <PlayCircle />, link: "/aprendizado" },
                  { title: "Ajuda", sub: "Suporte", icon: <Bell />, link: "/ajuda" }
                ].map((item, i) => (
                  <Link href={item.link} key={i} className="group h-full">
                    <Card className="h-full border-none shadow-xl bg-white hover:bg-primary transition-all duration-500 rounded-[2.5rem] overflow-hidden">
                      <CardContent className="p-8 flex flex-col items-center text-center">
                        <div className="p-4 bg-primary/5 rounded-2xl group-hover:bg-white/10 transition-colors mb-4">
                          <div className="text-primary group-hover:text-accent transition-colors">
                            {item.icon}
                          </div>
                        </div>
                        <h3 className="font-headline font-bold text-primary group-hover:text-white transition-colors text-sm">{item.title}</h3>
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground group-hover:text-white/60 transition-colors font-bold">{item.sub}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Central Information Hub */}
              <Card className="border-none shadow-2xl rounded-[3rem] bg-white overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-primary/5 p-8 flex flex-row items-center justify-between">
                  <CardTitle className="text-primary font-headline text-xl flex items-center gap-3">
                    <Bell className="w-6 h-6 text-accent" /> Anais Recentes da Linhagem
                  </CardTitle>
                  <Button variant="ghost" className="text-accent text-[10px] font-bold uppercase tracking-widest hidden md:flex" asChild>
                    <Link href="/registros">Ver Todas</Link>
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-muted">
                    {[
                      { 
                        title: "Novo Documento Identificado", 
                        desc: "Certidão de casamento de Gonçalo Amaral (1723) foi digitalizada e anexada ao Ramo de Viseu.", 
                        time: "Há 2 horas",
                        tag: "Novo Arquivo",
                        link: "/registros"
                      },
                      { 
                        title: "Sugestão de Parentesco", 
                        desc: "Baseado em sua localidade, você pode estar conectado ao ramo 'Amaral de Oliveira' do Sudeste.", 
                        time: "Há 1 dia",
                        tag: "Dica Genética",
                        link: "/arvore"
                      },
                      { 
                        title: "RootsTech 2025: Família Amaral", 
                        desc: "As inscrições para o Grande Conclave de Descendentes em Portugal estão oficialmente abertas.", 
                        time: "Há 3 dias",
                        tag: "Evento Real",
                        link: "/aprendizado"
                      },
                      { 
                        title: "Laboratório de IA", 
                        desc: "Nova ferramenta de restauração de fotos antigas está disponível para membros nível Imperial.", 
                        time: "Há 1 semana",
                        tag: "Inovação",
                        link: "/ajuda"
                      }
                    ].map((item, i) => (
                      <Link href={item.link} key={i} className="block group">
                        <div className="p-8 hover:bg-muted/30 transition-all cursor-pointer border-l-4 border-transparent hover:border-accent">
                          <div className="flex justify-between items-start mb-3">
                            <span className="text-[9px] bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-widest">{item.tag}</span>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase">{item.time}</span>
                          </div>
                          <h4 className="font-headline font-bold text-primary text-lg group-hover:text-accent transition-colors mb-2">{item.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed italic">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="p-8 bg-primary/5 text-center">
                    <Button variant="ghost" className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] hover:text-accent" asChild>
                      <Link href="/registros">Carregar mais atividades históricas</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Partners Banner */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/ajuda" className="group">
                  <Card className="h-full border-none shadow-xl rounded-[2.5rem] bg-gradient-to-br from-white to-muted p-8 flex items-center gap-6 group-hover:bg-accent group-hover:text-white transition-all">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-white/20"><Trees className="text-accent group-hover:text-white" /></div>
                    <div>
                        <h4 className="font-bold text-primary text-sm uppercase tracking-wider group-hover:text-white">Mapeamento de DNA</h4>
                        <p className="text-[10px] text-muted-foreground group-hover:text-white/80">Conecte seus resultados do MyHeritage ou Ancestry.</p>
                    </div>
                  </Card>
                </Link>
                <Link href="/registros" className="group">
                  <Card className="h-full border-none shadow-xl rounded-[2.5rem] bg-gradient-to-br from-white to-muted p-8 flex items-center gap-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-white/20"><Search className="text-accent group-hover:text-white" /></div>
                    <div>
                        <h4 className="font-bold text-primary text-sm uppercase tracking-wider group-hover:text-white">Busca em Registros</h4>
                        <p className="text-[10px] text-muted-foreground group-hover:text-white/80">Acesso direto ao banco de dados do FamilySearch.</p>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}
