import React from 'react';

const Texts=(props)=>(
  <div>
    <div><h1> Text: </h1></div>
    <div className="txn-table">
   {props.texts.map(item =>(
     <div key={item.title}><p id="textin">{props.title2Upper(item.title)}</p></div>
   ))}
   {props.texts.map(item =>(
      <div key={item.title}><p id="textin">{props.text2Upper(item.text)}</p></div>
   ))}
    </div>
  </div>
)

export default Texts;
