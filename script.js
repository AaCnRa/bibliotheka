document.addEventListener("DOMContentLoaded", function(){
    const liste =  document.getElementById('liste');
    const ul =  document.createElement('ul');
    liste.appendChild(ul);
    for(var i=0;i<50;i++){
        var li = document.createElement('li');
        li.innerHTML =  "test liste";
        ul.appendChild(li);
    }
    
    
})
