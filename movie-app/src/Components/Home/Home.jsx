import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
// import myImage from "../../assests/movie-banner.jpg";

const apikey = "5cb3fa1ae2426eeec692bfe6c9481b26";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({ img }) => {
  return <img className="card" src={img} alt="movie-banner" />;
};

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>

    <div className="cards">
      {arr.map((ele, index) => (
        <Card img={`${imgUrl}${ele.poster_path}`} key={index} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upComingMovies, setupComingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowplayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
      setupComingMovies(results);
      console.log(results);
    };
    fetchUpcoming();

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`);
      setNowPlayingMovies(results);
      console.log(results);
    };
    fetchNowPlaying();

    const fetchPopularMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`);
      setPopularMovies(results);
      console.log(results);
    };
    fetchPopularMovies();

    const fetchTopRatedMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`);
      setTopRatedMovies(results);
      console.log(results);
    };
    fetchTopRatedMovies();

    // const fetchAllGenreMovies = async () => {
    //   const {
    //     data: { genres },
    //   } = await axios.get(
    //     `${url}/genre/movie/list/${topRated}?api_key=${apikey}`
    //   );
    //   setGenre(genres);
    // };
    // fetchAllGenreMovies();
  }, []);

  return (
    <section className="home">
      <div className="banner">Home</div>

      <Row title="Upcoming Movies" arr={upComingMovies} />
      <Row title="Popular Movies" arr={popularMovies} />
      <Row title="Top Rated Movies" arr={topRatedMovies} />
      <Row title="Now Playing Movies" arr={nowplayingMovies} />
    </section>
  );
};

export default Home;
