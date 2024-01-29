import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import Table from './table'
import Formone from './form'
import Popup from './Popup'
// import {useNavigate} from 'react-router-dom'

const schema = yup.object().shape({
  // name: yup.string().required('Énter your name'),
  email: yup.string().required('Énter your email'),
  contact: yup.string().required('Énter your contact'),
  address: yup.string().required('Énter your address'),
  facebook: yup.string().required('Énter your facebook link'),
  instagram: yup.string().required('Énter your instagram link'),
})
function Edit ({UpdateData,closeModel}:{UpdateData:any,closeModel:any}){
const [contactdata,setContactData]=useState<any>([]);
}
function Customer() {
  const [openModel, setOpenModel]=useState(false);
  const [updateData, setUpdateData] = useState<any>([]);
  const [contactdata, setContactData] = useState<any>([]);
  

  const getContact = () => {
    try {
      axios.get('http://localhost:4003/second/').then(res => {
        console.log(res)
        setContactData([...res.data.data])
      }).catch(err => {
        console.log(err)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const DeleteData=(id:any)=>{
    try{
      axios.delete(`http://localhost:4003/second/${id}`).then(res=>{
        console.log(res)
        getContact()
      }).catch(err=>{
        console.log(err)
      })
    } catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    getContact()
  }, [])

  return (
    <div className='grid grid-cols-3 flex-col h-fit bg-gray-200'>

      <Formone getContact={getContact}/>
      <Table getContact={getContact} contactdata={contactdata} DeleteData={DeleteData}/>
    {/* <Popup/> */}
    </div >

  )
}

export default Customer