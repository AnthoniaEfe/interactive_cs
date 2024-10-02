import { useState } from "react";
import styled from "styled-components";
import avatar from "../assets/avatars/image-amyrobson.png"
import iconReply2 from "../assets/images/icon-reply.svg"

const CardContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 60%;
  height: auto;
  margin: 1rem auto;
  border: 1px solid #fff;
  border-radius: 18px;
  padding: 16px;

`;

const CardCounter = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 80%;
  padding: 10px 16px;
  background-color: hsl(239, 57%, 85%);
  border: 1px solid #fff;
  border-radius: 14px;
`

const CardBody = styled.div`
  div{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  
  
    div{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: left;
      width: auto;
      gap: 15px;

      img{
        width: 24px;
        height: 24px;
      }

      p{
        color: #000;
        font-size: 14px;
      }
  }
}
`  

const CardComment = styled.div`
  width: 100%;
  color: #000;
`

export default function Card() {
const [isDropdownVisible, setDropdownVisible] = useState(false);

const toggleDropdown = () => {
  setDropdownVisible(!isDropdownVisible);
};

  return (
    <CardContainer>
      <CardCounter>
        <button style={{padding: "0px",
        backgroundColor: "hsl(239, 57%, 85%)"
        }}>+</button>
        <p>6</p>
        <button style={{padding: "0px",
        backgroundColor: "hsl(239, 57%, 85%)"
        }}>-</button>


      </CardCounter>

      <CardBody>
      <div className="card-header">
        <div className="left">
          <img src={avatar} alt=""/>
          <p>amyrobson</p>
          <p>1 month ago</p>
      </div>

      <a href="#" onClick={toggleDropdown} className="dropdown-trigger"
       style={{ display: "inlineFlex", 
        alignItems: "flexEnd", 
        justifyContent: "right"
        }}>
      <img src={iconReply2} alt="" className="avatar"/>
        <span className="reply" style={{marginLeft: "6px"}}>Reply</span>
      </a>
      </div>

      <CardComment>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Necessitatibus architecto blanditiis amet illo incidunt doloremque ratione,
           saepe molestias nobis ea id vel aspernatur dolorum rerum facere aut,
            labore odio quibusdam!</p>

      </CardComment>
      </CardBody>
    </CardContainer>
  )
}
