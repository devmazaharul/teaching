import { Site_data } from '@/Data'
import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
  const {header:{site_name},footerSection:{sitesite_logo,sortDesc,link,followBtn,explore,newsletter:{title,actionBtn,sortDesc:newsSort,inputAction:{type,placeholder}}}}=Site_data
  return (
    <div className='px-14  py-12 bg-[#cfd3da50]'>

<div className='grid grid-cols-6 gap-7'>

  <div className='col-span-2'>
  <Link href='/' className='text-2xl font-bold siteLogo  py-1'>{site_name}</Link>
  <p className='sortDesc py-3 leading-6'>{sortDesc}</p>
  <div className='py-3'>
    <p className='text-lg font-semibold'>Follow us</p>
    {followBtn.map((list)=>(
 <Link key={list.id} className='px-3' href={list.path}>{list.name}</Link>
    ))}
   
  </div>
  </div>

  <div>
    <p className='font-semibold text-lg'>Elplore</p>
  <ul>
  {explore.map((list,i)=>(
      <li className='leading-7' key={list.id}><Link href={list.path}>{list.name}</Link></li>
    ))}
  </ul>
  </div>

  <div>
    <p className='font-semibold text-lg'>Links</p>
  <ul>
  {link.map((list,i)=>(
      <li className='leading-7' key={list.id}><Link href={list.path}>{list.name}</Link></li>
    ))}
  </ul>
  </div>

<div className='col-span-2'>
  <Link href='/' className='text-lg font-bold   py-1'>{title}</Link>
  <p className='sortDesc py-3 leading-6'>{newsSort}</p>
  <div className='py-3 flex items-center gap-3'>
    <input type={type} placeholder={placeholder} className='px-3 py-2 rounded-md border w-fit outline-none' />
<button className='primary-btn'>{actionBtn}</button>
  </div>
  </div>


</div>
    </div>
  )
}
