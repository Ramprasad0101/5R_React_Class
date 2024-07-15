// export const ListParentOrder = () =>{
//     return <ol>
// <ListItems></ListItems>
//     </ol>
// };

//  export const ListParentUnOrder = () =>{
//     return <ul><ListItems></ListItems></ul>
// };

// const ListItems = ()=>{
//     return(
//         <div>
//             <li>Apple</li>
//             <li>banana</li>
//             <li>RED</li>
//             <li>Yellow</li>
//         </div>
//     );
// };
//  export const ListParentOrder =()=>{
//     return<ol>
//         <li>Apple</li>
//         <li>Banana</li>
//         <li>Fruit</li>
//     </ol>
// };

// export const ListParentUnOrder =()=>{
//     return<ul>
//         <li>Apple</li>
//         <li>Banana</li>
//         <li>Fruit</li>
//     </ul>
// };
 export const ListParentOrder =()=>{
    return(
    <ol><ListItems></ListItems></ol>
    )
 };
    
 export const ListParentUnOrder =()=>{
    return(
    <ul><ListItems></ListItems></ul>
    )
 };

 export const ListItems=()=>{
    return <div>
        <li>apple</li>
        <li>apple</li>
        <li>apple</li>
        <li>apple</li>
        <li>apple</li>
    </div>
 }
