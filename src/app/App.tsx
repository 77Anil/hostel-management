import { Skeleton } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login";
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
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// !TODO CREATE LOADER WITH BETTER UI

function Loader(): React.ReactElement {
  return <Skeleton variant="rectangular" width={210} height={118} />;
}
