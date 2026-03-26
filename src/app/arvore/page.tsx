
import { FamilyTree } from '@/components/FamilyTree';
import { Shield, Users, Crown, Landmark, GitBranch } from 'lucide-react';
import { DashboardWrapper } from '@/components/DashboardWrapper';

export default function ArvorePage() {
  return (
    <DashboardWrapper>
      <div className="min-h-screen bg-[#f8f6f0] pb-24">
        {/* Noble Header Section */}
        <section className="bg-primary pt-16 pb-24 text-center border-b-[6px] border-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10"><Crown className="w-24 h-24 text-white" /></div>
            <div className="absolute bottom-10 right-10"><Landmark className="w-32 h-32 text-white" /></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-2 rounded-full mb-6 text-accent">
              <GitBranch className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Genealogia Documentada</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6 tracking-widest uppercase">
              Linhagem Amaral
            </h1>
            <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-accent italic font-headline text-xl max-w-3xl mx-auto leading-relaxed">
              "A conexão de gerações através dos séculos, preservando a essência da nossa fidalguia rural."
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-16 -mt-16 relative z-20">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.12)] border-2 border-accent/10 overflow-hidden">
              
              {/* Tree Info Bar */}
              <div className="bg-muted/50 p-8 border-b flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl border border-accent/20">
                    <Shield className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-headline font-bold text-primary">Mapa de Ascendência</h2>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Documentado desde 1160</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="text-center px-6 border-r border-muted">
                    <span className="block text-2xl font-bold text-primary">24</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Gerações</span>
                  </div>
                  <div className="text-center px-6">
                    <span className="block text-2xl font-bold text-primary">150+</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Membros</span>
                  </div>
                </div>
              </div>

              {/* Tree Viewer Wrapper */}
              <div className="p-12 md:p-20 flex items-center justify-center overflow-x-auto min-h-[700px] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]">
                <div className="inline-block animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  <FamilyTree />
                </div>
              </div>

              {/* Legend & Instructions */}
              <div className="bg-primary p-10 flex flex-col md:flex-row items-center justify-center gap-12 text-white border-t-4 border-accent">
                <div className="flex items-center gap-3 group">
                  <div className="w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(201,162,39,0.5)]"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] group-hover:text-accent transition-colors">Tronco Principal</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-4 h-4 bg-white/20 border border-white/40 rounded-full"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] group-hover:text-accent transition-colors">Ramificação Colateral</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-4 h-4 bg-accent/30 border-2 border-accent rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] group-hover:text-accent transition-colors">Novos Membros</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground italic font-body text-sm leading-relaxed">
                "Esta representação é fruto de pesquisas em arquivos paroquiais, manuscritos e tradição oral. 
                Para correções ou adições, por favor entre em contato com o historiador da linhagem."
              </p>
            </div>
          </div>
        </section>
      </div>
    </DashboardWrapper>
  );
}
