import React, { useEffect, useState } from "react";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FetchComponent = function () {
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

  const [news, setNews] = useState<Article[]>([]);

  const fetchArticles = function () {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Err");
        }
      })
      .then((data: Data) => {
        setNews(data.results);
      })
      .catch((error) => console.log("Err", error));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <Container fluid>
        <Row>
          {news.map((article) => (
            <Col className="col-3 my-3 mx-3" key={article.id}>
              <Link to={`/detail/${article.id}`} style={{ textDecoration: "none" }}>
                <Card style={{ height: "500px" }} className="d-flex">
                  <Card.Img
                    variant="top"
                    src={article.image_url}
                    style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                  </Card.Body>
                  <Button className="btn btn-primary" style={{ width: "100px" }}>
                    discover
                  </Button>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FetchComponent;
