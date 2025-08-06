import React from 'react';

function ArticleCard({ article }) {
    return (
        <div className="article-card">
            <div
                className="article-img"
                style={{ backgroundImage: `url(${article.mainPicture})` }}
            ></div>
            <div className="article-content">
                <div className="article-meta">
          <span>
            {article.createdAt
                ? new Date(article.createdAt).toLocaleDateString('ru-RU')
                : 'Дата неизвестна'}
          </span>
                    <span className="article-tag">
            {article.tags.length > 0 ? article.tags[0].name : 'Без тега'}
          </span>
                </div>
                <h3>{article.title || article.description}</h3>
                <p>{article.description}</p>
                <span className="read-more">Читать далее →</span>
            </div>
        </div>
    );
}

export default ArticleCard;