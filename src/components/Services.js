import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Just because a cocktail is alcohol-free doesn't mean it can't be fun and delicious. These tasty alcohol-free mocktails bring all of the fun without the booze"
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Just because a cocktail is alcohol-free doesn't mean it can't be fun and delicious. These tasty alcohol-free mocktails bring all of the fun without the booze"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Just because a cocktail is alcohol-free doesn't mean it can't be fun and delicious. These tasty alcohol-free mocktails bring all of the fun without the booze"
      },
      {
        icon: <FaBeer />,
        title: "strongers beer",
        info:
          "Just because a cocktail is alcohol-free doesn't mean it can't be fun and delicious. These tasty alcohol-free mocktails bring all of the fun without the booze"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => (
            <Article service={service} key={index} />
          ))}
        </div>
      </section>
    );
  }
}

const Article = ({ service }) => {
  return (
    <div className="service">
      <span>{service.icon}</span>
      <h6>{service.title}</h6>
      <p>{service.info}</p>
    </div>
  );
};
