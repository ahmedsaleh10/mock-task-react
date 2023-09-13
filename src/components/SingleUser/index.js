import React from 'react'
import { BiSolidUser } from "react-icons/bi";
import { RxCheckCircled } from "react-icons/rx";

const SingleUser = ({name,checked}) => {
  return (
    <div className={`singleBox ${checked ? "" : "gray-color"}`}>
      <div className="leftItem">
        <BiSolidUser className="userIcon" /> <div>{name}</div>
      </div>
      <div>
        {checked ? 
          <RxCheckCircled
            className="iconChecked"
          />
         : 
          <div className="iconCircle"></div>
        }
      </div>
    </div>
  )
}

export default SingleUser