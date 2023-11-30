import React from "react";
import './index.css';
export default class Movie extends React.Component{

    

    render(){
        
        const{title,plot,price,rating,fav,isInCart,star,poster}=this.props.movies;
        const{movies,addstar,decStar,handelfav,handelcart}=this.props;
        console.log(movies)
        return (
        <>
        <div className="main">
        <div className="movie-card">
            <div className="left">
                <img alt="poster"  src={poster}/>
            </div>
            <div className="right">
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs {price}</div>

         <div className="footer">
                  <div className="rating">{rating}</div>
             <div className="star-dis">
                <img  onClick={()=>decStar(movies)} src="https://cdn-icons-png.flaticon.com/128/56/56889.png"  className="str-btn"  alt="minus" />
                &nbsp;
                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="str-btn"/>
                &nbsp;
                <img alt="plus" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" className="str-btn"  onClick={()=>{addstar(movies)}}/>
               &nbsp;
               <span className="stars1">{star}</span>
                
                </div>
             
             <button onClick={()=>handelfav(movies)} className={fav?"favourite-btn":"-unfavouritebtn"}>{fav?"favourite":"unfavourite"}</button>
             <button onClick={()=>handelcart(movies)} className={isInCart?"cart-btn":"removecart"}>{isInCart?"Add To The cart":"Remove From cart"}</button>

            </div>

            </div>

           
        </div>
        </div>
        </>
        )
    }
}