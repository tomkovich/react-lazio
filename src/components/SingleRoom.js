import React from "react";
import { Link } from "react-router-dom";
import img from "./../images/room-1.jpeg";
import PropTypes from "prop-types"

const SingleRoom = ({ room }) => {
  const { slug, name, price, image } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={image[0] || img} alt={name} />
        <div className="price-top">
            <h6>{price}</h6>
            <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">features</Link>
      </div>  
      <p className="room-info">{name}</p>
    </article>
  );
};

export default SingleRoom;

SingleRoom.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        image: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}