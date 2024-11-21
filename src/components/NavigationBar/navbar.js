import './navbar.css';
export const PagesHeader = () => {

function MyNavbar() {
    return (
        <div>
            <navbar>
                <h1 className="title"> Blue Brigde </h1>
                {/* Will edit the header */}
                <ul>
                    <li>Home</li>
                    <li>Donation</li>
                    <li>Volunteers</li>
                </ul>
            </div>
        </>
    );
}

export default PagesHeader;