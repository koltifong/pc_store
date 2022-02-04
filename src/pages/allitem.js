import react, { Component } from "react";
import { 
    Breadcrumb, 
    Divider, 
    Segment, 
    Header, 
    Icon, 
    Input,
    Item, 
    Button} from 'semantic-ui-react';
import { useState } from "react";
import allitems from './items.json';
import '../../src/components/App.css';

import cpuimg from './img/cpu.jpeg';
import mbimg from './img/motherboard.jpg';
import cardimg from './img/videocard.jpg';
import headphoneimg from './img/headphones.png';

function Allitem() {

    const sections = [
        {key:'Home', content:'Home', active: false},
        {key:'allitems', content:'Items', active: true}
    ]

    const [searchTerm, setSearchTerm] = useState("");

    return (

        <Segment className="allitems m-0">
            
            <Breadcrumb icon='right angle' sections={sections} />
            <Divider />

            <Segment className="m-0 p-0 d-flex border border-muted">
                <Input className="flex-fill" type="text" placeholder="Find Products ..." onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} icon={<Icon name="search" />} />
            </Segment>

            {allitems.map((category) => {

                return (
                    <Segment key={category.id} className="itemgroup-container p-0 overflow-auto">

                        {/*category 1: cpu*/}
                        {category.cpu.filter((val) => {
                            if (searchTerm == "") return val;
                            else if (val.brand.toLowerCase().includes(searchTerm.toLowerCase())) {
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
                                                    <Button content="Add To Cart" />
                                                </Segment>
                                            </Item.Meta>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            )
                        })}

                        {/*category 2: motherboard*/}
                        {category.motherboard.filter((val) => {
                            if (searchTerm == "") return val;
                            else if (val.brand.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map((mb) => {
                            return (
                                <Item.Group key={mb.id} className="itemgroup p-2 m-0 bg-light border-bottom border-dark">
                                    <Item>
                                        <Item.Image size='tiny' src={mbimg} />

                                        <Item.Content>
                                            <Item.Header>{mb.brand}</Item.Header>
                                            <Item.Meta className="d-flex flew-wrap border border-muted">
                                                <Segment className="flex-fill p-0 m-0 d-flex flex-column">
                                                    <Segment className="p-2 m-0 flex-fill d-flex flex-wrap justify-content-around border-0">
                                                        <p>Memory Max: <span className="text-dark">{mb["Memory Max"]}</span></p>
                                                        <p>Socket/CPU: <span className="text-dark">{mb["Socket/CPU"]}</span></p>
                                                        <p>Form Factor: <span className="text-dark">{mb.FF}</span></p>
                                                    </Segment>
                                                    <Segment className="p-2 m-0 flex-fill d-flex flex-wrap justify-content-around border-0">
                                                        <p>Memory Slots: <span className="text-dark">{mb["Memory Slots"]}</span></p>
                                                        <p>Color: <span className="text-dark">{mb.Color}</span></p>
                                                    </Segment>
                                                </Segment>
                                                <Segment className="flex-fill p-2 m-0 d-flex flex-column align-items-center justify-content-center">
                                                    <Header className="text-danger" content={mb.price + "$"} />
                                                    <Button content="Add To Cart" />
                                                </Segment>
                                            </Item.Meta>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            )
                        })}

                        {/*category 3: video card*/}
                        {category["video card"].filter((val) => {
                            if (searchTerm == "") return val;
                            else if (val.brand.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map((vc) => {
                            return (
                                <Item.Group key={vc.id} className="itemgroup p-2 m-0 bg-light border-bottom border-dark">
                                    <Item>
                                        <Item.Image size='tiny' src={cardimg} />

                                        <Item.Content>
                                            <Item.Header>{vc.brand}</Item.Header>
                                            <Item.Meta className="d-flex flew-wrap border border-muted">
                                                <Segment className="flex-fill p-0 m-0 d-flex flex-column">
                                                    <Segment className="p-2 m-0 flex-fill d-flex flex-wrap justify-content-around border-0">
                                                        <p>Boost Clock: <span className="text-dark">{vc["Boost Clock"]}</span></p>
                                                        <p>Chipset: <span className="text-dark">{vc.Chipset}</span></p>
                                                        <p>Core Clock: <span className="text-dark">{vc["Core Clock"]}</span></p>
                                                    </Segment>
                                                    <Segment className="p-2 m-0 flex-fill d-flex flex-wrap justify-content-around border-0">
                                                        <p>Memory: <span className="text-dark">{vc.Memory}</span></p>
                                                        <p>Length: <span className="text-dark">{vc.Length}</span></p>
                                                        <p>Color: <span className="text-dark">{vc.Color}</span></p>
                                                    </Segment>
                                                </Segment>
                                                <Segment className="flex-fill p-2 m-0 d-flex flex-column align-items-center justify-content-center">
                                                    <Header className="text-danger" content={vc.price + "$"} />
                                                    <Button content="Add To Cart" />
                                                </Segment>
                                            </Item.Meta>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            )
                        })}

                        {/*category 4: headphones*/}
                        {category.headphones.filter((val) => {
                            if (searchTerm == "") return val;
                            else if (val.brand.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map((hp) => {
                            return (
                                <Item.Group key={hp.id} className="itemgroup p-2 m-0 bg-light border-bottom border-dark">
                                    <Item>
                                        <Item.Image size='tiny' src={headphoneimg} />

                                        <Item.Content>
                                            <Item.Header>{hp.brand}</Item.Header>
                                            <Item.Meta className="d-flex flew-wrap border border-muted">
                                                <Segment className="flex-fill p-0 m-0 d-flex flex-column">
                                                    <Segment className="p-2 m-0 flex-fill d-flex flex-wrap justify-content-around border-0">
                                                        <p>Enclosure Type: <span className="text-dark">{hp["Enclosure Type"]}</span></p>
                                                        <p>Frequency Response: <span className="text-dark">{hp["Frequency Response"]}</span></p>
                                                        <p>Microphone: <span className="text-dark">{hp.Microphone}</span></p>
                                                    </Segment>
                                                    <Segment className="p-2 m-0 flex-fill d-flex flex-wrap justify-content-around border-0">
                                                        <p>Type: <span className="text-dark">{hp.Type}</span></p>
                                                        <p>Wireless: <span className="text-dark">{hp.Wireless}</span></p>
                                                        <p>Color: <span className="text-dark">{hp.Color}</span></p>
                                                    </Segment>
                                                </Segment>
                                                <Segment className="flex-fill p-2 m-0 d-flex flex-column align-items-center justify-content-center">
                                                    <Header className="text-danger" content={hp.price + "$"} />
                                                    <Button content="Add To Cart" />
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

export default Allitem;