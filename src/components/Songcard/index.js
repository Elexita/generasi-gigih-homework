import Link from "../Link/Link";
import Button from "../Button";
import "./style.css";


const SongCard = ({ data, isSelected, handleSelect }) => {
  const { album, artists, external_urls, name } = data;

  const artistName = artists.map((artist, idx) => {
    const isLast = idx === artists.length - 1;

    const texts = isLast ? artist.name : artist.name + ",";

    return (
      <Link href={artist.external_urls.spotify} key={artist.id}>
        {texts}
      </Link>
    );
  });

  return (
    <div className="cards">
      <div className="card">
        <Link href={album.external_urls.spotify}>
          <img src={album.images[1].url} alt={album.name} />
        </Link>
      </div>
      <div>
        <div>
          <h4 className="songtitle">
            <Link href={external_urls.spotify}>{name}</Link> - {artistName}
          </h4>
          <h5>
            <Link href={album.external_urls.spotify}>{album.name}</Link>
          </h5>
        </div>
        <div>
        <Button
            variant={isSelected ? "blue" : "default"}
            onClick={() => handleSelect(data.uri)}
          >
            {isSelected ? "Selected" : "Select"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
