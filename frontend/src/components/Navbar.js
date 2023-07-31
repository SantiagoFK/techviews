import { Link } from "react-router-dom";

function Navbar()
{
    return(
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="#">About</Link>
            </li>
            <li>
                <Link to="#">Contact</Link>
            </li>
        </ul>
    )
}

export default Navbar;