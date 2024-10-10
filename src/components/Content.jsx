import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';

function Content() {
const [state, setstate] = useState("")
function show() {
    if (state=="") {
        setstate("HELLO")
    }
}
function hide() {
    if (state=="HELLO") {
        setstate("")
    }
}
  return (
    <div>
      <div className="main" style={{border:"1px solid blue",padding:"10vh", margin:"8vh 70vh",display:"flex",justifyContent:"center",backgroundColor:"Highlight"}}>
        <div className="img-main">
            <img width={"300vh"} src="https://cdn.dribbble.com/users/500317/screenshots/2577605/badmailrender.gif" alt="" />
            <div className="msg" style={{marginTop:"30px",textAlign:"center",fontWeight:"bolder",fontSize:"40px",color:"white"}}>
                {state}
            </div>
            <div className="button mt-5 "style={{display:"flex",justifyContent:"center"}} >
            <MDBBtn className='me-4' color='success' onClick={show}>
                show
            </MDBBtn>
            <MDBBtn className='me-4' color='danger' onClick={hide}>
                hide
            </MDBBtn>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Content
