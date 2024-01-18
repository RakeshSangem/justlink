import { link } from 'fs';
import useSWR from 'swr';

// import { useParams } from 'next/navigation';

interface SWRError extends Error {
  status: number;
}

// export async function fetcher<JSON = any>(
//   input: RequestInfo,
//   init?: RequestInit
// ): Promise<JSON> {
//   const res = await fetch(input, init);

//   if (!res.ok) {
//     const error = await res.text();
//     const err = new Error(error) as SWRError;
//     err.status = res.status;
//     throw err;
//   }

//   console.log('res.json', res.json());

//   return res.json();
// }
export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useLinks() {
  const {
    data: links,
    isValidating,
    mutate,
  } = useSWR(`/api/links`, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 20000,
    keepPreviousData: true,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  return {
    links: links || [],
    isValidating,
    mutate,
  };
}
