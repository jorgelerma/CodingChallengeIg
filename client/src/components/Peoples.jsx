import React from 'react';

const Peoples=(props)=>(
<div>
  <div><h1> People: </h1></div>
     <div className="div-table" align="center">
       <div className="div-table-row" align="center">
         <div className="div-table-col"><h4>First Name:</h4></div>
         <div className="div-table-col"><h4>Last Name:</h4></div>
         <div className="div-table-col"><h4>Age:</h4> </div>
        </div>

        {props.peoples.map(item =>(

                <div className="div-table-row" align="center" key={item.birth_date}>
                  <div className="div-table-col"><h4>{item.first_name}</h4></div>
                  <div className="div-table-col"><h4>{item.last_name}</h4></div>
                  <div className="div-table-col"><h4>{props.checkAge(item.birth_date)}</h4></div>
                </div>

            )
          )}
    </div>

  </div>
)


export default Peoples;
