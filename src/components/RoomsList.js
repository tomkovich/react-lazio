import React from "react";
import SingleRoom from "./SingleRoom";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>no rooms matched</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(room => (
          <SingleRoom key={room.id} room={room}/>
        ))}
      </div>
    </section>
  );
};

export default RoomsList;
