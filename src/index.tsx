import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./components/SearchBox/Search";
import SearchResult from "./components/SearchResult/SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Search />
      </div>
    ),
  },
  {
    path: "search",
    element: (
      <div>
        <SearchResult />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
