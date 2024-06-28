import { useQuery } from "@tanstack/react-query";
import http, { FetchResponse } from "../services/http";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatfrom = () => useData<Platform>("/platforms/lists/parents");
const usePlatfrom = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      http
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatfrom;
