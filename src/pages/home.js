import React, { Component } from 'react';
import bgvideo from '../assets/images/bg.mp4';
// import CardList from '../components/Cards';
// import img1 from '../assets/images/sunset-img.png';
// import img2 from '../assets/images/form-img.png';
// import img3 from '../assets/images/ps4-img.png';

// const cards = [
//   {title:"Weather", caption:"Applications about weather", cardImage:img1, btnClick:"//www.google.com"},
//   {title:"Forms", caption:"Complete Form using with React", cardImage:img2, btnClick: "//www.facebook.com"},
//   {title:"Video-games", caption:"Multiple pictures, sliders, gallery and others", cardImage:img3, btnClick: "//www.github.com"}
// ];

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
                    <h2 className="h1-responsive font-weight-bold mb-5">My Projects</h2>
                    <div className="row text-center">
                        {/* <CardList cardOptions={cards}/> */}
                    </div>
                </div>
            </section>
      </main>
    );
  }
}

export default Home;