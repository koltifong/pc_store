import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const FormSuccess = (props) => {
    return (
        <>
            <Segment className='m-5 p-5 d-flex justify-content-center'>
                <Header content="Thank You For Your Purchase" />
            </Segment>
        </>
    )
};

export default FormSuccess;