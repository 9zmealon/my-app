import React, { Component } from 'react';
// import Card from './components/card';
// import FAQList from './components/FAQList.jsx';
// import From from './components/From.jsx';
// import LoginFrom from './components/LoginForm'
import './App.css';

// import ToDoDataList from './components/ToDoPF/ToDoDataList.jsx';
// import ToDoData from './components/ToDoPF/ToDoData';
import ToDoFrontPage from './components/ToDoPF/ToDoFrontPage';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Card /> */}
          {/* <Card title="title"></Card>
          <Card>hello</Card> */}

          {/* <From/> */}
          {/* <FAQList/> */}

          {/* <LoginFrom/> */}

          {/* <ToDoDataList/> */}
          <ToDoFrontPage/>
      </div>
    );
  }
}

export default App;
