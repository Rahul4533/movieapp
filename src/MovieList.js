import React from "react";
import Movie from "./Movie";

export default class  Movielist extends React.Component {
    
        
        
        // eslint-disable-next-line no-unused-vars
        render(){
          const {movies,addstar,decStar,handelfav,handelcart} =  this.props;
         console.log(this.props)
        return(
             <div className="main">
                {
                  movies.map((movie,index)=>(<Movie movies = {movie}
                    key = {index}
                    addstar = {addstar}
                     decStar = {decStar}
                     handelfav = {handelfav}
                     handelcart = {handelcart}/>
                      ))}        
            </div>
            
        )
    }
  }
