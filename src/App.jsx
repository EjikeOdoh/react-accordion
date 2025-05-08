import './App.css'
import Icon from './assets/images/icon-star.svg'
import { useState } from 'react';


import { BiSolidMinusCircle } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";

let data = [
  {
    id: 1,
    question: " What is Frontend Mentor, and how will it help me?",
    answer: "  Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    isOpen: true
  },
  {
    id: 2,
    question: " Is Frontend Mentor free?",
    answer: "  Yes, Frontend Mentor offers both free and premium coding challenges, with the free  option providing access to a range of projects suitable for all skill levels.",
    isOpen: false
  },
  {
    id: 3,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    isOpen: false
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    isOpen: false
  }
]


function AccordionItem(props) {

  return (
    <div className="item">
      <button
        onClick={() => props.handleClick(props.id)}
      >
        <p>{props.question}</p>
        {
          props.isOpen ? <BiSolidMinusCircle size={24} color='hsl(292, 42%, 14%)' /> : <FaCirclePlus size={24} color='hsl(293, 98%, 40%)' />
        }
      </button>
      {
        props.isOpen ? <p>{props.answer}</p> : null
      }
    </div>
  )
}

function App() {

  const [list, setList] = useState(data)

  function handleList(id) {
    setList((prevList) => {
      return prevList.map(x => {
        if (x.id === id) {
          return { ...x, isOpen: !x.isOpen }
        } else {
          return {...x, isOpen: false}
        }
      })
    })
  }


  const items = list.map((x) => {
    return <AccordionItem
      key={x.id}
      id={x.id}
      question={x.question}
      answer={x.answer}
      isOpen={x.isOpen}
      handleClick={handleList}
    />
  })

  return (
    <div className="container">
      <div className="heading">
        <img src={Icon} alt="Icon star" />
        <h1>FAQs</h1>
      </div>

      <div className="content">
        {items}
      </div>
    </div>
  )
}

export default App
