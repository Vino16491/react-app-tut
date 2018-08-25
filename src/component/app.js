import React, {Component} from 'react';
import Table from './Table';
class App extends Component{
  render(){
    state = { characters :[
      {
        'name':'Charlie',
        'job':'Janitor'
      },
      {
        'name':'Mac',
        'job':'Bouncer'
      },
      {
        'name':'Doe',
        'job':'Aspiring actress'
      },
      {
        'name':'Dennis',
        'job':'Bartender'
      },
    ];}
    return(
      <div className="container">
        <h1>Hello, React! from component</h1>
        <div className="table">
          <Table characterData={characters}/>
        </div>

      </div>

    )

  }
}

export default App;
