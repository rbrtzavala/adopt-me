import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import Details from "./Details";

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

const queryClient = new QueryClient({
  queries: {
    cacheTime: Infinity,
    staleTime: Infinity,
  }
})

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">
            Adopt Me!
          </Link>
        </header>
          <Routes>
            <Route path="/details/:id"  element={<Details />} />
            <Route path="/"  element={<SearchParams />} />
          </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);

// root.render(React.createElement(App));
root.render(<App />);
