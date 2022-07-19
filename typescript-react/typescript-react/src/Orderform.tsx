
import * as React from "react";
import { useState } from "react";
import * as ReactDom from "react-dom";
import { Order } from "./components/Order";

function Orderform() {
    const [order, setOrder] = React.useState(new Order());
    function save(){
        console.log('saved');
    }
    function update(event: any) {
        console.log(event.target.value);
        const order = new Order();
        order.price = event.target.value;
        setOrder( order);

    }
    return (
        <div style={{textAlign:"center", width:"300px",  margin:"0px auto"}}>
            <h1>This is a order form</h1> {order.item}
            <div  style={{textAlign:"left", paddingLeft:"20px"}}>
                <label>price: </label><br />
                <input type='number' placeholder='enter the price' onChange={update} value={order.price}></input>
                <button onClick={save} style={{color:"black", backgroundColor:"yellow"}}>Save</button>
            </div>
        </div>
    )
}

export default Orderform;