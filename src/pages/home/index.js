import { useEffect, React, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiKey } from "../../config/key";
import { ContainerHome } from "./style";

//swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

export default function Home() {

  const [ games, setGames ] = useState([]);

  const [ plataforma, setPlataforma ] = useState();
  const [ pagina, setPagina ] = useState(1);

  useEffect(() => {

    if (plataforma) {
      fetch(`https://api.rawg.io/api/games?key=${ApiKey}&parent_platforms=${plataforma}&ordering=relevance&page=${pagina}`)
      .then(Response => Response.json())
      .then(data => {
        setGames(data.results);

        /*&parent_platforms=${plataforma} */
      });
    } else {
      fetch(`https://api.rawg.io/api/games?key=${ApiKey}&page=${pagina}`)
      .then(Response => Response.json())
      .then(data => {
        setGames(data.results);
      });
    }

    setTimeout(()=>{
      window.scrollTo(0, 0);
    }, 1000)
        
  }, [plataforma, pagina]);

  return (
    <ContainerHome>
      <h2 className="h2-title">Jogos Populares</h2>
      <div className="div-swiper-select-plataformas">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={0}
          freeMode={false}
          pagination={{
          clickable: true,
          }}
          modules={[FreeMode]}
          id="swiper-slide" className="mySwiper slide-select-plataformas">
            <SwiperSlide className="swiper-select-plataformas"><button className={`plataforma-select ${!plataforma && 'plataforma'}`} onClick={()=>setPlataforma()}>Populares</button></SwiperSlide>
            <SwiperSlide className="swiper-select-plataformas"><button className={`plataforma-select ${plataforma == 4 ? 'plataforma' : ''}`} onClick={()=>setPlataforma(4)}>Pc</button></SwiperSlide>
            <SwiperSlide className="swiper-select-plataformas"><button className={`plataforma-select ${plataforma == 1 ? 'plataforma' : ''}`} onClick={()=>setPlataforma(1)}>Xbox One</button></SwiperSlide>
            <SwiperSlide className="swiper-select-plataformas"><button className={`plataforma-select ${plataforma == 14 ? 'plataforma' : ''}`} onClick={()=>setPlataforma(14)}>Xbox 360</button></SwiperSlide>
            <SwiperSlide className="swiper-select-plataformas"><button className={`plataforma-select ${plataforma == 3 ? 'plataforma' : ''}`} onClick={()=>setPlataforma(3)}>iOS</button></SwiperSlide>
            <SwiperSlide className="swiper-select-plataformas"><button className={`plataforma-select ${plataforma == 5 ? 'plataforma' : ''}`} onClick={()=>setPlataforma(5)}>Mac</button></SwiperSlide>
            <SwiperSlide className="swiper-select-plataformas"><button className={`plataforma-select ${plataforma == 6 ? 'plataforma' : ''}`} onClick={()=>setPlataforma(6)}>Linux</button></SwiperSlide>
            <SwiperSlide className="swiper-select-plataformas"><button className={`plataforma-select ${plataforma == 7 ? 'plataforma' : ''}`} onClick={()=>setPlataforma(7)}>Nintendo Switch</button></SwiperSlide>
          </Swiper>
        </div>

      <div className="games">
        {games.map((game)=> {
          return (
            <Link to={`/game/${game.slug}/${game.id}`} key={`${game.slug}/${game.id}`}>
              <div className="game" key={`${game.name}-${game.id}`}>
                <img loading="lazy" src={game.background_image} alt={game.name}/>
                <h2 className="name-game">{game.name}</h2>
                <div className="details-game">
                  {game.parent_platforms &&
                    <div className="platforms">
                      {game.parent_platforms.map((platform)=> {
                        return (
                          <div key={`${platform.platform.name}-${platform.platform.id}`} className="platform">
                            {platform.platform.slug == "pc" ?
                              <span><i className="fa-brands fa-windows"></i></span> : ""
                            }
                            {platform.platform.slug == "commodore-amiga" ?
                              <span><i className="fa-solid fa-tv"></i></span> : ""
                            }
                            {platform.platform.slug == "web" ?
                              <span><i className="fa-solid fa-globe"></i></span> : ""
                            }
                            {platform.platform.slug == "playstation" ?
                              <span><i className="fa-brands fa-playstation"></i></span> : ""
                            }
                            { platform.platform.slug == "xbox" ?
                              <span><i className="fa-brands fa-xbox"></i></span> : ""
                            }
                            {platform.platform.slug == "linux" ?
                              <span><i className="fa-brands fa-linux"></i></span> : ""
                            }
                            {platform.platform.slug == "ios" ?
                              <span><i className="fa-brands fa-app-store-ios"></i></span> : ""
                            }
                            {platform.platform.slug == "mac" ?
                              <span><i className="fa-brands fa-apple"></i></span> : ""
                            }
                            {platform.platform.slug == "android" ?
                              <span><i className="fa-brands fa-android"></i></span> : ""
                            }
                            {platform.platform.slug == "nintendo" || platform.platform.slug == "atari" || platform.platform.slug == "sega" || platform.platform.slug == "3do" || platform.platform.slug == "neo-geo" ?
                              <span><i className="fa-solid fa-gamepad"></i></span> : ""
                            } 
                          </div>
                        )
                      })}
                    </div>
                  }
                  {game.released ?
                    <span className="year">{game.released.slice(0, 4)}</span>
                    : <span className="year">2000</span>
                  }
                  {game.rating ?
                    <span className={`rating ${game.rating < 3 ? 'rating-bad' : game.rating < 4 ? 'rating-medium' : game.rating >= 4 ? 'rating-good' : ''}`}>{game.rating.toFixed(1)}</span>
                    : <span className={`rating rating-bad`}>0</span>
                  }
                  {game.genres &&
                    <div className="genres">
                      {game.genres.map((genre) => {
                        return (
                          /* <a> dá erro, pois vai estar dentro de outra tag <a> */
                          <span key={`${genre.name}-${genre.id}`}>{genre.name}</span>
                        )
                      })}
                    </div>
                  }
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <button onClick={()=>setPagina(pagina + 1)}>Próxima</button>

    </ContainerHome>
  );
}

//