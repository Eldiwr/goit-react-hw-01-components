import PropTypes from 'prop-types';
import { Item, Status, UserAvatar, Name } from "./FriendList.styled"

export const FriendsItem = ({ name, isOnline, avatar }) => {
    return <Item>
        <Status style={{ backgroundColor: isOnline ? 'green' : 'red'}}>{isOnline}</Status>
  <UserAvatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
</Item>
}

FriendsItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};


