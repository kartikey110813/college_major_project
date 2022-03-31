import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase'

const Dashboard = () => {
const navigate = useNavigate();
  const onClickHandler = () => {
    auth.signOut().then(() => {
      navigate('/');
      console.log("Signed_Out");
    })
  }

  return (
    <div>
    Dashboard
    <button onClick={onClickHandler}>Logout</button>
    </div>
  )
}

export default Dashboard