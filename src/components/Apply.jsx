import { Site_data } from '@/Data'
import { FaUserGraduate } from "react-icons/fa";

import { BiBookmarkAltPlus } from "react-icons/bi";

export default function Apply() {
    const {applySection}=Site_data
    
  return (
    <div className='md:flex items-center main capitalize justify-between gap-16'>
       {applySection.map((item,i)=>(
         <div key={item.id} className='flex  items-center gap-14  p-4  m-2'>
         <div>

      <p className='text-3xl primary-text'> {item.id==1?<BiBookmarkAltPlus/>:<FaUserGraduate/>}</p>
             </div>       
             <div>
                 <h1 className='text-lg font-semibold py-1'>{item.name}</h1>
                 <p className='sortDesc py-3'>{item.sortDesc}</p>
                 <button className={`${item.style=="primary"?"primary-btn":"border rounded-md px-4 py-1 "}`}>{item.actionBtn.title}</button>
                 </div>    
     </div>
       ))}
       
    </div>
  )
}
