var save=document.querySelector(".save");
var list=document.querySelector(".list");



var c=0;
save.addEventListener("click",function(e){
    var text=document.querySelector("#form1");
    if(text.value==""){
      alert("please enter a task!");
    }
    else{
    c++;
    let nod=document.createElement("tr");
    nod.innerHTML=` 
          <th scope="row" class="num">${c}</th>
          <td>${text.value}</td>
          <td>
            <select class="form-select">
              <option value="in_progress" selected>In Progress</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </td>
          <td>
            <button type="button" class="delete btn btn-danger" id="${c}">Delete</button>
          </td>

                  `
    

    nod.id=`ligne-${c}`;
    nod.classList.add("roww");
    list.appendChild(nod);

    }})



list.addEventListener("click",function(e){
  if(e.target.classList.contains("delete")){
  let child=document.querySelector(`#ligne-${e.target.id}`);
  list.removeChild(child);
  updateListNumbers(); 
}
});

function updateListNumbers() {
let rows = document.querySelectorAll(".roww");//ou bien .list tr 
c = 0; 
rows.forEach(function (row, index) {
  c++; 
  row.querySelector(".num").textContent = c; 
});
}



        
