import { Link } from "react-router-dom";
import "../navbar/index.css";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#about-section">About</a></li>
                    <li><a href="#vendors-section">Vendors</a></li>
                    <li><a href="#venue-section">Venue</a></li>
                    <li><Link to="/tickets">Booking</Link></li>
                    <li><a href="#contact-section">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
