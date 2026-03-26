"use client";

import Link from 'next/link';
import { HeraldryLogo } from '@/components/HeraldryLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldAlert, KeyRound, Mail, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-muted/20 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Texture/Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c9a227 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Back Button */}
      <div className="absolute top-8 left-8">
        <Link href="/">
          <Button variant="ghost" className="text-primary hover:text-accent font-bold gap-2 group p-0 hover:bg-transparent">
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Voltar ao site
          </Button>
        </Link>
      </div>

      <div className="mb-10 text-center animate-in fade-in zoom-in duration-1000">
        <HeraldryLogo className="w-20 h-28 mx-auto mb-6 drop-shadow-xl" />
        <h1 className="text-3xl font-headline font-bold text-primary tracking-widest uppercase">Portal de Membros</h1>
        <div className="w-16 h-0.5 bg-accent mx-auto mt-4"></div>
      </div>
      
      <Card className="w-full max-w-md border-2 border-accent/20 shadow-2xl rounded-[3rem] bg-white overflow-hidden relative z-10">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <ShieldAlert className="w-12 h-12 text-primary" />
        </div>
        <CardHeader className="text-center pt-10 pb-6">
          <CardTitle className="font-headline text-2xl text-primary">Acesso Restrito</CardTitle>
          <CardDescription className="italic font-body">Identifique-se para visualizar a linhagem.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-10 pt-4">
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-2">
              <Mail className="w-3 h-3 text-accent" /> E-mail Registrado
            </label>
            <Input 
              type="email" 
              placeholder="seu@email.com" 
              className="bg-muted/40 border-primary/5 focus:border-accent py-6 rounded-2xl" 
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-2">
              <KeyRound className="w-3 h-3 text-accent" /> Chave de Acesso
            </label>
            <Input 
              type="password" 
              placeholder="••••••••" 
              className="bg-muted/40 border-primary/5 focus:border-accent py-6 rounded-2xl"
            />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/95 py-7 font-bold text-lg uppercase tracking-widest rounded-full shadow-lg transition-transform hover:scale-[1.02]">
            Entrar no Portal
          </Button>
          
          <div className="text-center pt-4 border-t border-muted mt-6">
            <p className="text-sm text-muted-foreground font-body">
              Não é registrado?{' '}
              <Link href="/cadastro" className="text-accent font-bold hover:underline">
                Solicite seu Registro
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
      
      <footer className="mt-12 text-[9px] text-muted-foreground uppercase tracking-[0.4em] text-center max-w-xs font-bold bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/5">
        Ambiente Seguro para Descendentes
      </footer>
    </div>
  );
}
