import Link from "next/link"
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiUser } from "react-icons/ci";

export default function Tophead() {
  return (
   <div className="border-b px-4 lg:px-0  text-gray-600 text-sm ">
     <div className="flex items-center justify-between md:w-[85%] mx-auto ">
        <div className="flex items-center gap-2">
  <p className="font-semibold md:hidden">Asia BD</p>
         <p className="  md:flex   items-center gap-1 hidden md:block"><MdOutlineEmail/>expertmazaharul@gmail.com</p>
            <p className="md:flex md:block hidden   items-center gap-1 capitalize"> <MdOutlineLocationOn/> Moon ave, New York, 2020 NY US</p>
       

        </div>
        <div className="  flex  items-center gap-2">
            <Link href="/login" className="flex items-center gap-1"> <CiUser/> Login</Link>
            <Link className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-2 rounded-sm" href="/contact" >Contact us</Link>
        </div>
    </div>
   </div>
  )
}
