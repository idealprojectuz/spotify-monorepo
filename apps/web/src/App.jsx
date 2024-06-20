import React from "react";
import { SearchPanel } from "./components/SearchPanel";
import { Header } from "./components/header";
import { Track } from "./components/track";
import { request } from "./config/config";

const initProject = () => {
  window?.Telegram?.WebApp?.ready();
  Telegram?.WebApp?.expand();
  function setThemeClass() {
    document.documentElement.className = Telegram.WebApp.colorScheme;
    Telegram.WebApp.setHeaderColor(Telegram.WebApp.themeParams.bg_color);

    // setThemeSettings(Telegram.WebApp.themeParams);
  }

  // console.log(Telegram.WebApp.backgroundColor);
  Telegram.WebApp.onEvent("themeChanged", setThemeClass);
  setThemeClass();
};
function App() {
  const [tracks, setTracks] = React.useState([]);
  React.useEffect(() => {
    initProject();
    getMusic();
  }, []);
  const getMusic = async (search = null) => {
    try {
      const musiclist = await request.get("/song", {
        params: {
          q: search ? search : "eng sara musiqalar " + new Date().getFullYear(),
        },
      });

      if (musiclist.status == 200) {
        setTracks(musiclist.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <Loading /> */}

      <header className="container search-panel-wrapper py-3 rounded-b-[12px]">
        <Header />
        <SearchPanel getMusic={getMusic} />
      </header>
      <main>
        <div className="container mt-[10px]">
          <h2 className="text-[26px] mb-2 font-[500] ">Tracks</h2>

          <div className="track-wrapper">
            {tracks?.length
              ? tracks?.map((track) => {
                  return <Track key={track.id} track={track} />;
                })
              : "No tracks"}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
