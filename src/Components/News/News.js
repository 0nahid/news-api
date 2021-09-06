import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
const News = (props) => {
    const news = props.news;
    const { description, urlToImage: img, title, author, content, url } = news;
    return (
        <Row className="mt-4 p-3 shadow rounded">
            <Col lg={5}>
                <a href={url} rel="noreferrer nofollow" target="_blank"><img className="img-fluid rounded" src={img} alt="" /></a>
                <p><small>News by : {author}</small></p>
            </Col>
            <Col lg={7}>
                <h4>{title}</h4>
                <p>{description}</p>
                <p><small>{content}</small></p>
                <Button variant="dark"><a className="text-white text-decoration-none" href={url}>Read More...</a></Button>
            </Col>
        </Row>
    );
};

export default News;