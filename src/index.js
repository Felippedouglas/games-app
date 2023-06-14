import React from 'react';
import Nav from './components/nav';
import Asside from './components/aside';
import './global.css';
import Home from './pages/home';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Game from './pages/game';
import Search from './pages/search';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

ReactDOM.render(
  <HashRouter>
    <Nav />
    <div className='content-app'>
      {1 == 2 &&
      <div className='div-em-desenvolvimento' id='div-em-desenvolvimento'>
        <span className='span-em-desenvolvimento'><i className="fa-solid fa-circle-exclamation"></i> Em Desenvolvimento! última atualização: 18/12/2022 | v 1.2.0</span>
        <button onClick={()=>document.getElementById("div-em-desenvolvimento").style.display = 'none'}><i className="fa-solid fa-xmark"></i></button>
      </div>
      }
      <Asside />
      <div className='div-pages-app'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/game/:gameName/:id" element={<Game/>}/>
          <Route path="/search/game=:gameName" exact element={<Search/>}/>
          <Route path="/search/genre=:genreName&:genre" exact element={<Search/>}/>
        </Routes>
      </div>
    </div>
  </HashRouter>,
  document.getElementById('root')
);