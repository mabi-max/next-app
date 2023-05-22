import React from "react";
import ContactCard from "./ContactCard";

const ContactList =(props) => {
    console.log(props);

    const renderContactList = props.contact.map((contact) =>{
        return(
           <ContactCard contact={contact}/>
        )
    })
    return<div> {renderContactList}</div>
       
    
}

export default ContactList; 