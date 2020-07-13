import React,{Component} from 'react';
import './App.css';

//Composant fonctionnel permetant d'afficher les chechbox un à un en prenant comme props l'items à afficher et l'handleChange
const Items = ({items,onChange}) =>(
    <li>
      <label>
        <input type="checkbox" name="name" onChange={() => onChange(items.id)} checked={items.checked}/>
        {items.label}
      </label>
    </li>
)

export default Items;
