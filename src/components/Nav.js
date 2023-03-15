import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import './Nav.css'
function Nav() {
  const [show, setShow] = useState(false)
  const [profile, setProfile] = useState(false)
  const [home, setHome] = useState(false)
  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    }
    else {
      setShow(false);
    }
  }

  useEffect(() => {
    if (profile) {
      navigate("/profile");
    }
  }, [navigate, profile]);

  useEffect(() => {
    if (home) {
      navigate("/home");
    }
  }, [navigate, home]);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <div className="nav__logo">
          <img onClick={()=>setHome(true)} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        </div>
        <div className="nav__avatar">
          <img onClick={()=>setProfile(true)} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/gdruy0cnkgnaadpxiadi" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Nav
