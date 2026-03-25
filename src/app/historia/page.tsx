
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin, Clock, Grape, Landmark, Shield, Ship, Users, Trees } from 'lucide-react';

export default function HistoriaPage() {
  const vineyardImg = PlaceHolderImages.find(img => img.id === 'vineyard-nobility');

  const timelineEvents = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "O Berço na Beira",
      date: "Séc. XII - XIII",
      content: "A família Amaral surge no coração de Portugal, na região da Beira, durante a formação do Reino e a época da Reconquista cristã."
    },
    {
      icon: <Grape className="w-6 h-6" />,
      title: "O Significado do Nome",
      date: "Etimologia",
      content: "Derivado de 'Amara' (tipo de uva) e o sufixo '-al' (abundância). Amaral significa 'Lugar de vinhas' ou 'Terra de produção de uvas'."
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Fidalguia Rural",
      date: "Status Social",
      content: "Os primeiros Amaral eram grandes proprietários de terras e membros da nobreza rural (fidalguia). Embora não fossem realeza, possuíam prestígio e influência regional absoluta."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Guardiões do Solo",
      date: "Idade Média",
      content: "Tiveram papel crucial na ocupação de terras e manutenção da estabilidade econômica através da agricultura, consolidando seu status social."
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "A Travessia do Atlântico",
      date: "Período Colonial",
      content: "Chegada ao Brasil como administradores, militares e agricultores, espalhando a linhagem pelo Sudeste, Nordeste e Sul do país."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Legado Global",
      date: "Hoje",
      content: "Atualmente, o sobrenome representa várias ramificações independentes, unidas por um passado comum de ligação com a terra e estabilidade rural."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {vineyardImg && (
            <Image
              src={vineyardImg.imageUrl}
              alt="Vinhedos Históricos"
              fill
              className="object-cover"
              data-ai-hint={vineyardImg.imageHint}
            />
          )}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6 tracking-tighter">A Saga da Família Amaral</h1>
          <p className="text-accent font-headline italic text-xl max-w-2xl mx-auto">
            Uma linhagem forjada na terra e selada pela história.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-20">
            
            {/* Introductory Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-accent shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-primary font-headline flex items-center gap-3">
                    <Trees className="text-accent" /> Essência Histórica
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  A história dos Amaral não é sobre coroas, mas sobre o **domínio da terra**. Como nobreza rural, sua força residia na produção e na fidelidade às suas raízes na Beira Alta.
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-primary font-headline flex items-center gap-3">
                    <Shield className="text-accent" /> Pilares da Estabilidade
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  Ligação com a terra, produção vinícola e prestígio fidalgo definem o que é ser um Amaral através dos séculos.
                </CardContent>
              </Card>
            </div>

            {/* Timeline View */}
            <div className="relative border-l-2 border-accent/30 pl-8 ml-4 md:ml-0 space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-0 w-12 h-12 bg-primary rounded-full border-4 border-background flex items-center justify-center text-accent shadow-md">
                    {event.icon}
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-xl border border-muted hover:border-accent/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-headline font-bold text-primary leading-none">{event.title}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        {event.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {event.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Final Conclusion */}
            <div className="bg-primary text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden text-center border-t-8 border-accent">
              <div className="relative z-10">
                <h2 className="text-3xl font-headline font-bold mb-6">Um Nome de Prestígio</h2>
                <p className="text-white/80 text-xl italic max-w-2xl mx-auto mb-8 leading-relaxed">
                  "Hoje, ser Amaral é carregar a marca da resiliência rural e da estabilidade que ajudou a construir nações, de Portugal ao imenso Brasil."
                </p>
                <div className="w-16 h-1 bg-accent mx-auto"></div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent opacity-10 rounded-tr-full"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-muted/30 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
            Compilação Historiográfica Baseada em Registros Reais e Contexto Medieval
          </p>
        </div>
      </section>
    </div>
  );
}
