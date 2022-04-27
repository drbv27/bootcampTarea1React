import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'


const ContactComponent = ({ contact }) => {
  const dataStyle = {
    borderStyle:"solid",
    borderColor:"white",
    borderWidth:"1px"
  }
  return (
    <tr>
                <td style={dataStyle}>{ contact.name }</td>
                <td style={dataStyle}>{ contact.lastName }</td>
                <td style={dataStyle}>correo: { contact.email }</td>
                <td style={dataStyle}>{ 
                contact.conected
                ? "🟢 Contacto en Linea"
                :"🔴 Contacto No Disponible" 
                }</td>

    </tr>
  )
};

ContactComponent.propTypes = {
    
    contact:PropTypes.instanceOf(Contact)
}

export default ContactComponent
