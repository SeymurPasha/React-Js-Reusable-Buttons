import React from 'react';
import './App.css';
import Button from './Button';

class App extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
      
    }
  }

  
  render() {
  return (
    <div className="App">
     <div className = 'column1'>
      <Button name = '<Button />'></Button>
      <Button name = ':hover, :focus' ></Button>
      <Button name = '<Button outline/>' type = 'outline'></Button>
      <Button name = ':hover, :focus' ></Button>
      <Button name = '<Button text/>' type = 'text'></Button>
      <Button name = ':hover, :focus' ></Button>
     </div>
     <div>
      <Button name = '<Button  disableShadow/>' type = 'disableShadow'></Button>
      </div>
      <div>
      <Button name = '<Button  disabled/>'  disabled = {true}></Button>
      <Button name = '<Button text disabled/>' type = 'text' disabled = {true}></Button>
      </div>
      <div>
      <Button name = '<Button  small/>' size = 'small' ></Button>
      <Button name = '<Button  medium/>' size = 'medium' ></Button>
      <Button name = '<Button  large/>'size = 'large' ></Button>
      </div>
      <div>
      <Button name = '<Button  default/>' ></Button>
      <Button name = '<Button  primary/>' color = 'primary' ></Button>
      <Button name = '<Button  secondary/>'color = 'secondary' ></Button>
      <Button name = '<Button  danger/>'color = 'danger' ></Button>
      </div>
      
    </div>
  );
}
}
export default App;
