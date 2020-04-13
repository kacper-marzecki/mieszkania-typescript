import React, { useState, useEffect } from "react";
import { Home } from "./Model";
import { getFavouriteHomes } from "./Db";
import { HomeTileView } from "./HomeTileView";

interface State {
  homes: Array<Home>;
}

export function FavouriteHomesView() {
  const [state, setState] = useState<State>({ homes: [] });
  useEffect(() => {
    getFavouriteHomes((homes: Home[]) => {
      setState({ homes: homes });
    });
  }, []);
  function onUnfavourite(homeId: number) {
    setState({ homes: state.homes.filter((_) => _.id !== homeId) });
  }

  return (
    <div className="container is-fluid p-l-md">
      {state.homes.map((_) => (
        <HomeTileView home={_} onUnfavourite={onUnfavourite}></HomeTileView>
      ))}
    </div>
  );
}
