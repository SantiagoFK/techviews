import { Link } from "react-router-dom";

function Navbar()
{
    return(
        <div className="navbar">
        <Link to="#" className="navbarBrand">TechViews</Link>

        {/* This shows on mobile by default */}
        <p className="open-side-navbar-btn">X</p>
        <div className="mobile-side-navbar">
            <p className="close-side-navbar-btn">&times</p>
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