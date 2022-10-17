import React from 'react';
import ContactComponent from '../components/contactComponent.js';
import Footer from '../components/footer.js';
import Navigationbar from '../components/navigationbar.js';


function Contact() {
  return (
    <div>
      <Navigationbar />
      <ContactComponent />

      <Footer />
    </div>

  )
}

export default Contact; 