import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Layout from "./component/Layout";
import Store from "./component/Store";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Loginform from "./component/Loginform";
import Unpayed from "./component/Unpayed"
import Frw from "./component/Frw"
import Home from"./component/Home";
import Buy from"./component/Buy";
import Review from"./component/Review";
import Home1 from"./component/Home1";
import Signup from"./component/Signup"

import Layoutdash from "./dashboard/Layoutdash";
import Dashview from"./dashboard/Dashview";
import Product from "./dashboard/Product";
import Products from "./dashboard/Products";
import Profile from "./dashboard/Profile";
import Logout from "./dashboard/Logout";
import Orders from"./dashboard/Orders";
import Payments from "./dashboard/Payments";
import Mydashboard from "./dashboard/Mydashboard";
import Categories from "./dashboard/Categories";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home1 />} />
          <Route path="Home1"element={<Home1/>}/>
          <Route path="Home"element={<Home/>}/>
          <Route path="Buy"element={<Buy/>}/>
          <Route path="Store" element={<Store />} />
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Loginform" element={<Loginform/>}/>
          <Route path="Unpayed"element={<Unpayed/>}/>
          <Route path="Frw"element={<Frw/>}/>
          <Route path="Review"element={<Review/>}/>
          <Route path="Signup"element={<Signup/>}/>
        </Route>
        <Route path="/" element={<Layoutdash/>}>
        <Route  path="/dashboard" index element={<Dashview/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/dashboard/Product" element={<Product/>}/>
        <Route path="/dashboard/Products" element={<Products/>}/>
        <Route path="/Logout" element={<Logout/>}/>
        <Route path="/dashboard/Orders" element={<Orders/>}/>
        <Route path="/dashboard/Payments"element={<Payments/>}/>
        <Route path="/dashboard/Categories"element={<Categories/>}/>
        <Route path="/dashboard/Mydashboard"element={<Mydashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
