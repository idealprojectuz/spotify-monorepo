import React from "react";
import "./content.css";
export const Track = ({ track }) => {
  const [played, setisPlayed] = React.useState(false);

  const changePlayed = (action) => {
    setisPlayed(!played);
  };

  return (
    <div className="music-item w-full flex gap-3 h-[88px] min-h-[100px] rounded-[12px] mb-[10px] text-center">
      <div className="thumbnail overflow-hidden relative w-[40%] max-w-[100px]  h-full ">
        <img
          src={track.thumbnailUrl}
          alt="thumbnail"
          className="w-full h-full  object-cover rounded-[12px]"
        />
        <div className="thumbnail-overlay flex justify-center items-center  absolute left-0 top-0 w-full h-full  ">
          {played ? (
            <i
              onClick={changePlayed}
              className="fa-solid fa-pause text-white text-[30px] cursor-pointer"
            />
          ) : (
            <i
              onClick={changePlayed}
              className="fa-solid fa-play text-white text-[30px] cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="content-wrapper pt-1">
        <h2 className="title text-left break-words">{track.title}</h2>

        <p className="artist text-[12px] text-[var(--tg-theme-hint-color)]  text-left">
          {track?.artists?.map((el) => (
            <span>{el.name} </span>
          ))}
          | {track.duration.label}
        </p>
        {/* <p className="text-left text-[12px]">{}</p> */}
      </div>
    </div>
  );
};
