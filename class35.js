fetch("https://docs.gitlab.com/ee/api/users.html")
    .then((response)=>response.jason())
    .then((date)=>console.jlog(date));

async function getUsers(){
    let url="https://docs.gitlab.com/ee/api/users.html";
    try{
        let response=await fetch(url);
        return await response.jason();
    }catch(error){
        console.log(error);
    }
}
async function Users(){
    let users =await getUsers();
    let html="";
    users.array.forEach(user => {
    //    let content= `<p>${user.name}</p>`;
    let content =`<div class="box">
    <p>${user.name}</p>
    <p>${user.email}</p>
    </div>`
    });
    html+=content;
    document.body.innerHTML=html;
}
Users();