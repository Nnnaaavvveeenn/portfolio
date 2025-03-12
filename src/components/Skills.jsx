import React from 'react'
import SkillBox from './SkillBox';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiC } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdAccountTree } from "react-icons/md";


export default function Skills() {
    const skills = [
      {name: "HTML", level: "Intermediate",icon:<FaHtml5 className='skill-icons'/>},
      {name: "CSS", level: "Intermediate",icon:<IoLogoCss3 className='skill-icons'/>},
      {name: "JavaScript", level: "Intermediate",icon:<IoLogoJavascript className='skill-icons'/>},
      {name: "React", level: "Intermediate",icon:<FaReact className='skill-icons'/>},
      {name: "C", level: "Intermediate",icon:<SiC className='skill-icons'/>},
      {name: "Java", level: "Intermediate",icon:<FaJava className='skill-icons'/>},
      {name: "Data Structures", level: "Intermediate",icon:<MdAccountTree className='skill-icons'/>},
    ];
  return (
    <section id='skills'>
    <h1>Skills</h1>
    <div id='skills-list'>
    {skills.map((skill, index) => (
      <SkillBox key={index} skill={skill}/>
    ))}
      </div>
    </section>
  )
}
