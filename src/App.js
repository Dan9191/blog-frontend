import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import Header from './components/Header';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
