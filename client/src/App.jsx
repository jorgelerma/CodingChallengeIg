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

checkPrimer(n){
    if(n <=1 ) {return 'Not a prime ';}
    if(n <= 3) {return 'prime';}
    if(n%2 === 0 || n%3 ===0) {return 'Not a prime  ';}

    for(var i=5; i*i <= n; i = i+6){

      if(n%i == 0 || n%(i+2) == 0){
        return 'Not a prime  ';
      }
    }
    return 'prime';
  }

checkAge(personBirthday){
 	  var currentDate = new Date();
    var birthday = new Date(personBirthday);
    var age = currentDate.getFullYear() - birthday.getFullYear();
    var m = currentDate.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
  }




  render (){
    return (

      <div><h2>Coding challenge for Ignite</h2></div>

    )
  }
}


export default App;
