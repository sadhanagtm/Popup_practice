import Homework from "./Page/Homework";
import Management from "./Page/Management";
import New from "./Page/New";
import Tingtong from "./Page/Tingtong";
import Tingtongtwo from "./Page/Tingtongtwo";
import Customer from "./Page/customer";
import Projectregister from "./Page/projectregister";
import axios from "axios";
import { useState,useEffect } from "react";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Projectlogin from "./Page/projectlogin";
import Thankyou from "./Page/thankyou";

function App() {
  const [contactdata, setContactData] = useState<any>([]);

  const getContact=()=>{
    try {
      axios.get('').then(res => {
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
    <Router>
<div className=" py-5">

{/* <Customer/> */}
{/* <Homework/> */}
{/* <Tingtong/> */}
{/* <Tingtongtwo/> */}
{/* <New/> */}
{/* <Projectregister/> */}
<Routes>
  <Route path="/" element={<Management getContact={getContact} contactdata={contactdata}/> } />
  <Route path="/login" element={<Projectlogin /> } />
  <Route path="/thankyou" element={<Thankyou/>}/>

</Routes>
</div>
    </Router>
    
  );
}

export default App;
