import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [tag, setTag] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(tag);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Поиск по тегам..."
                value={tag}
                onChange={(e) => setTag(e.target.value)}
            />
            <button type="submit" className="btn">
                Найти
            </button>
        </form>
    );
}

export default SearchBar;