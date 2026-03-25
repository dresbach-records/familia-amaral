import Link from 'next/link';
import { HeraldryLogo } from '@/components/HeraldryLogo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-beira');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary shadow-2xl">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-20 mix-blend-multiply scale-105"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/80 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <div className="mb-10 animate-in fade-in zoom-in duration-1000">
            <HeraldryLogo className="w-48 h-60 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-white mb-6 tracking-widest animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            Família Amaral
          </h1>
          <div className="w-32 h-1 bg-accent mb-8 animate-in fade-in scale-x-100 duration-1000 delay-300"></div>
          <p className="text-2xl md:text-3xl font-headline italic text-accent mb-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400">
            Honra, Tradição e Nobreza desde o Século XII
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <Link href="/cadastro">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none px-10 py-8 text-xl font-bold uppercase tracking-[0.2em] shadow-lg shadow-black/20">
                Unir-se à Linhagem
              </Button>
            </Link>
            <Link href="/origem">
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-primary px-10 py-8 text-xl font-bold uppercase tracking-[0.2em]">
                A Origem Nobre
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-background relative border-y border-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-headline font-bold text-primary mb-8 tracking-wider">Uma Identidade Secular</h2>
            <div className="w-24 h-0.5 bg-accent mx-auto mb-12"></div>
            <p className="text-2xl text-muted-foreground leading-relaxed font-body italic">
              "O sangue Amaral carrega séculos de história, enraizada na bravura da Beira Alta. 
              Somos guardiões de um legado que atravessa oceanos e mantém viva a chama da nossa ancestralidade."
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid with more noble styling */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Preservação Histórica", 
                desc: "Arquivamos cada documento e pergaminho que narra nossa jornada desde a fundação do Reino.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              },
              { 
                title: "Unidade da Realeza", 
                desc: "Fortalecemos os laços entre os ramos da família, reunindo nobres descendentes em todo o mundo.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              { 
                title: "Genealogia Áurea", 
                desc: "Mapeamos a linhagem real com precisão histórica, garantindo o registro de cada herdeiro.",
                icon: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              }
            ].map((f, i) => (
              <Card key={i} className="bg-white border-none shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="pt-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-8 border border-accent/20">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={f.icon} /></svg>
                  </div>
                  <h3 className="text-2xl font-headline font-bold mb-6 text-primary tracking-wide uppercase">{f.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
