import axios from "axios";
import { axiosWithToken } from '../../axiosWithToken';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ArticlesByAuthor.css";
import { useNavigate, Outlet } from "react-router-dom";
import img from '../../Assets/no-posts.jpg';

function ArticlesByAuthor() {
  const [articlesList, setArticlesList] = useState([]);
  const [deletedArticlesList, setDeletedArticlesList] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useSelector(
    (state) => state.userAuthoruserAuthorLoginReducer
  );

  const getArticlesOfCurrentAuthor = async () => {
    try {
      let res = await axiosWithToken.get(`http://localhost:4000/author-api/articles/${currentUser.username}`);
      if (Array.isArray(res.data.payload)) {
        setArticlesList(res.data.payload);
      } else {
        console.error('Articles response is not an array:', res.data.payload);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const getDeletedArticlesOfCurrentAuthor = async () => {
    try {
      let res = await axiosWithToken.get(`http://localhost:4000/author-api/deletedArticles/${currentUser.username}`);
      if (Array.isArray(res.data.payload)) {
        setDeletedArticlesList(res.data.payload);
      } else {
        console.error('Deleted articles response is not an array:', res.data.payload);
      }
    } catch (error) {
      console.error('Error fetching deleted articles:', error);
    }
  };

  const readArticleByArticleId = (articleObj) => {
    navigate(`../article/${articleObj.articleId}`, { state: articleObj });
  };

  useEffect(() => {
    getArticlesOfCurrentAuthor();
    getDeletedArticlesOfCurrentAuthor();
  }, [currentUser]);

  return (
    <div>
      <h1>Posted Articles</h1>
      {
        articlesList.length === 0 ? (
          <img src={img} alt="" className="w-50 d-block mx-auto"/>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-2">
            {articlesList.map((article) => (
              <div className="col" key={article.articleId}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">
                      {article.content ? article.content.substring(0, 80) + "...." : ''}
                    </p>
                    <button className="btn btn-light" onClick={() => readArticleByArticleId(article)}>
                      <span>Read More</span>
                    </button>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">
                      Last updated on {article.dateOfModification ? article.dateOfModification.substring(0, 10) : ''}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }
      {
        deletedArticlesList.length !== 0 && (
          <div className="mt-5">
            <h1>Deleted Articles</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-2">
              {deletedArticlesList.map((article) => (
                <div className="col" key={article.articleId}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">
                        {article.content ? article.content.substring(0, 80) + "...." : ''}
                      </p>
                      <button className="btn btn-light" onClick={() => readArticleByArticleId(article)}>
                        <span>Read More</span>
                      </button>
                    </div>
                    <div className="card-footer">
                      <small className="text-body-secondary">
                        Last updated on {article.dateOfModification ? article.dateOfModification.substring(0, 10) : ''}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
      <Outlet />
    </div>
  );
}

export default ArticlesByAuthor;
