import styled from 'styled-components'

export const ContainerGameSeries = styled.div `

    .content-game-series {
        margin-top: 30px;
    }

    .div-game-series {
        display: flex;
        position: relative;
        margin-top: 10px;
    }

    .div-game-series::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 10px;
        height: 100%;
        background: linear-gradient(90deg, rgba(24,24,24,1) 0%, rgba(24,24,24,1) 5%, rgba(24,24,24,0) 100%);
        z-index: 2;
    }

    .details-game-series {
        display: flex;
    }

    .details-game-series .platforms {
        display: flex;
        align-items: center;
        padding: 7px 10px 7px 0;
        font-weight: 600;
    }

    .details-game-series .platform {
        margin-right: 10px;
    }

    .details-game-series .platform:last-child {
        margin-right: 0;
    }

    .div-game-series::after {
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

    .swipe-game-series {
        background: #222222;
        margin-right: 15px;
        transition: all .3s ease;
    }

    .swipe-game-series:hover {
        opacity: .7;
    }

    .game-series {
        display: flex;
        flex-direction: column;
        justify-content: start;
        max-width: 300px;
        padding: 10px;
        border-radius: 5px;
        min-height: 320px;
        max-height: 320px;
    }

    .game-series img {
        width: 280px;
        height: 160px;
        object-fit: cover;
        margin: 0 auto;
        border-radius: 5px;
    }

    .name-game-series {
        display: -webkit-box;
        font-size: 1.2rem;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .swipe-game-series a {
        color: #fff;
        text-decoration: none;
    }

    .year-game-series {
        margin-top: 5px;
        font-weight: 600;
    }

    .details-game-series {
        margin: 5px 0;
    }

    @media (max-width: 600px) {
        
        .game-series {
            display: flex;
            flex-direction: column;
            justify-content: start;
            max-width: 250px;
            padding: 10px;
            border-radius: 5px;
            min-height: 260px;
            min-height: 260px;
        }

        .game-series img {
            width: 230px;
            height: 130px;
            object-fit: cover;
            margin: 0 auto;
            border-radius: 5px;
        }

        .name-game-series {
            font-size: 1rem;
        }
    }
`