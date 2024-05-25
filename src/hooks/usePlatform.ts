import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatfrom = () => useData<Platform>("/platforms/lists/parents");

export default usePlatfrom;
