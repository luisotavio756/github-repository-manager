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
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
        font-size: 12px;
        display: flex;
        align-items: center;
        color: #666;
        margin-right: 5px;

        svg {
            margin-right: 3px;
            /* color: #333; */
        }
    }

`;
