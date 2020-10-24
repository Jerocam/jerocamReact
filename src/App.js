import React, { Component } from 'react';
import './styles/App.css';
// import Routes from './routes/routes';
import Navbar from './components/navbar';
// import { FaAngellist, FaLinkedin, FaGithub} from 'react-icons/fa';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Error from './pages/error';

class App extends Component {
  render(){
    return (
      <HashRouter basename="/">
        <div>
          <Navbar/>
          {/* <Switch> */}
            {/* <Route exact path="/" component={()=> (<Redirect to="/home"/>)} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          {/* </Switch> */}

          {/* <div className="container alert alert-primary text-center" role="alert">
        <h5> Click <a href="https://github.com/Jerocam/jerocamReact" className="alert-link">the link</a> to get the source code from GitHub.</h5>
      </div>

      <footer className="page-footer font-small unique-color-dark darken-3 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <p className="text-center">Visit my links</p>
              <div className="flex-center smedia mb-4">
                <a href="https://angel.co/u/jeronimo-jose-ocampos" target="_blank" rel="noopener noreferrer"><FaAngellist /></a>
                <a href="https://github.com/Jerocam" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/jerocam-226/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">&copy; 2020 Copyright - 
          <a href="https://jerocam.com/"> jerocam.com</a>
        </div>
      </footer> */}
        </div>
      </HashRouter>
    );
  }
}


// function App() {

//   return (
    
//     <div className="body-react">

//       <Navbar/>

//       <Routes/>
      
//       <div className="container alert alert-primary text-center" role="alert">
//         <h5> Click <a href="https://github.com/Jerocam/jerocamReact" className="alert-link">the link</a> to get the source code from GitHub.</h5>
//       </div>

//       <footer className="page-footer font-small unique-color-dark darken-3 pt-3">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 mb-4">
//               <p className="text-center">Visit my links</p>
//               <div className="flex-center smedia mb-4">
//                 <a href="https://angel.co/u/jeronimo-jose-ocampos" target="_blank" rel="noopener noreferrer"><FaAngellist /></a>
//                 <a href="https://github.com/Jerocam" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//                 <a href="https://www.linkedin.com/in/jerocam-226/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="footer-copyright text-center py-3">&copy; 2020 Copyright - 
//           <a href="https://jerocam.com/"> jerocam.com</a>
//         </div>
//       </footer>

//     </div>
    
//   );
// }

export default App;
