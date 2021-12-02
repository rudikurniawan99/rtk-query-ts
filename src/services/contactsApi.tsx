import { Contact } from "../models/contact.model";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002' }),
  endpoints: (builder) => ({
    contacts: builder.query<Contact[], void>({
      query: ()=> '/contacts'
    }),
    contact: builder.query<Contact, string>({
      query: (id) => `/contact/${id}`
    })
  }) 
})

export const { useContactsQuery, useContactQuery } = contactsApi