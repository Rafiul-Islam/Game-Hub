import { useQuery } from "@tanstack/react-query";
import HttpServices from "../services/http";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const httpService = new HttpServices<Platform>("/platforms/lists/parents");

const usePlatfrom = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: httpService.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatfrom;
