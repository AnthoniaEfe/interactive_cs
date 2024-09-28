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
  border-radius: 16px;
  padding: 12px;

`;

const CardCounter = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 80%;
  background-color: hsl(239, 57%, 85%);
  border: 1px solid #fff;
  border-radius: 16px;
`

const CardBody = styled.div`
  .card-header{
    display:flex;
    flex-direction: row;
    align-items: center;
  }
  
  .left{
    display: flex;
    flex-direction: row;
    align-items: left;
    width: auto;
    gap: 30px;
  }
`  

const CardComment = styled.div`
  width: 100%;
`

export default function Card() {
const [isDropdownVisible, setDropdownVisible] = useState(false);

const toggleDropdown = () => {
  setDropdownVisible(!isDropdownVisible);
};

  return (
    <CardContainer>
      <CardCounter>
        <button style={{padding: "10px",
        backgroundColor: "hsl(239, 57%, 85%)"
        }}>+</button>
        <p>6</p>
        <button style={{padding: "10px",
        backgroundColor: "hsl(239, 57%, 85%)"
        }}>-</button>


      </CardCounter>

      <CardBody>
      <div className="card-header">
        <div>
          <img src={avatar} alt="" className="avatar"/>
          <p style={{width: "20px",
          height:"20px",
          color: "#000",
        }}>1 month ago</p>
      </div>

      <a href="#" onClick={toggleDropdown} className="dropdown-trigger" style={{width: "20px",
          height:"20px"
        }}>
      <img src={iconReply2} alt="" className="avatar"/>
        <span className="reply">Reply</span>
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
