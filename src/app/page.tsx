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
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-primary">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <HeraldryLogo className="w-32 h-40 filter drop-shadow-2xl" />
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-4 tracking-tight animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            Família Amaral
          </h1>
          <p className="text-xl md:text-2xl font-headline italic text-accent mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            Desde o século XII – tradição e continuidade
          </p>
          <div className="max-w-2xl text-white/80 text-lg leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400">
            Dedicados a preservar a memória e a herança dos nossos antepassados, conectando as gerações passadas, presentes e futuras através de nossa linhagem histórica.
          </div>
          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <Link href="/cadastro">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none px-8 py-6 text-lg font-bold">
                Unir-se à Linhagem
              </Button>
            </Link>
            <Link href="/origem">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-bold">
                Conhecer a Origem
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-headline font-bold text-primary mb-6">Uma Identidade Histórica</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              O nome Amaral carrega séculos de história, enraizada na região da Beira, em Portugal. 
              Este espaço serve como um ponto central para todos os descendentes que buscam suas raízes, 
              compartilhando o orgulho de pertencer a uma das linhagens mais tradicionais da lusofonia.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">Preservação Histórica</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Documentamos a jornada da família desde o século XII, mantendo viva a memória de cada geração.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">Unidade Familiar</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Conectamos parentes distantes e fortalecemos os laços que nos unem sob o mesmo sobrenome.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">Genealogia Ativa</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Uma árvore genealógica em constante crescimento, alimentada pela própria família.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}