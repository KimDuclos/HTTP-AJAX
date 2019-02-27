 import React from 'react';
 import PropTypes from 'prop-types';


const FriendsList = () => {
    return (
        <form method='get'>
            <input type='text' className='friendslist' placeholder='name'></input>
            <input type='text' className='friendslist' placeholder='age'></input>
            <input type='text' className='friendslist' placeholder='email'></input>
            <button type='submit' formmethod='post'>Submit</button>
        </form>
    );
}


FriendsList.propTypes = {
    name: PropTypes.string,
    age: PropTypes.string,
    email: PropTypes.string
}


 export default FriendsList;