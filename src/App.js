import ButtonComponent from "./Component/button/button"
import { ListParentOrder } from "./Component/list/listparent";
import { ListParentUnOrder } from "./Component/list/listparent";
const App=()=>{
  return(
  <>
< ListParentOrder/>
<ListParentUnOrder/>
  <ButtonComponent/>
  </>

  )
};
export default App;