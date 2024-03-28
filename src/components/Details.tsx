import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  description: string;
}

interface Data {
  count: number;
  next: string;
  previous: string;
  results: Article[];
}
const Details = () => {
  const { id } = useParams();

  const [articleDetails, setArticleDetails] = useState();

  const fetchArticleDetails = () => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel caricamento dei dati");
        }
      })
      .then((data: Data) => {
        setArticleDetails(data);
      })
      .catch((error) => console.error("Errore:", error));
  };

  useEffect(() => {
    fetchArticleDetails();
  }, [id]);

  return (
    <div>
      <h1>{articleDetails.title}</h1>
      <img src={articleDetails.image_url} alt={articleDetails.title} style={{ maxWidth: "100%" }} />
      <p>{articleDetails.description}</p>
      <a href={articleDetails.url} target="_blank" rel="noopener noreferrer">
        Leggi di più
      </a>
    </div>
  );
};

export default Details;
