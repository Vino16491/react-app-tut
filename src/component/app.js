import React, {Component} from 'react';
import Table from './Table';
class App extends Component{
  // constructor(props){
  //   super(props);
  //   this.removeCharacter = this.removeCharacter.bind(this)
  
  // }
  
  removeCharacter = (index)=>{
    const {characters} = this.state;

    this.setState({
      characters:characters.filter((character, i)=>{
        return i !== index;
      })
    });
  };


  state = {
    characters :[
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
  ],
}
  render(){
    
    return(
      <div className="container">
        <h1>Hello, React! from component</h1>
        <div className="table">
          <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
        </div>

      </div>

    )

  }
}

export default App;
 