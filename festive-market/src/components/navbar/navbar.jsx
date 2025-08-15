import { Link } from "react-router-dom";
import "../navbar/index.css";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Vendors</Link></li>
                    <li><Link to="/gallery">Venue</Link></li>
                    <li><Link to="/tickets">Booking</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
