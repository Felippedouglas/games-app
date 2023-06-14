import styled from "styled-components";

export const ContainerStoresBuyGame = styled.div `

    .div-all-stores-buy-game {
        display: flex;
        position: relative;
        overflow: auto;
        margin-top: 10px;
    }

    .div-all-stores-buy-game::after {
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

    .div-all-stores-buy-game::-webkit-scrollbar {
        display: none;
    }

    .store a {
        display: flex;
        align-items: center;
        background: #fff;
        color: #181818;
        max-width: max-content;
        text-decoration: none;
        margin-right: 10px;
        padding: 10px 15px;
        border-radius: 5px;
        font-weight: 700;
        transition: all .3s ease;
    }

    .store a:hover {
        background: #bbb;
    }

    .store a span {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        font-size: .8rem;
        margin-right: 10px;
        padding-right: 10px;
        font-weight: 500;
        border-right: 1px solid #181818;
        white-space: nowrap;
    }

    .store a span i {
        font-size: 1.2rem;
    }

    @media (max-width: 600px) {

        .store a {
            margin-right: 5px;
            padding: 8px 10px;
            font-size: .8rem;
        }

        .store a span {
            font-size: .8rem;
            margin-right: 5px;
            padding-right: 5px;
        }
        
        .store a span i {
            font-size: 1rem;
        }
        
    }

`