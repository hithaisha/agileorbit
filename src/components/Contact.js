// src/components/Contact.js
import React, { useRef, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'contacts'), { name, email, message });
      
      emailjs.sendForm(
        'service_5t0bt18',
        'template_zyb6x02',
        form.current,
        'L1ntqiB-hFY3DGBb8'
      )
      .then(() => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        alert('Failed to send email: ' + error.text);
      });

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      alert('Error sending message: ' + error.message);
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Reach out to Agile Orbit! We're here to answer questions, discuss your projects, and assist with our software solutions.
      </p>
      
      <div className="contact-box">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 95A, Rajamawatha Road,Ratmalana, 10370</p>
          <p><strong>Phone:</strong>+94 (77) 203 8815</p>
          <p><strong>Email:</strong> info@agileorbit.com</p>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
