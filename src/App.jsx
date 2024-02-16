import { useState, lazy, Suspense } from "react";
// import { createRoot } from "react-dom/client";
// import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
// import SearchParams from "./SearchParams";
// import Details from "./Details";

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

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  queries: {
    cacheTime: Infinity,
    staleTime: Infinity,
  },
});

const App = () => {
  const adoptedPet = useState(null);

  return (
    <div
      style={{
        background: "url(https://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <div className="loading-pane">
              <h2 className="loader">🐼</h2>
            </div>
          }
        >
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>

            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </Suspense>
      </QueryClientProvider>
    </div>
  );
};

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(React.createElement(App));
// root.render(<App />);

export default App;
