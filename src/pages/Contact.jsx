import { useState } from 'react';
import '../Style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
 
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // onBlur state variables for when the input fields lose focus
  const [userNameOnBlurError, setuserNameOnBlurError] = useState('');
  const [emailOnBlurError, setemailOnBlurError] = useState('');
  const [messageOnBlurError, setmessageOnBlurError] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    switch (inputType) {
      case 'userName':
        setUserName(inputValue);
        setuserNameOnBlurError(''); // Clear the error when the user starts typing
        break;
      case 'email':
        setEmail(inputValue);
        setemailOnBlurError(''); // Clear the error when the user starts typing
        break;
      default:
        setMessage(inputValue);
        setmessageOnBlurError(''); // Clear the error when the user starts typing
    }   

    setErrorMessage('');  // Clear out the central error messaging pipe
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Check if there are any onBlur errors
    if (userNameOnBlurError || emailOnBlurError || messageOnBlurError) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    // Check for empty or invalid fields.  if there ae any, set an error message to be displayed on the page.
    if (!userName) {
      setErrorMessage('Username cannot be blank');
      return;
    }
    if (!email) {
      setErrorMessage('Email cannot be blank');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage( 'Email is invalid');
      return;
    }
    if (!message) {
      setErrorMessage('Message cannot be blank');
      return;
    }
    // If everything goes according to plan, clear out input fields and error messages
    setUserName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');

    setuserNameOnBlurError('');
    setemailOnBlurError('');
    setmessageOnBlurError('');  
  };

  return (
    <div>
      <h2 className="contact-heading">Contact</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <h5> Name </h5>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onBlur={(e) => e.target.value.trim() === '' && setErrorMessage('Name is required')}
          type="text"
          placeholder="Name"
        />

         <h5> Email address </h5>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={(e) => e.target.value.trim() === '' && setErrorMessage('Email is required')}
          type="email"
          placeholder="email"
        />
      
        <h5> Message </h5>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={(e) => e.target.value.trim() === '' && setErrorMessage('Message is required')}
          type="message"
          placeholder="Your message here..."
          rows="5"
          className="form-message-input"
        />
        {messageOnBlurError && <p className="error-text">{messageOnBlurError}</p>}

        <br></br>
        <button type="submit" style={{ borderRadius: '6px' }}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
