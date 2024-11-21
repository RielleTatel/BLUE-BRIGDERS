import './navbar.css';
export const PagesHeader = () => {

    return (
        <div>
            <navbar>
                <h1 className="title"> Blue Brigde </h1>
                {/* Will edit the header */}
                <ul>
                    <li>Donation</li>
                    <li>Volunteer</li>
                    <li>Goods</li>
                </ul>
            </navbar>
        </div>
    );
};

export default PagesHeader;