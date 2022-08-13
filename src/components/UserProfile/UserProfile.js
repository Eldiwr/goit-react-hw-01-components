import PropTypes from 'prop-types';
import { Box } from "components/box";
import { Description, Profile, Text, Label, Avatar, Stats, Item, Quantity } from "./UserProfile.styled";

export const UserProfile = ({ avatar, username, tag, location, stats: { followers, views, likes } }) => {
    return <Profile>
  <Description>
    <Avatar src={avatar} alt="User avatar" width="150"/>
        <Box textAlign="center">
          <Text>{username}</Text>
          <Text>@{tag}</Text>
          <Text>{location}</Text>
        </Box>    
  </Description>

  <Stats>
    <Item>
      <Label>Followers: </Label>
      <Quantity>{followers}</Quantity>
    </Item>
    <Item>
      <Label>Views: </Label>
      <Quantity>{views}</Quantity>
    </Item>
    <Item>
      <Label>Likes: </Label>
      <Quantity>{likes}</Quantity>
    </Item>
  </Stats>
  </Profile>
}

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};