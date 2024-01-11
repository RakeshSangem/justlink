import { ReactNode } from 'react';
import NavTabs from '@/components/nav-tabs';
import Providers from './providers';
import Modal from '@/components/modals/modal';
import ModalProvider from '@/components/modals/ModalProvider';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <ModalProvider>
        <section className="min-h-screen max-w-screen-xl mx-auto">
          <nav className="flex justify-between items-center w-full px-8 py-4 border-b border-b-gray-800">
            <span className="text-2xl font-bold">JustLink</span>
            <ul className="flex">
              <li className="mx-2">
                <a href="/api/auth/logout">Logout</a>
              </li>
            </ul>
          </nav>
          <div className="max-w-7xl px-8 mx-auto">
            <div className="w-full sm:w-1/2">
              <NavTabs />
            </div>
            {children}
          </div>
        </section>
      </ModalProvider>
    </Providers>
  );
}
