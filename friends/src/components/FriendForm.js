import React from 'react';

const FriendForm = ({
  name,
  age,
  email,
  handleFriendSubmit
}) => (

  // for user input to enter new friend
  <form onSubmit={handleFriendSubmit}>
    <div>
      <input type="text" name="name" id="name" placeholder="Name" value={name}/>
    </div>
    <div>
      {/* age input */}
      <input type="number" name="age" id="age" placeholder="Age" value={age}/>
    </div>
    <div>
      {/* email input */}
      <input type="email" name="email" id="email" placeholder="Email" value={email}/>
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
);

export default FriendForm;