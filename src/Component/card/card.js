import ImageComponent from "../image/imagecomponent";
import {Heading1} from "../heading/heading";
import ButtonComponent  from "../button/button";
import { ListParentOrder} from "../list/listparent";
import { ListParentUnOrder } from "../list/listparent";



 export const Card=()=>{
    return <div>
        <Heading1/>
    <ImageComponent/>
    <ButtonComponent/>
    <ListParentOrder/>
    <ListParentUnOrder/>

    </div>
 };

