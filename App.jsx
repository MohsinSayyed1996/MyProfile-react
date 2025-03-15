//class based component (CBC)
//render() is must

// import React, { Component } from "react";

// class App extends Component{
//     render(){
//         return <h1>CBC</h1>
//     }
// }
// export default App

//LHS(Child inherited RHS(Parent))
//App extends Component

//functional based component (FBC)
// NO need to render in FBC

// import React from "react";

// const App=() =>{
//     return <h1>FBC</h1>
// }

// // export default App

// import React from "react";

// const App=()=>{

//     let student= "mohsin"
//     let sid=100


//     return (
//         <>
//         <h1>Stuname : {student}, Sid :{sid}</h1>
//         <h1>Learning jsx concept</h1>
//         <br/>
//         <p>returning multiple jsx element</p>
//         <hr/>
//         <label htmlFor="uname">name :</label>
//         <input id="uname"></input>
//         </>
//     );
// }
// export default App

// import React from "react";
// import Child from "./Child";

// const App=()=>{
//     return (
//         <>
//             <Child/>
//         </>
//     )
// }
// export default App

//Applying CSS in Reactjs
//inline CSS

// import React from "react";

// const App=()=>{

//     let btn={
//         height:"50px",
//         width: "200px",
//         background:"red",
//         color:"yellow",
//         text
//     }
//     return (
//         <>
//         <h1 style={{color:"blue",textDecoration:"underline",textAlign:"center"}}>Learning Inline css</h1>
//         <button style={btn}>Change Me</button>
//         </>
//     )
// }
// export default App

//Global Css
// import React from "react";

// const App=()=>{
//     return (
//         <>
//         <p id="para">Global CSS</p>
//         <div className="sqr"></div>
//         </>
//     )
// }
// export default App

// import React from "react";
// import Header from "./modulecss/Header";

// const App=()=>{
//     return (
//         <>
//             <Header/>
//         </>
//     )
// }
// export default App

//Task inline css
// import React from "react";

// const App=()=>{
//     let diamond={
//         height:"100px",
//         width:"100px",
//         background:"blue",
//         transform:"rotate(45deg)",
//         position:"absolute",
//         top:"35.3%",
//         left:"43.3%"
//     }
//     return (
//         <>
//             <h1 style={{color:"blue",textDecoration:"underline",textAlign:"center"}}> Inline css</h1>
//             <div style={{height:"100px",width:"100px",borderRadius:"100px",background:"yellow",margin:"0 auto"}}></div>
//             <div style={{height:"0",width:"0",borderLeft:"50px solid transparent",borderRight:"50px solid transparent",
//                 borderBottom:"100px solid red",margin:"0 auto"}}></div>
//             <div style={diamond}></div>
//         </>
//     )
// }
// export default App

//Global CSS
// import React from "react";


// const App=()=>{
//     return (
//         <>
//                 <h1> global css</h1>
//                 <div className="circle"></div>
//                 <div className="triangle"></div>
//                 <div className="daimond"></div>
//         </>
//     )
// }
// export default App


//task-module-css

// import React from "react";
// import Task from "./modulecss/Task";

// const App=()=>{
//     return(
//         <>
//             <Task/>
//         </>
//     )
// }
// export default App

// import React,{ useState } from "react";

// const App=()=>{

//     let [empoyee,setEmployee]=useState("mohsin")//state varibale
//     let developer="Sayyed"//normal variable

//     let changeState=()=>{
//         setEmployee("Ismail") //update state variable
//     }

//     return (
//         <>
//         <h1>State varaible...{empoyee}</h1>
//         <h1>Normal varibale...{developer}</h1>
//         <button onClick={changeState}>Change State Value</button>
//         </>
//     )
// }
// export default App

// import React from "react";
// import SimpleCounter from "./task1/SimpleCounter"

// const App=()=>{
//     return (
//         <>
//             <SimpleCounter/>
//         </>
//     )
// }
// export default App

// import React from "react";
// import Child from "./Child"

// const App=()=>{
//     return(
//         <>
//             <Child Student="Mohsin" stuId={123} bool={true}/>
//         </>
//     )
// }
// export default App

//destruturing  the props
// import React from "react";
// import Child from "./Child"

// const App=()=>{
//     return(
//         <>
//             <Child employee="Mohsin" salary={123} bool={true}/>
//         </>
//     )
// }
// export default App

//sending array as a props-val

// import React from "react";
// import Child from "./Child";


// const App = () => {

// let tech=["html","css","js"]

//   return (
    
//     <>
//         <Child students={["mohsin","sayyed","Ismail"]} technology={tech}/>
//     </>
//   )
// }

// export default App

//sending obj as a prop-value

// import React from 'react'
// import Child from './Child'

// const App = () => {
//     let address={
//         state:"maharashtra",
//         city:"mumbai"
//     }
//   return (
//     <>
//         <Child
//             employee={{ename:"mohsin", company:"google"}}
//             location={address}
//         />
//     </>
//   )
// }

// export default App

//Note:render the sender(top) in the App

// import React from 'react'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <>
//         <Parent/>
//     </>
//   )
// }

// export default App

////Note:render the sender(top) in the App
// import React from 'react'

// import Parent from './Parent'

// const App = () => {
//   return (
//     <>
//     <Parent/>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Profileinfo from './Profileinfo'

// const App = () => {
//   return (
//     <>
//     <Profileinfo/>
//     </>
//   )
// }

// export default App





//*****************Mock Task *************************/
import React from "react";
import MyProfile1 from "./modulecss/MyProfile1";

const App=()=>{
    return(
        <>
            <MyProfile1/>
        </>
    )
}
export default App