import React from 'react';

//Composant comportant l'input qui va servir de
class Search extends React.Component {
    state= {
        searchText:""
    }

    //Fonction qui va être appelée lorsque je modifie l'input de la recherche
    handleChange = (event) =>{
        const value = event.currentTarget.value;
        if(value.length>0) this.props.getItems(value);
        this.setState({searchText:value});
    }

    //Render permettant de renvoyer le champ de recherche
    render(){
        return (
        <div className="DivSearch">
            <input type="search" className="InputSearch" onChange={this.handleChange} placeholder="Search a user" />
        </div>
        )
    }
}

export default Search;
