import React, { useEffect, useState } from "react";
import { HomeSettingsView } from "./HomeSettingsView";
import { getCities, getHomes } from "./ApiClient";
import { HomeSearchSettings, Home, Page } from "./Model";
import { HomeListView } from "./HomeListView";

interface State {
  cities: string[];
  page: number;
  homes: Page<Home> | null;
  searchSettings: HomeSearchSettings;
}

export function HomesView() {
  const [state, setState] = useState<State>({
    cities: [],
    page: 0,
    homes: null,
    searchSettings: { city: "", lowerPrice: 0, upperPrice: 0 },
  });
  useEffect(() => {
    getCities().then((_) =>
      setState((s) => {
        return { ...s, cities: _ };
      })
    );
  }, []);

  const updateHomes = (settings: HomeSearchSettings, page: number) => {
    getHomes({ ...settings, page: page }).then((_) => {
      setState({
        ...state,
        searchSettings: settings,
        page: _.number,
        homes: _,
      });
      window.scrollTo(0, 0);
    });
  };

  const searchHomes = (settings: HomeSearchSettings) => {
    updateHomes(settings, 0);
  };

  const getPreviousPage = () => {
    updateHomes(state.searchSettings, state.page - 1);
  };

  const getNextPage = () => {
    updateHomes(state.searchSettings, state.page + 1);
  };

  return (
    <div>
      <HomeSettingsView
        cities={state.cities}
        searchCallback={searchHomes}
      ></HomeSettingsView>
      {state.homes == null ? (
        <div></div>
      ) : (
        <HomeListView
          homes={state.homes}
          previousPageClicked={getPreviousPage}
          nextPageClicked={getNextPage}
        ></HomeListView>
      )}
    </div>
  );
}
