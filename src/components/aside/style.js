import styled from 'styled-components';

export const ContainerAside = styled.div `

    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    padding: 70px 10px 0 10px;
    min-width: 250px;
    max-width: 250px;
    overflow: auto;
    z-index: 9;

    #checkbox-aside {
        display: none;
    }

    .aside::-webkit-scrollbar {
        display: none;
    }

    .aside {
        max-height: 100%;
        overflow: auto;
        padding: 0 5px;
    }

    .section-aside {
        border-bottom: 2px solid #303030;
        margin-bottom: 10px;
    }

    .section-aside:last-child {
        border-bottom: none;
    }

    .section-aside h2 {
        margin-bottom: 10px;
    }

    .link-aside {
        display: flex;
        align-items: center;
        padding: 5px 5px 5px 0;
        border-radius: 5px;
        color: #fff;
        text-decoration: none;
        margin-bottom: 10px;
        font-size: 1rem;
        font-weight: 600;
        border: 1px solid transparent;
        transition: all .3s ease;
    }

    .link-aside:hover {
        background: #fff;
        color: #181818;
        border: 1px solid #404040;
        padding-left: 10%;
    }

    .link-aside img {
        margin-right: 8px;
        width: 30px;
        border-radius: 5px;
    }

    .link-aside i {
        margin: 2px 8px 0 0;
        font-size: 1rem;
        background: #303030;
        padding: 5px;
        border-radius: 2px;
        transition: all .3s ease;
    }

    .link-aside:hover i {
        background: #fff;
        color: #181818;
    }

    .checkbox-aside:checked .aside {
        padding-left: 500px;
    }

    @media (max-width: 800px) {

        left: ${props => props.showAside ? 0 : '-1000px'};
        transition: all .3s ease;
        box-shadow: 5px 3px 10px #181818;
        border-right: 1px solid #303030;
        background: #181818;

    }

`