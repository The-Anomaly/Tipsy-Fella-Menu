import React, { useState } from "react";
import logo from "./assets/images/logo.png";
import "./App.css";

const mainCtrl = ["Food", "Drinks"];

const options: options[] = [
  {
    type: "Food",
    itemList: [
      {
        heading: "Champagnes",
        items: [
          {
            name: "Declan",
            price: "₦8,000",
          },
        ],
      },
    ],
  },
  {
    type: "Drinks",
    itemList: [
      {
        heading: "Champagnes",
        items: [
          {
            name: "Declan",
            price: "₦8,000",
          },
        ],
      },
      {
        heading: "Tequilas",
        items: [
          {
            name: "",
            price: "",
          },
        ],
      },
      {
        heading: "Cognacs",
        items: [],
      },
      {
        heading: "Vodkas",
        items: [],
      },
      {
        heading: "GIN/RUM",
        items: [],
      },
      {
        heading: "Whiskey",
        items: [],
      },
      {
        heading: "Wines",
        items: [],
      },
      {
        heading: "Shots/Shishas",
        items: [],
      },
      {
        heading: "Juice",
        items: [],
      },
      {
        heading: "Aperitif",
        items: [],
      },
      {
        heading: "Beer",
        items: [],
      },
      {
        heading: "Mixers",
        items: [],
      },
      {
        heading: "Cocktails",
        items: [],
      },
      {
        heading: "Mocktails",
        items: [],
      },
      {
        heading: "Smooties",
        items: [],
      },
    ],
  },
];

const DrinkOptions = [];

interface item {
  name: string;
  price: string;
}

interface itemList {
  heading: string;
  items: item[];
}

interface options {
  type: "Food" | "Drinks";
  itemList: itemList[];
}
const App = () => {
  const [type, setType] = useState<number>(1);
  const [list, setList] = useState<number>(0);

  return (
    <div className="appContainer">
      <div className="appHeader">
        <img
          src={logo}
          alt="tipsy fella"
          title="tipsy fella"
          className="logo"
        />
        <h1>Our Menu</h1>
      </div>
      <div className="ctrlContainer">
        {options.map((item, index) => (
          <button
            className={type === index ? "active" : ""}
            key={index}
            onClick={() => setType(index)}
          >
            {item.type}
          </button>
        ))}
      </div>
      <div className="crtlContainer2">
        {options[type].itemList.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => setList(index)}
              className={list === index ? "activeList" : ""}
            >
              {item.heading}
            </button>
          </div>
        ))}
      </div>
      <div className="itemList">
        <p className="listHeading">{options[type].itemList[list].heading}</p>
        <div className="item">
          <span>Declan</span>
          <span>₦8,000</span>
        </div>
        <div className="item">
          <span>Giovani ice</span>
          <span>₦8,000</span>
        </div>
        <div className="item">
          <span>Blue non</span>
          <span>₦8,000</span>
        </div>
        <div className="item">
          <span>Declan</span>
          <span>₦8,000</span>
        </div>
      </div>
    </div>
  );
};

export default App;
