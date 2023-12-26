import React from 'react'
import Card from '../components/card/Card'


export default function Project() {
  return (
    <div>
      <div className='p-4 text-3xl bg-red-500 text-white'>
        Component Reusability 
      </div>
    <Card title="Call Card Component to project page"  course = "Enroll Now" description=" working with React Props" tag="Web Intergration"  btn="Submit" isShow={true} paraShow={false}/>
    </div>
  )
}
