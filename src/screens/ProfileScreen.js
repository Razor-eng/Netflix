import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
// import { auth } from '../firebase'
import './ProfileScreen.css'
import { useNavigate } from 'react-router-dom';

function ProfileScreen() {
  const [lock, setLock] = useState(false)
  const [home, setHome] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    if (lock) {
      navigate("/");
    }
  }, [navigate, lock])
  useEffect(() => {
    if (home) {
      navigate("/home");
    }
  }, [navigate, home])
  return (
    <div className="Profile">
      <Nav />
      <div className="body">
        <h1>Developed by:</h1>
        <div className="info">
          <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/gdruy0cnkgnaadpxiadi" alt="" />
          <div className="details">
            <h2>Rajat Kumar Maharana</h2>
            <h4>mrajat00@gmail.com</h4>
            <div className="home">
              <button onClick={() => setHome(true)}>Home</button>
            </div>
            <div className="lock">
              <button onClick={() => setLock(true)}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
