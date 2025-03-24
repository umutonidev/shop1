import React from "react";
import {Outlet} from "react-router-dom";
import Navbardash from "./Navbardash";
import Sidebardash from"./Sidebardash";
const Layoutdash=()=>{
    return(
        <div>
        <Navbardash/>
        <Sidebardash/>
        <Outlet/>

        </div>

    )
}
 export default Layoutdash