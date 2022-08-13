import styled from "styled-components";

export const Profile = styled.div`
   width: 300px;

   border-radius: 4px;

   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
   0px 2px 1px rgba(0, 0, 0, 0.2);

   margin-bottom: 32px;
   margin-top: 32px;
`;

export const Avatar = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;

    border: 1px solid;
    border-radius: 50%;   
`;

export const Text = styled.p`
    margin-bottom: 10px;
    :last-child{
        margin-bottom: 0px;
    }

    font-weight: 700;   
`;

export const Description = styled.div`
    padding: 20px;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;

    background-color: white;
    border-top: 1px solid rgb(238, 235, 235);
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.span`
    margin-bottom: 8px;
    color: black;
    font-weight: 700;
`;

export const Quantity = styled.span`
    text-align: center;
    
    color: #609;   
`;

