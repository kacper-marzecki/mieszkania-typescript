import { range } from "./Utils";
import { useState, useEffect } from "react";
import React from "react";
import { HomeSearchSettings } from "./Model";

interface State {
  lowerPrice: number;
  upperPrice: number;
  city: string | null;
}

export function HomeSettingsView(props: {
  cities: string[];
  searchCallback: (s: HomeSearchSettings) => void;
}): JSX.Element {
  const priceOptions = (selectedPrice: number) =>
    range(4, 41)
      .map((_) => _ * 250)
      .map((_) => <option selected={_ == selectedPrice}>{_}</option>);

  const cityOptions = [
    <option disabled={true} selected={true}></option>,
  ].concat(props.cities.map((_) => <option>{_}</option>));

  const [state, setState] = useState<State>({
    lowerPrice: 1000,
    upperPrice: 10000,
    city: null,
  });

  const search = () => {
    if (state.city !== null) {
      props.searchCallback({ ...state, city: state.city });
    }
  };

  return (
    <div className="box animated fadeIn">
      <div className="columns">
        <div className="column">
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field has-addons">
                <div className="control">
                  <a className="button is-static">City</a>
                </div>
                <div className="control is-expanded">
                  <div className="select is-fullwidth">
                    <select
                      onChange={(_) =>
                        setState({ ...state, city: _.target.value })
                      }
                    >
                      {cityOptions}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field has-addons">
            <div className="control">
              <a className="button is-static"> Lower Price limit</a>
            </div>
            <div className="control is-expanded">
              <div className="select is-fullwidth">
                <select
                  onChange={(_) =>
                    setState({ ...state, lowerPrice: parseInt(_.target.value) })
                  }
                >
                  {priceOptions(state.lowerPrice)}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field has-addons">
            <div className="control">
              <a className="button is-static">Upper price limit</a>
            </div>
            <div className="control is-expanded">
              <div className="select is-fullwidth">
                <select
                  onChange={(_) =>
                    setState({ ...state, lowerPrice: parseInt(_.target.value) })
                  }
                >
                  {priceOptions(state.upperPrice)}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field is-expanded">
            <div className="control">
              <button
                disabled={state.city == null}
                className="button is-primary is-fullwidth"
                onClick={search}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
