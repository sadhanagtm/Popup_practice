import { Formik,Form , Field, ErrorMessage } from 'formik'
import React from 'react'
import axios from 'axios'

function New() {
  return (
    <div>
        <Formik
        initialValues={{
          name: "",
          email: "",
          contact: "",
        }}

        onSubmit={(values)=>{
          console.log(values)
          try{
            axios.post('',values).then(res=>{
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
  <div>
    <Form className='flex h-12 border-2 border-black p-10 w-64 flex-col gap-5' onSubmit={handleSubmit}>
      <label>Name</label>
      <Field className='bg-gray-400' type='text' name='name' required  />
      <label>Email</label>
      <Field  className='bg-gray-400'type='email' name='email'  required/>
      <label> Contact</label>
      <Field  type='number' name='contact' required/>
    </Form>
  </div>
)
}}
        </Formik>
    </div>
  )
}

export default New