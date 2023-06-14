import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiKey } from '../../../../config/key';
import { ContainerGameSeries } from './style';


//swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";

export default function GameSeries(props) {

    const [ games, setGames ] = useState([]);

    useEffect(()=> {
        fetch(`https://api.rawg.io/api/games/${props.id}/game-series?key=${ApiKey}`)
        .then(Response => Response.json())
        .then(data => {
            setGames(data.results)
        });
    }, [props.id])
    

    return(
        <ContainerGameSeries>
            {games.length >= 1 &&
                <div className='content-game-series'>
                    <h2>Mais de {props.gameName}</h2>
                    <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={0}
                    freeMode={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode]}
                    id="swiper-slide"
                    className="mySwiper div-game-series">
                        {games.map((game)=> {
                            return (
                                <SwiperSlide className='slide-swiper swipe-game-series' key={`${game.name}/${game.id}`}>
                                    <Link to={`/game/${(game.name).replace(/ /ig, '-')}/${game.id}`}>
                                        <div className="game-series" key={`${game.name}-${game.id}`}>
                                            <img loading="lazy" src={game.background_image} alt={game.name}/>
                                            <h2 className="name-game-series">{game.name}</h2>
                                            {game.released ?
                                                <span className="year-game-series">{game.released.slice(0, 4)}</span>
                                                : <span className="year-game-series">2000</span>
                                            }
                                            <div className="details-game-series">
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
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            }
        </ContainerGameSeries>
    )
}