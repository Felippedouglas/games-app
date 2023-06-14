import styled from "styled-components";

export const ContainerImgsGame = styled.div `
    .content-imgs-game {
        display: flex;
        position: relative;
        padding: 5px 0;
        margin: 20px 0;
        overflow: auto;
    }

    .content-imgs-game::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 10px;
        height: 100%;
        background: linear-gradient(-90deg, rgba(24,24,24,1) 0%, rgba(24,24,24,1) 5%, rgba(24,24,24,0) 100%);
        z-index: 2;
    }

    .content-imgs-game::-webkit-scrollbar-thumb {
        display: none;
    }

    .image-game {
        margin-right: 10px;
        border-radius: 5px;
        cursor: pointer;
        background: #181818;
    }

    .image-game:last-child {
        margin-right: 0;
    }

    .image-game img {
        width: 300px;
        height: 170px;
        object-fit: cover;
        border: 1px solid #505050;
        transition: all .3s ease;
    }

    .image-game img:hover {
        opacity: .7;
    }

    video {
        max-width: 300px;
        border-radius: 5px;
        border: 1px solid #505050;
        margin-right: 5px;
    }

    @media (max-width: 600px) {   
        
        .image-game img, video {
            width: 230px;
            height: 130px;
        }

    }
`