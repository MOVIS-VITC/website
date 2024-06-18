import Image from "next/image"


const EmployeeCardII = ({name, link, dept}) => {
  return (
    <div className="flex flex-row border-2 border-out rounded-2xl h-24 overflow-hidden items-center p-6">
        <div className=" w-fill rounded-full">
            <Image src={link} className="h-16 w-16 rounded-full"/>
        </div>
        <div className="flex flex-col w-fill justify-center px-4 self-center">
            <div className="text-xl font-semibold text-textAlt">{name}</div>
            <div className="text-sm font-medium text-light">{dept}</div>
        </div>
    </div>
  )
}

export default EmployeeCardII