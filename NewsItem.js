import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,publishedAt,source}=this.props;
    return (
        <div className="card my-3" >
        <img src={!imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/230315230740-01-single-family-homes-fl-102722-file.jpg?c=16x9&q=w_800,c_fill":imageUrl} className="card-img-top" alt="" style={{height:'10rem'}}/>
        <div className="card-body ">
          <h5 className="card-title" style={{'textAlign':'left'}} >{title}...</h5>
          <span style={{zIndex:'1', left: '90%'}} class="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
          {source}</span>
          <p className="card-text" style={{'textAlign':'left'}}>{description}...</p>
          <p class="card-text" style={{'textAlign':'left'}}><small class="text-body-secondary">By {!author?"Unknown":author} on {publishedAt}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
        </div>
      </div>
    )
  }
}

export default NewsItem