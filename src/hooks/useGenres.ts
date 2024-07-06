import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import HttpServices from "../services/http";
import { Genre } from "../entities/Genre";

const httpService = new HttpServices<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: httpService.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: genres,
  });

export default useGenres;
