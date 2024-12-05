import React from "react";
import Loader from "../components/loader";
import MainLayout from "../components/layouts/main.layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages";
import Configm from "../pages/confirm";
import NotFound from "../pages/not-found";
import MissedIt from "../pages/missed-it";

export default function Router() {
  return (
 
      <BrowserRouter>
        <Routes>
          <Route Component={MainLayout}>
            <Route path="/" Component={Home} />
            <Route path="/thank-you" Component={Configm} />
            <Route path="/missed-it" Component={MissedIt} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>

  );
}
