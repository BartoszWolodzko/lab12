import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"about"}>About</Link>
                </li>
                <li>
                    <Link to={"services"}>Services</Link>
                </li>
                <li>
                    <Link to={"contact"}>Contact</Link>
                    <ul>
                        <li>
                            <Link to={"contact/de"}>De</Link>
                        </li>
                        <li>
                            <Link to={"contact/pl"}>Pl</Link>
                        </li>
                        <li>
                            <Link to={"contact/us"}>Us</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}