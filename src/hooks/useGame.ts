import { useQuery } from "@tanstack/react-query";
import HttpServices from "../services/http";
import { Game } from "./useGames";

const httpService = new HttpServices<Game>("/games");

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => httpService.getOne(slug),
  });

export default useGame;
