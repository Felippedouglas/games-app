import styled from 'styled-components';

export const ContainerNav = styled.div `

    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 70px;
    width: 100%;
    background: transparent;
    z-index: 10;
    transition: all .3s ease;

    .bt-show-aside {
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        color: #fff;
        background: none;
        border: 1px solid #505050;
        margin-right: 5px;
        transition: all .3s ease;
    }
    
    .bt-show-aside:hover {
        border-color: #606060;
        background: #303030;
    }

    .bt-show-aside:active {
        border-color: #606060;
        background: #505050;
    }

    .bt-show-aside label {
        width: 100%;
        height: 100%;
        padding-top: 1px;
        border-radius: 50px;
        cursor: pointer;
    }

    .link-home {
        font-weight: 600;
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
    }

    .label-input-search {
        display: flex;
        align-items: center;
        padding: 0 0 0 15px;
        width: 50%;
        height: 40px;
        border-radius: 50px;
        background: #fff;
        border: 1px solid #aaa;
        color: #181818;
        margin: auto;
    }

    .label-input-search i {
        padding-top: 2px;
    }

    .label-input-search input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        padding: 2px 10px;
        border-radius: 5px;
        background: none;
        color: #181818;
        font-weight: 600;
        font-size: 1rem;
    }

    .bt-clear-search, .bt-search-game {
        background: none;
        border: none;
        color: #181818;
        cursor: pointer;
        transition: all .3s ease;
    }

    .bt-search-game {
        height: 100%;
        width: 40px;
        padding-right: 3px;
        border-radius: 0 50px 50px 0;
    }

    .bt-clear-search {
        border-radius: 50px;
        height: 30px;
        width: 35px;
        margin: 0 5px;
    }

    .bt-clear-search:hover, .bt-search-game:hover {
        background: #ddd;
    }

    .bt-clear-search:active, .bt-search-game:active {
        background: #bbb;
    }

    @media (max-width: 800px) {
        
        .bt-show-aside {
            display: flex;
        }

    }
`