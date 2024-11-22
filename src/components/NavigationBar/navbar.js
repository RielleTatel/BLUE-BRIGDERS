import { Link } from "react-router-dom";
import "./navbar.css";

function MyNavbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <h1>Blue Ridge</h1>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page1">Donation</Link></li>
                    <li><Link to="/page2">Volunteers</Link></li>
                    <li><Link to="/goods">Goods</Link></li>
                </ul>
                <input placeholder="Looking for something?"></input>
            </div>
        </>
    );
}

export default MyNavbar;
