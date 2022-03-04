import React from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
  
  const list =(props)=>{
      return <div>{props.searchArray}</div>
  }
  
  return (
    <div id="main">
      <form>
        <label for="search">Search</label><br />
        <input type ="text" value ={props.searchArray} onChange={props.editsearchArray} id="search-input" className="text" /><br />
        <label for ="result">Result</label>

      </form>
    </div>
  )
}


export default App;
