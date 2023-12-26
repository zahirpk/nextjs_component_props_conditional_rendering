import Card from "../components/card/Card";
type studentInfo={name:string,age:number}
var studentobj:studentInfo[]=[
  {name:"zaheer",age:40},
  {name:"Javed",age:38},
  {name:"Sarem",age:10},
  {name:"Faiq",age:6},
  {name:"Hasham",age:1},
  {name:"Noor",age:12},
  {name:"Eshal",age:6},
  {name:"Danish",age:15},
  {name:"Anas",age:12},
]
export default function Service() {
  var studentList:string[]=["zaheer","Ahtisham","Khizar","Tahir"];
  return (
  <div>
    <p className="p-4 text-3xl bg-gray-500 text-white">Array and object Example</p>
  
  <div>
  <h1 className="p-4 text-3xl bg-red-500 text-white">working with TypeScript  "Array"</h1>
    {studentList.map((items,index)=>{
      return(
        <>
        <h3 className="text-3xl">{index+1} - {items}</h3>
        </>
      )
    })}
  </div>
  <div>
  <h1 className="p-4 text-3xl bg-red-500 text-white">working with TypeScript  "Array of Objects"</h1>
  {studentobj.map((items,index)=>{
    return(
      <>
      <h3>{index+1}:- name of student <span className="text-3xl">"{items.name}"</span></h3>
      </>
    )
  })}
  </div>
  </div>
  )
}
