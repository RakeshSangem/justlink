import useSWR from "swr";
import { fetcher } from "./use-links";

export default function useUser() {
  const { data, mutate, isLoading } = useSWR(`/api/user`, fetcher, {
    keepPreviousData: true,
    revalidateOnFocus: false,
  });

  return {
    user: data?.user || {},
    isLoading,
    mutate,
  };
}
