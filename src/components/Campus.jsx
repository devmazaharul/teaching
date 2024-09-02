import { Site_data } from '@/Data'
import Link from 'next/link'
import Image from 'next/image'
export default function Campus() {
  const {capmus_section:{title,sortDesc,actionbtn,campous_img}}=Site_data
  return (
    <div className='main'>
      <div className='grid  md:grid-cols-3 gap-3'>
    <div className='items-center px-3 my-20'>
      <h1 className='titleText '>{title}</h1>
      <p className='sortDesc my-4 capitalize'>{sortDesc}</p>
      <Link className='capitalize primary-btn ' href={actionbtn.path}>{actionbtn.text}</Link>
      
    </div>
    {campous_img.map((list,i)=>(
     <div key={i}>
       <Image alt='capmus' src={list} width={400} height={200} className='rounded-md shadow-md hover:scale-90 transition-all'/>
     </div>
    ))}
      </div>
    </div>
  )
}
