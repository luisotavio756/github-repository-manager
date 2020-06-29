import styled from 'styled-components';


export const NavBar = styled.nav`
    width: 100%;
    background: none 0% 0% / cover fixed, rgb(11, 10, 13);
`;

export const NavContent = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1300px;
    padding:  1rem 4vw;

    align-items: center;
    justify-content: space-between;

    height: 72px;
    color: white;

    .brand {
        display: flex;
        justify-content: center;
        align-items: center;

        .logo {
            padding-right: 15px;
            /* border-right: 1px solid #999; */

            img{
                width: 100%;
                height: auto;
            }
        }

        h4 {
            padding: 0 15px;
            /* border-right: 1px solid #999; */
        }
    }

    .menu-expand {
        display: none;
        margin-right: 10px;
    }



    @media (max-width: 790px) {
        .brand .logo {
            border: none !important;
        }

        .brand h4, .social {
            display: none;
        }

        .menu-expand {
            display: block;
        }
    }
`;

export const NavMenu = styled.div`
    /* display: flex; */

    /* height: 36px; */
    /* background-color: #999; */
    /* width: 100%; */
    /* border-top: 1px solid rgba(255, 255, 255, 0.1); */

    button{
        display: none;
    }

    ul {
        display: flex;
        flex-direction: row;
        /* justify-content: space-evenly; */
        align-items: center;

        list-style: none;

        li {
            font-size: 12px;
            font-weight: 500;
            padding: 10px 20px;
            color: white;
            transition: all 0.3s;
            text-transform: uppercase;
            cursor: pointer;

            &:hover {
                opacity: 0.6;
            }

            &:first-of-type {
                padding-left: 0px !important;
            }

            &:last-of-type {
                padding-right: 0px !important;
            }
        }

    }

    @media (max-width: 790px) {
        &{
            height: 100vh;
            width: ${props => props.open === true ? '100%' : '0'};
            position: fixed;
            z-index: 9999;
            top: 0;
            right: 0;
            background-color: #272727;
            overflow-x: hidden;
            transition: 0.6s;
        }

        button{
            display: block;
            position: absolute;
            top: 10px;
            right: 20px;

            color: white;
            background: transparent;
            border: none;
            text-decoration: none;


            font-size: 40px;
        }

        ul li{
            margin-top: 20px;
            font-size: 20px;

            &:first-of-type {
                padding-left: 20px !important;
            }

            &:last-of-type {
                padding-right: 20px !important;
            }
        }

        ul{
            height: 100%;
            padding: 6rem 0;
            flex-direction: column;
            justify-content: start;
        }
    }
`;
