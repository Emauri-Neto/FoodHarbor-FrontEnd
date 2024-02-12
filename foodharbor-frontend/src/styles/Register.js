import styled from "styled-components";
import banner from '../assets/banner.svg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const LeftBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-top: 10%;
        margin-bottom: 2%;
    }

    form{
        width: 50%;
        .fields{
            display: flex;
            flex-direction: column;
            gap: 10px;

            input{
                height: 40px;
                font-size: 1.1rem;
                background-color: var(--gray);
                border: 0;
                border-radius: 4px;
                text-indent: 3%;
            }

            .nameBox{
                display: flex;
                gap: 16px;
                input{
                    width: 49%;
                }
            }
            
            .passwordBox{
                position: relative;
                span{
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    padding: 0 10px; /* Espaçamento interno do botão */
                    background-color: var(--gray); /* Cor de fundo do botão */
                    border: 0;
                    border-radius: 0 4px 4px 0;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            .errorBox{
                display: flex;
                align-items: center;
                border: 1px solid var(--red);
                padding: 2%;
                background-color: var(--fadeRed);
            }

            #submitBtn{
                background-color: var(--yellow);
                font-weight: bold;
                font-size: 1.3rem;
                cursor: pointer;

                &:hover{
                    background-color: var(--orange)
                }
            }
        }   
    }
    .socialTxtId{
        margin-top: 5%;
        font-size: 1rem;
        font-weight: bold;
    }
    .socialBox{
        display: flex;
        flex-direction: row;
        margin-top: 2%;
        gap: 16px;
        .socialButton{
            padding: 5%;
            width: 150px;
            font-size: 1.1rem;
            background-color: var(--white);
            border-radius: 10px;
            cursor: pointer;
            &:hover{
                opacity: 50%;
            }
        }
    }
`;
export const RightBox = styled.div`
    width: 50%; 
    background-image: url(${banner});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: end;
    img{
        margin: 2%;
    }
`;

export const Button = styled.button`
    background-color: var(--white);
    border-color: var(--yellow);
    border-radius: 15px;
    margin: 3%;
    align-self: start;
    cursor: pointer;
    &:hover{
        opacity: 50%;
    }
`;