import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./articleStyle.css";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";

const Article = () => {
  const [article, setArticle] = useState(null);
  const [h, setH] = useState(null);
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      github,
      
    }`
      )
      .then((data) => setArticle(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!article)
    return (
      <div className="jumbotron-fluid">
        <div className="loading">
          <span className="spinner-grow"></span>
          Loading...
        </div>
      </div>
    );
  return (
    <div className="col container article-container">
      <div className="row  article-title">{article.title}</div>
      <div className="row img-container">
        <img
          className="img-thumbnail article-img"
          src={article.mainImage.asset.url}
          alt={article.mainImage.alt}
        />
      </div>
      <div className="row card-container">
        <div className=" article-body">
          <BlockContent
            blocks={article.body}
            projectId="yfeql16l"
            dataset="production"
          />
        </div>
      </div>
      <div className="row article-footer">
        <a className="article-github" href={article.github} target="_blank">
          <span>github</span>
        </a>
      </div>
    </div>
  );
};

export default Article;
