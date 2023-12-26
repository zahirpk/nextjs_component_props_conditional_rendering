import { btnPropsType } from "@/component/types/CardProps";
export default function Button(Props:btnPropsType) {
  console.log("props",Props)
  return (
    <div>
    <button className="bg-blue-700 text-white  py-2 px-4 ">
        {Props.btnName}
      </button>
    </div>
  );
}
