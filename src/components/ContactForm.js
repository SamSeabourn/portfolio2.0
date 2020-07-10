import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const setTextColor = (nightMode) => {
  if (nightMode) {
    return { 
      color: "#fff",
      transition: "0.2s ease-in"
    }
  } else {
    return { 
      color: "#202536",
      transition: "0.2s ease-in",
    }
  }
}

const setButtonTextColor = (nightMode) => {
  if (nightMode) {
    return { 
      color: "#fff",
      transition: "0.2s ease-in"
    }
  } else {
    return { 
      color: "#202536",
      transition: "0.2s ease-in",
    }
  }
}

const setInputColor = (nightMode) => {
  if (nightMode) {
    return { 
      color: "#fff",
      transition: "0.2s ease-in",
      background: "rgba(0,0,0,0.5)"
    }
  } else {
    return { 
      color: "#202536",
      transition: "0.2s ease-in",
      background: "rgba(0,0,0,0.2)"
    }
  }
}

const checkComplete = (e) => {
  const emailInput = document.getElementsByClassName('email-input')[0];
  const messageInput = document.getElementsByClassName('message-input')[0];
  const submitButton = document.getElementById('sendEmailButton')
  if (messageInput.value.length > 0 && emailInput.value.length > 0 ) {
    submitButton.removeAttribute('disabled', 'false')
  } else {
    submitButton.setAttribute('disabled', 'true')
  }
}

function ContactForm(props) {
  const [title, setTitle] = useState("Let's Work Together.")
  
  const { nightMode } = props 

  const sendEmail = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById('contactForm')
    contactForm.classList.add('hidden')
    updateTitle();
    emailjs.sendForm('gmail', 'template_XpuPJIzH', e.target, 'user_5z5PTc0WsaF03F3zbSWma')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  const updateTitle = () => {
    setTimeout(()=>{ setTitle("Thanks, I'll be in touch.") }, 1500) 
  }

  return (
    <div className="contact-form" style={{ background: "rgba(255,0,0,0)" }}>
    <h2 className="text-gradient contact-title" > { title }</h2>
      <form id="contactForm" className="" style={{ color: "rgba(255,0,0,0)" }} onSubmit={ sendEmail }>
        <p className="contact-label" style={ setTextColor( nightMode ) }> Email</p>
        <label style={{ display: "none"}} htmlFor="name"> Name </label>
        <input onChange={ checkComplete } style={ setInputColor(nightMode) } id="name" type="email" className="email-input" name="name" />
        <p className="contact-label" style={  setTextColor(nightMode) }> Message </p>
        <label style={{ display: "none"}} htmlFor="message"> Message </label>
        <textarea onChange={ checkComplete } style={ setInputColor(nightMode) } id="message" className="message-input" name="message_html" />
        <br/>        
        <button disabled={ true } id="sendEmailButton" style={ setButtonTextColor(nightMode) } type="submit" value="Send"> Reach Out </button>
      </form>
    </div>

  );
}

export default ContactForm;