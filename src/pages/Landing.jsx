import Card from "../components/Card";
import Header from "../components/Header";
import ToDo from "../components/To-DoContainer";
import { useLocation } from "react-router-dom";

function Landing() {

  const data = useLocation()
  return (
    <div>
      <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 rounded-md">
          {/* Header */}
          <Header name = {data.state.user}/>
          {/* Card */}
          <div className='flex justify-between gap-7 my-5 flex-wrap'>
          <Card bgColor={"#8272DA"} title = {"23"} subtitle = {"Chennai"}/>
          <Card bgColor={"#FD6663"} title = {"December 20"} subtitle = {"14:23:08"}/>
          <Card bgColor={"#FCA201"} title = {"Built Using"} subtitle = {"React"}/>
          </div>
          {/* To-Do Container */}
          <ToDo></ToDo>
        </div>
        
      </div>
     
    </div>
  );
}

export default Landing;
  