import { Home } from "./Model";
import { contains, openLink } from "./Utils";
import React from "react";

const imageForLink = (link: string) => {
  if (contains(link, "gumtree")) {
    return "/gumtree.png";
  } else if (contains(link, "otodom")) {
    return "/otodom.png";
  } else {
    return "/olx.png";
  }
};

export function HomeTileView(props: { home: Home }) {
  return (
    <article className="media">
      <figure className="media">
        <p className="image is-64x64 ">
          <img
            src={imageForLink(props.home.link)}
            className="is-marginless is-rounded"
          ></img>
        </p>
      </figure>
      <div className="media-content" style={{ overflowX: "unset" }}>
        <div className="content ">
          <a
            className="has-text-black has-text-weight-light"
            onClick={(_) => openLink(props.home.link)}
          >
            {props.home.description}
          </a>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <span className="has-text-primary">{props.home.price} PLN</span>
            </div>
          </div>
          <div className="level-right">
            <a className="level-item">
              <span className="icon has-text-primary">
                <i className="fas fa-share-alt"></i>
              </span>
            </a>
            <a className="level-item">
              <span className="icon has-text-grey-lighter fas fa-heart"></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  );
}
