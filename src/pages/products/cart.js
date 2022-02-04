import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Header, Button, Segment, Divider, Icon, Image, Input } from "semantic-ui-react";
import { useEffect, useState } from "react";
import '../../../src/components/App.css';

const Cart = (props) => {

    const { cartItems, setCartItems, total, setTotal, amt, setAmt } = props;

    //const [amount, setAmount] = useState([]);
    
    const onRemove = (price) => {
        setCartItems(cartItems.filter(item => item[2] !== price));
        setTotal(total - price);
    }

    /*const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(JSON.parse(window.sessionStorage.getItem("count")));
      }, []);
    
      useEffect(() => {
        window.sessionStorage.setItem("count", count);
      }, [count]);*/

    return (
        <>
            <Segment className="cart-container m-0">
                <Header icon={<Icon name="cart" />} content="Your Cart" className="text-dark font-weight-bold" />
                <Divider className='border border-dark' />
                <Segment className="cartitem-container m-0 p-0 mb-5">
                    {cartItems.map((item) => {
                        return (
                            <Segment key={item[4]} className="flex-fill d-flex flex-row flex-wrap align-items-center m-0 p-1 text-center">
                                <Segment className="flex-fill m-1 p-2 border-0 shadow-none">
                                    <Header content={item[0]} />
                                </Segment>
                                <Segment className="flex-fill m-1 p-2 d-flex justify-content-center border-0 shadow-none">
                                    <Image size='tiny' src={item[1]} />
                                </Segment>
                                <Segment className="flex-fill m-1 p-2 border-0 shadow-none">
                                    {item[3]}
                                </Segment>
                                <Segment className="flex-fill m-1 p-2 border-0 shadow-none">
                                    <Header className="text-success" content={item[2] + "$"} />
                                </Segment>
                                <Segment className="flex-fill m-1 p-2 border-0 shadow-none">
                                    <Input 
                                    type="number"
                                    name="item_total"
                                    min={1}
                                    max={1}
                                    value={1}
                                    />
                                </Segment>
                                <Segment className="flex-fill m-1 p-2 border-0 shadow-none">
                                    <Button className="text-white bg-danger" onClick={(event) => {onRemove(item[2])}}>Remove</Button>
                                </Segment>
                            </Segment>
                        )
                    })}
                    <Segment className="emptycart">
                        <Header>Your Cart is Empty..</Header>
                    </Segment>
                </Segment>
                <br/>
                <Segment className="m-0">
                    <Header content={"Total: " + total + "$"} />
                </Segment>

                <Link to='/Main'>
                    <Button className="m-0 mt-2 p-3 text-light bg-success">
                        Check Out
                    </Button>  
                </Link>

            </Segment>

            {/*<div className="App">
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>*/}
        </>
    )
}
export default Cart;