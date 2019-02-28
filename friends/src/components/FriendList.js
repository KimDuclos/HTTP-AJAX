import React from 'react';
import { Route } from 'react-router-dom';
import Friend from './Friend';

const FriendList = ({ friends, ...props }) => {
  function addfriend() {
    props.history.push('/addfriend');
  }

  return (
    <div>
        {friends.length ? (
          // map over friends list for array, call component with friend data
          friends.map(friend => (
            <Friend key={friend.id} friend={friend} {...props} />
          )
        )
      ) : (
          // pops up when the list is empty so it looks like something is there
          <div>Friend List Loading...</div>
        )}
    </div>   
  );
};

export default FriendList;