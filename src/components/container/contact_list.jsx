import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'

const ContactListComponent = () => {

    const defaultContact = new Contact('Jon','Doe','jondoe@gmail.com',true)

    const tableStyle = {
      borderStyle:"solid",
      borderColor:"white",
      borderWidth:"1px"
    }

   /*  const changeState = (id) => {
        console.log('TODO: cambiar el estado de una tarea')
    } */

  return (
    <div>
        <div>
            <h1>Contactos: </h1>
            <table style={tableStyle}>
                <tr>
                <th style={tableStyle}>Nombre</th>
                <th style={tableStyle}>Apellido</th>
                <th style={tableStyle}>Email</th>
                <th style={tableStyle}>Estado</th>
                </tr>
        <ContactComponent contact={defaultContact} style={tableStyle}/>
            </table>
        </div>
        {/* Pendiente mapear */}
    </div>
  )
}


export default ContactListComponent