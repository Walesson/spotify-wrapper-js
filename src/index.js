import React, { useEffect } from "react";
import style from "./style.scss";
import { searchAlbums } from "./services/wrapper";

const App = () => {
  useEffect(() => {
    const result = searchAlbums("Incubus");
    console.info("result", result);
  }, []);

  return (
    <div className={style.container}>
      <span className={style.title}>App Web</span>
    </div>
  );
};

export default App;
