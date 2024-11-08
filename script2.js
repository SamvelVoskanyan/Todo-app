let inpValue=document.querySelector("#inpValue");
let takeValue=document.querySelector("#takeValue");
let listGroup=document.querySelector("#list-group");
let config={
    update:null
}
let base = [
    {
        id: 1,
        label: "Add New Item"
    },
    {
        id: 2,
        label: "Add New Item"
    },
    {
        id: 3,
        label: "Add New Item"
    },
    {
        id: 4,
        label: "Add New Item"
    }

]

document.body.onload=function (){
    base.forEach(element=>{
        printVew(element)
    })
}
takeValue.onclick=function (){
    if (config.update){
        update()
    }else{
        store()
    }

    function update(){
        base=base.filter(element=>{
            if (element.id===config.update){
                element.label=inpValue.value
            }
            return element
        })
        let label=document.querySelector("#label-"+ config.update);
        label.innerHTML=inpValue.value
        inpValue.value=''
        config.update=null
        inpValue.innerHTML='Add New Item'

    }


    function store(){
        let data={
            id:Date.now(),
            label:inpValue.value
        }
        base.push(data);
        printVew(data)
    }
}
function printVew(value){
    listGroup.innerHTML+=`
    <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
    <img src="off.png" alt="" width="50px" data-value="off" onclick="turnLight(event)">
    <span class="item-text" id="label-${value.id}">${value.label} #${value.id}</span>
    <div>
        <button class="edit-me btn btn-secondary btn-sm mr-1" onclick="editItem(${value.id})">Edit</button>
        <button class="delete-me btn btn-danger btn-sm"  onclick="deleteItem(event,${value.id})">Delete</button>
    </div>
</li>
    `
}

function deleteItem(event,id){
    console.log(event.target,id)
    base=base.filter(res=>res.id!==id)
    event.target.parentElement.parentElement.remove();
}

function editItem(id){
    let data= base.find(res=>res.id===id)
    config.update=data.id
    inpValue.value=data.label
    takeValue.innerHTML="Update Item";
}

function turnLight(event){
    let img= event.target;
    let y=img.dataset.value

    if (y==='off'){
        img.src='on.png'
        img.dataset.value="on"
        img.parentElement.classList.add('dark')
    }else{
        img.src='off.png'
        img.dataset.value="off"
        img.parentElement.classList.remove('dark')

    }
    console.log(y)

}