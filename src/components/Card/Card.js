import React from "react";
import Button from "../Button/Button";
import "./card.scss";

const Card = ({ proj: { id, image, description } }) => {
    return (
        <div className="card">
            <div className="card__image">
                <div className="card__overlay"></div>
                <Button className="card__btn btn" type="button" children="View Project" />
                <img className="img" src={require(`../../assets/images/${image}`)} alt={`${id}`} />
            </div>
        </div>
    );
};

export default Card;
