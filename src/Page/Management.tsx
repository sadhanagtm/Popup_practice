import React from 'react'
import Projectregister from './projectregister'
import Projectlogin from './projectlogin'

function Management({getContact, contactdata }: {getContact:any, contactdata: any}) {
  return (
    <div className='flex flex-row gap-3'>
        <Projectregister getContact={getContact} contactdata={contactdata}/>
        {/* <Projectlogin/> */}
    </div>
  )
}

export default Management