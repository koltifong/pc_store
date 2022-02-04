import React from 'react';
import '../../src/components/App.css';
import { 
    Breadcrumb, 
    Divider, 
    Segment, 
    Header, 
    Card,
    Image,
    Icon, 
    Button,
    Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import allitems from './items.json';
import prebuiltimg from './img/prebuilt.jpg';
import cpuimg from './img/cpu.jpeg';
import vcimg from './img/videocard.jpg';

const Home = () => {
    return(

        <>  
            <Segment className="home m-0">

                <Breadcrumb icon='right angle' sections={sections} />
                <Divider />
                <Header className="title-head" as='h2' icon='tags' content='Best Buys' />
                <div className="best-buy d-flex flex-wrap align-items-center">
                    
                    {allitems.map((cat) => {
                        return (
                            
                            cat.cpu.slice(0, 3).map((cpu) => {
                                return (
                                    <Card key={cpu.id} className="flex-fill">
                                        <Image size='small' src={cpuimg} wrapped ui={false} />
                                        <Card.Content>
                                        <Card.Description>
                                            <p>Manufacturer: <span className='text-success'>{cpu.brand}</span></p>
                                            <p>Integrated Graphics: <span className='text-success'>{cpu['Integrated Graphics']}</span></p>
                                            <p>Performance Boost Clock: <span className='text-success'>{cpu.PBC}</span></p>
                                            <p>Performance Core Clock: <span className='text-success'>{cpu.PCC}</span></p>
                                            <p>Core Count: <span className='text-success'>{cpu.corecount}</span></p>
                                            <p>SMT: <span className='text-success'>{cpu.SMT}</span></p>
                                            <p>TDP: <span className='text-success'>{cpu.TDP}</span></p>
                                        </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Button icon>
                                                <Icon name='cart' />
                                                &nbsp;Add To Cart
                                            </Button>
                                            <Header className='text-info' content={cpu.price + '$'} floated='right' />
                                        </Card.Content>
                                    </Card>
                                )
                            })
                            
                        )
                        
                    })}
                    {allitems.map((cat) => {
                        return (
                            
                            cat['video card'].slice(0, 3).map((vc) => {
                                return (
                                    <Card key={vc.id} className="flex-fill">
                                        <Image size='small' src={vcimg} wrapped ui={false} />
                                        <Card.Content>
                                        <Card.Description>
                                            <p>Manufacturer: <span className='text-success'>{vc.brand}</span></p>
                                            <p>Boost Clock: <span className='text-success'>{vc['Boost Clock']}</span></p>
                                            <p>Chipset: <span className='text-success'>{vc.Chipset}</span></p>
                                            <p>Color: <span className='text-success'>{vc.Color}</span></p>
                                            <p>Core Clock: <span className='text-success'>{vc['Core Clock']}</span></p>
                                            <p>Length: <span className='text-success'>{vc.Length}</span></p>
                                            <p>Memory: <span className='text-success'>{vc.Memory}</span></p>
                                        </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Button icon>
                                                <Icon name='cart' />
                                                &nbsp;Add To Cart
                                            </Button>
                                            <Header className='text-info' content={vc.price + '$'} floated='right' />
                                        </Card.Content>
                                    </Card>
                                )
                            })
                            
                        )
                        
                    })}

                </div>

                <Header className="title-head" as='h2' icon='computer' content='Prebuilts' />
                <div className="prebuilt d-flex flex-wrap align-items-center m-0 mb-2">

                    {allitems.map((cat) => {
                        return (
                            cat.prebuilt.slice(0, 3).map((prebuilt) => {
                                return (
                                    <Card key={prebuilt.id} className="flex-fill">
                                        <Image src={prebuiltimg} wrapped ui={false} />
                                        <Card.Content>
                                        <Card.Description>
                                            <p>CPU: <span className='text-success'>{prebuilt.cpu}</span></p>
                                            <p>Memory: <span className='text-success'>{prebuilt.memory}</span></p>
                                            <p>Motherboard: <span className='text-success'>{prebuilt.motherboard}</span></p>
                                            <p>Storage: <span className='text-success'>{prebuilt.storage}</span></p>
                                            <p>Video Card: <span className='text-success'>{prebuilt.videocard}</span></p>
                                        </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Button icon>
                                                <Icon name='cart' />
                                                &nbsp;Add To Cart
                                            </Button>
                                            <Header className='text-info' content={prebuilt.price + '$'} floated='right' />
                                        </Card.Content>
                                    </Card>
                                )
                            })
                        )
                    })}

                </div>

                <Link className="seeprebuilt-btn" to='/prebuilt' icon>See All Prebuilts&nbsp;<Icon name="right arrow" /></Link>

            </Segment>

        </>

    );
}
const sections = [
    { key: 'Home', content: 'Home', active: true },
]

// export
export default Home;