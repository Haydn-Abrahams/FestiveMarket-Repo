import "../header/index.css";
import Navbar from "../navbar/navbar.jsx";

function Header() {
    return (
        <header>
            <Navbar />
            <div className="content">
                <div className="heading-container">
                    <h1 class="display-2">The Festive Market</h1>
                </div>
                <div className="date-container">
                    <h5> 3 December - 6 December 2025</h5>
                </div>
                <div className="cta-container">
                    <button type="button" className="btn btn-secondary">Explore Event</button>
                </div>
                <div className="blank-space"></div>
            </div>
        </header>
    );
}
export default Header;