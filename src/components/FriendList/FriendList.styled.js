import styled from "styled-components";

export const FriendsList = styled.ul`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;

    padding: 15px;
    margin-bottom: 10px;

    background-color: white;
    border-radius:4px;

    gap: 10px;

    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
   0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
    display: block;
    width: 10px;
    height: 10px;

    border-radius: 50%;
`;

export const UserAvatar = styled.img`
    display: block;   
`;

export const Name = styled.p`
    color: ${p=>p.theme.colors.accent};
`;