import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiKey } from '../../config/key';
import { ContainerSearchGame } from './style';

//swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

export default function Search() {
    const { gameName, genre, genreName } = useParams();
    const [ games, setGames ] = useState([]);
    const [ generos, setGeneros ] = useState([]);
    const [ imgBackgroundGenre, setImgBackgroundGenre ] = useState();

    useEffect(() => {

        if (gameName) {
            fetch(`https://api.rawg.io/api/games?search=${gameName.replace(/-/ig, ' ')}&key=${ApiKey}&language=pt`)
            .then(Response => Response.json())
            .then(data => {
              setGames(data.results)
            });
        } else if (genre) {
            fetch(`https://api.rawg.io/api/games?genres=${genre}&key=${ApiKey}`)
            .then(Response => Response.json())
            .then(data => {
                setGames(data.results);
                setImgBackgroundGenre(data.results[1].background_image);
            });

            fetch(`https://api.rawg.io/api/genres?key=${ApiKey}`)
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
                setGeneros(data.results)
            });
        }
    }, [gameName, genre]);

    return (
        <ContainerSearchGame>
            {genre &&
                <>
                    <h2>Jogos com gênero '{genreName}'</h2>
                    <div className="div-swiper-select-genero">
                        <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        freeMode={false}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[FreeMode]}
                        id="swiper-slide" className="mySwiper slide-select-genero">
                            {generos.map((genero)=>{
                                return (
                                    <SwiperSlide className="swiper-select-genero"><Link to={`/search/genre=${genero.slug}&${genero.id}`} className={`genero-select ${genre == genero.id ? 'genero' : ''}`}>{genero.name}</Link></SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </>
            }
            {genre &&
                <div className="div-background-search">
                    <img src={imgBackgroundGenre}/>
                </div>
            }
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
        </ContainerSearchGame>
    )
}