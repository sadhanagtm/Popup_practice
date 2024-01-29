import React, { useEffect, useState } from 'react'
import { Init } from 'v8'
import Popup from './Popup';


function Table({getContact, contactdata, DeleteData }: {getContact:any, contactdata: any, DeleteData: any }) {
  const [openModel, setOpenModel]=useState(false);
  const [UpdateData, setUpdateData]=useState<any>([]);

  return (
    <div className='static '>
      <div className='col-span-2 '>

        <div className="relative bg-red-400 shadow-md sm:rounded-lg">
          <table className="w-full bg-green-500 text-sm text-left text-gray-500 dark:text-gray-400">

            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-600">
              <tr>
                {/* <th scope="col" className="px-6 py-3">
                  Name
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Instagram
                </th>
                <th scope="col" className="px-6 py-3">
                  FACEBOOK
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                contactdata.map((val: any, i: number) => {
                  return (

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
                        {val.address}
                      </td>
                      <td className="px-2 py-4">
                        {val.instagram}
                      </td>
                      <td className="px-2 py-4">
                        {val.facebook}
                      </td>
                      <td className='flex flex-row items-center justify-center mt-4 gap-2 text-blue-600'>
                        <button
                        onClick={()=>{
                         setOpenModel(true);
                         setUpdateData([val])
                        }}

                        > Edit</button>
                        {openModel && <Popup UpdateData={UpdateData} getContact={getContact} closeModel={setOpenModel}/>}
                        <button onClick={() => {
                          DeleteData(val._id)
                        }}
                        > Delete</button>
                      </td>

                    </tr>
                  )
                })
              }

            </tbody>

          </table>
        </div>



      </div>
    </div>
  )
}

export default Table