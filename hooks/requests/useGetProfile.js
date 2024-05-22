import { getProfile } from "@/api/requests";
import useSWR from "swr";

export default function useGetProfile() {
  const fetcher = async () => {
    const {
      data: { data },
    } = await getProfile();
    return data;
  };
  const { data, isLoading, error, mutate } = useSWR(
    "/profile/get-profile",
    fetcher
  );

  return {
    profile: data,
    profileLoading: isLoading,
    profileError: error,
    mutateProfile: mutate,
  };
}
