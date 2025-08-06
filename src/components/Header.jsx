import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header({ onSearch }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        Kumiko
                    </Link>
                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                    <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
                        <ul>
                            {/*<li>*/}
                            {/*    <Link to="/">Главная</Link>*/}
                            {/*</li>*/}
                            <li>
                                <Link to="/">Статьи</Link>
                            </li>
                            <li>
                                <Link to="/about">О проекте</Link>
                            </li>
                        </ul>
                    </nav>
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>
        </header>
    );
}

export default Header;