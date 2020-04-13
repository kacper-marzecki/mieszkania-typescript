import { Home, Page } from "./Model";
import React from "react";
import { contains, openLink } from "./Utils";
import { HomeTileView } from "./HomeTileView";

export function HomeListView(params: {
  homes: Page<Home>;
  favouriteHomes: Home[];
  nextPageClicked: () => void;
  previousPageClicked: () => void;
  favouriteClicked: (homeId: number) => void;
}) {
  return (
    <div
      className="container is-fluid p-l-md"
      style={{ flexDirection: "column-reverse" }}
    >
      {params.homes.content.map((_) => (
        <HomeTileView home={_}></HomeTileView>
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
