import React from "react";
import RoomsFiltered from "./RoomsFiltered";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "./../context";
import Loading from "./Loading";

let RoomsContainer = ({ context }) => {
  const { loading, sorted, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFiltered rooms={rooms} />
      <RoomsList rooms={sorted} />
    </>
  );
};

export default withRoomConsumer(RoomsContainer);