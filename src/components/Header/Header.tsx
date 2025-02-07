import { useState } from "react";
import "../Header/Header.scss";
import HeaderLogo from "../../assets/LOGO.png";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const HeaderMenuItems = [
        { id: 1, name: "Features", link: "#" },
        { id: 2, name: "Resources", link: "#" },
        { id: 3, name: "Comparison", link: "#" },
        { id: 4, name: "Blogs", link: "#" },
    ];

    return (
        <header className="Header">
            <div className="header_logo">
                <img src={HeaderLogo} alt="Header_logo" />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation Menu */}
            <nav className={`Header-menu ${isOpen ? "open" : ""}`}>
                <ul>
                    {HeaderMenuItems.map((menu) => (
                        <li key={menu.id}>
                            <a href={menu.link} onClick={() => setIsOpen(false)}>
                                {menu.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
