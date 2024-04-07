import { TImage } from "../../types/TImage";
import "./imageCard.css";

type ImageCardProps = {
  image: TImage;
  onClick: () => void; 
};
export function ImageCard({ image, onClick }:ImageCardProps) {
  const { alt_description, urls } = image;

  return (
    <div className="imageCard" onClick={onClick}>
      <img style={{width:400,height:300}} src={urls.small} alt={alt_description} />
    </div>
  );
}
