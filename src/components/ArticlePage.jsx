import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function ArticlePage() {
    const {id} = useParams();
    const [article, setArticle] = useState(null);

    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8093';

    useEffect(() => {
        fetch(`${apiBaseUrl}/v1/articles/${id}`)
            .then((response) => response.json())
            .then((data) => setArticle(data))
            .catch((error) => console.error('Ошибка:', error));
    }, [id]);

    if (!article) return <div className="container">Загрузка...</div>;

    return (
        <section className="article-page">
            <div className="container">
                <div className="article-header">
                    <div className="article-meta">
            <span className="article-date">
              {new Date(article.createdAt).toLocaleDateString('ru-RU')}
            </span>
                        <span className="article-tag">
              {article.tags.length > 0 ? article.tags[0].name : 'Без тега'}
            </span>
                    </div>
                    <h1>{article.title || article.description}</h1>
                    {/*<div className="article-author">*/}
                    {/*    <img*/}
                    {/*        className="author-avatar"*/}
                    {/*        src="https://via.placeholder.com/40"*/}
                    {/*        alt="Автор"*/}
                    {/*    />*/}
                    {/*    <span className="author-name">Дипсик Дипсикович</span>*/}
                    {/*</div>*/}
                </div>
                <div
                    className="article-content"
                    dangerouslySetInnerHTML={{__html: article.body}}
                />
                <div className="article-footer">
                    <div className="article-tags">
                        {article.tags.map((tag) => (
                            <a href={`/articles/filter?tags=${tag.name}`} key={tag.id}>
                                #{tag.name}
                            </a>
                        ))}
                    </div>
                    {/*<div className="article-share">*/}
                    {/*    <span>Поделиться:</span>*/}
                    {/*    <a href="#" className="share-icon">*/}
                    {/*        FB*/}
                    {/*    </a>*/}
                    {/*    <a href="#" className="share-icon">*/}
                    {/*        TW*/}
                    {/*    </a>*/}
                    {/*    <a href="#" className="share-icon">*/}
                    {/*        VK*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
}

export default ArticlePage;