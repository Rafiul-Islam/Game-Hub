import usePlatfroms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatfroms();
  return platforms?.results.find((item) => item.id === id);
};

export default usePlatform;
