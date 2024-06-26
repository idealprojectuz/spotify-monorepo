import React from "react";
import "./content.css";
import { Bottomsheet } from "./bottomsheet";
export const Track = ({ track }) => {
  const [played, setisPlayed] = React.useState(false);
  const [open, setIsOpen] = React.useState(false);
  const changePlayed = (action) => {
    setisPlayed(!played);
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="music-item cursor-pointer w-full flex gap-3 h-[88px] min-h-[100px] rounded-[12px] mb-[10px] text-center">
        <div className="thumbnail  overflow-hidden relative w-[40%] max-w-[100px]  h-full ">
          <img
            src={track.thumbnailUrl}
            alt="thumbnail"
            className="w-full h-full  object-cover rounded-[12px]"
          />
          {/* <div className="thumbnail-overlay flex justify-center items-center  absolute left-0 top-0 w-full h-full  "></div> */}
        </div>
        <div className=" content-wrapper pt-1">
          <h2 className="title text-left break-words">{track.title}</h2>

          <p className="artist text-[12px] text-[var(--tg-theme-subtitle-text-color)]  text-left">
            {/* {track?.artists?.map((el) => (
              <React.Fragment key={el.id}>
                <span>{el.name} </span>
              </React.Fragment>
            ))} */}
            {/* | */}
            {track.duration.label}
          </p>
          {/* <p className="text-left text-[12px]">{}</p> */}
        </div>
      </div>
      <Bottomsheet open={open} track={track} setIsOpen={setIsOpen} />
    </>
  );
};
