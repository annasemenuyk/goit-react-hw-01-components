import React from 'react';
import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

function FriendList ({friends}) {
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
export default FriendList;