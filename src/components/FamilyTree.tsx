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
  id: '1',
  name: 'Gonçalo Rodriguez de Amaral',
  dates: 'c. 1160 - 1210',
  role: 'Patriarca (Viseu)',
  children: [
    {
      id: '2',
      name: 'Vasco Gonçalo de Amaral',
      dates: 'c. 1190 - 1245',
      role: 'Filho primogênito',
      children: [
        { id: '4', name: 'Martim Vasques', dates: 'c. 1220 - 1280', role: 'Cavaleiro' },
        { id: '5', name: 'Aldonça Vasques', dates: 'c. 1225 - 1290', role: 'Dama de Beira' },
      ]
    },
    {
      id: '3',
      name: 'Fernando Amaral',
      dates: 'c. 1195 - 1250',
      role: 'Segundo filho',
      children: [
        { id: '6', name: 'João Fernandes', dates: 'c. 1230 - 1285', role: 'Clérigo' },
      ]
    }
  ]
};

function TreeNode({ member }: { member: Member }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative p-6 bg-white border-2 border-primary rounded-lg shadow-md min-w-[200px] text-center group hover:bg-primary hover:text-white transition-all duration-300">
        <h4 className="font-headline font-bold text-primary group-hover:text-white">{member.name}</h4>
        <p className="text-[10px] text-accent font-bold uppercase tracking-widest mt-1">{member.dates}</p>
        <p className="text-[10px] text-muted-foreground mt-1 italic group-hover:text-white/70">{member.role}</p>
        
        {/* Connection line down */}
        {member.children && member.children.length > 0 && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0.5 h-6 bg-accent"></div>
        )}
      </div>

      {member.children && member.children.length > 0 && (
        <div className="flex gap-12 mt-12 relative">
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