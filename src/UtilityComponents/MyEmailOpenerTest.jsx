import React, { useState } from 'react';

const MyEmailOpenerTest = () => {

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${encodeURIComponent('ronaksinghjc@gmail.com')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Subject:</label>
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <br />
      <label>Message:</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <br />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default MyEmailOpenerTest;
