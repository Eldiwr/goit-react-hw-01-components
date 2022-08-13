import styled from "styled-components";

export const St = styled.section`
    width: 300px;
    margin-bottom: 15px;

    margin-left: auto;
    margin-right: auto;

    text-align: center;
    border-radius: 4px;

   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
   0px 2px 1px rgba(0, 0, 0, 0.2);
`;


export const Title = styled.h2`

    padding-top: 20px;
    padding-bottom: 20px;
    
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.accent};
    
`;

export const StatsList = styled.ul`
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    width: 20%;
    gap: 10px;
`;

export const LabelSpan = styled.span`
    padding-top: 10px;
`;

export const PercentageSpan = styled.span`
    padding-bottom: 10px;
`;