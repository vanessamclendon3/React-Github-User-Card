import React, { Component } from 'react';
import axios from 'axios';
import GitCard from './components/GitCard';
import Followers from './components/Followers';
import './App.css';

class App extends Component  {
  state = {
      gitData:[],
      followers: []
  }

  componentDidMount() {
    axios
    .get(`https://api.github.com/users/vanessamclendon2`)
    .then(response => {
      console.log(response.data)
      this.setState({
        gitData: response.data,
      })
    })
    axios
    .get(`https://api.github.com/users/vanessamclendon2/followers`)
    .then(response =>{
      console.log(response.data)
      this.setState({
        followers: response.data
      })
    }) 
  }

  render() {
    return (
      <div className="App">
        <GitCard 
         avatar_url={this.state.gitData.avatar_url}
         login={this.state.gitData.login}
         name={this.state.gitData.name}
         location={this.state.gitData.location}
         bio={this.state.gitData.bio}
         followers={this.state.gitData.followers}
         />
         <div>
          <h2>Followers:</h2>
          {this.state.followers.map(users => {
             return <Followers 
             key={users.id}
             login={users.login}
             avatar_url={users.avatar_url}
             />
           })}
         </div>
      </div>
    );
  }
  }
  

export default App;
