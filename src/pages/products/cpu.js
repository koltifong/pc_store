import react, { Component } from "react";
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
import cpuimg from './../img/cpu.jpeg';
import '../../../src/components/App.css';


function valuetext(value) {
    return `${value}$`;
}

const CPU = (props) => {
    // use state of search input ...
    const [searchTerm, setSearchTerm] = useState("");
    const [selectTerm, setSelectTerm] = useState("");
    
    const [priceTerm, setPriceTerm] = useState([200, 1100]);
    
    const handleChange = (event, newPrice) => {
        setPriceTerm(newPrice);
    };


    // handling on add to cart ...
    const { cartItems, setCartItems, total, setTotal, amt, setAmt } = props;
    const onAdd = (product, img, price, brand, id) => {
        const dup_item = cartItems.find((item) => item[3] === brand);
        if (dup_item) {
            alert("This Item has already added to Cart!")
        } else {
            setCartItems(arr => [...arr, [product, img, price, brand, id]]);
            setTotal((price) + total);
        }
    }

    return(
        <Segment className="cpu-container m-0">
            <Segment className="d-flex flex-wrap align-items-center justify-content-between p-0 m-0 border-0 shadow-none">
                <Label className="product-label" content="CPU Products" />
                <Input className="border border-dark" type="text" name="searchCpu" placeholder="Find CPUs ..." 
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} icon={<Icon name="search" />} />
            </Segment>
            <Header content="Filter Products" as="h4" />
            <Divider className="border border-dark" />
            <Segment className="m-0 mt-1 p-0 border-0">
                <div className="m-0 p-0 border-none">
                    <Label content="Price $" />
                    <Slider 
                        getAriaLabel={() => 'Price range'}
                        value={priceTerm}
                        onChange={handleChange}
                        valueLabelDisplay="on"
                        getAriaValueText={valuetext}
                        min={100}
                        max={1100}
                    />
                </div>
                <div className="p-0 m-0 border-none">
                    <Label content="Manufacturer" />
                    <select className="p-2 m-0 mt-2 container-fluid border border-muted" defaultValue={useState.selectTerm} onChange={(event) => {
                        setSelectTerm(event.target.value);
                    }} >
                        <option value="">All Manufacturers</option>
                        <option value="amd">AMD</option>
                        <option value="intel">Intel</option>
                    </select>
                </div>
            </Segment>
            <Divider className="border border-dark" />
            {allitems.map((category) => {
                return (
                    <Segment key={category.id} className="itemgroup-container p-0 overflow-auto">
                        {category.cpu.filter((val) => {
                            if (searchTerm == "" && selectTerm == "" && (priceTerm[0] <= 100 && priceTerm[1] >= 1100)) return val;
                            else if (val.brand.toLowerCase().includes(searchTerm.toLowerCase()) 
                                    && val.brand.toLowerCase().includes(selectTerm.toLowerCase())
                                    && (val.price >= priceTerm[0] && val.price <= priceTerm[1])) {
                                    return val;
                            }
                        }).map((cpu) => {
                            return (
                                <Item.Group key={cpu.id} className="itemgroup p-2 m-0 bg-light border-bottom border-dark">
                                    <Item>
                                        <Item.Image size='tiny' src={cpuimg} />

                                        <Item.Content>
                                            <Item.Header>{cpu.brand}</Item.Header>
                                            <Item.Meta className="d-flex flew-wrap border border-muted">
                                                <Segment className="flex-fill p-0 m-0 d-flex flex-column">
                                                    <Segment className="p-2 m-0 flex-fill d-flex flex-wrap justify-content-around border-0">
                                                        <p>Core Counts: <span className="text-dark">{cpu.corecount}</span></p>
                                                        <p>Performance Boost Clock: <span className="text-dark">{cpu.PBC}</span></p>
                                                        <p>Performance Core Clock: <span className="text-dark">{cpu.PCC}</span></p>
                                                    </Segment>
                                                    <Segment className="p-2 m-0 flex-fill d-flex flex-wrap justify-content-around border-0">
                                                        <p>TDP: <span className="text-dark">{cpu.TDP}</span></p>
                                                        <p>Integrated Graphics: <span className="text-dark">{cpu["Integrated Graphics"]}</span></p>
                                                        <p>SMT: <span className="text-dark">{cpu.SMT}</span></p>
                                                    </Segment>
                                                </Segment>
                                                <Segment className="flex-fill p-2 m-0 d-flex flex-column align-items-center justify-content-center">
                                                    <Header className="text-danger" content={cpu.price + "$"} />
                                                    
                                                    <Button content="Add To Cart" onClick={() => {onAdd("CPU", cpuimg ,cpu.price, cpu.brand, cpu.id)}} />
                                                    
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

export default CPU;