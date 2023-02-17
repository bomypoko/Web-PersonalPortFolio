import React from 'react'
import styles from '../../style'

const Navbar = () => {
  return (

    <div className={`${styles.xPaddings} flex justify-between items-center m-5` } >

      <img src="" alt="Logo" />

      <ul className='flex '>
        <li><a href=""> About Me </a></li>
        <li><a href=""> Experiences </a></li>
        <li><a href=""> Portfolio </a></li>
        <li><a href=""> Contact </a></li>
      </ul>

      <button > Hire Me </button>


      </div>
     

    
      
    
  )
}

export default Navbar
