import { useQuery } from "@tanstack/react-query";
import HttpServices from "../services/http";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const httpService = new HttpServices<Platform>("/platforms/lists/parents");

const usePlatfroms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: httpService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms,
  });

export default usePlatfroms;
