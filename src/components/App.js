import React, { useState, useEffect} from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Modal from "./Modal";

function App () {
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) =>{
        console.log(contact);
        setContacts([...contacts, contact]);
    };

    useEffect(() =>{
       const retrieveContacts =  JSON.parse(localStorage.getItem('MY-CONTACT'));
       if(retrieveContacts) setContacts(retrieveContacts);
    }, []);


    useEffect(() =>{
        localStorage.setItem('MY-CONTACT', JSON.stringify(contacts));
    }, [contacts]);

    return(
        <>
        <div className="container">
        <Header/>
        
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contact={contacts}/>
                </div>
        
        </>
    );
}

export default App;