
"use client";

import Link from 'next/link';
import { HeraldryLogo } from './HeraldryLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, User, Menu, Bell, BookOpen, GitBranch, History } from 'lucide-react';
import { useState } from 'react';

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
            <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-bold">Área do Descendente</span>
          </div>
        </Link>
        
        {/* FamilySearch-style Search Bar */}
        <div className="flex-1 max-w-xl relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-accent" />
          </div>
          <Input 
            type="text"
            placeholder="Buscar antepassado na linhagem..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/10 border-white/20 focus:bg-white/20 focus:border-accent pl-12 pr-4 py-6 rounded-full text-white placeholder:text-white/40 transition-all font-body text-sm"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          <Link href="/arvore" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
            <GitBranch className="w-4 h-4" /> Árvore
          </Link>
          <Link href="/historia" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
            <History className="w-4 h-4" /> Anais
          </Link>
          <Link href="/painel" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
            <BookOpen className="w-4 h-4" /> Registros
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative rounded-full">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border border-primary"></span>
          </Button>
          <Link href="/login">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center border-2 border-primary shadow-lg hover:scale-110 transition-transform cursor-pointer overflow-hidden">
               <User className="w-6 h-6 text-primary" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
