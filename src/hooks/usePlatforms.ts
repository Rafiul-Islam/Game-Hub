import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import HttpServices from "../services/http";

const httpService = new HttpServices<Platform>("/platforms/lists/parents");

const usePlatfroms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: httpService.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: platforms,
  });

export default usePlatfroms;
