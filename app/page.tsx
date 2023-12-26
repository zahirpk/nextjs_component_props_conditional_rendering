import Image from 'next/image'
import Card from '@/app/components/card/Card'
export default function Home() {
  return (
    <main>
     <div className="p-4 text-3xl bg-red-500 text-white">Working the Props in Next js</div>
     <p className='p-4 text-3xl'> Passing data with the help of React Component</p>
      <Card title="Web Development"  course = "Enroll Now" description=" working with React Props" tag="Web Intergration"  btn="Submit" isShow={true} paraShow={false}/>
      <br/>
      <Card title="Blockchain" course ="Enroll Now" description="Learning Next js" tag="AI" btn="Click me" isShow={true} paraShow={true}/>
      <div className="p-4 text-3xl bg-red-500 text-white">Service Page Explain the examples of Array and object with the help of TS </div>
      <p className='p-4 text-3xl'> Type " /service"  in url to see Practical example</p>
      <br/>
      <br/>
      <br/>
      <div className="p-4 text-3xl bg-red-500 text-white">Project Page Explain "Reuseability of React Component" </div>
      <p className='p-4 text-3xl'> Type " /project"  in url to see Practical example</p>
    </main>
  )
}

