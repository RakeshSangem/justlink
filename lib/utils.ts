import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// also check the url with regex
export function isUrlValid(url: string) {
  try {
    const newUrl = new URL(url);

    if (newUrl.protocol !== 'http:' && newUrl.protocol !== 'https:') {
      return false;
    }

    const urlRegex =
      /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;

    return urlRegex.test(url);
  } catch (_) {
    return false;
  }

  return true;
}
