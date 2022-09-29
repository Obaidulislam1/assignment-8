import React from 'react';
import'./Race.css';

const Race = ({handleClick,race}) => {

    const{TimeRequired,age,name,picture,description,id} =race;
    // console.log(age)
    return (
        <div className='item'>
            <img src={picture} alt="Bike"/>
            <div className='text'> 
           <h4>{name}</h4>
            <p>{description}</p>
            <p>For age: {age}</p>
            <p className='down'>Time required: {TimeRequired}</p>
           </div>
         <button onClick={() =>handleClick(race)} className='btn'>Add to list</button>
        </div>
    );
};

export default Race;