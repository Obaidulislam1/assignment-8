import React from 'react';
import'./Race.css';

const Race = (props) => {
    console.log(props)
    const{TimeRequired,age,name,picture,description} =props.race;
    console.log(name);
    return (
        <div className='item'>
            <img src={picture} alt="Bike"/>
           <div className='text'>
           <h4>{name}</h4>
            <p>{description}</p>
            <p>For age: {age}</p>
            <p>Time required: {TimeRequired}</p>
           </div>
         <button className='btn'>Add to list</button>
        </div>
    );
};

export default Race;