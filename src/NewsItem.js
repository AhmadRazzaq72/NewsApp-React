import React from "react";

const NewsItem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div className='container my-3'>
      <div className="card">
        <img src={!imageurl ? "https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" : imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...
            <span className="badge rounded-pill text-bg-secondary">{source}</span>
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-dark btn-sm">Read More</a>
        </div>
      </div></div>

  )
}
export default NewsItem