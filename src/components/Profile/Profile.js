import React from 'react';
import PropTypes from 'prop-types';
import stylse from './Profile.module.css';


function Profile({username, tag, location, avatar,stats}){
    return(
        
<div className={stylse.profile}>
  
  <div className={stylse.description}>
    <img
      src={avatar}
      alt={username}
      className={stylse.avatar}
    />
    <p className={stylse.name}>{username}</p>
    <p className={stylse.tag}>{tag}@{tag}</p>
    <p className={stylse.location}>{location}</p>
  </div>

  <ul className={stylse.stats}>
    <li>
      <span className={stylse.label}>Followers</span>
      <span className={stylse.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={stylse.label}>Views</span>
      <span className={stylse.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={stylse.label}>Likes</span>
      <span className={stylse.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    );
}
Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  };
  
  export default Profile;