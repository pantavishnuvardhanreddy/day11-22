
import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from './components/FirstComponent'
import UserComponent from './components/UserComponent'
import Orderform from "./Orderform";
import { } from "module";
ReactDOM.render(
    <div>
      <h1 style={{textAlign:"center"}}>Hello, Welcome to React and TypeScript</h1> 
      {/* <FirstComponent/> */}
      {/* {<UserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()} /> */}
      <Orderform></Orderform>
    </div>,
    document.getElementById("root")
);