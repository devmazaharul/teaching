import { Site_data } from '@/Data'
import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    const {aboutsection:{title,sortDesc,list,actionBtn,about_image_path},site_color}=Site_data
  return (
    <div className='grid grid-cols-6 items-center gap-6 py-6 '>
        <div className='col-span-3'>
          <div className='flex items-center gap-2'>
          <Image className=' rounded-md h-[300px] object-contain   ' width={300} height={400} src={about_image_path[0]} alt="aa"/>
          <Image className='rounded-lg h-[400px] object-contain   ' width={420} height={500} src={about_image_path[1]} alt="aa"/>
          </div>
        </div>
        <div className='col-span-3'>
            <h1 className='text-3xl font-bold '>{title}</h1>
            <h1 className='text-gray-500'>{sortDesc}</h1>
            <ul className='py-4'>
                {list.map((item)=>(
                    <li key={Math.random()} className='flex gap-2 items-center leading-9'>
                        <IoCheckmark className='text-green-500  rounded-full border bg-green-200 text-lg'/>
                        {item}
                    </li>
                ))}
            </ul>
            <div>
                <Link className="primary-btn" href='/a'>{actionBtn.name}</Link>
            </div>
        </div>
    </div>
  )
}
