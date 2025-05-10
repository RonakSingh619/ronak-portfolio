import React from 'react'

const EmailOpener = (To="ronaksinghjc@gmail.com", Sub, Message ) => {
    // e && e.preventDefault();
    const mailtoLink = `mailto:${encodeURIComponent(To)}?subject=${encodeURIComponent(Sub)}&body=${encodeURIComponent(Message)}`;
    window.location.href = mailtoLink;
}

export default EmailOpener