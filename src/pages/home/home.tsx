import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./home.css";
import { TImage } from "../../types/TImage";
import { ImageCard } from "../../components/imageCard";
import { InputValueContext } from "../../contexts/inputValueContext";
import { Search } from "../../components/search";

const API_URL = "https://api.unsplash.com/photos";

export function Home() {
  const [imagePerPage, setImagePerPage] = useState(20);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { values, setValues } = useContext(InputValueContext);
  // Fetch data using useQuery
  const { data, isLoading } = useQuery({
    queryKey: ["images"],
    queryFn: () =>
      fetch(
        `${API_URL}?per_page=${imagePerPage}&page=${page}&order_by=popular&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      ).then((res) => res.json()),
    refetchOnWindowFocus: false,
  });

  const hendleSetValue = (value: string) => {
    if (value.length !== 0) {
      setValues([...values, value]);
    }
    setSearchTerm(value);
  };
  
  return (
    <div className="homepageContainer">
      <div className="inputDiv">
        <input
          className="input"
          placeholder="ძებნა..."
          value={searchTerm}
          onChange={(e) => {
            hendleSetValue(e.target.value);
          }}
        />
      </div>
      {searchTerm !== "" ? (
         <>
         <Search
           searchTerm={searchTerm}
         />
       </>
      ) : (
        <>
          <div className="photo_cards">
            {Array.isArray(data) &&
              data.map((image: TImage, index) => (
                <ImageCard key={index} image={image} onClick={() => {}} />
              ))}
          </div>
        </>
      )}
      <div className="messageConteiner">
        {isLoading && <div>Loading...</div>}
      </div>
    </div>
  );
}
