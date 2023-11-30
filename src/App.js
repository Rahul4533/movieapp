
import MovieList from "./MovieList";
import React from "react"
import {movies} from "./movieArray"
import Navbar from "./Navbar";


 export default class App extends React.Component
{
    constructor(){
        super();
        this.state={
           movies: movies,
           cartCount:0
        }
    }

    handelincStar=(movie)=>{
        const{movies}=this.state;
        const mid=movies.indexOf(movie);
        if(movies[mid].star <5){
           movies[mid].star+=0.5;
        }
        this.setState({
            movies
        });
    
           
    }

    handeldecStar=(movie)=>{
        const{movies}=this.state;
        const mid=movies.indexOf(movie);
        if(movies[mid].star >0){
           movies[mid].star-=0.5;
        }
        this.setState({
            movies
        });
      

  
    }


    handfav=(movie)=>{
      const{movies}=this.state;
      const mid=movies.indexOf(movie);

      movies[mid].fav =!movies[mid].fav;
       
      this.setState({
        movies
      })



    }


    handcart=(movie)=>{
      const{movies}=this.state;
      const mid=movies.indexOf(movie);

      movies[mid].isInCart =!movies[mid].isInCart;
       
      this.setState({
        movies
      })



    }

    render(){
        const {movies}=this.state;
        
    return(
        
        <>
      <Navbar />
      <MovieList movies ={movies}
                 addstar = {this.handelincStar}
                 decStar = {this.handeldecStar}
                 handelfav = {this.handfav}
                 handelcart = {this.handcart}/>
      </>
    )
}
}

