import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import SingleRoom from "./SingleRoom";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { featured, loading } = this.context;
    featured = featured.map(room => <SingleRoom key={room.id} room={room} />);
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : featured}
        </div>
      </section>
    );
  }
}
