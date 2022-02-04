import react from 'react';
import { 
    Input, 
    Icon,
    Divider, 
    Segment, 
    Header,
    Label,
    Item, 
    Button } from 'semantic-ui-react';
import { Slider } from '@mui/material';
import { useState } from "react";
import allitems from './../items.json';
import '../../../src/components/App.css';
import prebuiltimg from './../img/prebuilt.jpg';


function valuetext(value) {
    return `${value}$`;
}

const Prebuilt = () => {

    const [priceTerm, setPriceTerm] = useState([400, 2500]);
    const [selectTerm, setSelectTerm] = useState("");
    const [selectTerm2, setSelectTerm2] = useState("");

    const handleChange = (event, newPrice) => {
        setPriceTerm(newPrice);
    };

    return (
        <Segment className="prebuilt-container m-0">
            <Header content="All Completed Builds" />
            <Divider className="border border-dark" />
            <Header content="Filter Products" as="h4" />
            <Segment className="m-0 mt-1 p-0 border-0">
                <div className="m-0 p-0 border-none">
                    <Label content="Price $" />
                    <Slider 
                        getAriaLabel={() => 'Price range'}
                        value={priceTerm}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={300}
                        max={2500}
                    />
                </div>
                <div className="p-0 m-0 border-none">
                    <Label content="CPU" />
                    <select className="p-2 m-0 mt-2 container-fluid border border-muted" defaultValue={useState.selectTerm} onChange={(event) => {
                        setSelectTerm(event.target.value);
                    }} >
                        <option value="">All CPUs</option>
                        <option value="amd ryzen 5">AMD Ryzen 5</option>
                        <option value="amd ryzen 7">AMD Ryzen 7</option>
                        <option value="amd ryzen 9">AMD Ryzen 9</option>
                        <option value="intel core i5">Intel Core i5</option>
                        <option value="intel core i7">Intel Core i7</option>
                    </select>
                </div>
                <div className="p-0 m-0 mt-2 border-none">
                    <Label content="Video Card" />
                    <select className="p-2 m-0 mt-2 container-fluid border border-muted" defaultValue={useState.selectTerm} onChange={(event) => {
                        setSelectTerm2(event.target.value);
                    }} >
                        <option value="">All Video Cards</option>
                        <option value="evga xc">EVGA XC</option>
                        <option value="asus dual evo oc">Asus DUAL EVO OC</option>
                        <option value="radeon hd">Radeon HD</option>
                        <option value="radeon pro">Radeon Pro</option>
                        <option value="geforce rtx">GeForce RTX</option>
                        <option value="geforce gtx">GeForce GTX</option>
                    </select>
                </div>
            </Segment>
            <Divider className="border border-dark" />
            {allitems.map((category) => {
                return (
                    <Segment key={category.id} className="itemgroup-container p-0 overflow-auto border-0 shadow-0" >
                        {category.prebuilt.filter((val) => {
                            if (selectTerm == "" && selectTerm == "" && ((priceTerm[0] <= 100 && priceTerm[1] >= 1100))) return val;
                            else if (
                                val.cpu.toLowerCase().includes(selectTerm.toLowerCase()) &&
                                val.videocard.toLowerCase().includes(selectTerm2.toLowerCase()) &&
                                (val.price >= priceTerm[0] && val.price <= priceTerm[1])) {
                                return val;
                            }
                        }).map((prebuilt) => {
                            return (
                                <Item.Group className="itemgroup p-3 m-0 mb-2 bg-light border border-info">
                                    <Item key={prebuilt.id} >
                                        <Item.Image size="medium" src={prebuiltimg} />
                                        
                                        <Item.Content>
                                            <Item.Meta className="d-flex flew-wrap border border-muted">
                                                <Segment className="flex-fill m-0 p-4">
                                                    <p>CPU: <span className='text-success'>{prebuilt.cpu}</span></p>
                                                    <p>Memory: <span className='text-success'>{prebuilt.memory}</span></p>
                                                    <p>Motherboard: <span className='text-success'>{prebuilt.motherboard}</span></p>
                                                    <p>Storage: <span className='text-success'>{prebuilt.storage}</span></p>
                                                    <p>Video Card: <span className='text-success'>{prebuilt.videocard}</span></p>
                                                </Segment>
                                                <Segment className="flex-fill m-0 p-4">
                                                    <Segment className="d-flex flex-wrap justify-content-between p-0 border-none shadow-none">
                                                        <Segment content="Total:" className="m-0 h1 bg-light border-0 text-muted" />
                                                        <Segment content={prebuilt.price + "$"} className="m-0 h1 text-danger" />
                                                    </Segment>
                                                    <Button content="Add To Cart" icon="cart" />
                                                </Segment>
                                            </Item.Meta>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            )
                        })}
                        <Segment className="emptyItem">
                            <Header>No Matching Items ...</Header>
                        </Segment>
                    </Segment>
                )
            })}
        </Segment>
    )
}
export default Prebuilt;