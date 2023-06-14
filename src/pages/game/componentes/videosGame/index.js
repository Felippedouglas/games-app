import { useEffect, useState } from "react";
import { ApiKey } from "../../../../config/key";
import { ContainerVideosGame } from "./style";
import "../../../../../node_modules/video-react/dist/video-react.css"; // import css

import { Player } from 'video-react';

export default function VideosGame(props) {

    const [ videos, setVideos ] = useState([])

    useEffect(()=>{
        fetch(`https://api.rawg.io/api/games/${props.id}/movies?key=${ApiKey}`)
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
                setVideos(data)
        });
    }, [])

    return (
        <>
            {videos.count >= 1 &&
                <ContainerVideosGame>
                    <div className="video-principal">
                        <Player
                        playsInline
                        src={videos.results[0].data.max}
                        />
                    </div>
                    <div className="videos">
                        {videos.results.slice(0,4).map((video)=>{
                            return(
                                <div className="video" key={`${video.data.max}`}>
                                    <span><i className="fa-solid fa-play"></i></span>
                                    <video width="150px" src={video.data.max} poster={video.preview}></video>
                                </div>
                            )
                        })}
                    </div>
                </ContainerVideosGame>
            }
        </>
    )
}