import SongCard from "../Songcard";

const Card = ({ data }) => {
    return (
        <div>
            {data.map((music) => (
                <SongCard key={music.id} data={music} />
            ))}
        </div>
    );
};

export default Card;