import React, { Component } from 'react';
import bgvideo from '../assets/images/bg.mp4';
import CardList from '../components/Cards';
import img1 from '../assets/images/sunset-img.png';
import img2 from '../assets/images/mangabooks.png';
import img3 from '../assets/images/ps4-img.png';
import img4 from '../assets/images/movie.png';
import img5 from '../assets/images/covid.png';
import img6 from '../assets/images/sports.png';

const cards = [
  {title:"Weather Search", caption:"Information about weather", cardImage:img1, btnClick:"//jerocam.github.io/weather-jerocam/"},
  {title:"Manga Books", caption:"Top manga from an API", cardImage:img2, btnClick: "//jerocam.github.io/jerocam-manga-db/"},
  {title:"Video-games", caption:"Database about videogames", cardImage:img3, btnClick: "//jerocam.github.io/jerocam-db-games/"},
  {title:"Movie Search", caption:"Find your favorite movie", cardImage:img4, btnClick: "//jerocam.github.io/jerocam-db-movies/"},
  {title:"COVID-19 Info", caption:"Statistics about COVID-19", cardImage:img5, btnClick: "//serene-euler-b35824.netlify.app/"},
  {title:"Sports Live Search", caption:"Find your favorite sport info", cardImage:img6, btnClick: "//jerocam.github.io/jerocam-db-movies/"}
];

class Home extends Component {
  render() {
    const VideoBg = ()=>{
        return (
          <video className="vbg" autoPlay playsInline muted loop src={bgvideo}/>
        );
      };
      
    return (
        <main>
            <div>
                <VideoBg />
            </div>
            <section id="projects" className="text-center py-5">
                <div className="container">
                    <h1 className="h1-responsive font-weight-bold mb-5 z-deep-1">Web Projects built with React.js <br/>and REST APIs</h1>
                    <div className="text-center">
                        <CardList cardOptions={cards}/>
                    </div>
                </div>
            </section>
        </main>
    );
  }
}

export default Home;