import { useContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ImageCard } from "../imageCard";
import { TImage } from "../../types/TImage";
import "./search.css";
import { ModalContext } from "../../contexts/modalContext";

const API_URL_SEARCH = "https://api.unsplash.com/search/photos";

export function Search({ searchTerm }: any) {
  const queryClient = useQueryClient();
  const [imagePerPage, setImagePerPage] = useState(30);
  const [page, setPage] = useState(1);
  const {setId,setModal}=useContext(ModalContext)

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
  // Define the mutation for loading more images
  const { mutate } = useMutation({
    mutationFn: () =>
      fetch(
        `${API_URL_SEARCH}?client_id=${
          import.meta.env.VITE_API_KEY
        }&query=${encodeURIComponent(
          searchTerm
        )}&page=${page}&per_page=${imagePerPage}`
      )
        .then((res) => res.json())
        .then((data) => data.results),
    onSuccess: (newImages) => {
      queryClient.setQueryData(
        ["searchImages", searchTerm],
        (oldImages: any) => [...oldImages, ...newImages]
      );
      setPage(page + 1);
      setImagePerPage(imagePerPage + 30);
    },
  });
    const handleImageClick = (image: TImage) => {
    setId(image.id);
    setModal(true);
  };
  return (
    <>
      <div className="photo_cards">
        {Array.isArray(data) &&
          data?.map((image: TImage, index) => (
            <ImageCard key={index} image={image} onClick={() => {handleImageClick(image)}} />
          ))}
      </div>
      {data && (
        <div className="showBtnDiv">
          <button
            className="showBtn"
            onClick={() => {
              mutate();
            }}
          >
            show more...
          </button>
        </div>
      )}

      {isLoading && <div className="messageContainer">Loading...</div>}
    </>
  );
}
