import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import SingleUser from "../SingleUser";
import Button from '../Button';

const Users = ({data}) => {
  return (
    <div>
         <h4>Add members to Front-end development team</h4>
         <div className="searchItem">
            <AiOutlineSearch className="searchIcon" />
            <h5>Find members</h5>
        </div>
        {data.map((user,index) => {
          return(
            <SingleUser name={user.name} checked={user.clicked} key={index}/>
          )
        })}
        <footer>
            <Button className={"cancel"} text={"Cancel"}/>
            <Button className={"save"} text={"Save"}/>
        </footer>
    </div>
  )
}

export default Users