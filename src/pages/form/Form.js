import React from 'react';
import useForm from './useForm';
import validate from './validate';
import '../../components/App.css';
import { Link } from 'react-router-dom';

const Form = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

  return <div className='form-container'>
        <h1 className='form-h1'>Delivery Information</h1>
        <div classname='form-content-left'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='form-h2'>Contect and Delivery Information</h2>
                <div className='form-inputs'>
                    <input id='email' type='email' name='email' className='form-input' placeholder='Email Address' value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <input id='firstname' type='text' name='firstname' className='form-input' placeholder='First Name' value={values.firstname} onChange={handleChange}/>
                    {errors.firstname && <p>{errors.firstname}</p>}
                </div>
                <div className='form-inputs'>
                    <input id='lastname' type='text' name='lastname' className='form-input' placeholder='Last Name' value={values.lastname} onChange={handleChange}/>
                    {errors.lastname && <p>{errors.lastname}</p>}
                </div>
                <div className='form-inputs'>
                    <input id='commune' type='text' name='commune' className='form-input' placeholder='Commune' value={values.commune} onChange={handleChange}/>
                    {errors.commune && <p>{errors.commune}</p>}
                </div>
                <div className='form-inputs'>
                    <input id='district' type='text' name='district' className='form-input' placeholder='District' value={values.district} onChange={handleChange}/>
                    {errors.district && <p>{errors.district}</p>}
                </div>
                <div className='form-inputs'>
                    <input id='city' type='text' name='city' className='form-input' placeholder='City/Province' value={values.city} onChange={handleChange}/>
                    {errors.city && <p>{errors.city}</p>}
                </div>
                <div className='form-inputs'>
                    <input id='housenumber' type='number' name='housenumber' className='form-input' placeholder='House Number' value={values.housenumber} onChange={handleChange}/>
                    {errors.housenumber && <p>{errors.housenumber}</p>}
                </div>
                <div className='form-inputs'>
                    <input id='phonenumber' type='number' name='phonenumber' className='form-input' placeholder='Phone Number' value={values.phonenumber} onChange={handleChange}/>
                    {errors.phonenumber && <p>{errors.phonenumber}</p>}
                </div>
                <table width='100%'>
                    <tr>
                        <td>
                            <Link to='/cart' >
                                <button className='form-backtocart-btn' type='button'>Back To Cart</button>
                            </Link>
                        </td>
                        <td>
                            
                                <button className='form-input-btn' type='submit'>Continue For Delivery</button>
                            
                        </td>
                    </tr>
                </table>
            </form>
      </div>
  </div>;
};

export default Form;
