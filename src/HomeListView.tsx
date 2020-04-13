import { Home, Page } from "./Model";
import React from "react";
import { contains, openLink, noop } from "./Utils";
import { HomeTileView } from "./HomeTileView";
import { getFavouriteHomes } from "./Db";
export function HomeListView(params: {
  homes: Page<Home>;
  nextPageClicked: () => void;
  previousPageClicked: () => void;
}) {
  return (
    <div
      className="container is-fluid p-l-md"
      style={{ flexDirection: "column-reverse" }}
    >
      {params.homes.content.map((_) => (
        <HomeTileView home={_} onUnfavourite={noop}></HomeTileView>
      ))}
      <div
        className="pagination is-centered is-rounded m-t-sm m-b-sm"
        role="navigation"
      >
        <button
          className="pagination-previous"
          disabled={params.homes.number == 0}
          onClick={params.previousPageClicked}
        >
          Previous
        </button>
        <ul className="pagination-list">
          <li>
            <a className="pagination-link">{params.homes.number + 1}</a>
          </li>
        </ul>
        <button
          className="pagination-next"
          style={{ marginRight: "15px" }}
          disabled={params.homes.number + 1 == params.homes.totalPages}
          onClick={params.nextPageClicked}
        >
          Next
        </button>
      </div>
    </div>
  );
}
