import PropTypes from 'prop-types';
import { FriendsItem } from "./FriendsItem";
import { FriendsList } from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return <FriendsList>
        {friends.map(({id, avatar, isOnline, name}) => (
            <FriendsItem
                key={id}
                avatar={avatar}
                isOnline={isOnline}
                name={name}
            />
        ))}
    </FriendsList>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
};