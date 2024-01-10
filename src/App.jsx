import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

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
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);

// root.render(React.createElement(App));
root.render(<App />);
