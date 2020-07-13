import React from 'react';

//ici je déclare un composant fonctionnel pour l'affichage des utilisateurs dans la liste
const Users = ({users}) =>(
    <div className="col-3">
        <div className="DivUsers ">
            <div className="DivAvatar"><img src={users.avatar_url} alt={users.login} className="ImgAvatar" /></div>
            <div className="DivInfos">
                <div className="DivLogin"><h2>{users.login}</h2></div>
                <div className="DivType">Type: {users.type}</div>
                <div className="DivScore">Score: {users.score}</div>
                <a href={users.html_url} target="_blank" className="DivLink">Link to {users.login}'s Url</a>
            </div>
        </div>
    </div>
)

export default Users;
