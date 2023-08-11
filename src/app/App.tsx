import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "../feature/store";
import "./App.scss";

// Add lazy imports below. In future we will manage in different file.
const Home = lazy(() => import("../components/home"));

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

function Router(): React.ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// !TODO CREATE LOADER WITH BETTER UI

function Loader(): React.ReactElement {
  return <div>Loading...</div>;
}
