import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar()
{
    const [showSideBar, setShowSideBar] = useState(false)

    const handleSideBar = () => {
        //toggles side navbar
        setShowSideBar( !showSideBar )
    }

    return(
        <div className="navbar">
            <Link to="#" className="navbarBrand">TechViews</Link>

            {/* button to toggle the state of showSideBar */}
            <p className="open-side-navbar-btn" onClick={ handleSideBar }>
                <ion-icon name="menu-outline"></ion-icon>
            </p>

            { /* toggles sidenavbar by adding a css class depending on showSideBar 
                    stateful variable */}
            <div className={`mobile-side-navbar ${showSideBar && 'active'}`}>
                <p className="close-side-navbar-btn" onClick={ handleSideBar }>
                    <ion-icon name="close-outline"></ion-icon>
                </p>
                <Link href="#" >Articles</Link>
                <Link href="#" >News</Link>
                <Link href="#" >About</Link>
                <Link href="#" >Contact</Link>
            </div>
            
            {/* this shows on after 720px */}
            <div className="desktop-navbar">
                <Link href="#" className="navbarLink">Articles</Link>
                <Link href="#" className="navbarLink">News</Link>
                <Link href="#" className="navbarLink">Contact</Link>
                <Link href="#" className="navbarLink">About</Link>
            </div>
        </div>
    )
}

export default Navbar;