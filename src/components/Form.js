import React, { useState } from 'react';
import firebase from '../firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    textarea: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      // Check if form fields are filled
      if (!formData.name || !formData.email || !formData.number) {
        toast.error('Please fill all the required fields!');
        return;
      }
    // Send data to Firebase database
    const db = firebase.firestore();
    db.collection('formData').add(formData)
      .then(() => {
        console.log('Data added successfully!');
        toast.success('Form submitted successfully!');
        // Clear form fields after submission
        setFormData({
          name: '',
          email: '  ',
          number: '',
          textarea: ''
        });
      })
      .catch((error) => {
        console.error('Error adding data: ', error);
        toast.error('Error submitting form!');
      });
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className='contform'>
     
        <input className='cntForm' type="text" name="name" value={formData.name}  onChange={handleChange} placeholder='Name'
        />
     <br />
     
        <input
        className='cntForm'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
      <br />
      
        <input
        className='cntForm'
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder='Phone'
        /><br />

      <button className='cntFormBtn' type="submit">SEND</button>
    </form>
    <ToastContainer />
    </div>
  );
};

export default Form;
