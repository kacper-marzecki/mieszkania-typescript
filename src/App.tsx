import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomesView } from "./HomesView";
import { FavouriteHomesView } from "./FavouriteHomesView";
import { SitePage } from "./Model";
import { MenuBarView } from "./MenuBarView";

type State = {
  page: SitePage;
};

function App() {
  const [state, setState] = useState<State>({ page: "MAIN_PAGE" });
  const setPage = (page: SitePage) => setState({ ...state, page: page });
  const mainView = (page: SitePage): JSX.Element => {
    switch (page) {
      case "FAVOURITE_HOME_VIEW":
        return <FavouriteHomesView></FavouriteHomesView>;
        break;
      case "MAIN_PAGE":
        return <HomesView></HomesView>;
        break;
    }
  };

  return (
    <div className="root">
      <MenuBarView onPageClicked={setPage}></MenuBarView>
      {mainView(state.page)}
    </div>
  );
}

export default App;
