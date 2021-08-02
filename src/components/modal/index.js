import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Button from "../Button";
import style from "./style.module.css";
import {
  makePlaylist,
  addSongToPlaylist,
} from "../../Pages/components/Auth/spotify";
import { useSelector } from "react-redux";
import PagePlaylist from "../../Pages/components/Auth/pageplaylist";

const ModalsPlaylist = ({ isOpen, onClose, isLoading }) => {
  const userID = useSelector((state) => state.user.user.id);
  const accessToken = useSelector((state) => state.user.accesToken);

  const [payload, setPayload] = useState({
    name: "",
    description: "",
    public: false,
    collaborative: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payload);
    makePlaylist(accessToken, userID, payload).then((res) => {
      console.log(res);
      PagePlaylist(accessToken, res.id, { uris: payload });
    });
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target && e.target.id === "modal") {
        return onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("click", handleClick);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen, onClose]);

  return (
    isOpen &&
    createPortal(
      <div className={style.container}>
        <div>
          <div className={style.content}>
            <div className={style.header}>
              <h3 className={style.title}> Create playlist</h3>
              <button className={style.close} onClick={() => onClose()}>
                c
              </button>
            </div>
            <div className={style.body}>
              <form id="createPlaylistForm" onSubmit={handleSubmit}>
                <div className={style.controlf}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Playlist Name"
                    minLength="10"
                    onChange={handleChange}
                  />
                </div>
                <div className={style.controlf}>
                  <label htmlFor="description">Description</label>
                  <textarea
                    rows={5}
                    id="description"
                    name="description"
                    placeholder="Description"
                    minLength="20"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div className={style.footerb}>
              <Button
                isLoading={isLoading}
                type="submit"
                form="createPlaylistForm"
                style={{ marginLeft: "auto" }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  );
};

export default ModalsPlaylist;
