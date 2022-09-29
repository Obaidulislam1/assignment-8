import React from 'react';
import'./Question.css'

const Question = () => {
    return (
        <div className='answer'>
           <div className='questionAnswer'>
           <h4>1.How does react work</h4>
            <p>React divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
           </div>
            
           <div className='questionAnswer'>
           <h4> 2.what is different of props and usestate</h4>
            <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
           </div>
            <div className='questionAnswer'>
            <h4>3.useeffect another work</h4>
            <p>Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component. Doing so will lead to confusing bugs and inconsistencies in the UI.By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.</p>
            </div>
            
        </div>
    );
};

export default Question;