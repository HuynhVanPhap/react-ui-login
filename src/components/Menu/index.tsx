import './styles.scss';

import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <div className="menu-wrapper">
            <div className="menu-container">
                <ul>
                    <li key="login">
                        <Link to="login">Go to Login Page {'->'}</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}