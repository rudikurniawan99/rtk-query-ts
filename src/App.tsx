import React from 'react'
import { useContactsQuery } from './services/contactsApi'

const App = () => {

  const { data, isLoading, isError, isSuccess, isFetching } = useContactsQuery()

  return (
    <div>
      <h1>RTK Query</h1> 
      {isLoading && (
        <h3
          style={{color: 'blue'}} 
        >Loading ...</h3>
      )}
      {isError && (
        <h3
          style={{color: 'red'}} 
        >Something went wrong</h3>
      )}
      {isFetching && (
        <h3
          style={{color: 'green'}} 
        >Fetching data on progress</h3>
      )}
      {isSuccess && data?.map((contact) => (
        <div
          style={{marginBottom: "20px"}}
          key={contact.id}
        >
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default App
