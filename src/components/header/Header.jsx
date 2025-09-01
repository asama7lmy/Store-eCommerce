import "./header.css";
import { useState } from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";
const Header = () => {
     const [toggle,setToggle] = useState(false);
return (
<header className="header">
<TopHeader setToggle={setToggle}/>
<MiddleHeader/>
<Navbar toggle={toggle} setToggle={setToggle}/>
</header> );
}
export default Header;
