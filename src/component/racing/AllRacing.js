import React, { useEffect, useState} from 'react';
import'./Allracing.css';
import logo from'../../image/Bike.png';
import photo from'../../image/person.jpg';
import Race from '../race/Race';
import { addLocalStore,storeData } from '../store/Store';
import Swal from "sweetalert2";
import Question from '../question/Question';

const AllRacing = () => {
    const [racing,setRacing] = useState([])
    const [count,setCount] =useState([])
    const [inputValue,setInputValue] = useState([])
    // console.log(inputValue);
    //  addLocalStore(inputValue)
    // // local store start
    //   useEffect(() =>{
    //     const loaded =storeData(); 
    //     for(const onChange in loaded)
    //      console.log(onChange)
    //   },[inputValue])
// localstore end
const buttonHandeler = () => {
    Swal.fire(
        'Welcom',
        'One Day I solve my All Problem',
        'success'
    )
}
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
                <h2>62<sub><span>kg</span></sub></h2>
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
                <button onClick={(btn) => setInputValue(btn.target.innerText)}>10</button>
                <button onClick={(btn) => setInputValue(btn.target.innerText)}>20</button>
                <button onClick={(btn) => setInputValue(btn.target.innerText)}>30</button>
                <button onClick={(btn) => setInputValue(btn.target.innerText)}>40</button>
                <button onClick={(btn) => setInputValue(btn.target.innerText)}>50</button>
            </div>
            <h3 className='detail'>Race Details</h3>
            <h4 className='same'>Race time: {total} second</h4>

            <h4 className='same'>Break time: <input className='input' value={inputValue} onChange={(btn) => setInputValue(btn.target.value)} placeholder="0" /> </h4>

            <button onClick={buttonHandeler}  className='btn-activity'>Activity Complete</button>
           </div>
           <div>
           <Question></Question>
           </div>
        </div>
        

    
    );
};

export default AllRacing;