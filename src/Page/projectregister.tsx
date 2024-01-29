import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import Projectlogin from './projectlogin'
import {useNavigate} from 'react-router-dom'

function Projectregister({ getContact, contactdata }: { getContact: any, contactdata: any }) {
    const [openModel, setOpenModel] = useState(false);
    const navgation=useNavigate()

    return (
        <div>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    contact: "",
                    image: "",
                }}
                onSubmit={(values) => {
                    console.log(values)

                    try {
                        axios.post('http://localhost:4003/projectreg/register', values).then(res => {
                            console.log(res)
                            // getContact()
                            navgation('/login')
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
                        <Form className='flex h-fit items-center w-fit shadow-lg shadow-primary-500 border-2 bg-gray-300 border-black p-10  flex-col gap-5' onSubmit={handleSubmit}>
                            <div className='font-bold text-2xl text-blue-400'> Registration Form </div>
                            <div className='flex gap-2 '>
                                <label className='w-28 text-gray-600 text-lg'>Name</label>
                                <Field className='bg-gray-100 w-72' type='name' name='name' required />
                            </div>

                            <div className='flex gap-2 '>
                                <label className='w-28 text-gray-600 text-lg'>Email</label>
                                <Field className='bg-gray-100 w-72' type='email' name='email' required />
                            </div>

                            <div className='flex gap-2 '>
                                <label className='w-28 text-gray-600 text-lg'>Password</label>
                                <Field className='bg-gray-100 w-72' type='name' name='password' required />
                            </div>

                            <div className='flex gap-2 '>
                                <label className='w-28 text-gray-600 text-lg'> Contact</label>
                                <Field type='number' className='bg-gray-100 w-72' name='contact' required />
                            </div>
                            <div className='flex gap-2 '>
                                <label className='w-28 text-gray-600 text-lg'>Image</label>
                                <Field className=' w-72' type='file' name='image' required />
                            </div>
                            <input type='submit' alt='submit' className='w-32 bg-blue-300 p-3'
                                onSubmit={() => { setOpenModel(true) }} />
                            {/* <Projectlogin/> */}
                            {
                                contactdata.map((val: any, i: number) => {
                                    return (
                                        <div>
                                            {/* <Projectlogin /> */}
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {val.name}
                      </th> */}
                      
                      <td className="px-2 py-4">
                        {val.email}
                      </td>
                      <td className="px-2 py-4">
                        {val.contact}
                      </td>
                      <td className="px-2 py-4">
                        {val.name}
                      </td>
                      </tr>
                                            </div>
                                    )
                                }
                                )}
                        </Form>


                    )
                }}
            </Formik>
        </div >
    )
}


export default Projectregister