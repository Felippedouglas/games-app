import styled from "styled-components";

export const ContainerHome = styled.div `

    position: relative;
    margin-top: 30px;
    margin-left: 250px;
    
    .div-swiper-select-plataformas {
        overflow: hidden;
        max-width: 98vw;
        position: sticky;
        top: 60px;
        padding: 0 10px 5px 10px;
        background: linear-gradient(to bottom, #181818 90%, #18181800);
    }
    
    .swiper-select-plataformas {
        margin-right: 5px;
        max-width: max-content;
        padding: 10px 0;
    }
    
    .plataforma-select {
        background: #353535;
        color: #fff;
        border: 1px solid #505050;
        cursor: pointer;
        padding: 8px 15px;
        font-weight: 600;
        border-radius: 5px;
        transition: all .3s ease;
    }
    
    .plataforma-select:hover {
        background: #454545;
    }
    
    .plataforma {
        color: #181818;
        background: #fff;
    }
    
    .plataforma:hover {
        color: #404040;
        background: #ddd;
    }

    .h2-title {
        font-size: 3rem;
        margin: 0 0 20px 10px;
    }

    .games {
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        max-width: max-content;
        max-width: 1280px;
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
        
        padding: 0;
        margin: 0;

    }

    @media (max-width: 600px) {

        margin-left: 0;

        .h2-title {
            margin-top: 50px;
            margin-left: 10px;
        }
        
        .games {
            justify-content: start;
        }
    }
`