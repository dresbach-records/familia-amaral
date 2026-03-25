import Image from 'next/image';
import { generateHistoricalContext } from '@/ai/flows/generate-historical-context-flow';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default async function OrigemPage() {
  const historicalText = await generateHistoricalContext({});
  const manuscriptImg = PlaceHolderImages.find(img => img.id === 'ancient-manuscript');
  const beiraImg = PlaceHolderImages.find(img => img.id === 'hero-beira');

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-primary py-24 relative overflow-hidden">
        {beiraImg && (
          <Image
            src={beiraImg.imageUrl}
            alt="Beira Portugal"
            fill
            className="object-cover opacity-20 pointer-events-none"
            data-ai-hint={beiraImg.imageHint}
          />
        )}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white text-center mb-6">As Raízes de Amaral</h1>
          <p className="text-accent text-center font-headline italic text-lg max-w-2xl mx-auto">
            Uma jornada que se inicia nas terras da Beira, no coração de Portugal, em tempos de reconquista e fundação.
          </p>
        </div>
      </section>

      {/* Origin Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">O Significado do Nome</h2>
                <div className="w-16 h-1 bg-accent mb-6"></div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  O sobrenome Amaral tem origem toponímica, derivado de "Amaral", localidade no concelho de Viseu. 
                  Etimologicamente, remete a locais onde abundam os amarais (espécie de arbusto ou videira). 
                  Historicamente, os primeiros registros da família datam do século XII, associados à pequena nobreza rural da época.
                </p>
              </div>
              
              <div className="bg-muted p-8 rounded-lg border-l-4 border-accent">
                <h3 className="font-headline font-bold text-primary mb-2">Geografia Sagrada</h3>
                <p className="text-sm italic text-muted-foreground">
                  "A Beira, terra de granito e coragem, foi o berço onde o nome Amaral se forjou entre castelos e oliveiras."
                </p>
              </div>
            </div>

            <div className="relative aspect-square">
              {manuscriptImg && (
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src={manuscriptImg.imageUrl}
                    alt={manuscriptImg.description}
                    fill
                    className="object-cover"
                    data-ai-hint={manuscriptImg.imageHint}
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                </div>
              )}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Context Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary p-8 text-white">
                <h2 className="text-2xl font-headline font-bold mb-2">Contexto Histórico: Século XII</h2>
                <p className="text-xs uppercase tracking-widest text-accent font-semibold">Perspectiva Historiográfica Especializada</p>
              </div>
              <div className="p-10 prose prose-primary max-w-none">
                <div className="text-lg text-primary/80 leading-relaxed whitespace-pre-wrap font-body italic border-l-2 border-accent pl-8">
                  {historicalText}
                </div>
              </div>
              <div className="bg-muted p-6 text-[10px] text-center text-muted-foreground uppercase tracking-wider">
                Gerado por Inteligência Historiográfica para fins educacionais e contextuais.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}