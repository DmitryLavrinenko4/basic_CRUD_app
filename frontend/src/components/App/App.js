import React from 'react';
import './App.css';
import Department from  '../Department'
import Employee from  '../Employee'
class App  extends React.Component{
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div className={'left'}>
          <Department departments={[{title: 'first', _id: '1'}, {title: 'first2', _id: '2'}]}/>
        </div>
        <div className={'right'}>
          <Employee />
        </div>
      </div>
    );
  }
}

export default App;
