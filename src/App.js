import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import Message from './components/Message';
import Counter from './components/Counter'
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './Class/ClassClick';
import EventBind from './Class/EventBind';

class App extends Component {
  render()
  {
    return (
      <div className="App">
        {/* <Greet name="Bruce" heroName="Lee">
          <p>Children Props</p>
        </Greet> */}
        {/* <Message/> */}
        {/* <Welcome name="Component" heroName="heroName/Welcome">
        </Welcome> */}
        {/* <Counter/> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick/> */}
        <EventBind/>
      </div>
    );
  }
}

export default App;
