import React, { useEffect, useState } from 'react';
import'./Allracing.css'
import logo from'../../image/Bike.png'
import Race from '../race/Race';
import photo from'../../image/person.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AllRacing = () => {
    const [racing,setRacing] = useState([])
    useEffect(() =>{
        fetch('item.json')
        .then(res => res.json())
        .then(data =>setRacing(data))
    },[])
    return (
       
        <div className='racing-container'>
        <div>
     <div className='logo'>
        <img src={logo} alt="bike"/>
        <h2>Racing Time</h2>
    </div>
    <div className='raceContainer'>
     {
    racing.map(race => <Race 
        key={race.id}
        race ={race}
    ></Race>)
   }
    </div>
            </div>           

           <div className='info'>
            <div className='myInfo'>
            <img src={photo} alt="" />
            <div>
                <h4>Obaidul Islam</h4>
                <p>Gazipur,Dhaka</p>
            </div>
            </div>

            <div className='manBody'>
                <div className='weight'>
                <h2>54<sub><span>kg</span></sub></h2>
                <h2>5.6</h2>
                <h2>20<sub><span>yrs</span></sub></h2>
                </div>
                <div className='height'>
                    <p>Weight</p>
                    <p>Height</p>
                    <p>Age</p>
                </div>
            </div>
            <h3 className='text'>Add A Break</h3>
           </div>
        </div>
    );
};

export default AllRacing;