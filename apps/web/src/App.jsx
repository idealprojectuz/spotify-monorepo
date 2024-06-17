import React from "react";
import { SearchPanel } from "./components/SearchPanel";
import { Header } from "./components/header";
import { Content } from "./components/Content";
import { Loading } from "./components/Loading";
function App() {
  const [loading, setLoading] = React.useState(true);
  // const [themeSettings, setThemeSettings] = React.useState({});
  React.useEffect(() => {
    window?.Telegram?.WebApp?.ready();
    Telegram?.WebApp?.expand();

    function setThemeClass() {
      document.documentElement.className = Telegram.WebApp.colorScheme;
      Telegram.WebApp.setHeaderColor(
        Telegram.WebApp.themeParams.secondary_bg_color
      );

      // setThemeSettings(Telegram.WebApp.themeParams);
    }

    // console.log(Telegram.WebApp.backgroundColor);
    Telegram.WebApp.onEvent("themeChanged", setThemeClass);
    setThemeClass();
  }, []);

  return (
    <>
      <Loading />
      <Header />
      <main>
        <SearchPanel />
        <div className="container mt-[30px]">
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
      </main>
    </>
  );
}

export default App;
