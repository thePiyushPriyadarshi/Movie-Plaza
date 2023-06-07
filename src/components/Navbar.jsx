import React from 'react'
import { Link} from 'react-router-dom'
const Navbar = () => {
  return ( 
    <div className='shadow-md mb-9 py-3 md:px-20 px-9'>
    <nav className='flex items-center'>
        <Link to={"/"}>
        <div className='flex items-center'>
          <img src="https://png.pngtree.com/png-vector/20190816/ourlarge/pngtree-film-logo-design-template-vector-isolated-illustration-png-image_1693431.jpg" alt=""  className='h-[80px]'/>
          <h1 className='font-bold text-4xl'>Movie Plaza</h1>
        </div>
        </Link>
    </nav>

    
    </div> 
  )
}

export default Navbar