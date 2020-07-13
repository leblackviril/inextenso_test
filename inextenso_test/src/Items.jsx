import React,{Component} from 'react';
import './App.css';

const Items = ({items,onChange}) =>(
    <li>
      <label>
        <input type="checkbox" name="name" onChange={() => onChange(items.id)} checked={items.checked}/>
        {items.label}
      </label>
    </li>
)

export default Items;
