
"use client";

import Link from 'next/link';
import { HeraldryLogo } from './HeraldryLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  User, 
  Menu, 
  Bell, 
  BookOpen, 
  GitBranch, 
  History,
  HelpCircle,
  GraduationCap,
  Users2,
  Share2,
  ChevronDown
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import Image from 'next/image';

export function DashboardNavbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary text-white border-b border-accent/20 shadow-2xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
        {/* Logo & Brand */}
        <Link href="/painel" className="flex items-center gap-3 shrink-0 group">
          <HeraldryLogo className="w-10 h-12 transition-transform group-hover:scale-105" />
          <div className="hidden lg:flex flex-col">
            <span className="text-lg font-headline font-bold tracking-tight">Portal Amaral</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-bold">Arquivo Central</span>
          </div>
        </Link>
        
        {/* Main Navigation with Dropdowns */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors px-3 py-2 outline-none">
              <GitBranch className="w-4 h-4" /> Árvore <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-2 border-accent/20 rounded-2xl p-2 min-w-[200px]">
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/arvore">Árvore Familiar</Link></DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/arvore">Pesquisar Pessoas</Link></DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/painel">Recordações</Link></DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/arvore">Novos Ramos</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors px-3 py-2 outline-none">
              <Search className="w-4 h-4" /> Pesquisar <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-2 border-accent/20 rounded-2xl p-2 min-w-[220px]">
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/registros">Registros Históricos</Link></DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/registros">Imagens de Documentos</Link></DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/registros">Genealogias</Link></DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/registros">Catálogo do Arquivo</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/aprendizado">Wiki de Pesquisa</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors px-3 py-2 outline-none">
              <Share2 className="w-4 h-4" /> Participar <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-2 border-accent/20 rounded-2xl p-2 min-w-[200px]">
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/ajuda">Indexação Online</Link></DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/ajuda">Revisar Nomes</Link></DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/ajuda">Laboratórios de IA</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors px-3 py-2 outline-none">
              <GraduationCap className="w-4 h-4" /> Aprender <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-2 border-accent/20 rounded-2xl p-2 min-w-[200px]">
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/aprendizado">Centro de Aprendizado</Link></DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/aprendizado">RootsTech 2025</Link></DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/historia">Blog da Linhagem</Link></DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl focus:bg-primary/10" asChild><Link href="/ajuda">Consultas Virtuais</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Search Bar */}
        <div className="flex-1 max-w-sm relative group hidden lg:block">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-accent" />
          </div>
          <Input 
            type="text"
            placeholder="Buscar antepassado..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/10 border-white/20 focus:bg-white/20 focus:border-accent pl-12 pr-4 py-5 rounded-full text-white placeholder:text-white/40 transition-all font-body text-xs"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/ajuda">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
              <HelpCircle className="w-5 h-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative rounded-full">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border border-primary"></span>
          </Button>
          <Link href="/painel">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center border-2 border-primary shadow-lg hover:scale-110 transition-transform cursor-pointer overflow-hidden relative">
               <Image 
                  src="/eu poli.JPG" 
                  alt="Perfil" 
                  fill 
                  className="object-cover"
               />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
