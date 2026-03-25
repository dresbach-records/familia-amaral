import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeraldryLogoProps {
  className?: string;
}

export function HeraldryLogo({ className }: HeraldryLogoProps) {
  return (
    <div className={cn("relative aspect-[3/4] flex items-center justify-center", className)}>
      <Image
        src="/Brasão_de_armas_da_família_Amaral-removebg.png"
        alt="Brasão Oficial da Família Amaral"
        fill
        className="object-contain drop-shadow-[0_0_15px_rgba(201,162,39,0.3)]"
        priority
      />
    </div>
  );
}
