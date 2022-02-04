import react, { Component } from "react";
import { 
    Breadcrumb, 
    Divider, 
    Segment, 
    Header, 
    Form,
    Button } from 'semantic-ui-react';
import contact from './contact.json';
import '../../src/components/App.css';
import { deselectOptions } from "@testing-library/user-event/dist/select-options";

class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        submittedName: '',
        submittedEmail: '',
        submittedMessage: ''
    }

    // handling change submission
    handleChange = (e, {name, value}) => this.setState({ [name]: value });
    // handling submission
    handleSubmit = () => {
        const { name, email, message } = this.state;
        this.setState({submittedName: name, submittedEmail: email, submittedMessage: message});
    }

    render() {

        // constant vars
        const sections = [
            {key:'Home', content:'Home', active: false},
            {key:'Contact', content:'Contact', active: true}
        ]

        const { name, email, message, submittedName, submittedEmail, submittedMessage } = this.state;

        // functions

        return (

            <Segment className="contact m-0">
            
            <Breadcrumb icon='right angle' sections={sections} />
            <Divider />

                <Segment className="d-flex flex-wrap m-0 p-0">

                    <Segment className="flex-fill">

                        <Header className="title-head" as='h2' icon='address card' content='Send Us a Message' />
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Input name="name" label='Your Name' placeholder='Your Name..' onChange={this.handleChange} />
                            <Form.Input name="email" label='Your Email' placeholder='example@gmail.com' onChange={this.handleChange} />
                            <Form.TextArea name="message" label='Your Message' placeholder='Say Something..' onChange={this.handleChange} />
                            
                            <Button type='submit'>Submit</Button>

                        </Form>
                    </Segment>

                    <Segment className="flex-fill">

                        <Header as='h5' icon='address book' content='Contacts' />
                        <Divider /> 
                        <Header as='h6' icon='colored green unhide' content='ownermailexample@gmail.com' />
                        <Header as='h6' icon='colored green unhide' content='manageremailexample@gmail.com' />

                    </Segment>

                </Segment>

            </Segment>

        );

    }

}

export default Contact;