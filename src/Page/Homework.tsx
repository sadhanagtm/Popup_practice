import React,{useState,useEffect} from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const schema = yup.object().shape({
    name: yup.string().required('enter your name'),
})

function Homework() {
    const [contactdata,setContactData]=useState<any>([]);
    const getContact = () => {
        try {
          axios.get('http://localhost:4003/f/').then(res => {
            console.log(res)
            setContactData([...res.data.data])
          }).catch(err => {
            console.log(err)
          })
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        getContact()
      }, [])

    return (
        <div className='grid grid-cols-2 gap-4'>
            <Formik
                initialValues={{
                    name: "",
                    image: "",
                    imagetwo: "",
                    imagethree: "",
                    imagefour: "",
                }}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)

                    try {
                        const formData = new FormData()
                        formData.append('name', values.name)
                        formData.append('image', values.image)
                        formData.append('image', values.imagetwo)
                        formData.append('image', values.imagethree)
                        formData.append('image', values.imagefour)

                        axios.post('http://localhost:4003/formimg/', formData).then(res => {
                            console.log(res)
                        }).catch(err => {
                            console.log(err)
                        })
                    } catch (error) {
                        console.log(error)
                    }
                }}
            >

                {({ handleSubmit, setFieldValue }) => {
                    return <Form onSubmit={handleSubmit} className="flex flex-col bg-blue-200 gap-5 h-fit w-fit p-5 ml-20 shadow-md border-2 border-gray-300">
                        <div className=' gap-6'>
                            <div className=' gap-2'>
                                <div className="flex flex-col gap-4 ">
                                    <label>Name :</label>
                                    <Field type='text' name='name' placeholder='' className=" h-8 w-full outline-none px-3 py-2 border-2 border-gray-300" />
                                    <ErrorMessage name='name' className='text-red-400' component={'div'} />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label>Imageone :</label>
                                    <div className='h-12 w-full border-2 outline-none bg-gray-300'>
                                        <input type='file' alt='image' onChange={(e: any) => {
                                            setFieldValue('file', e.target.files[0])
                                        }} />
                                    </div>

                                </div>
                                <div className="flex flex-col gap-4">
                                    <label>Imagetwo :</label>
                                    <div className='h-12 w-full border-2 outline-none bg-gray-300'>
                                        <input type='file' alt='imagetwo' onChange={(e: any) => {
                                            setFieldValue('file', e.target.files[0])
                                        }} />
                                    </div>

                                </div>
                                <div className="flex flex-col gap-4">
                                    <label>Imagethree :</label>
                                    <div className='h-12 w-full border-2 outline-none bg-gray-300'>
                                        <input type='file' alt='imagethree' onChange={(e: any) => {
                                            setFieldValue('file', e.target.files[0])
                                        }} />
                                    </div>

                                </div>
                                <div className="flex flex-col gap-4">
                                    <label>Imagefour :</label>
                                    <div className='h-12 w-full border-2 outline-none bg-gray-300'>
                                        <input type='file' alt='imagefour' onChange={(e: any) => {
                                            setFieldValue('file', e.target.files[0])
                                        }} />
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div><button type='submit'
                            className='h-10 w-20 bg-blue-400 drop-shadow-md text-white' >Submit</button></div>

                    </Form>
                }}

            </Formik>
            <div>
                {

                contactdata.map((val:any,i:number)=>{
                    let images=`http://localhost:4003/public/${val.image}`

                    let imagetwo=`http://localhost:4003/public/${val.imagetwo}`
                    let imagethree=`http://localhost:4003/public/${val.imagethree}`
                    let imagefour=`http://localhost:4003/public/${val.imagefour}`

                    return <div key={i}>
                        <div>{val.name}</div>
                        <div className='w-96 grid grid-cols-2'>
                            {
                                val.image &&<img src={images} />
                               

                            }
                            {
                                val.imagetwo &&<img src={imagetwo} />  

                            }
                             {
                                val.imagethree &&<img src={imagethree} />  

                            }
                             {
                                val.imagefour &&<img src={imagefour} />  

                            }
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}
export default Homework