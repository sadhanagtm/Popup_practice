import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'


function Formone({getContact}:{getContact:any}) {
  return (
    <div>
         <Formik
        initialValues={{
          // name: "",
          contact: "",
          address: "",
          email: "",
          facebook: "",
          instagram: "",
        }}
        // validationSchema={schema}
        onSubmit={(values,{resetForm}) => {
          console.log(values)
          try {
            axios.post('http://localhost:4003/second/', values).then(res => {
              console.log(res)
              resetForm()
              getContact()
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
            <section className="bg-yellow-50 dark:bg-gray-900">
              <div className="flex flex-col items-center justify-center lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">

                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border
                 md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to your customer account
                    </h1>

                    <Form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
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
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
                           focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        <ErrorMessage className='text-red-500 flex flex-row px-4 ' name='facebook' component={'div'} />

                      </div>
                      <div>
                        <label htmlFor="instagram" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instagram Link</label>
                        <Field type="string" name="instagram" id="instagram"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-
                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        <ErrorMessage className='text-red-500 flex flex-row px-4 ' name='instagram' component={'div'} />

                      </div>


                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                      </div>

                      <div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium
                         rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500 p-5">Sign up</a>
                        </p>
                      </div>
                    </Form>
                  </div>

                </div>
              </div>
            </section >
          )
        }}
        
      </Formik>
      
    </div>
  )
}

export default Formone