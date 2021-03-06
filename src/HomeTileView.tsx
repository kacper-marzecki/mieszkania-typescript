import { Home } from "./Model";
import { contains, openLink, copyToClipboard } from "./Utils";
import React, { useEffect, useState } from "react";
import { getFavouriteHomeById, removeFavouriteHome, favouriteHome } from "./Db";

const imageForLink = (link: string) => {
  if (contains(link, "gumtree")) {
    return "/gumtree.png";
  } else if (contains(link, "otodom")) {
    return "/otodom.png";
  } else {
    return "/olx.png";
  }
};

interface State {
  isFavorite: boolean;
}

export function HomeTileView(props: {
  home: Home;
  onUnfavourite: (homeId: number) => void;
}) {
  const [state, setState] = useState<State>({ isFavorite: false });
  useEffect(() => {
    getFavouriteHomeById(props.home.id, (home: Home | undefined) => {
      if (home !== undefined) {
        setState({ isFavorite: true });
      } else {
        setState({ isFavorite: false });
      }
    });
  }, [props.home.id]);

  function addFavourite() {
    favouriteHome(props.home);
    setState({ isFavorite: true });
  }

  function removeFavourite() {
    removeFavouriteHome(props.home);
    setState({ isFavorite: false });
    props.onUnfavourite(props.home.id);
  }

  function share() {
    copyToClipboard(props.home.link);
    // notificationStore.addNotification({
    //   title: "Copied to clipboard",
    //   message: props.home.link,
    //   type: "success",
    //   insert: "top",
    //   container: "bottom-center",
    //   animationIn: ["animated", "fadeIn"],
    //   animationOut: ["animated", "fadeOut"],
    //   dismiss: {
    //     duration: 2000,
    //     // onScreen: true,
    //   },
    // });
    // }
  }
  const favouriteButton = (isFavourite: boolean) => {
    return isFavourite ? (
      <a className="level-item" onClick={removeFavourite}>
        <span className="has-text-danger icon  fas fa-heart"></span>
      </a>
    ) : (
      <a className="level-item" onClick={addFavourite}>
        <span className="icon has-text-grey-lighter fas fa-heart"></span>
      </a>
    );
  };

  return (
    <article className="media">
      <figure className="media m-r-md">
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
            <a className="level-item" onClick={share}>
              <span className="icon has-text-primary">
                <i className="fas fa-share-alt"></i>
              </span>
            </a>
            {favouriteButton(state.isFavorite)}
          </div>
        </nav>
      </div>
    </article>
  );
}
