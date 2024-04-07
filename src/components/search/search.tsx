import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ImageCard } from "../imageCard";
import { TImage } from "../../types/TImage";

const API_URL_SEARCH = "https://api.unsplash.com/search/photos";

export function Search({ searchTerm }: any) {
  const [imagePerPage, setImagePerPage] = useState(30);
  const [page, setPage] = useState(1);

  // Fetch data using useQuery
  const { data, isLoading } = useQuery({
    queryKey: ["searchImages", searchTerm],
    queryFn: () =>
      fetch(
        `${API_URL_SEARCH}?client_id=${
          import.meta.env.VITE_API_KEY
        }&query=${encodeURIComponent(
          searchTerm
        )}&page=${page}&per_page=${imagePerPage}`
      )
        .then((res) => res.json())
        .then((data) => data.results),
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div className="photo_cards">
        {Array.isArray(data) &&
          data?.map((image: TImage, index) => (
            <ImageCard key={index} image={image} onClick={() => {}} />
          ))}
      </div>

      {isLoading && <div className="messageContainer">Loading...</div>}
    </>
  );
}
