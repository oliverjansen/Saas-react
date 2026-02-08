import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements, // ✅ add this import
  RouterProvider,
  Route
} from "react-router-dom";

import HomePage from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from './layouts/MainLayout';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="about" element={<About />} />
        <Route path="contactus" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router}/>;
};

export default App;
