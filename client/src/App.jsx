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



  getTexts() {
   $.ajax({
     url: 'http://174.138.36.217/texts/',
     method: 'GET',
     success: (results) => {
       console.log(results);
       // console.log(typeof results)
       this.setState({texts: results});
     },
     error: (xhr, err) => {
       console.log('err', err);
     }
   })
  }


  getNumbers() {
   $.ajax({
     url: 'http://174.138.36.217/numbers/',
     method: 'GET',
     success: (results) => {
       // console.log(typeof results)
       // console.log(results);

       this.setState({numbers1: results});
     },
     error: (xhr, err) => {
       console.log('err', err);
     }
   })
  }


  getPeople() {
   $.ajax({
     url: 'http://174.138.36.217/people/',
     method: 'GET',
     success: (results) => {
       console.log(typeof results)
       console.log(results);

       this.setState({peoples: results});
     },
     error: (xhr, err) => {
       console.log('err', err);
     }
   })
  }




  render (){
    return (

      <div><h2>Coding challenge for Ignite</h2></div>

    )
  }
}


export default App;
