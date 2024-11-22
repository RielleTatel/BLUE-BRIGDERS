import "./navbar.css";
function MyNavbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="/Logo.png" alt="BlueRidgeLogo" />
                </div>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Donation</a></li>
                    <li><a>Volunteers</a></li>
                    <li><a>Goods</a></li>
                </ul>
                <input placeholder="Looking for something?"></input>
            </div>
        </>
    );
}

export default MyNavbar;
