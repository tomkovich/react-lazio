import React, { Component } from "react";
// import items from "./data";
import Client from "./contentful";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    featured: [],
    sorted: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let image = item.fields.images.map(image => {
        return image.fields.file.url;
      });
      let room = {
        ...item.fields,
        image,
        id
      };
      return room;
    });
    return tempItems;
  };

  getData = async () => {
    try {
      let response = await Client.getEntries()
      
      let rooms = this.formatData(response.items);
      let featured = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
     
      this.setState({
        featured,
        rooms,
        sorted: rooms,
        loading: false,
        maxPrice,
        maxSize
      });
    } catch(error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getData();
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filtredRooms
    );
  };
  filtredRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    let tempRooms = [...rooms];

    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    capacity = parseInt(capacity)
    price = parseInt(price)

    // filter by capacity
    if(capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    // filter by price
    if(price !== 0) {
      tempRooms = tempRooms.filter(room => room.price <= price);
    }

    // filter by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

    // filter by breakfast
    if(breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true)
    }

    // filter by pets
    if(pets) {
      tempRooms = tempRooms.filter(room => room.pets === true)
    }

    this.setState({
      sorted: tempRooms
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export let withRoomConsumer = Component => {
  let ConsumerWrapper = props => {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
  return ConsumerWrapper;
};

export { RoomProvider, RoomConsumer, RoomContext };
