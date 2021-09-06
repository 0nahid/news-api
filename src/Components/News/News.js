import React from 'react';
const News = (props) => {
    console.log(props.news);
    const news = props.news;
    return (
        <>
            <p>{news.description}</p>
        </>
    );
};

export default News;