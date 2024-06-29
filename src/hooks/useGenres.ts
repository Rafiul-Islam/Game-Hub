import { useQuery } from "@tanstack/react-query";
import HttpServices from "../services/http";
import genres from "../data/genres";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const httpService = new HttpServices<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: httpService.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: genres,
  });

export default useGenres;
