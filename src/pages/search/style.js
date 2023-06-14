import styled from "styled-components";

export const ContainerSearchGame = styled.div `

    position: relative;
    top: -50px;
    padding: 150px 0 0 250px;
    overflow: hidden;

    .div-background-search {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }
    
    .div-background-search img {
        width: 100%;
        max-width: 1920px;
        object-fit: cover;
    }
    
    .div-background-search::after {
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(24,24,24);
        background: linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(24,24,24,1) 50%, rgba(24,24,24,.7) 100%);
        z-index: 1;
    }

    .div-swiper-select-genero {
        position: absolute;
        top: 200px;
        left: 260px;
        max-width: 100%;
        padding-right: 260px;
    }
    
    .swiper-select-genero {
        margin-right: 5px;
        max-width: max-content;
        padding: 10px 0;
    }

    .swiper-select-genero a {
        text-decoration: none;
    }
    
    .genero-select {
        background: #353535;
        color: #fff;
        border: 1px solid #505050;
        cursor: pointer;
        padding: 8px 15px;
        font-weight: 600;
        border-radius: 5px;
        transition: all .3s ease;
    }
    
    .genero-select:hover {
        background: #454545;
    }
    
    .genero {
        color: #181818;
        background: #fff;
    }
    
    .genero:hover {
        color: #404040;
        background: #ddd;
    }

    .games {
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        max-width: 1280px;
        margin: 60px auto 0 auto;
    }

    .games a {
        color: unset;
        text-decoration: none;
    }

    .game {
        display: flex;
        flex-direction: column;
        margin: 10px;
        padding: 5px 0;
        width: 280px;
        background: #222222;
        border-radius: 5px;
        transition: all .3s ease;
    }

    .game:hover {
        background: #303030;
    }

    .game img {
        width: 270px;
        height: 150px;
        object-fit: cover;
        border: 1px solid #505050;
        border-radius: 5px;
        margin: 0 auto 10px auto;
    }

    .name-game {
        font-size: 1.2rem;
        display: -webkit-box;
        font-weight: 700;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        padding: 0 10px;
        color: #fff;
        text-decoration: none;
        transition: all .3s ease;
    }

    .name-game:hover {
        opacity: .7;
    }

    .details-game {
        padding: 5px 10px;
        margin-top: 10px;
    }

    .platforms {
        display: flex;
        margin-bottom: 10px;
    }

    .platform {
        margin-right: 10px;
        font-size: 1rem
    }

    .platform:last-child {
        margin-right: 0;
    }

    .details-game .year, .details-game .rating {
        font-size: .8rem;
        font-weight: 600;
    }

    .details-game .year {
        margin-right: 10px;
    }

    .details-game .rating {
        padding: 2px 5px;
        border: 1px solid #fff;
        border-radius: 2px;
    }

    .details-game .rating-good {
        color: #47b61b;
        border-color: #47b61b;
    }

    .details-game .rating-medium {
        color: #c6d400;
        border-color: #c6d400;
    }

    .details-game .rating-bad {
        color: #ff3434;
        border-color: #ff3434;
    }

    .details-game .genres {
        display: flex;
        margin-top: 10px;
        min-width: 100%;
        max-width: 100%;
        overflow: auto;
        padding: 5px 0;
    }

    .details-game .genres::-webkit-scrollbar-track{
        display: none;
    }

    .genres span {
        color: #aaa;
        background: #353535;
        border: 1px solid #454545;
        padding: 2px 5px;
        border-radius: 2px;
        text-decoration: none;
        margin-right: 5px;
        transition: all .3s ease;
        font-weight: 600;
        font-size: .8rem;
        white-space: nowrap;
    }

    .genres span:hover {
        background: #454545;
        color: #ccc;
    }

    .genres span:last-child {
        margin-right: 0;
    }

    @media (max-width: 800px) {
        
        margin-left: 0;

    }

    @media (max-width: 600px) {
        
        .games {
            justify-content: center;
        }
    }
`