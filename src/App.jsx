// import React from "react";
import { createRoot } from "react-dom";
import Pet from "./pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       breed: "Pitty",
//       name: "Pandi",
//     }),
//     React.createElement(Pet, {
//       animal: "Dog",
//       breed: "Lab Pit mix",
//       name: "Borres Torres",
//     }),
//     React.createElement(Pet, {
//       animal: "Dog",
//       breed: "Griffon",
//       name: "Sergeant Tibbs",
//     }),
//   ]);
// };

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Pandi" animal="Dog" bread="Pitty" />
    <Pet name="Borres Torres" animal="Dog" bread="Lab Pitt Mix" />
    <Pet name="Seagent Tibbs" animal="Dog" bread="Griffon" />
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);

// root.render(React.createElement(App));
root.render(<App />);
