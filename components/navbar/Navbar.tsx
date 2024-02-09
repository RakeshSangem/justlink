'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Logo from '../Logo';

interface NavItem {
  label: string;
  slug: string;
}

const navItems: NavItem[] = [
  {
    label: 'Features',
    slug: 'features',
  },
  {
    label: 'Dashboard',
    slug: 'dashboard',
  },
  {
    label: 'Login',
    slug: 'login',
  },
  {
    label: 'Sign up',
    slug: 'signup',
  },
];

interface NavLinkProps {
  slug: string;
  text: string;
}

export default function Navbar(): JSX.Element {
  const { data, status } = useSession();

  if (status === 'loading')
    return <div className="loadingGradient">Loading...</div>;

  const authenticatedNavItems = data?.user
    ? navItems.filter((item) => item.slug !== 'signup' && item.slug !== 'login')
    : navItems.filter(
        (item) => item.slug === 'signup' || item.slug === 'login'
      );

  return (
    <nav className="flex w-full px-8 justify-between items-center py-2">
      <Logo />
      <ul className="flex gap-x-6 items-center">
        {authenticatedNavItems.map((item) => (
          <NavLink key={item.slug} slug={item.slug} text={item.label} />
        ))}
      </ul>
    </nav>
  );
}

export function NavLink({ slug, text }: NavLinkProps) {
  return (
    <li
      className={`${
        slug === 'signup' || slug === 'dashboard'
          ? 'bg-white text-black px-4 py-1.5 rounded-md'
          : ''
      }  font-medium text-sm`}
    >
      <Link href={`/${slug}`}>{text}</Link>
    </li>
  );
}
