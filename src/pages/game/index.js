import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiKey } from '../../config/key';
import ImgsGame from './componentes/images-game';
import GameSeries from './componentes/game-series';
import StoresBuyGame from './componentes/stores-buy-game';
import RequirementsGame from './componentes/requirements-game';
import VideosGame from './componentes/videosGame';
import $ from 'jquery';

//swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { ContainerGame } from './style';

export default function Game() {

    const { id } = useParams();
    const [ game, setGame ] = useState([]);
    const [ storesGame, setStoresGame ] = useState([]);
    const [ allContentDescription, setAllContentDescription ] = useState(false);
    const [ btEdit, setBtEdit ] = useState();

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}?key=${ApiKey}`)
            .then(Response => Response.json())
            .then(data => {
                setGame(data)
                console.log(data)
        });

        fetch(`https://api.rawg.io/api/games/${id}/stores?key=${ApiKey}`)
            .then(Response => Response.json())
            .then(data => {
                setStoresGame(data)
        });
            
    }, [id]);

    $(window).on('scroll', function() {
        if (id) {
            if ($(window).scrollTop() >= 200) {
                setBtEdit(true)
            } else if ($(window).scrollTop() <= 200){
                setBtEdit(false)
            }
        }
    })

    return(
        <ContainerGame>

            <div className='div-img-game'>
                <img loading="lazy" className='img-game' src={game.background_image} alt={game.name}/>
            </div>
            <div className='div-info-game'>

                <a className={`link-edit-info-game ${btEdit ? 'link-edit-info-game-on' : 'link-edit-info-game-off'}`} id='link-edit-info-game' href={`https://rawg.io/games/${game.slug}/edit`} target="_blank"><i className="fa-solid fa-pen-to-square"></i> Editar Informações</a>

                <div className='platforms-game'>
                    {game.parent_platforms &&
                        <div className="platforms">
                            {game.released &&
                                <span className='span-date-released'>{`${game.released.slice(8, 10)}/${game.released.slice(5, 7)}/${game.released.slice(0, 4)}`}</span>
                            }
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
                                        {platform.platform.slug == "xbox" ?
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
                <h2 className='h2-name-game'>{game.name}</h2>
                <div>
                    {storesGame.results &&
                        <div className="store-buy-game">
                            {storesGame.results.slice(0, 2).map((store)=> {
                                return (
                                    <div key={`${store.store_id}`} className="div-buy-game">
                                        {store.store_id == 1 ?
                                            <a href={store.url} target="_blank"><i className="fa-brands fa-steam"></i> Comprar</a> : ""
                                        }
                                        {store.store_id == 2 || store.store_id == 7 ?
                                            <a href={store.url} target="_blank"><i className="fa-brands fa-xbox"></i> Comprar</a> : ""
                                        }
                                        {store.store_id == 3 ?
                                            <a href={store.url} target="_blank"><i className="fa-brands fa-playstation"></i> Comprar</a> : ""
                                        }
                                        {store.store_id == 4 ?
                                            <a href={store.url} target="_blank"><i className="fa-brands fa-app-store"></i> Comprar</a> : ""
                                        }
                                        {store.store_id == 5 ?
                                            <a href={store.url} target="_blank"><i className="fa-solid fa-store"></i> Comprar</a> : ""
                                        }
                                        {store.store_id == 6 ?
                                            <a href={store.url} target="_blank"><i className="fa-solid fa-gamepad"></i> Comprar</a> : ""
                                        }
                                        {store.store_id == 8 ?
                                            <a href={store.url} target="_blank"><i className="fa-brands fa-google-play"></i> Comprar</a> : ""
                                        }
                                        {store.store_id == 9 ?
                                            <a href={store.url} target="_blank"><i className="fa-brands fa-itch-io"></i> Comprar</a> : ""
                                        }
                                        {store.store_id == 11 ?
                                            <a href={store.url} target="_blank"><i className="fa-solid fa-store"></i> Comprar</a> : ""
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
                <ImgsGame id={id}/>
                {/*<VideosGame id={id}/>*/}
                {game.genres &&
                    <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={0}
                    freeMode={false}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode]}
                    id="swiper-slide" className="mySwiper genres">
                    {game.genres.map((genre) => {
                        return (
                            <SwiperSlide className='slide-swiper slide-swiper-genres' key={`${genre.name}-${genre.id}`}>
                                <Link to=''>{genre.name}</Link>
                            </SwiperSlide>
                        )
                    })}
                    </Swiper>
                }
                <div className='div-description-game'>
                    <span className={`description-game ${allContentDescription ? 'show-description' : 'hidde-description'}`}>{game.description_raw}</span><button onClick={()=>setAllContentDescription(!allContentDescription)}>{allContentDescription ? 'ver menos' : 'ver mais'}</button>
                </div>
                <StoresBuyGame id={id}/>
                <GameSeries id={id} gameName={game.name} />
                <RequirementsGame platforms={game.platforms}/>
            </div>
        </ContainerGame>
    )
}