import React from "react";
import axios from "axios";
import Movie from "./moive";
import "./App.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    number: 0,
    
  };
print=()=>{
  console.log(this.genre)
}
  getApi = async () => {
    const {
      data: {
        data: { movies: mov }, //객체 구조 분해 할당으로 그 값이 배열이여도 인덱스에 있는 값을 사용할 수 없다
      },
    } /*es6 문법 구조 분해 할당*/ = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=download_count"
    );
      console.log(mov)
    this.setState((state) => {
      return { movies: mov, isLoading: false};
    }); //setState함수에 되도록이면 함수를 전달하자__
    //위에 꺼는  this.setState(state=>({movies : mov, isLoading : false}))으로도 쓸수 있다.
    //console.log(this.state.movies)
  };
  componentDidMount() {
    const { isLoading } = this.state;
    if (!isLoading)
      setTimeout(() => {
        //(()=>{})() ===> 즉시 실행 화살표 함수
        // this.setState(current => ({isLoading:!current.isLoading}))
        //or this.setState(current => {return {isLoading:!currentLoading}})
        //this.setState({isLoading:!this.state.isLoading})
        this.setState({ isLoading: !isLoading });
      }, 6000); // or setTimeout(function(){~~})
    this.getApi();
  }

  render() {
    const { isLoading, movies} = this.state; //es6 == 비구조화 할당
    console.log(movies)
    
    return (
        <section className="container">
        {isLoading
          ? (<div className="loader">
              <span className="loadText">Loading...</span>
            </div>)
            : 
          <div className ="movies">
              {movies.map((movie) => {
                return (
                  <Movie
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    img={movie.medium_cover_image}
                    genres={movie.genres}
                    key={movie.id}
                  />
                );
              })}
          </div>
          
           }
        </section>
    );
  
  }
  
}
//{movies.map(movie=> (<Movie id={movie.id}year={movie.year} title={movie.title} summary={movie.summary}  />))} 50번째 줄은 다음과 같이 대체할 수 있음
export default App;
