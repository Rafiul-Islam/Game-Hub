import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatform";
import { FetchResponse } from "../services/http";
import HttpServices from "../services/http";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

interface Props {
  pageSize: number;
  gameQuery: GameQuery;
}

const httpService = new HttpServices<Game>("/games");

const useGames = ({ gameQuery, pageSize }: Props) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      httpService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          per_page: pageSize,
        },
      }),
    staleTime: 5 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.results.length > 0 ? allPages.length + 1 : undefined,
    keepPreviousData: true,
  });

export default useGames;
