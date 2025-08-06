import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './css/style.css';
import './css/article.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import Footer from './components/Footer';

function App() {
    const [searchTag, setSearchTag] = useState('');

    return (
        <Router>
            <div className="App">
                <Header onSearch={setSearchTag} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <ArticleList searchTag={searchTag} />
                            </>
                        }
                    />
                    <Route path="/articles/:id" element={<ArticlePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;