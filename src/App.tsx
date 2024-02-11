import Alert from "./components/Alert";
import { BellRing } from "lucide-react";

function App() {
  return (
    <>
    
      <Alert 
      icon={<BellRing size={25}/>}
       title={"Title"}
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta numquam impedit deleniti totam iste delectus rem qui repudiandae facilis officia in, voluptate reprehenderit beatae fuga asperiores a architecto libero optio."
        type="error"
         /> 
      <Alert 
      icon={<BellRing size={25}/>}
       title={"Title"}
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta numquam impedit deleniti totam iste delectus rem qui repudiandae facilis officia in, voluptate reprehenderit beatae fuga asperiores a architecto libero optio."
        type="success"
         /> 
      <Alert 
      icon={<BellRing size={25}/>}
       title={"Title"}
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta numquam impedit deleniti totam iste delectus rem qui repudiandae facilis officia in, voluptate reprehenderit beatae fuga asperiores a architecto libero optio."
        type="default"
         /> 
      <Alert 
      icon={<BellRing size={25}/>}
       title={"Title"}
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta numquam impedit deleniti totam iste delectus rem qui repudiandae facilis officia in, voluptate reprehenderit beatae fuga asperiores a architecto libero optio."
        type="info"
         /> 
      <Alert 
      icon={<BellRing size={25}/>}
       title={"Title"}
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta numquam impedit deleniti totam iste delectus rem qui repudiandae facilis officia in, voluptate reprehenderit beatae fuga asperiores a architecto libero optio."
        type="warning"
         /> 
      {/* <Alert icon={<BellRing size={25}/>} title={"Title"} desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta numquam impedit deleniti totam iste delectus rem qui repudiandae facilis officia in, voluptate reprehenderit beatae fuga asperiores a architecto libero optio."  />  */}
      {/* <Alert icon={<BellRing size={25}/>} title={"Title"} desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta numquam impedit deleniti totam iste delectus rem qui repudiandae facilis officia in, voluptate reprehenderit beatae fuga asperiores a architecto libero optio."  /> */}
    </>
  );
}

export default App;
