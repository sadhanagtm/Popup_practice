import { Form, Formik, ErrorMessage, Field } from 'formik'
import React, { useState } from 'react'
import axios from 'axios'

function Popup({UpdateData,closeModel,getContact}:{UpdateData:any,closeModel:any,getContact:any}) {

console.log(UpdateData)
  
  return (
    <div>
      <div className='absolute left-20 '>

        <Formik
          initialValues={{
            contact: UpdateData[0].contact,
            address: UpdateData[0].address,
            email: UpdateData[0].email,
            facebook: UpdateData[0].facebook,
            instagram: UpdateData[0].instagram,
          }}
          onSubmit={(values,{resetForm}) => {
            console.log(values)
            try {
              axios.patch(`http://localhost:4003/second/${UpdateData[0]._id}`,values).then(res => {
                console.log(res)
                getContact()
                resetForm()
              }).catch(err => {
                console.log(err)
              })
            } catch (error) {
              console.log(error)
            }
          }}
        >
          {({ handleSubmit }: { handleSubmit: any }) => {
            return (


              <Form onSubmit={handleSubmit} className="space-y-4 md:space-y-6  bg-blue-300 p-10" action="#">
                {/* <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                  <Field type="text" name="name" id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  <ErrorMessage className='text-red-500 flex flex-row px-4 ' name='name' component={'div'} />
                </div> */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <Field type="email" name="email" id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  <ErrorMessage className='text-red-500 flex flex-row px-4 ' name='email' component={'div'} />

                </div>
                <div>
                  <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
                  <Field type="number" name="contact" id="contact"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  <ErrorMessage className='text-red-500 flex flex-row px-4 ' name='contact' component={'div'} />
                </div>
                 <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                  <Field type="string" name="address" id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  <ErrorMessage className='text-red-500 flex flex-row px-4 ' name='address' component={'div'} />

                </div> 
                 <div>
                  <label htmlFor="facebook" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook Link</label>
                  <Field type="string" name="facebook" id="facebook"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  <ErrorMessage className='text-red-500 flex flex-row px-4 ' name='facebook' component={'div'} />

                </div>
                <div>
                  <label htmlFor="instagram" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instagram Link</label>
                  <Field type="string" name="instagram" id="instagram"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  <ErrorMessage className='text-red-500 flex flex-row px-4 ' name='instagram' component={'div'} />

                </div>


                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>

                <div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                </div>
              </Form>

            )

            }}
        </Formik>

      </div>

    </div>

  )
}

export default Popup