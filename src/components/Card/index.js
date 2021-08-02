import PagePlaylist from "../../Pages/components/Auth/pageplaylist";
import { useState } from "react";
import ModalsPlaylist from "../modal";
import SongCard from "../Songcard";
import Button from "../Button";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Card = ({ data }) => {
  const { selectSong, checkSelect, handleSelect, makePlaylist, isLoading } =
    PagePlaylist();

  const userID = useSelector((state) => state.user.user.id);
  const accessToken = useSelector((state) => state.user.accessToken);
  const isAuth = useSelector((state) => state.user.isAuth);

  const isEmpty = selectSong.length === 0;
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreatePlaylist = (payload) => {
    isAuth &&
      makePlaylist(accessToken, userID, payload).then(() => {
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
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />

      {isAuth && !isEmpty && (
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
