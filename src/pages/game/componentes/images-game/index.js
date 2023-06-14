import { useEffect, useState } from 'react';
import { ApiKey } from '../../../../config/key';
import { ContainerImgsGame } from './style';

//swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

export default function ImgsGame(props) {

    const [ images, setImgaes ] = useState([]);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${props.id}/screenshots?key=${ApiKey}`)
        .then(Response => Response.json())
        .then(data => {
            setImgaes(data)
        });
            
    }, [props.id]);

    return(
        <ContainerImgsGame>
            <Swiper
            slidesPerView={'auto'}
            spaceBetween={0}
            freeMode={false}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode]}
            id="swiper-slide" className="mySwiper content-imgs-game">
                {images.results &&
                    <>
                        {images.results.map((image)=> {
                            return(
                                <SwiperSlide className='image-game slide-swiper' key={`${image.image}/${image.id}`}>
                                    <img loading="lazy" src={image.image} alt='img-game'/>
                                </SwiperSlide>
                        )
                        })}
                    </>
                }
            </Swiper>
        </ContainerImgsGame>
    )
}