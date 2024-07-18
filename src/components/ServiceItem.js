import React from "react";
import { Link } from "react-router-dom";

function ServiceItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap">
            <img className="cards__item__img" alt="" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h2 className="cards_h2">{props.h2}</h2>
            <article className="cards__item__text">{props.text}</article>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ServiceItem;
