import React, { useState } from 'react';


function ItemCounter(props) {
    const [count, setCount] = useState(0);

    function handleIncrement(prevCount)  {
        
        setCount(prevCount => (prevCount<props.maxValue) ? prevCount + 1 : prevCount);
      };
    
    function handleDecrement(prevCount)  {
        
        setCount(prevCount => (prevCount>props.minValue) ? prevCount - 1 : prevCount);
      };
    return (
        <div>
            <p>Cantidad: {count} </p>            
            <button onClick={handleDecrement} className="btn btn-primary"> - </button>
            <button onClick={handleIncrement} className="btn btn-primary"> + </button>
        </div>
       
    );

}

export default ItemCounter;