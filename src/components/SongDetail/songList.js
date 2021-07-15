import Link from "../Link/Link";
import './style-list.css';

export default function SongData({data}){
    const{
            album:{images, name: albumName},
            external_urls,
            artists,
            name,
        } = data;
    

    const image= images.find((image) => image.width  === 300);
    const handleSelect = () =>alert("You choose this song");

    return(
        <div className= "App">
            <img src={image.url} alt={albumName}></img>
            <Link to={external_urls.spotify} isExternal>
            <h3>{name}</h3>
            </Link>
            <p>
            {artists.map(({ external_urls, name, id }, index) => {
                const isLast = index === artists.length - 1;
                 return (
                    <Link to={external_urls.spotify} key={id} isExternal>
                        {isLast ? name : `${name}, `}
                    </Link>
                );
            })}
      </p>
        <button onClick={handleSelect}>Select</button>

        </div>
    );
}