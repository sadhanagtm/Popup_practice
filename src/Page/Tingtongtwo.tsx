import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import axios from 'axios'

function Tingtongtwo() {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        // validationSchema={schema}
        onSubmit={(values) => {
          console.log(values)
          // const getContact = () => {

          try {
            axios.post('http://localhost:4003/tingtongtwo/register', values).then(res => {
              console.log(res)
              // getContact()
            }).catch(err => {
              console.log(err)
            })
          } catch (error) {
            console.log(error)
          }
        }
      }
        >
        {/* useEffect(() => {
        getContact()
      }, []) */}
    
        
      {({ handleSubmit }: { handleSubmit: any }) => {
        return (
          <Form className='flex h-fit border-2 bg-pink-100 border-black p-10  flex-col gap-5' onSubmit={handleSubmit}>
            <h1> Registration Form</h1>
            <label>Email</label>
            <Field className='bg-gray-100' type='email' name='email' required />
            <label> Password</label>
            <Field type='string' className='bg-gray-100' name='password' required />
            <input type='submit' placeholder='Register Now' className='h-fit w-fit p-3 bg-blue-300' alt='submit' />

          </Form>


        )
      }}
    </Formik>
    </div >
  )
}







export default Tingtongtwo