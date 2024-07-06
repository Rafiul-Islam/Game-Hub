import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshots";
import HttpServices from "../services/http";

const useScreenshots = (gameId: number) => {
  const httpService = new HttpServices<Screenshot>(
    `/games/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ["games", gameId, "screenshots"],
    queryFn: httpService.getAll,
  });
};

export default useScreenshots;
