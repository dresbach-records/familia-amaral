import { FamilyTree } from '@/components/FamilyTree';

export default function ArvorePage() {
  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <section className="bg-primary py-20 text-center border-b-4 border-accent">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-headline font-bold text-white mb-4">Linhagem Amaral</h1>
          <p className="text-accent italic font-headline text-lg">Explorando as conexões de gerações através dos séculos.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              A árvore abaixo representa as ramificações conhecidas da Família Amaral. 
              Membros registrados podem navegar e visualizar detalhes de cada ancestral e descendente.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-inner border p-8 min-h-[600px] flex items-center justify-center overflow-x-auto">
            <FamilyTree />
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Tronco Principal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Ramificação Conectada</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}