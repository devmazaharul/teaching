import React from 'react'

import Link from 'next/link'
import { Site_data } from '@/Data'
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";


export default function Header() {
    const {header:{site_logo_url,site_name,header_menu}}=Site_data;
  return (
    <div className='py-3'>
        <div className='grid grid-cols-6 items-center gap-5 md:gap-0'>
            <div className='col-span-2'>
    <Link href='/' className='text-xl  siteLogo1'>{site_name}</Link>
            </div>
            <div className='col-span-3 hidden md:block '>
     {header_menu.map((item,i)=>(
        <Link key={i} className='gap-2  px-2' href={item.path}>{item.name}</Link>
     ))}
            </div>
           <div className='col-span-3 md:col-span-1'>
           <div className='flex items-center gap-4 bg-gray-100  py-1 rounded-sm'>
                <input className='outline-none px-2 w-[80%]  border-r bg-gray-100' type="text" placeholder='Search...' />
                <CiSearch />
                
            </div>
           </div>
           <div className='col-span-1 md:hidden text-center '>
           <MdMenu className='text-2xl w-fit mx-auto '/>
           </div>
        </div>

    </div>
  )
}
