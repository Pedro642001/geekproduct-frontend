import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: rgba(0,0,0,0.75);
        font-family: 'roboto', sans-serif;
        margin-bottom: 2rem;
    }
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        &::placeholder{
            color: rgba(0,0,0,0.65);
        }
        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: #00BA56;
        color: #fff;
        border: 0;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`