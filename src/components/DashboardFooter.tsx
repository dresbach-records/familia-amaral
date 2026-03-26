
import { HeraldryLogo } from './HeraldryLogo';
import { Shield, Mail, Phone, ExternalLink, Globe } from 'lucide-react';

export function DashboardFooter() {
  return (
    <footer className="bg-white border-t-8 border-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 space-y-4">
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
          </div>

          {/* Quick Tasks */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Pesquisa</h3>
            <ul className="text-xs space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors"><ExternalLink className="w-3 h-3" /> Digitalizar Documentos</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors"><ExternalLink className="w-3 h-3" /> Solicitar Certidões</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors"><ExternalLink className="w-3 h-3" /> Validar Parentesco</li>
            </ul>
          </div>

          {/* Global Network */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Rede Global</h3>
            <ul className="text-xs space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors"><Globe className="w-3 h-3" /> Amaral - Portugal (Beira)</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors"><Globe className="w-3 h-3" /> Amaral - Brasil (Sudeste)</li>
              <li className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors"><Globe className="w-3 h-3" /> Amaral - Américas</li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Suporte da Linhagem</h3>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Mail className="w-3 h-3 text-accent" /> historiador@familiaamaral.pt</div>
              <div className="flex items-center gap-2"><Phone className="w-3 h-3 text-accent" /> +351 232 000 000</div>
              <div className="flex items-center gap-2"><Shield className="w-3 h-3 text-accent" /> Conselho de Nobreza Amaral</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
            Portal Privado - Acesso Exclusivo para Descendentes Autenticados
          </p>
          <div className="flex items-center gap-6 text-[9px] font-bold text-primary uppercase tracking-widest">
            <span className="hover:text-accent cursor-pointer transition-colors">Privacidade</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Termos de Honra</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Segurança Áurea</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
