import React, { useState } from "react";
import logo from "./assets/images/logo.png";
import "./App.css";

const options: options[] = [
  {
    type: "Food",
    itemList: [
      {
        heading: "Champagnes",
        listHeading: "Champagnes",
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
        listHeading: "Champagnes",
        items: [
          {
            name: "Declan",
            price: "₦8,000",
          },
          {
            name: "Giovani ice",
            price: "₦8,000",
          },
          {
            name: "Blue non",
            price: "₦15,000",
          },
          {
            name: "Andrae Rose",
            price: "₦10,000",
          },
          {
            name: "Andrae Brut",
            price: "₦10,000",
          },
          {
            name: "Martini Rose",
            price: "₦15,000",
          },
          {
            name: "Martini Asti",
            price: "₦15,000",
          },
          {
            name: "Martini  Brut",
            price: "₦15,000",
          },
          {
            name: "Martini  Prosecco",
            price: "₦15,000",
          },
          {
            name: "Bellare Rose",
            price: "₦60,000",
          },
          {
            name: "Bellare Brut",
            price: "₦60,000",
          },
          {
            name: "Moët Nectar Rose",
            price: "₦65,000",
          },

          {
            name: "Moët Nectar Imperial",
            price: "₦65,000",
          },
          {
            name: "Vueve Cliequot Brut",
            price: "₦65,000",
          },
          {
            name: "Vueve Cliequot Rich",
            price: "₦80,000",
          },
          {
            name: "Laurent Perrier Rose",
            price: "₦70,000",
          },
          {
            name: "Dom Perignon",
            price: "₦230,000",
          },
          {
            name: "Ace of Spade",
            price: "₦300,000",
          },
        ],
      },
      {
        heading: "Tequilas",
        listHeading: "Tequilas - 100% Puro Agave",
        items: [
          {
            name: "Camino real gold",
            price: "₦15,000",
          },
          {
            name: "Camino real Silver",
            price: "₦15,000",
          },
          {
            name: "Sierra gold",
            price: "₦15,000",
          },
          {
            name: "Sierra Choc",
            price: "₦14,000",
          },
          {
            name: "Espolon Silver",
            price: "₦25,000",
          },
          {
            name: "Espolon Gold",
            price: "₦25,000",
          },
          {
            name: "Olmeca Choc",
            price: "₦20,000",
          },
          {
            name: "Olmeca Silver",
            price: "₦25,000",
          },
          {
            name: "Olmeca Gold",
            price: "₦25,000",
          },

          {
            name: "Don Julio 1942",
            price: "₦300,000",
          },
          {
            name: "Azul Clase",
            price: "₦300,000",
          },
        ],
      },
      {
        heading: "Cognacs",
        listHeading: "Cognacs",
        items: [
          {
            name: "Martel VS",
            price: "₦45,000",
          },
          {
            name: "Henessy VS",
            price: "Henessy VS",
          },
          {
            name: "Remy Martin",
            price: "₦45,000",
          },
          {
            name: "Dusse",
            price: "₦45,000",
          },
          {
            name: "Martel VSOP",
            price: "₦60,000",
          },
          {
            name: "Henessy VSOP",
            price: "₦65,000",
          },
          {
            name: "Remy Martin VSOP",
            price: "₦65,000",
          },
          {
            name: "Martel XO",
            price: "₦210,000",
          },
          {
            name: "Henessy XO",
            price: "₦230,000",
          },

          {
            name: "Remy Martin XO",
            price: "₦200,000",
          },
        ],
      },
      {
        heading: "Vodkas",
        listHeading: "Vodkas",
        items: [
          {
            name: "Night",
            price: "₦10,000",
          },
          {
            name: "Sky",
            price: "₦10,000",
          },
          {
            name: "Smirnoff",
            price: "₦15,000",
          },
          {
            name: "Absolute",
            price: "₦15,000",
          },
          {
            name: "Pavda",
            price: "₦25,000",
          },
          {
            name: "Ciroc",
            price: "₦35,000",
          },
          {
            name: "Grey Goose",
            price: "₦40,000",
          },
        ],
      },
      {
        heading: "GIN/RUM",
        listHeading: "GIN/RUM",
        items: [
          {
            name: "Gordon",
            price: "₦8,000",
          },
          {
            name: "Bombay",
            price: "₦25,000",
          },
          {
            name: "Barcadi White",
            price: "₦20,000",
          },
          {
            name: "Barcadi Gold",
            price: "₦20,000",
          },
        ],
      },
      {
        heading: "Whiskey",
        listHeading: "Whiskey",
        items: [
          {
            name: "William Lawson",
            price: "₦8,000",
          },
          {
            name: "Red Label",
            price: "₦10,000",
          },
          {
            name: "White Walker",
            price: "₦15,000",
          },
          {
            name: "American Honey",
            price: "₦15,000",
          },
          {
            name: "Jameson",
            price: "₦20,000",
          },
          {
            name: "Monkey Shoulder",
            price: "₦20,000",
          },
          {
            name: "Singleton",
            price: "₦25,000",
          },
          {
            name: "Black Barrel",
            price: "₦25,000",
          },
          {
            name: "Black Label",
            price: "₦25,000",
          },
          {
            name: "Glenfidich",
            price: "₦25,000",
          },
          {
            name: "Blue Label",
            price: "₦150,000",
          },
        ],
      },
      {
        heading: "Wines",
        listHeading: "Alcoholic & Non-Alcoholic Wines",
        items: [
          {
            name: "Fourth Street",
            price: "₦7,000",
          },
          {
            name: "Sweet Lips",
            price: "₦7,000",
          },
          {
            name: "Four Cousin",
            price: "₦8,000",
          },
          {
            name: "Carlo Rossi",
            price: "₦8,000",
          },
          {
            name: "Agor",
            price: "₦8,000",
          },
          {
            name: "Eva",
            price: "₦8,000",
          },
          {
            name: "Pure Heaven",
            price: "₦8,000",
          },
          {
            name: "Chamdor",
            price: "₦8,000",
          },
        ],
      },
      {
        heading: "Shots/Shishas",
        listHeading: "Shots & Shishas",
        items: [
          {
            name: "Single shot",
            price: "₦1,000",
          },
          {
            name: "Mother confessor",
            price: "₦6,000",
          },
          {
            name: "Game Shot",
            price: "₦6,000",
          },
          {
            name: "Tispsy Shot",
            price: "₦7,000",
          },
          {
            name: "Eqyptian Shisha",
            price: "₦6,000",
          },
          {
            name: "Arabian Shisha",
            price: "₦6,000",
          },
          {
            name: "Mixed Flavour",
            price: "₦6,000",
          },
        ],
      },
      {
        heading: "Juice",
        listHeading: "Juice",
        items: [
          {
            name: "Chi Active",
            price: "₦1,500",
          },
          {
            name: "Chi Exotic",
            price: "₦1,500",
          },
          {
            name: "Hollandia",
            price: "₦1,500",
          },
          {
            name: "Yoghourt",
            price: "₦1,500",
          },
          {
            name: "Cranberry",
            price: "₦3,000",
          },
        ],
      },
      {
        heading: "Aperitif",
        listHeading: "Aperitif",
        items: [
          {
            name: "Campari Small",
            price: "₦5,000",
          },
          {
            name: "Jagamister",
            price: "₦8,000",
          },
          {
            name: "Campari Medium",
            price: "₦10,000",
          },
          {
            name: "Campari Big",
            price: "₦15,000",
          },
          {
            name: "Baileys",
            price: "₦10,000",
          },
          {
            name: "Best Cream",
            price: "₦8,000",
          },
        ],
      },
      {
        heading: "Beer",
        listHeading: "Beer",
        items: [
          {
            name: "Stout",
            price: "₦800",
          },
          {
            name: "Heineken",
            price: "₦800",
          },
          {
            name: "Budweiser",
            price: "₦800",
          },
          {
            name: "Smirnoff Ice",
            price: "₦1,000",
          },
          {
            name: "Star Raddler",
            price: "₦1,000",
          },
        ],
      },
      {
        heading: "Mixers",
        listHeading: "Mixers",
        items: [
          {
            name: "Blue Bullet",
            price: "₦1,000",
          },
          {
            name: "Black Bullet",
            price: "₦1,500",
          },
          {
            name: "Red Bull",
            price: "₦1,000",
          },
          {
            name: "Power Horse",
            price: "₦1,000",
          },
          {
            name: "Monster",
            price: "₦1,500",
          },
          {
            name: "Coke",
            price: "₦1,000",
          },
          {
            name: "Sprite",
            price: "₦1,000",
          },
          {
            name: "Black Origin",
            price: "₦1,000",
          },
          {
            name: "Water",
            price: "₦300",
          },
        ],
      },
      {
        heading: "Cocktails",
        listHeading: "Cocktails",
        items: [
          {
            name: "One Night Stand",
            price: "₦3,000",
            ingredients:
              "Dark rum, coconut cream, pineapple juice, orange juice, nutmeg",
          },
          {
            name: "Cold Nipple",
            price: "₦3,000",
            ingredients: "Peach, malibu, coconut cream, pineapple",
          },
          {
            name: "Black Cock",
            price: "₦3,000",
            ingredients:
              "Vodka, tequila, honey, Gin, whiskey, honey, lemon, coke ",
          },
          {
            name: "Suck Me Dry",
            price: "₦3,000",
            ingredients: "Tequila, orange juice, grenadine ",
          },
          {
            name: "I Slept With Jenifer",
            price: "₦3,000",
            ingredients:
              "Pineapple juice orange juice cranberry juice lemon juice, whiskey",
          },
          {
            name: "Long Island",
            price: "₦3,000",
            ingredients: "Vodka gin barcadi triple-sec tequila coke",
          },
          {
            name: "Ride Me Hard",
            price: "₦3,000",
            ingredients: "Vodka,blue curaçao orange juice ",
          },
          {
            name: "Room 306",
            price: "₦3,000",
            ingredients:
              "Vodka triple-sec barcadi tequila sprite blue curaçao ",
          },
          {
            name: "Gang Bang",
            price: "₦3,000",
            ingredients:
              "Grenadine triple Sec vodka passion fruit syrup orange nice ",
          },
          {
            name: "Broken heart",
            price: "₦3,000",
            ingredients: "Vodka, triple-sec, blue curaçao",
          },
          {
            name: "Cosmopolitan",
            price: "₦3,000",
            ingredients:
              "Vodka, triple-sec, lemon juice, cranberry juice, Cloud 9",
          },
        ],
      },
      {
        heading: "Mocktails",
        listHeading: "Mocktails",
        items: [
          {
            name: "Blowjob",
            price: "₦2,500",
            ingredients: "Orange jucie triple Sec honey grenadine ",
          },
          {
            name: "Virjin mojito",
            price: "₦2,500",
            ingredients: "Mint leaf, lime, simple syrup sprite",
          },
          {
            name: "Finger me",
            price: "₦2,500",
            ingredients: "Peach, mango juice, grenadine",
          },
          {
            name: "Chapman",
            price: "₦2,500",
            ingredients:
              "Sprite, orange jucie, cranberry juice, algosura bitters, aperitif, grenadine ",
          },
          {
            name: "Wet pant",
            price: "₦2,500",
            ingredients: "Pineapple juice, orange jucie, mint leaves",
          },
          {
            name: "Wet pussy",
            price: "₦2,500",
            ingredients: "Pineapple juice, orange juice, grenadine",
          },
        ],
      },
      {
        heading: "Smoothies",
        listHeading: "Smoothies & Fresh Juice",
        items: [
          {
            name: "Strawberry Daiquri",
            price: "₦3,500",
          },
          {
            name: "Pina colada",
            price: "₦3,500",
          },
          {
            name: "Best Green",
            price: "₦3,500",
          },
          {
            name: "Orange Juice",
            price: "",
          },
          {
            name: "Waterlemon Juice",
            price: "₦2,000",
          },
          {
            name: "Pineapple Juice",
            price: "₦2,000",
          },
          {
            name: "Apple Juice",
            price: "₦2,000",
          },
          {
            name: "Tangerine Juice",
            price: "₦2,000",
          },
          {
            name: "Black Currant",
            price: "₦2,000",
          },
          {
            name: "Carrot Juice",
            price: "₦2,000",
          },
        ],
      },
    ],
  },
];

interface item {
  name: string;
  price: string;
  ingredients?: string;
}

interface itemList {
  heading: string;
  listHeading: string;
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
        <p className="listHeading">
          {options[type].itemList[list].listHeading}
        </p>
        {options[type].itemList[list].items.map((item, index) => (
          <div key={index} className="item">
            <span>{item.name}</span>
            <span>{item.price}</span>
            {item.ingredients ? (
              <p className="descrip">{item.ingredients}</p>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
