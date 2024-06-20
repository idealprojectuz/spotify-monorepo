import ytdlcore from "ytdl-core";

export const getByOneMusic = async (videoId) => {
  const info = await ytdlcore.getInfo(
    "https://music.youtube.com/watch?v=" + videoId,
    {
      lang: "en",
    }
  );

  const data = await ytdlcore.filterFormats(info.formats, "audioonly");
  return data;
};
