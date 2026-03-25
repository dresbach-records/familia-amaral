"use client";

import Link from 'next/link';
import { HeraldryLogo } from '@/components/HeraldryLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-muted/20 flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <HeraldryLogo className="w-16 h-20 mx-auto mb-4" />
        <h1 className="text-3xl font-headline font-bold text-primary">Área de Membros</h1>
      </div>
      
      <Card className="w-full max-w-md border-none shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline">Acesse sua conta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary uppercase tracking-wider">E-mail</label>
            <Input type="email" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary uppercase tracking-wider">Senha</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full bg-primary py-6 font-bold text-lg">Entrar</Button>
          
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              Ainda não é cadastrado? {' '}
              <Link href="/cadastro" className="text-accent font-bold hover:underline">
                Junte-se à linhagem
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
      
      <p className="mt-8 text-[10px] text-muted-foreground uppercase tracking-widest text-center max-w-xs">
        Este é um ambiente restrito para descendentes e familiares verificados da Família Amaral.
      </p>
    </div>
  );
}