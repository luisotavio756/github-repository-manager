import styled from 'styled-components';

export const Container = styled.div`
    /* background: #eee; */

    max-width: 750px;
    width: 100%;
    min-height: calc(100vh - 72px);

    margin: 0 auto;
    padding: 40px 10px;

    .title {
        text-align: center;

        h1 {
            color: #333;
        }

        p {
            text-align: center;
            font-size: 14px;
            color: #666;

            span {
                font-weight: 500;
                color: #f64e60;
            }
        }
    }

    p.not-found {
        margin-top: 30px;
        text-align: center;
        color: #666;
        font-size: 14px;
        font-weight: 500;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    flex-wrap: wrap;

    li {
        font-size: 12px;
        display: flex;
        align-items: center;
        margin-right: 5px;
        color: #666;

        a {
            font-size: 12px;
            font-weight: 400;
            color: #4285f4;
            transition: all 0.2s;

            &:hover {
                filter: brightness(60%);
            }
        }

        svg {
            margin-right: 3px;
            /* color: #333; */
        }
    }

`;
