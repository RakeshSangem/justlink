import Link from 'next/link';

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
  return (
    <nav className="flex w-full px-8 justify-between items-center py-8">
      <span className="text-xl font-semibold">JustLink</span>
      <ul className="flex gap-x-6 items-center">
        {navItems.map(({ label, slug }: NavItem) => {
          return <NavLink key={label} slug={slug} text={label} />;
        })}
      </ul>
    </nav>
  );
}

export function NavLink({ slug, text }: NavLinkProps) {
  return (
    <li
      className={`${
        slug === 'signup' ? 'bg-white text-black px-4 py-1.5 rounded-md' : ''
      }  font-medium text-sm`}
    >
      <Link href={`/${slug}`}>{text}</Link>
    </li>
  );
}
