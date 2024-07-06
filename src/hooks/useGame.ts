import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import HttpServices from "../services/http";

const httpService = new HttpServices<Game>("/games");

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => httpService.getOne(slug),
  });

export default useGame;
