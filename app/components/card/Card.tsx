import { CardProps } from "@/component/types/CardProps";
import Button from "../button/Button";
import Tag from "../tag/Tag";

export default function Card(props:CardProps) {
  console.log("props",props)
  return (
    <div className=" shadow-xl p-4">
      <div className="px-6 py-4">
        {props.isShow? <div className="font-bold text-xl mb-2">{props.title} -{props.course}</div>:""}
        
        <p style={{backgroundColor:props.paraShow?"green":"red"}} className="text-gray-700 text-base">
          {props.description}
        </p>
        <div className="flex">
          <Tag tagText={props.tag}/>
          <Tag tagText={props.tag}/>
        </div>
      </div>
      <Button btnName={props.btn}/>
     
    </div>
  );
}
