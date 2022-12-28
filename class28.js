import pencilBox from "./class18,19,20.js";
const newPencilBox = new pencilBox(
  "pencil Box",
  30,
  "red",
  12,
  12,
  24,
  false,
  "2020-05-1 00:00:00"
);
const content = `
    <main>
        <ul>
            <li>Name: ${newPencilBox.name}</li>
            <li>Size: ${newPencilBox.size}</li>
            <li>Color: ${newPencilBox.color}</li>
            <li>Zip Length Left:  ${newPencilBox.zipLength.left}</li>
            <li>Zip Length Right:  ${newPencilBox.zipLength.right}</li>
            <li>Zip Length Top:  ${newPencilBox.zipLength.top}</li>
            <li>Zip Status:  ${newPencilBox.zipOpen ? "The zip is open":"The zip is closed"}</li>
        </ul>
    </main>
`;
document.body.innerHTML=content;
console.log("The Pencil Box Object:", newPencilBox);
console.log("size:", newPencilBox.size);
console.log("Date Purchased:", newPencilBox.datePurchased);
console.log("Date Purchased:", newPencilBox.pencilBoxAge());

if(pencilBox.zipOpen===true){
    console.log("Open")
}else{
    console.log("Close")
}
if(pencilBox.zipOpen===true && newPencilBox===30){
    console.log("yes")
}else{
    console.log("No")
}
if(pencilBox.zipOpen===true || newPencilBox===30){
    console.log("yes")
}else{
    console.log("No")
}
if(pencilBox.zipOpen===false || newPencilBox===30){
    console.log("yes")
}else{
    console.log("No")
}

// switch case
let size=30;
let boxSize;
switch(true){
    case size>30:
        boxSize="large";
        break;
        case size<=30 && size >=20:
            boxSize="medium";
            break;
        case size<=19 && size >=10:
            boxSize="small";
}
console.log("Box Size:",size);
console.log("Status:",boxSize);