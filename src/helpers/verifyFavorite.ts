import { Details } from "../hooks/useMovieInfo";
import { Result } from "../redux/thunks/movies.thunk";

export const isFavoriteItem = (id: number) => {
  const storage: Result[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return storage.some((item) => item.id === id);
};

export const toggleFavoriteItem = (item: Details, isFavorite: boolean) => {
  const storage: Details[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (isFavorite) {
    const newStorage = [...storage, item];
    localStorage.setItem("favorites", JSON.stringify(newStorage));
  } else {
    const index = storage.findIndex((i) => i.id === item.id);
    storage.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(storage));
  }
};
