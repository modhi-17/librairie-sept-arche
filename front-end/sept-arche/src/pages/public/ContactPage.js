import React from 'react';
//import Contact from '../../components/public/Contact';
import NavigationBar from '../../components/public/NavigationBar';
import Footer from '../../components/public/Footer';
import FormIncident from '../../components/FormIncident';
//import '../public/ContactPage';


const ContactPage = () => {
    return (
      <div className="Contact">
        <NavigationBar />
        <h2>Formulaire de reclamation</h2>
        <FormIncident />
        <Footer />
      </div>
    );
  };
  
  export default ContactPage;