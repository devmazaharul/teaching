import { Site_data } from '@/Data'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='heroimg w-full mx-auto capitalize    shadow-md rounded-md object-contain '>
    
   <div className='bgreduce text-gray-300 flex items-center  h-[500px]'>
   <div className='py-10 px-8 w-[80%] md:w-[50%]'>
   <h1 className='lg:text-5xl text-2xl font-bold py-3 leading-snug '>Tpgader well explore  new things</h1>
   <p className='py-5 text-gray-400 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, veniam.</p>
   <Link href={"/#"} className='primary-btn'>Find courses</Link>
   </div>
   </div>
    </div>
  )
}
