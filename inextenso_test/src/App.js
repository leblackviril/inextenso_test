import React from 'react';
import './App.css';
import Items from "./Items";

class App extends React.Component {
  //Je déclare le state où je liste les items comme si je listais
  state = {
    items: {
      1:{id: 1, label: "Select all", checked: false},
      2:{id: 2, label: "Item 1", checked: false},
      3:{id: 3, label: "Item 2", checked: false},
      4:{id: 4, label: "Item 3", checked: false},
      5:{id: 5, label: "Item 4", checked: false},
    }
  }

  //Fonction qui lors surgit de l'évenenement onChange des checkbox, je reçois en paramètre l'id de l'élément cliqué
  handleChange = (id) => {
    let items = {...this.state.items};

    //Je teste si c'est checkbox de "select All" qui a été coché
    if(id==1) {
      //Si il était déjà coché, je décoche tout le monde, sinon je coche tout le monde;
      if (items[id].checked) Object.keys(items).map((key,index)=> items[key].checked=false);
      else {
        Object.keys(items).map((key, index) => items[key].checked = true);
        items[id].label="Unselect All"
      }
    }
    else {
      //Si c'est un autre que "Select All" qui a été coché, je teste si il était déjà coché, je le décoche, sinon je le coche
      if (items[id].checked) {
        items[id].checked = false;
        items[1].checked = false;
      }
      else items[id].checked = true;

      //Je récupère le nombre d'élements coché de mon state, et je teste si tous les éléments sont cochés, si oui je coche le "select all", sinon je le décoche
      let checkedNumber = 0;
      Object.keys(this.state.items).map((key,index) => checkedNumber+= items[key].checked ? 1 : 0);
      if(checkedNumber >= Object.keys(items).length-1) items[1].checked = true;
      else items[1].checked = false;
    }

    //je mets à jour le composant
    this.setState({items: items});
  }

  render(){
    const title = "List of items";
    /*Je fais une boucle qui va afficher tous les éléments de mon state à travers le composant Items*/
    return (
      <div className="App">
        <header className="App-header">
          <h3>{title}</h3>
          <ul className="Ul-noBullet">
            {
              Object.keys(this.state.items).map((key,index) => (
              <Items items={this.state.items[key]} onChange={this.handleChange} />
            ))}
          </ul>
        </header>
      </div>
      )
  }
}

export default App;
