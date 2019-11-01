import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  // debugger;
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFiltered = props => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // Get types
  let types = getUnique(props.rooms, "type");
  types = ["all", ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // Get Guests
  let people = getUnique(props.rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">
            room type
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">
            Guests
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {people}
            </select>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="price">
            Room price ${price}
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="size">
            Room size
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                min={minSize}
                id="minSize"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
            <div className="size-inputs">
              <input
                type="number"
                name="maxSize"
                min={maxSize}
                id="maxSize"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </label>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
            <label>breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
            <label>pets</label>
          </div>
        </div>

      </form>
    </section>
  );
};

export default RoomsFiltered;
