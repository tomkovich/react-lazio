import React, { Component } from "react";
import defaultImg from "./../images/room-2.jpeg";

import { RoomContext } from "../context";
import Banner from "../components/Banner";
import { Link, withRouter } from "react-router-dom";
import StyledHero from "../components/StyledHero";

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImg
    };
  }

  static contextType = RoomContext;

  componentDidMount() {}

  render() {
    let { getRoom } = this.context;

    let room = getRoom(this.state.slug);
    if (!room) {
      return (
        <>
          <div className="error">
            <h3>no such room</h3>
            <Link to="/rooms" className="btn-primary">
              Rooms
            </Link>
          </div>
        </>
      );
    }
    const {
      name,
      image,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets
    } = room;
    const [imgMain, ...imgs] = image;
    return (
      <div>
        <StyledHero img={imgMain || defaultImg} hero="roomsHero">
          <Banner title={name}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {imgs.map((item, index) => (
              <img key={index} src={item} alt="room-gallery" />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>
                Max capacity:{" "}
                {capacity > 1 ? `${capacity} People` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "No pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default withRouter(Room);
