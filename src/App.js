import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';


function App() {
  const apiKey = 'https://newsapi.org/v2/top-headlines?country=us&?q=nasa&ln=en&apiKey=6b23a9ae371c4946a324f098d26ca7da';
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(apiKey)
      .then(response => response.json())
      .then(data => setNews(data.articles))
  })
  return (
    <>
      <Header></Header>
      <div className="container">
        {news.map(news => <News news={news} key={news.url} ></News>)}
      </div>
    </>
  );
}

export default App;
