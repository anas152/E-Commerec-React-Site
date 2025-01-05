import React from 'react'
import { Link } from 'react-router-dom'
export default function AllProductBtn() {
  return (
    <div className="center pt-4 pb-4 pr-12 pl-12 flex gap-3"> 
    <Link to="/allproduct" className=' hover:bg-red-600 duration-300 bg-primary w-[234px] h-14 rounded text-white center '>View All Product</Link>
    </div>
  )
}
