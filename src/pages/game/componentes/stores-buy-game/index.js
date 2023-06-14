import { useEffect, useState } from "react";
import { ApiKey } from "../../../../config/key";
import { ContainerStoresBuyGame } from "./style";

//swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";

export default function StoresBuyGame(props) {

    const [ storesGame, setStoresGame ] = useState([]);
    
    
    useEffect(() => {

        fetch(`https://api.rawg.io/api/games/${props.id}/stores?key=${ApiKey}`)
            .then(Response => Response.json())
            .then(data => {
                setStoresGame(data)
        });
            
    }, [props.id]);

    return(
        <ContainerStoresBuyGame>
            {storesGame.results &&
                <Swiper
                slidesPerView={'auto'}
                spaceBetween={0}
                freeMode={false}
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode]}
                id="swiper-slide" className="mySwiper div-all-stores-buy-game">
                    {storesGame.results.map((store)=> {
                        return (
                            <SwiperSlide key={`${store.store_id}`} className="store slide-swiper">
                                {store.store_id == 1 ?
                                    <a href={store.url} target="_blank"><span><i className="fa-brands fa-steam"></i> Steam</span> COMPRAR</a> : ""
                                }
                                {store.store_id == 2 || store.store_id == 7 ?
                                    <a href={store.url} target="_blank"><span><i className="fa-brands fa-xbox"></i> Xbox</span> COMPRAR</a> : ""
                                }
                                {store.store_id == 3 ?
                                    <a href={store.url} target="_blank"><span><i className="fa-brands fa-playstation"></i> PlaysStation</span> COMPRAR</a> : ""
                                }
                                {store.store_id == 4 ?
                                    <a href={store.url} target="_blank"><span><i className="fa-brands fa-app-store"></i> App store</span> COMPRAR</a> : ""
                                }
                                {store.store_id == 5 ?
                                    <a href={store.url} target="_blank"><span><i className="fa-solid fa-store"></i> GOG.com</span> COMPRAR</a> : ""
                                }
                                {store.store_id == 6 ?
                                    <a href={store.url} target="_blank"><span><i className="fa-solid fa-gamepad"></i> Nintendo</span> COMPRAR</a> : ""
                                }
                                {store.store_id == 8 ?
                                    <a href={store.url} target="_blank"><span><i className="fa-brands fa-google-play"></i> Play store</span> COMPRAR</a> : ""
                                }
                                {store.store_id == 9 ?
                                    <a href={store.url} target="_blank"><span><i className="fa-brands fa-itch-io"></i> Itch.io</span> COMPRAR</a> : ""
                                }
                                {store.store_id == 11 ?
                                    <a href={store.url} target="_blank"><span><i className="fa-solid fa-store"></i> Epic store</span> COMPRAR</a> : ""
                                }
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            }
        </ContainerStoresBuyGame>
    )
}