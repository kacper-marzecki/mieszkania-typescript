import React, { useState } from "react";
import { classes } from "./Html";
import { SitePage } from "./Model";

export interface Props {
  onPageClicked: (page: SitePage) => void;
}

export function MenuBarView(props: Props): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="navbar is-primary m-b-md">
      <div className="navbar-brand">
        <a
          className="navbar-item"
          href="#"
          onClick={(_) => props.onPageClicked("MAIN_PAGE")}
        >
          <i className="fas fa-home"></i>
        </a>
        <a
          className="navbar-burger burger"
          data-target="navbar-id"
          role="button"
          onClick={(_) => setOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div
        id="navbar-id"
        className={classes([
          ["navbar-menu", true],
          ["is-active animated", isOpen],
        ])}
      >
        <div className="navbar-start">
          <a
            className="navbar-item"
            onClick={(_) => props.onPageClicked("FAVOURITE_HOME_VIEW")}
          >
            Saved Favourites
          </a>
        </div>
        <div className="navbar-end"></div>
      </div>
    </nav>
  );
}
