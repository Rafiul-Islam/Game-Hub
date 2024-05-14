import { useState, useEffect } from "react";
import http, { isCancel } from "../services/http";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    http
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (isCancel(err)) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
