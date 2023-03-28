import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  //static defaultProps={
  //  country: 'in' ,
  //  pageSize:12,
  //}
  //static PropTypes={
  //  country: PropTypes.string,
  //  pageSize:PropTypes.number,
  //}
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1,
           
        }
    }
    async componentDidMount(){          //lifecycle method. Tis will render after all the things of render are displayed
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6974e70222e8472fa16bbf2db7d81c6b&page=1&pageSize=${this.props.pageSize}`;
          this.setState({loading:true});
          let data=await fetch(url);
          let parseddata= await data.json()
          console.log(parseddata);
          this.setState({articles: parseddata.articles, totalResults:parseddata.totalResults, loading:false})
    } 

    handlePrevClick = async () =>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6974e70222e8472fa16bbf2db7d81c6b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parseddata= await data.json()
      console.log(parseddata);
      this.setState({
        page:this.state.page - 1,
        articles: parseddata.articles,   
        loading:false  

      })
       
    }  
    handleNextClick = async () =>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6974e70222e8472fa16bbf2db7d81c6b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parseddata= await data.json()
      console.log(parseddata);
      this.setState({
        page:this.state.page + 1,
        articles: parseddata.articles,     
        loading:false        

      })
      console.log("Next")
    }     
  render() {
    return (
        <div className='container my-3' >
            <h2>Daily News - Top Headlines of the day</h2>
            {this.state.loading && <Spinner/>}
            <div className='row'>
            
            
              {!this.state.loading && this.state.articles.map((element)=>{

                return <div className='col-md-4' key={element.url}>
                <NewsItem  title={element.title?element.title.slice(0,40):" "} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>       
            </div>
            })}
            </div>
            <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previos</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark" >Next &rarr;</button>
            </div>
    
        </div>
     
    )
  }
}

export default News
