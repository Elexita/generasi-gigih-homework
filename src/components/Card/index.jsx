import { Playlist } from "../../Pages/components/Auth/playlist";
import SongCard from "../Songcard";

const Card = ({ data }) => {
  const {checkSelect, handleSelect} = Playlist();
  return (
    <div>
      {data.map((music) => (
        <SongCard 
            key={music.id} 
            data={music} 
            handleSelect={handleSelect} 
            isSelected={checkSelect(music.uri)} />
      ))};
    </div>
  );
};

export default Card;
