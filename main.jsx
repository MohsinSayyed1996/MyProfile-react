//This act as a"JS" file
//"hsx"-->JavaScript XML--> compared to normal JS, JSX is faster and syntax is easy
//here we import 2 main library of ReactJS-->1)react 2)react-dom
//syntax : import variable from "library"

import React from "react"
import ReactDom from "react-dom/client"
import App from "./App"
// import "./global.css"

ReactDom.createRoot(document.getElementById("root")).render(<App/>)


 //createRoot(container)--> connects main.jsx and html file by targetting root element
 //container--> document.getelementbyID("root")
 //render (content)--> used to load/display content on UI

