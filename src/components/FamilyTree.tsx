
"use client";

import React from 'react';

type Member = {
  id: string;
  name: string;
  dates: string;
  role: string;
  children?: Member[];
};

const mockData: Member = {
  id: 'root-grandparents',
  name: 'Santos Cornélio do Amaral & Maria Gomes da Rocha',
  dates: 'Tronco Paterno',
  role: 'Avós de Marcos Vinícius',
  children: [
    {
      id: 'father-branch',
      name: 'Januário do Amaral',
      dates: 'Casado com Maria de Fátima Dresbach',
      role: 'Pai de Marcos Vinícius',
      children: [
        { id: 'membro-principal', name: 'Marcos Vinícius Dresbach do Amaral', dates: 'Perfil Atual', role: 'Membro Autenticado' },
        { id: 'irma-1', name: 'Ana Cristina Dresbach do Amaral', dates: 'Geração Atual', role: 'Irmã' },
        { id: 'irmao-2', name: 'Douglas Ismael Dresbach', dates: 'Geração Atual', role: 'Irmão' },
        { id: 'irmao-3', name: 'Paulo Fernando Dresbach do Amaral', dates: 'Geração Atual', role: 'Irmão' },
      ]
    },
    {
      id: 'aunt-branch',
      name: 'Rosemir Gomes do Amaral',
      dates: 'Ramo Colateral',
      role: 'Tia (Irmã do Pai)',
    }
  ]
};

function TreeNode({ member }: { member: Member }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative p-6 bg-white border-2 border-primary rounded-[2rem] shadow-md min-w-[240px] text-center group hover:bg-primary hover:text-white transition-all duration-300">
        <h4 className="font-headline font-bold text-primary group-hover:text-white text-sm">{member.name}</h4>
        <p className="text-[10px] text-accent font-bold uppercase tracking-widest mt-1">{member.dates}</p>
        <p className="text-[9px] text-muted-foreground mt-1 italic group-hover:text-white/70">{member.role}</p>
        
        {/* Connection line down */}
        {member.children && member.children.length > 0 && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0.5 h-6 bg-accent"></div>
        )}
      </div>

      {member.children && member.children.length > 0 && (
        <div className="flex gap-8 mt-12 relative">
          {/* Horizontal line connector */}
          {member.children.length > 1 && (
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent -translate-y-6"></div>
          )}
          
          {member.children.map((child) => (
            <div key={child.id} className="relative">
              {/* Vertical small line up to connector */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-0.5 h-6 bg-accent"></div>
              <TreeNode member={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function FamilyTree() {
  return (
    <div className="py-10">
      <TreeNode member={mockData} />
    </div>
  );
}
