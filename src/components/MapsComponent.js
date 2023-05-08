import React from "react";

function GoogleMap() {
  //I didn't really need a component for this. But I think it makes it a bit easier for App.js to read.
  //Iframe is just short for inline frames, is an html element that allows ytou
  // to rembed another html document into your document. So basically Display content from another website.
  return (
    <iframe
      title='Google Map'
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106095.00799963018!2d-118.15611495000002!3d33.800208049999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cae84099d759%3A0xa1003afac42a8faa!2sLong%20Beach%2C%20CA!5e0!3m2!1sen!2sus!4v1682015914202!5m2!1sen!2sus'
      width='100%'
      height={450}
      style={{ border: 0, display: "block" }}
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  );
}

export default GoogleMap;
