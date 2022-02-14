import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

function Friends ({friends}) {
    //Произвольное кол-во FriendListItem
    return (
<ul className={s.list}>
    {
        friends.map ((friend)=>(
            <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend. isOnline}
            />
        ))}
</ul>);
}
FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  };

export default FriendList;