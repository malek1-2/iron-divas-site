import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
  onLogout: () => void;
}

export default function AdminLayout({ children, onLogout }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Admin Header */}
      <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-700 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Iron divas Admin</h1>
            <p className="text-sm text-slate-400 mt-1">Panneau d'administration</p>
          </div>
          <Button 
            onClick={onLogout}
            className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 font-semibold"
          >
            <LogOut className="w-4 h-4" />
            Déconnexion
          </Button>
        </div>
      </header>

      {/* Admin Content */}
      {children}
    </div>
  );
}
