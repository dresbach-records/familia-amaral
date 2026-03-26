
"use client";

import { DashboardWrapper } from '@/components/DashboardWrapper';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Search, 
  BookOpen, 
  Users,
  Video
} from 'lucide-react';

export default function AjudaPage() {
  const whatsappUrl = "https://wa.me/5551933806899";

  return (
    <DashboardWrapper>
      <div className="min-h-screen bg-[#f8f6f0] pb-24">
        <section className="bg-primary py-20 text-center border-b-[6px] border-accent relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-headline font-bold text-white mb-6 uppercase tracking-widest">
              Centro de Suporte
            </h1>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-accent w-5 h-5" />
              <Input 
                className="w-full bg-white border-none rounded-full py-8 pl-14 text-primary text-lg shadow-2xl" 
                placeholder="Como podemos ajudar em sua pesquisa?"
              />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-xl rounded-[3rem] bg-white p-8 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-lg font-headline font-bold text-primary mb-3">Manuais de Estudo</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">Aprenda a decifrar manuscritos antigos e registros paroquiais.</p>
              <Button variant="link" className="text-accent font-bold uppercase tracking-widest text-[10px]">Ver Biblioteca</Button>
            </Card>

            <Card className="border-none shadow-xl rounded-[3rem] bg-white p-8 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-lg font-headline font-bold text-primary mb-3">Comunidade Amaral</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">Conecte-se com outros pesquisadores e compartilhe descobertas.</p>
              <Button variant="link" className="text-accent font-bold uppercase tracking-widest text-[10px]">Entrar no Fórum</Button>
            </Card>

            <Card className="border-none shadow-xl rounded-[3rem] bg-white p-8 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Video className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-lg font-headline font-bold text-primary mb-3">Consultas Virtuais</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">Agende uma conversa de 20 min com nosso historiador.</p>
              <Button variant="link" className="text-accent font-bold uppercase tracking-widest text-[10px]">Agendar Agora</Button>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-headline font-bold text-primary mb-8 text-center">Fale com o Arquivo Central</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-6 bg-white p-8 rounded-[2.5rem] shadow-lg border-l-4 border-accent">
                <Mail className="text-primary w-10 h-10" />
                <div>
                  <h4 className="font-bold text-primary">Email Prioritário</h4>
                  <p className="text-xs text-muted-foreground">suporte@familiaamaral.pt</p>
                </div>
              </div>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 bg-white p-8 rounded-[2.5rem] shadow-lg border-l-4 border-accent hover:border-primary transition-all group"
              >
                <MessageCircle className="text-primary w-10 h-10 group-hover:text-accent transition-colors" />
                <div>
                  <h4 className="font-bold text-primary">WhatsApp Direto</h4>
                  <p className="text-xs text-muted-foreground">+55 51 93380-6899</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}
