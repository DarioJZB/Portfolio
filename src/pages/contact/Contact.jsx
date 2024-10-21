import { useState } from 'react';
import './contact.css';
import { validateEmail } from './validateEmail.js';

export default function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email');
            return;
        }

        if(!name) {
            setErrorMessage('Please enter your name');
            return;
        }

        if(!message) {
            setErrorMessage('Please enter a message');
            return;
        }

        alert('Thank you for submitting the form');
        setEmail('');
        setName('');
        setMessage('');
    };

    const handleFocusChange = (e) => {
        const { target } = e;
        const inputType = target.name;

        if (inputType === 'email') {
            setErrorMessage('Please enter an email');
        } else if (inputType === 'name') {
            setErrorMessage('Please enter your name');
        } else {
            setErrorMessage('Please enter a message');
        }
    }

    return (
        <div>
            <h1>contact</h1>
            <div>
                <form className='form' onSubmit={handleFormSubmit}>
                    <input
                        className='inputs'
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        onBlur={handleFocusChange}
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className='inputs'
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={handleFocusChange}
                        type="email"
                        placeholder="email"
                    />
                    <textarea
                        className='inputs'
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={handleFocusChange}
                        placeholder="Please enter message"
                    />
                    <button type="submit">Submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error">{errorMessage}</p>
                    </div>
                )}
            </div>            
        </div>
    )
}