import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const FormWrap = styled.div`
    width: 40%;
    display: flex;
    margin-top: 10%;
    flex-direction: column;
    align-items: center;
    h1{
        margin-bottom: 5%;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 50%;
        .inputWrap{
            margin-inline: 2%;
            padding: 5% 0 0 0;
            border-bottom: 1px solid var(--black);
            display: flex;
            align-items: center;
            font-size: 1.5rem;
        }
        input{
            padding: 3%;
            margin: 2%;
            border: 0;
            &:focus {
                outline: none;
            }
        }
    }
    p{
        font-size: 1rem;
        margin-top: 4%;
        .linkButton{
            color: var(--orange);
        }
    }
`;