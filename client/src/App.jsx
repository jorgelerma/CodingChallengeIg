import React, {Component} from 'react'
import $ from 'jquery';


class App extends Component {

  constructor(props) {
   super(props);

   this.state = {
    texts: [{title:'', text: ''}],
    numbers1: [],
    peoples: []
  }
  
  render (){
    return (

      <div><h2>Coding challenge for Ignite</h2></div>

    )
  }
}


export default App;
