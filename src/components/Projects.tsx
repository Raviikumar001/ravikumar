import React from 'react'

const skills= [
    {
        id:1,
        skill:"HTML"
    },
    {
        id:2,
        skill:"CSS3"
    },
    {
        id:3,
        skill:"JavaScript"
    },
    {
        id:4,
        skill:"React"
    },
    {
        id:5,
        skill:"Redux"
    },
    {
        id:6,
        skill:"Node Js"
    },
    {
        id:7,
        skill:"Restful Api"
    },
    {
        id:8,
        skill:"Express"
    },
    {
        id:9,
        skill:"Typescript"
    },  
    {
        id:10,
        skill:"SCSS"
    },
    {
        id:11,
        skill:"Git"
    },
    {
        id:12,
        skill:"Github"
    },
    {
        id:13,
        skill:"Vs Code"
    }

]

const Projects:React.FC = () => {
  return (
    <div className="mt-[5%] ml-10">
        <div>
            <p className='font-semibold text-blue-700'>Skills & Tools</p>
            <div className="flex flex-wrap mt-4">


                {skills.map((skill)=> (
                   <div key={skill.id} className='p-2  border-2 border-sky-800 m-1 rounded-md text-blue-700 font-semibold'>
                    {skill.skill}
                   </div> 
                ))}
                
            </div>
        </div>

        <div >
           <p className='font-semibold text-blue-700 mt-3'>Projects</p> 
        </div>
    </div>
  )
}

export default Projects