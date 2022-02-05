import React, { useState } from 'react';
import { Icon, Segment, Modal, Button, Form, Grid, Divider, Message } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import Logo from '../images/logo.png';
import './App.css';

const Header = () => {

    // handling modal
    // login 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // user
    const [ userlog, setUserlog ] = useState(false);
    const userClose = () => setUserlog(false);
    const userOpen = () => setUserlog(true);
    // handling user registration
    const [ userRegist, setUserRegist ] = useState({
       username: '',
       email: '',
       password: '' 
    });
    const [ records, setRecords ] = useState([]);
    const [ success, setSuccess ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ regist, setRegist ] = useState(false);
    const [ alert, setAlert ] = useState("");
    const [ color, setColor ] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegist({...userRegist, [name] : value})
    }
    const handleSubmit = (e) => {
        if (userRegist.username == '' || userRegist.email == '' || userRegist.password == '') {
            setError(true);
            setAlert("empty");
            setSuccess(false);
        } else {
            const dup_name = records.find((search) => search.username == userRegist.username);
            if (dup_name) {
                setError(true);
                setAlert("dup");
                setSuccess(false);
            } else {
                e.preventDefault();
                const newRecords = {...userRegist, id: new Date().getTime().toString()};
                
                setRecords([...records, newRecords]);
                
                //reset form
                setUserRegist({username: "", email: "", password: ""});

                setError(false);
                setSuccess(true);
                setOpen(false);
                User(records.username);
            }
        }
    }

    // handling login
    const [ login, setLogin ] = useState({
        username: '', password: ''
    })
    const loginChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLogin({...login, [name]: value});
    }
    const loginSubmit = (event) => {
        if (login.username == '' || login.password == '') {
            setRegist(true);
            setColor('red');
            setAlert("empty");
        } else {
            const reg_name = records.find((search) => search.username == login.username);
            if (reg_name) {
                setRegist(true);
                setColor('green');
                setAlert("reg");
            } else {

                setRegist(true);
                setColor('violet');
                setAlert("no_reg");
            }
        }
    }

    const info = () => {
        if (alert == "dup") {
            return "This username has been registered!"
        } else if (alert == "empty") {
            return "Invalid Fields or Empty Fields"
        } else if (alert == "no_reg") {
            return "No Registered username"
        } else if (alert == "reg") {
            return "Login Successful!"
        }
    }

    const User = () => {
        if (records.length != 0) {
            return <Button className="user-btn" onClick={userOpen} >{records.username}</Button>
        }
        return <Button className="user-btn" onClick={handleOpen} >User</Button>
    }

    return(

        <>

            <div className="ui logo menu">
                <div className="store-name item">
                    <img src={Logo} alt="logo" width="35px" height="35px" />
                    <h2>PCPICKER</h2>
                </div>
                <div className="ui right item">
                    <User />
                    <a href="#"><i className="icon user"></i></a>
                    <Link to="/cart"><Icon name='cart' /></Link>
                </div>
            </div>
            <div className="ui nav menu">
                <Link to="/" className="item">Home</Link>
                <Link to="/about" className="item">About</Link>
                <a class="active item" data-bs-toggle="collapse" data-bs-target="#browse-product">
                    Browse Parts&nbsp;<i className="icon arrow alternate circle down outline pr-1"></i>
                </a>
                <div className="right menu">
                    <div className="item">
                        <Link to='/allitem' className='search' ><Icon name='search' /></Link>
                    </div>
                </div>
            </div>
            <div id="browse-product" className="browse-content collapse p-0 m-0">
                <div className="browse-container row">
                    <div className="browse-parts d-flex flex-row align-items-center col-sm-6">
                        <div className="ui vertical menu p-0 m-0 flex-fill">
                            <Link to='/cpu' className='link item'>CPU<i className="icon chevron circle right"></i></Link>
                            <a href="" className="link item">CPU Cooler<i className="icon chevron circle right"></i></a>
                            <a href="" className="link item">Motherboard<i className="icon chevron circle right"></i></a>
                            <a href="" className="link item">Memory<i className="icon chevron circle right"></i></a>
                        </div>
                        <div className="ui vertical menu p-0 m-0 flex-fill">
                            <a href="" className="link item">Storage<i className="icon chevron circle right"></i></a>
                            <a href="" className="link item">Video Card<i className="icon chevron circle right"></i></a>
                            <a href="" className="link item">Power Supply<i className="icon chevron circle right"></i></a>
                            <a href="" className="link item">Case<i className="icon chevron circle right"></i></a>
                        </div>
                    </div>
                    <div class="browse-others d-flex flex-row align-items-center justify-content-center col-sm-6">
                        <div className="ui vertical menu p-0 m-0 flex-fill">
                            <div className="menu p-0 m-0">
                                <div className="item header text-dark">Peripherals</div>
                                <div className="ui divider p-0 m-0"></div>
                                <a className="item">Headphones</a>
                                <a className="item">Mice</a>
                                <a className="item">Keyboards</a>
                                <a className="item">Webcams</a>
                                <a className="item">Speakers</a>
                                <a className="item">Monitors</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                basic
                onClose={userClose} 
                onOpen={userOpen}
                open={userlog}
                size='tiny'
            >
                <Modal.Content>
                    <Segment className='bg-white text-dark p-5' >
                        <div>Login suc</div>
                    </Segment>
                </Modal.Content>
            </Modal>

            <Modal
                basic
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                size="huge"
            >
                <Modal.Content>
                    <Segment className="bg-white text-dark p-5">
                        <Grid columns={2} relaxed="very" >
                            <Grid.Column>
                                <div className="h1 text-muted m-0 mb-3" >Register</div>
                                <Form onSubmit={handleSubmit} success={success} error={error} >
                                    <label className='h5 text-info'>Username</label>
                                    <Form.Input
                                        placeholder='Username'
                                        icon='user'
                                        iconPosition='left'
                                        name='username'
                                        type='name'
                                        value={userRegist.username}
                                        onChange={handleChange}
                                        />
                                    <label className='h5 text-info'>Email</label>
                                    <Form.Input
                                        placeholder='Email'
                                        icon='mail'
                                        iconPosition='left'
                                        name='email'
                                        type='email'
                                        value={userRegist.email}
                                        onChange={handleChange}
                                        />
                                    <label className='h5 text-info'>Password</label>
                                    <Form.Input
                                        placeholder='Password'
                                        icon='lock'
                                        iconPosition='left'
                                        name='password'
                                        type='password'
                                        value={userRegist.password}
                                        onChange={handleChange}
                                        />
                                    <Message
                                    success
                                    header='Registration Completed'
                                    content="You're all signed up for store!"
                                    />
                                    <Message
                                    error
                                    color='red'
                                    header={info}
                                    />
                                    <Form.Button content='Submit' />
                                </Form>
                            </Grid.Column>
                            <Grid.Column verticalAlign='middle'>
                                <div className="h1 text-muted m-0 mb-3" >Log In</div>
                                <Form onSubmit={loginSubmit} warning={regist} >
                                    <Form.Input 
                                    placeholder="Username.."
                                    icon='user'
                                    iconPosition='left'
                                    name='username'
                                    type='name'
                                    value={login.username}
                                    onChange={loginChange}
                                    />
                                    <Form.Input 
                                    placeholder="Password.."
                                    icon='lock'
                                    iconPosition='left'
                                    name='password'
                                    type='password'
                                    value={login.password}
                                    onChange={loginChange}
                                    />
                                    <Message
                                    warning
                                    color={color}
                                    header={info}
                                    />
                                    <Form.Button content='Submit' />
                                </Form>
                            </Grid.Column>
                        </Grid>
                        <Divider vertical>OR</Divider>
                    </Segment>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> Cancel
                    </Button>
                </Modal.Actions>
            </Modal>

        </>

    );

}

// export: header
export default Header;