import Image from "next/image"


const EmployeeCard = ({name, link, dept}) => {
  return (
    <div className="flex flex-col border-2 border-out rounded-2xl h-[22rem] w-[16rem] overflow-hidden">
        <div className=" w-fill h-full rounded-t-2xl">
            <Image src={link} className="h-full w-full"/>
        </div>
        <div className="flex flex-col w-fill h-[30%] border-t-2 border-t-out  rounded-b-2xl justify-center px-4">
            <div className="text-xl font-semibold text-textAlt">{name}</div>
            <div className="text-sm font-medium text-light">{dept}</div>
        </div>
    </div>
  )
}

export default EmployeeCard