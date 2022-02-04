import React from "react";
import { Header, Button, Segment } from "semantic-ui-react";
import { useState } from "react";

const Context = (props) => {

    const [array, setArray] = useState([]);

    const { setCartItems } = props;

    const add = () => {
        /*setCartItems(arr => [...arr, `${arr.length}`]);*/
        setCartItems(arr => [...arr, `${arr.length}`]);
    }

    return (
        <>
            <Header content="context" />
            <Button content="ADD" onClick={add} />
            <Segment>
                {array.map((val) => {
                    return (
                        <div>{val}</div>
                    )
                })}
            </Segment>
        </>
    )
}
export default Context;