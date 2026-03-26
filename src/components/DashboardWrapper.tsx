
import React from 'react';
import { DashboardNavbar } from './DashboardNavbar';
import { DashboardFooter } from './DashboardFooter';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

export function DashboardWrapper({ children }: DashboardWrapperProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <DashboardFooter />
    </div>
  );
}
