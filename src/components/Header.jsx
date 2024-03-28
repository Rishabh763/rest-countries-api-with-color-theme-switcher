import React from 'react'
import { MdDarkMode } from "react-icons/md";

function Header() {
  return (
    <div className='bg-slate-900 text-white sticky top-0 full-width'>
        <div className="flex items-center justify-between py-4 h-[12vh]">
            <h1 className='header-text font-bold'>Where in the world?</h1>
            <button className='flex items-center gap-2 header-text-1'><MdDarkMode /> Dark Mode</button>
        </div>
    </div>
  )
}

export default Header