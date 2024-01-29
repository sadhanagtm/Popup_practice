import React from 'react'
import { Schema } from 'yup'
import {Formik,Form,Field, ErrorMessage} from 'formik'
import axios from 'axios'
function Tingtong() {
  return (
    <div>
         <Formik
        initialValues={{
          email: "",
          password: "",
        }}

        onSubmit={(values)=>{
          console.log(values)
          try{
            axios.post('http://localhost:4003/tingtongtwo/login',values).then(res=>{
              console.log(res)
            }).catch(err => {
              console.log(err)
            })
          }catch(error){
              console.log(error)
          }
        }}
        >
          {({handleSubmit}:{handleSubmit:any})=>{
return(
  <div className='grid grid-cols-2 gap-4 w-4/5 ml-28'>
    <div>
      <Form className='flex h-fit border-2 bg-blue-100 border-black p-10 flex-col gap-5' onSubmit={handleSubmit}>
     <h1>Log-In Form </h1>
      <label>Email</label>
      <Field  className='bg-gray-100'type='email' name='email'  required/>
      <label> Password</label>
      <Field  type='string' className='bg-gray-100' name='password' required/>
      <input type='submit'  className='h-fit w-fit p-3 bg-blue-300' alt='submit'/>
    </Form>
    </div>

   
  </div>
)
}}
        </Formik>
    </div>
  )
}

export default Tingtong