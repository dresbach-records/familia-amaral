
"use client";

import { DashboardWrapper } from '@/components/DashboardWrapper';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, FileText, Landmark, MapPin, Filter, Database } from 'lucide-react';

export default function RegistrosPage() {
  return (
    <DashboardWrapper>
      <div className="min-h-screen bg-[#f8f6f0] pb-24">
        <section className="bg-primary py-16 text-center border-b-[6px] border-accent relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4 uppercase tracking-widest">
              Pesquisar Registros
            </h1>
            <p className="text-white/70 italic max-w-xl mx-auto text-lg leading-relaxed">
              Explore o catálogo de documentos históricos da Família Amaral em todo o mundo.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 -mt-8 relative z-20">
          <Card className="border-none shadow-2xl rounded-[3rem] bg-white overflow-hidden mb-12">
            <CardContent className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Nome do Antepassado</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                    <input className="w-full bg-muted/40 border-none rounded-2xl py-4 pl-12 text-sm focus:ring-2 focus:ring-accent" placeholder="Ex: Gonçalo Amaral" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Localização</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                    <input className="w-full bg-muted/40 border-none rounded-2xl py-4 pl-12 text-sm focus:ring-2 focus:ring-accent" placeholder="Cidade ou País" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-[52px] rounded-2xl uppercase tracking-widest text-xs">
                    Iniciar Busca no Arquivo
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { icon: <Landmark />, title: "Registros Civis", count: "45.000+" },
                  { icon: <FileText />, title: "Paroquiais", count: "12.000+" },
                  { icon: <Database />, title: "Genealogias", count: "350" },
                  { icon: <Filter />, title: "Recenseamentos", count: "5.000+" },
                ].map((item, i) => (
                  <div key={i} className="bg-muted/30 p-6 rounded-[2rem] border border-primary/5 hover:border-accent/30 transition-all cursor-pointer group">
                    <div className="text-accent mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="font-bold text-primary text-sm mb-1">{item.title}</h3>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold">{item.count} Documentos</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-xl rounded-[3rem] bg-white p-10">
              <h2 className="text-xl font-headline font-bold text-primary mb-6 flex items-center gap-3">
                <FileText className="text-accent" /> Últimas Digitalizações
              </h2>
              <div className="space-y-4">
                {[
                  "Batismo de Manuel Amaral - Viseu (1842)",
                  "Casamento Real de Beatriz Amaral - Porto (1788)",
                  "Título de Propriedade - Beira Alta (1650)",
                  "Certidão de Óbito - Rio de Janeiro (1902)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border-b border-muted hover:bg-muted/20 transition-colors rounded-xl group">
                    <span className="text-xs text-primary/80 font-medium">{item}</span>
                    <Button variant="ghost" size="sm" className="text-accent text-[9px] font-bold uppercase tracking-widest hover:bg-accent/10">Ver PDF</Button>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-none shadow-xl rounded-[3rem] bg-primary text-white p-10 flex flex-col justify-center items-center text-center">
              <Database className="w-12 h-12 text-accent mb-6" />
              <h2 className="text-2xl font-headline font-bold mb-4">Catálogo Completo</h2>
              <p className="text-white/60 text-sm mb-8 leading-relaxed italic">
                Acesso à base de dados centralizada que reúne informações de museus, arquivos nacionais e coleções privadas dos Amaral.
              </p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white rounded-full px-10 py-6 font-bold uppercase tracking-widest text-[10px]">
                Explorar Catálogo
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}
