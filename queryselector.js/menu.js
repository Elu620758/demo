let item=[
    {id:1,name:"pizza",price:400},
    {id:2,name:"burger",price:300},
    {id:3,name:"rollpiza",price:200}
]
let app=document.getElementById("app");
item.forEach(myitem=>{
    app.innerHTML+=`<li>${myitem.id} ${myitem.price}</li>`
})