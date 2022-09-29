import React, { useEffect, useState} from 'react';
import'./Allracing.css';
import logo from'../../image/Bike.png';
import photo from'../../image/person.jpg';
import Race from '../race/Race';

const AllRacing = () => {
    const [racing,setRacing] = useState([])
    const [count,setCount] =useState([])
    const [inputValue,setInputValue] = useState([])

    console.log(count);
    // console.log(racing)
    useEffect(() =>{
        fetch('item.json')
        .then(res =>res.json())
        .then(data => setRacing(data))
    },[])
    const handleClick = (racing) =>{
        const newcount = [...count,racing]
        setCount(newcount);
    }
    let total = 0;
    for(const time of count){
        total = total +time.TimeRequired;
    }
    return (
       
        <div className='racing-container'>
        <div>
     <div className='logo'>
        <img src={logo} alt="bike"/>
        <h2>Racing Time</h2>
    </div>
    <h4>Watch todays race</h4>
    <div className='raceContainer'>
       {
         racing.map(race => <Race
            key={race.id}
             race={race}
             handleClick={handleClick}
             ></Race>)
       }
    </div>
            </div>           

           <div className='info'>

            <div className='myInfo'>
            <img src={photo} alt=""/>
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
            <div className='btn-container'>
                <button onClick={(e) => setInputValue(e.target.innerText)}>10</button>
                <button onClick={(e) => setInputValue(e.target.innerText)}>20</button>
                <button onClick={(e) => setInputValue(e.target.innerText)}>30</button>
                <button onClick={(e) => setInputValue(e.target.innerText)}>40</button>
                <button onClick={(e) => setInputValue(e.target.innerText)}>50</button>
            </div>
            <h3 className='detail'>Race Details</h3>
            <h4 className='same'>Race time: {total} second</h4>
            <h4 className='same'>Break time:<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="0" /> </h4>
            <button className='btn-activity'>Activity Complete</button>
           </div>
        </div>
    );
};

export default AllRacing;