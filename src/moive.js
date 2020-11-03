import React from "react";
import PropTypes from "prop-types";

const Movie = (props) => {
  let len = Object.keys(props.genres).length;
  let newGenre = [];
  (function a(){
    for(let i = 0;i<len;i++){
      console.log(props.genres[i]);
      if(i!==len-1)
        newGenre.push(props.genres[i]+", ")
      else
      newGenre.push(props.genres[i])
    }
  }())

  //jsx에서는 연 태그는 무조건 닫아야 한다, img태그는 <img/>혹은 <img></img>로 하면 된다
  return(
        <div className ="in_movies">
          <img src = {props.img} alt = {props.title} title={props.title}/>
        <div className = "contents">
          <h2 className = "mov_title">{props.title}</h2>
          <h4 className = "mov_year">{props.year}</h4>
          <div className = "genre_Contents">
              <h5 className ="genres">Gerne : {newGenre}</h5>
          </div>
          <p className = "mov_summary">{props.summary.slice(0,140)}...</p>
        </div>
      </div>
  ); 
};
Movie.propTypes = {
  id: PropTypes.number,
  year: PropTypes.number,
  title: PropTypes.string,
  summary: PropTypes.string,
  genres : PropTypes.object,
  img: PropTypes.string,  
  key : PropTypes.number
};
export default Movie;
