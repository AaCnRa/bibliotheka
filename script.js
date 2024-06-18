async function loadJson(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
document.addEventListener("DOMContentLoaded", function(){
    const liste =  document.getElementById('liste');
    const ul =  document.createElement('ul');
    liste.appendChild(ul);
    for(var i=1;i<=24;i++){
        var li = document.createElement('li');
        var button =  document.createElement('button');
        var img = document.createElement('img');
        
        button.innerText="Voir plus";
        li.classList.add('items');
        img.src ='img/bd1.jpg';
        img.classList.add('thumbnails');
        li.appendChild(img);
        /*li.appendChild(button);*/
        li.classList.add('books');
        ul.appendChild(li);
    }
    /*
    loadJson('model.json').then(data => console.log(data)).catch(error => console.error('Erreur lors du chargement du fichier JSON:',error));
    */
    const datePublication = document.getElementById('datePublication');
    const today = new Date();
    datePublication.setAttribute('max',today.getFullYear());
    
})
