import {createPortal} from "react-dom";
import { useEffect, useState } from "react";
import Button from "../Button";

const ModalsPlaylist =({isOpen, onClose, makePlaylist}) => {
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
      <div>
        <div />
        <div >
            <div >
            <h3 >Create playlist</h3>
            <button onClick={() => onClose()}>
            </button>
          </div>
          <div>
            <form id="createPlaylistForm" onSubmit={handleSubmit}>
              <div >
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Playlist Name"
                  min="10"
                  onChange={handleChange}
                />
              </div>
              <div >
                <label htmlFor="description">Description</label>
                <textarea
                  rows={5}
                  id="description"
                  name="description"
                  placeholder="Description"
                  min="20"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div >
            <Button
              form="createPlaylistForm"
              style={{ marginLeft: "auto" }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>,
      document.body
    )
);
    
};

export default ModalsPlaylist;