import styled from "styled-components";

export const ContainerVideosGame = styled.div `

    display: flex;
    overflow: hidden;

    .video-principal {
        width: 100%;
        max-width: 720px;
        margin-right: 5px;
    }
    
    .videos {
        display: grid;
        flex-flow: wrap;
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr; 
        gap: 5px; 
        grid-template-areas: 
            ". ."
            ". .";
    }

    .video {
        position: relative;
    }

    .video span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #18181850;
        transition: all .3s ease;
        z-index: 1;
    }
    
    .video span:hover {
        background: #18181860;
    }

    .video span i {
        border-radius: 50%;
        padding: 10px 11px 10px 12px;
        cursor: pointer;
        transition: all .3s ease;
        border: 1px solid transparent;
    }

    .video span:hover i {
        background: #30303060;
        border: 1px solid #fff;
    }

    .videos video {
        width: 250px;
        aspect-ratio: 1/.5;
        margin: auto;
    }

`