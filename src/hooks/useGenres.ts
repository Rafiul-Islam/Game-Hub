import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import Genre from "../entities/Genre";
import HttpServices from "../services/http";

const httpService = new HttpServices<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: httpService.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: genres,
  });

export default useGenres;
