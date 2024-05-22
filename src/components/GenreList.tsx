import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { geners } = useGenres();
  return (
    <ul>
      {geners.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
