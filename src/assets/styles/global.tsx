import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #252525;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media ( max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media ( max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }
    body {
        background-color: #FBFBFB;
        -webkit-font-smothing: antialiased;

    }
    button {
        cursor: pointer;

    }
    [disable] {
        opacity: 0.6;
        cursor: not-allowed
    }
    .react-modal-overlay{
        background: rgb(0,0,0,0.5);
        
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background-color: #FBFBFB;
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(0.9);
        }
    }
    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border:  0;
        height: 36px;
        width: 36px;
        background: transparent;
    }
`