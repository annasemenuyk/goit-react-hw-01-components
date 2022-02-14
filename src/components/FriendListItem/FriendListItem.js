import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({avatar,name,isOnline}){
    return(
        <li className={s.item}>
    {isOnline? (      
        <span className={s.status} style ={{backgroundColor: "#19ab16"}}>{isOnline}</span>)
        :(
        <span className={s.status} style ={{backgroundColor: "#f20a0a"}}>{isOnline}</span>
        )
    }  
        <img className={s.avatar} src={avatar} alt= "User avatar" width="48" />
        <p className={s.name}>{name}</p>
      </li>   

    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
  
  export default FriendListItem;