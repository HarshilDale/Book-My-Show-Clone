import { Disclosure } from '@headlessui/react'
import { BiChevronUp , BiChevronDown } from "react-icons/bi";
const PlaysFilter = (props) => {
  return (
      <div className="px-3 bg-gray-100">
    <Disclosure>
        {
            ({open}) => <>
             <Disclosure.Button className="py-2 flex items-center gap-3">
                 { open ? <BiChevronUp/> : <BiChevronDown/> }
            <span className={open ? "text-red-600" : "text-gray-700" }>
       {props.title}
        </span>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 shadow-lg py-3.5">
          <div className="flex items-center gap-3 flex-wrap">
             { props.tags.map((tag) => (
                   <>
              <div className="border-2 border-gray-200 px-3 py-2"> 
           <span className="text-red-600">{tag}</span>
           </div>
              </>
              ))}
       </div>
      </Disclosure.Panel>
             </>
        }
    </Disclosure>
    </div>
  )
}

export default PlaysFilter;