
import Link from 'next/link';
import { HeraldryLogo } from './HeraldryLogo';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <HeraldryLogo className="w-10 h-12 transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-xl font-headline font-bold text-primary tracking-wide leading-none">Família Amaral</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold leading-none mt-1">Genealogia & Tradição</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/origem" className="text-sm font-medium hover:text-accent transition-colors">Origem</Link>
          <Link href="/historia" className="text-sm font-medium hover:text-accent transition-colors">A Saga</Link>
          <Link href="/arvore" className="text-sm font-medium hover:text-accent transition-colors">Árvore Genealógica</Link>
          <Link href="/cadastro" className="text-sm font-medium hover:text-accent transition-colors">Cadastrar-se</Link>
          <Link href="/login">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Área de Membros
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}
