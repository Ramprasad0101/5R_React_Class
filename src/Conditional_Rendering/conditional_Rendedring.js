import { ImageComponent } from "../Component/image/imagecomponent";
const ConditionalRendering=()=>{
const login=true
return(
    <div>
        {
            login?(<><ImageComponent/></>):("Pleaselogin")
        }
    </div>
);
  
 
   };
export default ConditionalRendering;     