import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Projectlogin(){
const [updateData, setUpdateData] = useState<any>([]);
const [contactdata, setContactData] = useState<any>([]);
const navgation=useNavigate()


return (

  <div>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log(values)
        navgation('/thankyou')

        try {
          axios.post('', values).then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err)
          })
        } catch (error) {
          console.log(error)
        }
      }
      }
     >
      {({ handleSubmit }: { handleSubmit: any }) => {
        return (
          <Form className='flex h-fit w-fit border-2 bg-blue-200 border-black p-10  flex-col gap-3' onSubmit={handleSubmit}>
            <div className='font-bold text-2xl text-gray-600'> Welcome to Login Form</div>
            <label className='text-gray-600 text-lg'>Email</label>
            <Field className='bg-gray-100 h-10' type='email' name='email' required />
            <label className='text-gray-600 text-lg'> Password</label>
            <Field type='string' className='bg-gray-100 h-10' name='password' required />
            <input type='submit' className='h-fit w-fit p-3 bg-gray-200' alt='submit' />

          </Form>


        )
      }}
    </Formik>
  </div >

    
)
    }



export default Projectlogin