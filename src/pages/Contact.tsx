import React from 'react'
import { useContactQuery } from '../services/contactsApi'

const Contact = ({ id } : { id: string }) => {

  const { data } = useContactQuery(id)

  return (
    <div>
      <h2
        style={{ marginBottom: "30px" }} 
      >Contact Detail</h2> 
      <p>{data?.id}</p>
      <p>{data?.email}</p>
    </div>
  )
}

export default Contact
