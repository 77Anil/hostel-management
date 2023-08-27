import { ThemeProvider } from "@mui/material";
import React, { lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import { store } from "../feature/store";
import MainLayout from "../pages/mainLayout";
import SignUp from "../pages/signUp";
import ROUTES from "../utils/constants/routes";
import theme from "../utils/theme";
import "./App.scss";

// Add lazy imports below. In future we will manage in different file.
const Home = lazy(() => import("../pages/home"));

export default function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

function Router(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.signUp} element={<SignUp />} />
        <Route path={ROUTES.root} element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
