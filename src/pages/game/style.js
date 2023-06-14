import styled from "styled-components";

export const ContainerGame = styled.div `

    position: relative;
    width: 100%;
    max-width: 1920px;
    margin-top: -50px;

    .img-game ::-webkit-scrollbar {
        display: none;
    }

    .div-img-game {
        max-height: 80vh;
        min-width: 90%;
        max-width: 1920px;
        overflow: hidden;
    }
    
    .img-game {
        position: relative;
        width: 100%;
        object-fit: contain;
        margin: auto;
        z-index: 1;
    }

    .div-img-game::after {
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(24,24,24);
        background: linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(24,24,24,1) 5%, rgba(24,24,24,0) 100%);
        z-index: 1;
    }

    .div-info-game {
        position: absolute;
        top: -10px;
        padding: 200px 20px 50px 270px;
        width: 100%;
        z-index: 2;
        background: hsla(0, 0%, 9%, 0.7);
    }

    .link-edit-info-game {
        position: fixed;
        bottom: 15px;
        right: -200px;
        background: #fff;
        color: #181818;
        font-weight: 600;
        border-radius: 5px;
        padding: 8px 15px;
        text-decoration: none;
        transition: all .3s ease;
        z-index: 9;
    }

    .link-edit-info-game-on {
        right: 15px;
    }
    
    .link-edit-info-game-off {
        right: -200px;
    }

    .link-edit-info-game:hover {
        background: #ccc;
        color: #303030;
    }
    
    .genres {
        display: flex;
        margin-top: 10px;
        padding: 5px 0;
    }

    .genres a {
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

    .genres a:hover {
        background: #454545;
        color: #ccc;
    }

    .genres a:last-child {
        margin-right: 0;
    }

    .platforms-game {
        max-width: max-content;
        padding:0 10px;
        border-radius: 50px;
        background: hsl(0, 0%, 9%, .2);
    }

    .platforms-game .platforms {
        display: flex;
        align-items: center;
        padding: 7px 10px 7px 0;
        font-weight: 600;
    }

    .platforms-game .platform {
        margin-right: 10px;
    }

    .platforms-game .platform:last-child {
        margin-right: 0;
    }

    .span-date-released {
        border: 1px solid #fff;
        border-radius: 50px;
        font-size: 1rem;
        padding: 2px 10px;
        margin-right: 10px;
    }

    .h2-name-game {
        font-size: 4rem;
        margin-bottom: 20px;
        line-height: 60px;
    }

    .store-buy-game {
        display: flex;
        margin: 20px 0;
    }

    .div-buy-game {
        display: flex;
        align-items: center;
        margin-right: 10px;
    }

    .div-buy-game:last-child {
        margin-right: 10px;
    }

    .div-buy-game a {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
        border-radius: 50px;
        padding: 15px 20px;
        background: #fff;
        color: #181818;
        transition: all .3s ease;
    }

    .div-buy-game a:hover {
        background: #aaa;
    }

    .div-buy-game a i {
        margin-right: 5px;
        padding-top: 3px;
    }

    .div-description-game {
        margin: 20px 0;
    }

    .slide-swiper-genres {
        margin-right: 5px;
    }

    .description-game {
        color: #ccc;
        line-height: 20px;
        font-weight: 500;
    }

    .description-game::-webkit-scrollbar {
        display: none;
    }

    .show-description {
        line-height: auto;
        display: -webkit-box;
        -webkit-line-clamp: auto;
        -webkit-box-orient: vertical;
        overflow: auto;
        text-overflow: unset;
    }

    .hidde-description {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .div-description-game button {
        padding: 5px 10px;
        font-size: .8rem;
        font-weight: 700;
        text-transform: uppercase;
        border-radius: 50px;
        background: #353535;
        color: #fff;
        margin-top: 10px;
        cursor: pointer;
        border: 1px solid #aaa;
        transition: all .3s ease;
    }

    .div-description-game button:hover {
        background: #fff;
        color: #181818;
    }

    @media (max-width: 800px) {

        position: relative;

        .div-img-game {
            overflow: hidden;
            min-width: 100%;
            max-width: 100%;
        }
        
        .img-game {
            position: relative;
            width: 100%;
            object-fit: contain;
            margin: auto;
            margin-top: 0;
            z-index: 1;
        }
        
        .div-info-game {
            padding: 150px 0 0 10px;
        }
    }

    @media (max-width: 600px) {

        .span-date-released {
            border: 1px solid #fff;
            border-radius: 50px;
            font-size: .8rem;
            margin-right: 10px;
        }
        
        .h2-name-game {
            font-size: 2rem;
            margin-bottom: 10px;
            line-height: 35px;
        }

        .div-buy-game a {
            padding: 12px 15px;
            font-size: .8rem;
        }
        
        .img-game {
            position: relative;
            width: 100%;
            object-fit: contain;
            margin: auto;
            margin-top: 0;
            z-index: 1;
        }
        
    }

`