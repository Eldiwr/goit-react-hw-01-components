import styled from "styled-components";

export const Table = styled.table`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;

    width: 600px;
    border-radius: 4px;

    text-align: center;

    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Thead = styled.thead`
    padding: 15px 0;
    background-color: gray;
    text-transform: uppercase;
    color: black;
`;

export const Th = styled.th`
    padding: 15px;
    width: 200px;
`;

export const Row = styled.tr`
    :nth-child(even) {
    background-color: #d3cdcd;
    color: white;
}`;
