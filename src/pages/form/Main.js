import React, {useState} from 'react';
import Form from './Form'
import FormSuccess from './FormSuccess'

const Main = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm () {
        setIsSubmitted(true);
    }
  return (
    <>
      <div className='form-container'>
        {!isSubmitted ? (<Form submitForm={submitForm} />) : (<FormSuccess />)}
      </div>
    </>
  );
};

export default Main;