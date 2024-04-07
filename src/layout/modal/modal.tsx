import { useContext } from "react";
import { ModalContext } from "../../contexts/modalContext";
import { useQuery } from "@tanstack/react-query";
import "./modal.css";

export function Modal() {
  const { id } = useContext(ModalContext);

  const { setModal } = useContext(ModalContext);
  const { data, isLoading } = useQuery({
    queryKey: ["image"],
    queryFn: () =>
      fetch(
        `https://api.unsplash.com/photos/${id}?&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      ).then((res) => res.json()),
    refetchOnWindowFocus: false,
  });

  return (
    <div className="modalContent">
      <div className="modalContainer">
        <div className="topContent">
          <img
            src={data?.urls.small}
            alt={data?.alt_description}
            className="image"
          />
          <button className="button" onClick={() => setModal(false)}>
            x
          </button>
        </div>
        <h2 className="title"> {data?.alt_description}</h2>
        <div className="bottomContent">
          <h3>likes : {data?.likes};</h3>
          <h3>downloads : {data?.downloads};</h3>
          <h3>views : {data?.views};</h3>
        </div>
      </div>
      {isLoading ? <div className="messageContainer">Loading...</div> : <></>}
    </div>
  );
}
