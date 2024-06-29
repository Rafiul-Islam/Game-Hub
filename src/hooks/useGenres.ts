import { useQuery } from "@tanstack/react-query";
import HttpServices from "../services/http";
import genres from "../data/genres";

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
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: genres,
  });

export default useGenres;
