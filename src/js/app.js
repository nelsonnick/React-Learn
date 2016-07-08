// import React from "react"
// import ReactDOM from "react-dom"
import Hello from "./hello.js"

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div id="app">
            <Hello name="aaa" age="21"/>
        </div>
    }
}

ReactDOM.render(<App/>,document.body)