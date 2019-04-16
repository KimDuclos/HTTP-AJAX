import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends Component {
  state = {
    friends: [],
    id: '',
    name: '',
    age: '',
    email: ''
  };

  componentDidMount() {
    this.fetchFriends();
  }

  fetchFriends() {
    axios
      .get('http://localhost:5000/friends')
      .then(({ data }) => this.setState({ friends: data }))
      .catch(err => console.error(err));
  }

  handleFriendSubmit = event => {
    event.preventDefault();

    const { name, age, email, id } = this.state;
    const url = id
      ? `http://localhost:5000/friends/${id}`
      : 'http://localhost:5000/friends';

    axios[id ? 'put' : 'post'](url, { name, age, email })
      .then(({ data }) =>
        this.setState({
          friends: data,
          id: '',
          name: '',
          age: '',
          email: ''
        })
      )
      .catch(err => console.error(err));
  };

  updateFriend = ({ id, name, age, email }) => {
    this.setState({ name, age, email, id });
  };

  deleteFriend = (e, id) => {
    e.stopPropagation();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(({ data }) => this.setState({ friends: data }))
      .catch(err => console.error(err));
  };

  //set name to value entered
  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { friends, name, age, email } = this.state;
    return (
      <div className="app">
        <Route
          path="/"
          render={props => (
            <FriendList  // gets props to update list of friends
              {...props}
              friends={friends}
              updateFriend={this.updateFriend}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        <Route
          path="/addfriend"
          render={props => (
            <FriendForm {...props} name={name} age={age} email={email} handleFriendSubmit={this.handleFriendSubmit} onChangeHandler={this.onChangeHandler}
            />
          )}
        />
      </div>
    );
  }
}

export default App;