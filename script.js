// TODO: add code here

window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      console.log(response);
      response.json().then(function(json){
          console.log(json);
          let var_container=document.getElementById("container");
          for(index=0;index<json.length;index++){
            var_activeClass="";
            if(json[index].active===true){
              var_activeClass="active";
            }
          var_container.innerHTML+=`<div class="astronaut">
            <div> <b>${json[index].firstName} ${json[index].lastName}</b>
            <ul> 
              <li>hoursInSpace: ${json[index].hoursInSpace}</li>
              <li class="${var_activeClass}"> Active: ${json[index].active}</li>
              <li>Skills:${json[index].skills}</li> 
            </ul>
          </div>  <img src="${json[index].picture}" class="avatar"/> </div>`;
        }
                document.getElementById("totalastronauts").innerHTML+=json.length;
      });
    });
});// TODO: add code here