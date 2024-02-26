'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

import LoadingSpinner from '../icons/LoadingSpinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outlined'
    | 'success'
    | 'danger'
    | 'ghost';
  loading?: boolean;
  icon?: ReactNode;
  disabledTooltip?: string | ReactNode;
}

export default function Button({
  text,
  variant = 'primary',
  loading = false,
  icon,

  disabledTooltip,
  ...props
}: ButtonProps) {
  /**
   * TODO: Add disabled tooltip
   * if (disabledTooltip) {
   *   return (
   *     <div className="flex h-10 w-full cursor-not-allowed items-center justify-center rounded-md border border-gray-200 bg-gray-100 px-4 text-sm text-gray-400 transition-all focus-visble:outline-none">
   *       <p>{text}</p>
   *     </div>
   *   );
   * }
   */
  return (
    <button
      type={props.onClick ? 'button' : 'submit'}
      className={cn(
        'flex h-9 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-70',
        props.disabled || loading
          ? 'cursor-not-allowed border-white/10'
          : {
              'bg-white text-black hover:bg-white/90 hover:text-black/90 hover:scale-[1.02] active:scale-100':
                variant === 'primary',
              'border-[#2c2c2f] bg-[#27272A] text-white/80 hover:border-white/10 hover:bg-[#2c2c2f] hover:scale-[1.02] active:scale-100':
                variant === 'secondary',
              'text-white border-white/10 hover:bg-[#27272A] hover:scale-[1.02] active:scale-100':
                variant === 'outlined',
              'text-white border-none hover:bg-[#27272A]': variant === 'ghost',
              'border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500':
                variant === 'success',
              'border-red-500 bg-red-500 text-white hover:bg-white hover:text-red-500':
                variant === 'danger',
            },
        props.className
      )}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading ? <LoadingSpinner /> : icon ? icon : null}
      <p className="antialiased">{text}</p>
    </button>
  );
}
