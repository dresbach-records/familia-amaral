"use client";

import { HeraldryLogo } from './HeraldryLogo';
import { Shield, Mail, Phone, ExternalLink, Globe, Landmark, Scale, Lock, Github } from 'lucide-react';
import Link from 'next/link';

export function DashboardFooter() {
  return (
    <footer className="bg-white border-t-8 border-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <HeraldryLogo className="w-10 h-14" />
              <div className="flex flex-col">
                <span className="text-xl font-headline font-bold text-primary">Amaral</span>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Arquivo Central</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed italic">
              Espaço dedicado à custódia da história e conexão dos ramos da linhagem Amaral em todo o mundo.
            </p>
            <div className="flex gap-4">
               <div className="w-8 h-8 bg-primary/5 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer"><Globe className="w-4 h-4 text-primary" /></div>
               <div className="w-8 h-8 bg-primary/5 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer"><Shield className="w-4 h-4 text-primary" /></div>
            </div>
          </div>

          {/* Quick Tasks */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
              <Landmark className="w-3 h-3 text-accent" /> Pesquisa
            </h3>
            <ul className="text-xs space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">Digitalizar Documentos</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">Solicitar Certidões</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">Wiki de Pesquisa</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">Laboratórios IA</li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
              <Globe className="w-3 h-3 text-accent" /> Parceiros
            </h3>
            <ul className="text-xs space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">FamilySearch</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">MyHeritage</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">FindMyPast</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">Geneanet</li>
            </ul>
          </div>

          {/* Learning */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
               <Lock className="w-3 h-3 text-accent" /> Legal
            </h3>
            <ul className="text-xs space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">Termos de Uso</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">Privacidade</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">Uso de Cookies</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">Acordo de Membro</li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
              <Mail className="w-3 h-3 text-accent" /> Suporte
            </h3>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 font-medium text-primary">historiador@familiaamaral.pt</div>
              <div className="flex items-center gap-2">Centro de Ajuda</div>
              <div className="flex items-center gap-2">Comunidade Global</div>
              <div className="pt-4 border-t border-muted mt-4">
                 <p className="text-[9px] uppercase tracking-widest font-bold text-accent">Conselho de Nobreza Amaral</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
              Portal Privado - Acesso Exclusivo para Descendentes Autenticados
            </p>
            <a 
              href="https://github.com/dresbach-records/familia-amaral.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors text-[9px] uppercase tracking-widest font-bold text-primary/60"
            >
              <Github className="w-3 h-3" />
              Desenvolvido e mantido por Vini Amaral
            </a>
          </div>
          <div className="flex items-center gap-8 text-[9px] font-bold text-primary uppercase tracking-widest">
            <span className="hover:text-accent cursor-pointer transition-colors">RootsTech 2025</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Localizações de Arquivo</span>
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">Ambiente Seguro</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
