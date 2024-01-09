import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      breed: "Pitty",
      name: "Pandi",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      breed: "Lab Pit mix",
      name: "Borres Torres",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      breed: "Griffon",
      name: "Sergeant Tibbs",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
