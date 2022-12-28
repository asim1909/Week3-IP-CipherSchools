// Standard Function
const redpencilBox={
    name:"Red Pencil Box",
    color:"red",
    size:30,
};
const bluepencilBox={
    name:"blue Pencil Box",
    color:"blue",
    size:24,
};
const addPencilBox=(currentPencilBox)=>{
    const newSection=document.createElement("section");
    newSection.innerHTML=`
    <h1>Name: ${currentPencilBox.name}</h1>
    <ul>
        <li>Color: ${currentPencilBox.color}</li>
        <li>Size: ${currentPencilBox.size}</li>
    </ul> `
    ;
    return newSection;
};
document.body.append(addPencilBox(redpencilBox));
document.body.append(addPencilBox(bluepencilBox));
// Arrow function and this keyword
window.size=13;
const yellowpencilBox={
    name:"Yellow Pencil Box",
    color:"blue",
    size:24,
    newSize:function(size){
        console.log(this.size);
        this.size=size;
        console.log(this.size);
        // (function(){
        //     console.log(this.size);
        // })();
        (()=>{
            console.log(this.size);
        })();
    },
};
console.log(yellowpencilBox.newSize(5));