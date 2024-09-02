import { Site_data } from '@/Data'
import Image from 'next/image'
import Link from 'next/link'
import { IoBookmarksOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";


export default function Courses() {
  const {courses:{title,sortDesc,course_list}}=Site_data
  return (
    <div className='main capitalize'>
      <div className='container'>
    <h1 className='titleText'>{title}</h1>
    <p className='sortDesc'>{sortDesc}</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 py-4'>
        {course_list.map((list,i)=>(
          <div key={i} className='p-8 rounded-md  border border-gray-100 bg-white shadow-md'>
            <Image alt='courses' src={list.c_image} height={100} width={150} className='object-cover h-[300px] w-full'/>
           <div className='flex items-center justify-between py-2'>
           <h1 className='  rounded-sm primary-bg hover:text-white px-1 capitalize'>{list.name}</h1>
           <p className='p-2 rounded-sm font-semibold '>{list.c_price}</p>
           </div>
           <div>
           <h1>{list.title}</h1>
           <p className='sortDesc'> {list.sortDesc}</p>
           </div>
          <div className='flex items-center justify-between py-3 '>
            <p className='flex gap-2 items-center rounded-full px-2 border capitalize'><FiUser/>{list.teacher_name}</p>
            <p className='flex gap-2 items-center '><IoBookmarksOutline className='primary-text'/>{list.teacher_review}</p>
          </div>

          </div>
        ))}
        
      </div>
    </div>
  )
}
