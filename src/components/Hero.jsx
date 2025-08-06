import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <h1>Искусство Kumiko: традиции и современность</h1>
                <p>
                    Исследуйте мир традиционного японского деревянного искусства через наши
                    статьи и материалы.
                </p>
                <Link to="/articles/1" className="btn">
                    Читать последнюю статью
                </Link>
            </div>
        </section>
    );
}

export default Hero;