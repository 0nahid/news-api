import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';


function App() {
  const apiKey = 'https://newsapi.org/v2/everything?q=tesla&from=2021-08-05&sortBy=publishedAt&apiKey=6b23a9ae371c4946a324f098d26ca7da';
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(apiKey)
      .then(response => response.json())
      .then(data => setNews(data.articles))
  })
  return (
    <div>
      <Header></Header>
      {news.map(news => <News news={news} ></News>)}
    </div>
  );
}

export default App;
