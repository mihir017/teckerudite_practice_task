import React, { useState } from 'react'
import { setContactData } from './Action';

const Contact = () => {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        budget: '',
        description: '',
    })

    const handleFormInput = (e) => {
        const { name, value } = e?.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleFormSubmit = () => {
        setContactData(formData).then(resp => {
            setFormData({});
            console.log(resp)
        } )
    }
  return (
      <div className='contact-box'>
          <div className='contact-form'>
              <p className='contact-header-para'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</p>
              <div className='form'>
                  <div className='form-field'>
                      <input name="fname" id='firstName' value={formData?.firstName} onChange={handleFormInput} className='input-field' placeholder='First Name' />
                  </div>
                  <div className='form-field'>
                      <input name="lname" id='lastName' value={formData?.lastName} onChange={handleFormInput} className='input-field' placeholder='Last Name' />
                  </div>
                  <div className='form-field'>
                      <input name="email" id='email' type='email' value={formData?.email} onChange={handleFormInput} className='input-field' placeholder='Mail' />
                  </div>
                  <div className='form-field'>
                      <input name="phone" id='phoneNo' value={formData?.phoneNo} className='input-field' onChange={handleFormInput} placeholder='Phone' type='number' />
                  </div>
                  <div className='form-field'>
                      <select className='select-field' name='budget' value={formData?.budget} onChange={handleFormInput} id="budget">
                          <option value="">Budget</option>
                          <option value="400000">400000</option>
                          <option value="500000">500000</option>
                          <option value="600000">600000</option>
                          <option value="700000">700000</option>
                      </select>
                  </div>
                  <div className='form-field'>
                      <input name="description" id='description' onChange={handleFormInput} value={formData?.description} className='input-field' placeholder='Description' />
                  </div>
              </div>
              <div className='btn-div d-flex align-center justify-center'>
              <button className='btn contact-btn' onClick={handleFormSubmit}>Submit</button>
              </div>
          </div>
    </div>
  )
}

export default Contact