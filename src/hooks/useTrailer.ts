import { useQuery } from "@tanstack/react-query";
import HttpServices from "../services/http";
import Trailer from "../entities/Trailer";

const useTrailer = (gameId: number) => {
  const httpService = new HttpServices<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["games", gameId, "movies"],
    queryFn: httpService.getAll,
  });
};

export default useTrailer;
