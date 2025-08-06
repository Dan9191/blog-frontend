import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';

function ArticleList({ searchTag }) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const url = searchTag
            ? `http://localhost:8093/api/articles/filter?tags=${encodeURIComponent(searchTag)}`
            : `http://localhost:8093/api/articles?page=${page}&size=5&sort=createdAt,desc`;
        console.log(url)

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('API response:', data); // Логируем ответ для диагностики
                setArticles(data.content || []);
                setTotalPages(data.totalPages || 1);
                setError(null);
            })
            .catch((error) => {
                console.error('Ошибка при загрузке статей:', error);
                setError('Не удалось загрузить статьи. Попробуйте позже.');
                setArticles([]);
            })
            .finally(() => setLoading(false));
    }, [searchTag, page]);

    return (
        <section className="articles">
            <div className="container">
                <h2>Последние статьи</h2>
                {loading && <div className="loading">Загрузка...</div>}
                {error && <div className="error">{error}</div>}
                {!loading && articles.length === 0 && !error && (
                    <div className="no-articles">Статьи не найдены</div>
                )}
                <div className="article-grid">
                    {articles.map((article) => (
                        <Link to={`/articles/${article.id}`} key={article.id}>
                            <ArticleCard article={article} />
                        </Link>
                    ))}
                </div>
                <div className="pagination">
                    <button
                        disabled={page === 0 || loading}
                        onClick={() => setPage(page - 1)}
                        className="btn"
                    >
                        Назад
                    </button>
                    <span>
            Страница {page + 1} из {totalPages}
          </span>
                    <button
                        disabled={page >= totalPages - 1 || loading}
                        onClick={() => setPage(page + 1)}
                        className="btn"
                    >
                        Вперед
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ArticleList;