import React from 'react';

const Numbers=(props)=>(
<div>
  <div><h1> Prime Numbers: </h1></div>
   <div className="div-table" align="center">
     <div className="div-table-row" align="center">
        <div className="div-table-col"><h3>Number:</h3></div>
        <div className="div-table-col"><h3> Prime Number: </h3></div>
      </div>
        {props.numbers1.map(item =>(
          <div className="div-table-row" key={item.number}>
            <div className="div-table-col"><h3  >{item.number}</h3></div>
            <div className="div-table-col"><h3  >{props.checkPrimer(item.number)}</h3></div>
          </div>
         ))}
    </div>
  </div>
)

export default Numbers;
