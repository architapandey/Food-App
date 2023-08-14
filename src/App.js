import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import About from "./Components/About";
import Menu from "./Components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import React, { Suspense, lazy } from "react";
import UserContext from "./utils/UserContext";
import Cart from "./Components/Cart";

//lazy loading
const GroceryComp = lazy(() => import("./Components/Grocery"));

function App() {
  return (
    <>
      <UserContext.Provider value={{ loggedInUser: "Archita" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/grocery"
            element={
              <Suspense fallback={<h1>Loading</h1>}>
                <GroceryComp />
              </Suspense>
            }
          />
          <Route path="/restaurant/:resId" element={<Menu />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
