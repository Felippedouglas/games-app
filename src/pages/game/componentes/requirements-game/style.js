import styled from "styled-components";

export const ContainerRequirementsGame = styled.div `

    margin: 50px 0;

    header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    header select {
        display: ${props => props.numeroPlataformas >= 1 ? 'block' : 'none'};
        margin-left: 10px;
        padding: 5px 15px;
        background: #252525;
        color: #fff;
        border-radius: 2px;
        font-weight: 600;
        border: 1px solid #606060;
    }

    header select option {
        border-radius: 50px;
    }

    .div-requirements {
        display: flex;
        justify-content: space-between;
    }

    .div-requirements div {
        min-width: 48%;
        max-width: 48%;
        font-size: .9rem;
    }

    .div-requirements div:first-child {
        border-right: 1px solid #606060;
        padding-right: 20px;
    }

    .requirements-minimun h3, .requirements-recommended h3 {
        margin-bottom: 5px;
    }

    .div-requirements div p {
        color: #ccc;
    }

    @media (max-width: 800px) {
        .div-requirements {
            flex-direction: column;
        }
        
        .div-requirements div {
            max-width: 100%;
            font-size: .9rem;
        }

        .div-requirements div:first-child {
            border-right: none;
            padding-right: 0;
        }

        .requirements-minimun {
            margin-bottom: 20px;
        }
    }
`