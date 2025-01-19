import {BrowserRouter as Router, Link} from 'react-router-dom';

const Drawer = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-60 bg-blue-800 text-white space-y-4 h-full">
                <li><Link to="/create-publication">Create a publication</Link></li>
                <li>
                    <details>
                        <summary>Parent</summary>
                        <ul>
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li>
                                <details>
                                    <summary>Parent</summary>
                                    <ul>
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
                <li><a>Item 3</a></li>
                </ul>
        </div>
    );
};

export default Drawer;
