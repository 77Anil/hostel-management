import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home";
import { store } from "../feature/store";
import "./App.scss";

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
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
