import { HeraldryLogo } from './HeraldryLogo';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <HeraldryLogo className="w-8 h-10 brightness-0 invert" />
              <span className="text-2xl font-headline font-bold tracking-tight">Família Amaral</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs italic">
              "Honrando o passado para iluminar o futuro da nossa linhagem."
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-headline font-bold text-accent uppercase tracking-widest text-xs">Propósito</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              O site tem caráter histórico, cultural e organizacional, com objetivo de preservar a tradição da família Amaral, sem representar qualquer título oficial de nobreza.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-headline font-bold text-accent uppercase tracking-widest text-xs">Acesso Rápido</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="/origem" className="hover:text-accent transition-colors">Origem</a>
              <a href="/arvore" className="hover:text-accent transition-colors">Árvore</a>
              <a href="/cadastro" className="hover:text-accent transition-colors">Linhagem</a>
              <a href="/privacidade" className="hover:text-accent transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/40">
          <span>&copy; {new Date().getFullYear()} Genealogia Amaral. Todos os direitos reservados.</span>
          <span>Portugal & Brasil - Desde o Século XII</span>
        </div>
      </div>
    </footer>
  );
}