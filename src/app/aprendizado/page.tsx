
"use client";

import { DashboardWrapper } from '@/components/DashboardWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, PlayCircle, BookOpen, Scroll, Award, Trees } from 'lucide-react';

export default function AprendizadoPage() {
  return (
    <DashboardWrapper>
      <div className="min-h-screen bg-[#f8f6f0] pb-24">
        <section className="bg-primary py-24 text-center border-b-[6px] border-accent relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4 uppercase tracking-widest">
              Centro de Aprendizado
            </h1>
            <p className="text-accent font-headline italic text-xl max-w-2xl mx-auto">
              "O conhecimento da linhagem é a chave para a perpetuidade da honra."
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 -mt-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                <PlayCircle className="text-accent" /> Cursos em Destaque
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Genealogia para Iniciantes", level: "Iniciante", dur: "2h" },
                  { title: "Heráldica Portuguesa", level: "Intermediário", dur: "4h" },
                  { title: "Arquivos Paroquiais da Beira", level: "Avançado", dur: "6h" },
                  { title: "DNA e Linhagem Amaral", level: "Iniciante", dur: "3h" }
                ].map((course, i) => (
                  <Card key={i} className="border-none shadow-xl rounded-[2.5rem] overflow-hidden group hover:bg-primary transition-all duration-500">
                    <CardContent className="p-0">
                      <div className="h-32 bg-muted flex items-center justify-center group-hover:bg-white/10">
                        <GraduationCap className="w-12 h-12 text-primary group-hover:text-accent" />
                      </div>
                      <div className="p-8">
                        <span className="text-[9px] font-bold text-accent uppercase tracking-widest">{course.level} • {course.dur}</span>
                        <h3 className="text-lg font-headline font-bold text-primary group-hover:text-white mt-2">{course.title}</h3>
                        <Button className="w-full mt-6 bg-primary group-hover:bg-accent text-white rounded-full font-bold uppercase tracking-widest text-[9px]">
                          Iniciar Curso
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                <Scroll className="text-accent" /> Wiki de Pesquisa
              </h2>
              <Card className="border-none shadow-xl rounded-[3rem] bg-white p-8">
                <div className="space-y-6">
                  {[
                    "Significado do Sobrenome",
                    "Principais Troncos em Viseu",
                    "Migração para o Brasil",
                    "Brasões de Armas Variantes",
                    "Inventários e Testamentos"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer border-b border-muted pb-4 last:border-0">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm font-medium text-primary/80 group-hover:text-accent transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-8 border-primary/20 text-primary hover:bg-primary hover:text-white rounded-full py-6 font-bold uppercase tracking-widest text-[9px]">
                  Ver Todos os Artigos
                </Button>
              </Card>

              <Card className="border-none shadow-xl rounded-[3rem] bg-accent text-white p-10">
                <Award className="w-10 h-10 mb-6" />
                <h3 className="text-xl font-headline font-bold mb-4">Certificação de Historiador</h3>
                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  Complete os cursos avançados e torne-se um custódio oficial da memória Amaral.
                </p>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mb-4">
                  <div className="w-1/3 h-full bg-white"></div>
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest">35% Concluído</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}
