import React from 'react'
import { useEffect, useState } from 'react';
import NewsItem from '../NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pagesize=${props.pagesize}&page=${page}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedata = await data.json()
    props.setProgress(50);

    setarticles(parsedata.articles);
    settotalResults(parsedata.totalResults);
    setloading(false);

    props.setProgress(100);
  }
  
  useEffect(() => {
    document.title = `${capFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    //eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pagesize=${props.pagesize}&page=${page+1}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedata = await data.json()
    setarticles(articles.concat(parsedata.articles));
    settotalResults(parsedata.totalResults);
    setloading(false);
  };
  return (
    <>
      <h1 className='text-center' style={{margin: '30px 0px', marginTop:'90px'}}>Top {capFirstLetter(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })
            }
          </div>
        </div>
      </InfiniteScroll>

    </>
  )
}
export default News
