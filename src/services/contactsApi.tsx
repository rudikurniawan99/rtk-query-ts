import { Contact } from "../models/contact.model";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3006' }),
  endpoints: (builder) => ({
    contacts: builder.query<Contact[], void>({
      query: ()=> '/contacts'
    })
  }) 
})

export const { useContactsQuery } = contactsApi