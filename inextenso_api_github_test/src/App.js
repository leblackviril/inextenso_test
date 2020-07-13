import React from 'react';
import Users from './Users';
import Search from './Search';
import './App.css';

class App extends React.Component {
  //Je déclare le state où je vais mettre les données reçues de l'api
  constructor() {
    super();
    this.state= {
        users: {}
    }
  }

  //Fonction permettant de récupérer les utilisateurs à partir de l'API que je save dans le state
  getItems=(value)=> {
    if(value.length >0)
    {
        fetch('https://api.github.com/search/users?q='+value)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({users:response.items});
            })
            .catch(function(error) {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            });
    }
  }

  //Fonction permettent de reset le state lorqu'on vide la recherche
  resetState = () => {
      this.setState({users: {}});
  }

  //Render où je renvois ce que va être affiché à l'écran
  render() {
    const title = "List of Users";
    return (
        <div className="App">
            <div className="DivHeader">
                <text className="TextTitle">{title}</text>
                <Search resetState={this.resetState} getItems={this.getItems} />
            </div>
            <div className="Contains">
                {
                    Object.keys(this.state.users).map((key,index) => (
                        <Users users={this.state.users[key]} />
                    ))
                }
            </div>
        </div>
    );
  }


}

export default App;
