'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

export default function NavTabs() {
  const path = usePathname();

  const navItems = [
    {
      name: 'Links',
      href: '/dashboard',
    },
    {
      name: 'Design',
      href: '/dashboard/design',
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
    },
  ];

  return (
    <div className="border-b border-gray-800">
      <ul className="flex items-center gap-x-4">
        {navItems.map((navItem) => (
          <Link key={navItem.name} className="relative p-1" href={navItem.href}>
            <div className="rounded-md px-3 py-2 transition-all duration-75 active:bg-gray-800">
              <p
                className={`text-sm hover:text-white/80 ${
                  path === navItem.href ? 'text-white' : 'text-white/50'
                }`}
              >
                {navItem.name}
              </p>
            </div>
            {path === navItem.href ? (
              <div className="absolute bottom-0 h-0.5 w-full bg-white" />
            ) : null}
          </Link>
        ))}
      </ul>
    </div>
  );
}
