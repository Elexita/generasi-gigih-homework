import { PagePlaylist } from "../../Pages/components/Auth/pageplaylist";
import { useState } from "react";
import ModalsPlaylist from "../modal";
import SongCard from "../Songcard";
import Button from "../Button";
import toast from "react-hot-toast";

const Card = ({ data, userData }) => {
    const { selectSong, checkSelect, handleSelect, makePlaylist, isLoading } =
      PagePlaylist();
  
    const isEmpty = selectSong.length === 0;
    const isAuth = userData.access_token !== undefined;
    const [isModalOpen, setModalOpen] = useState(false);
    const { access_token, id: user_id } = userData;
  
    const handleCreatePlaylist = (payload) => {
        makePlaylist(access_token, user_id, payload).then(() => {
          setModalOpen(false);
          toast.success("Playlist Created", {
            duration: 4000,
            style: {
              background: "#00FFFF",
              color: "#0000FF",
            },
          });
        });
    };


    return (
      <div className="playlistContainer">
        {data.map((music) => (
          <SongCard
            key={music.id}
            data={music}
            handleSelect={handleSelect}
            isSelected={checkSelect(music.uri)}
          />
        ))}
  
        <ModalsPlaylist
          isLoading={isLoading}
          makePlaylist={handleCreatePlaylist}
          isOpen={isModalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        {isAuth&& !isEmpty && (
          <div style={{ position: "fixed", bottom: 18, right: 18 }}>
            <Button
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Create playlist
            </Button>
          </div>
        )}
      </div>
    );
  };
export default Card;
