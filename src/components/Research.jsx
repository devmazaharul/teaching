import { Site_data } from "@/Data"
import Image from "next/image"

export default function Research() {
    const {research:{title,researchArr}}=Site_data
  return (
    <div className="main">
        <h1 className="titleText text-center">{title}</h1>
            <div className="grid grid-cols-3 ">
            {researchArr.map((item,i)=>(
                <div key={i} className="px-5 py-6 rounded-md  border shadow-sm m-2 my-6 text-center" >
                    <Image src={item.img} width={150} height={100} className="founded-full mx-auto py-3" />
                    <h1 className="text-xl font-semibold py-2">{item.title}</h1>
                    <h1 className="sortDesc">{item.text}</h1>
                </div>

            ))}
            </div>
    </div>
  )
}
