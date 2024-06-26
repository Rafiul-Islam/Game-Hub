import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import HttpServices from "../services/http";

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
    staleTime: ms("24h"), // 24 hours
    initialData: platforms,
  });

export default usePlatfroms;
