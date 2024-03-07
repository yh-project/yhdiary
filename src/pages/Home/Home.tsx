import Board from "pages/Board/Board";
import React, { useState } from "react";
import SideMenu from "./SideMenu";

const Home: React.FC = () => {
  const [state, setState] = useState<string>("board");
  return (
    <div className="w-[1200px] pt-16 flex justify-between">
      <SideMenu setState={setState} />
      {state === "board" ? <Board /> : state === "gallery" ? null : null}
    </div>
  );
};

export default Home;
