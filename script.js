async function loadJson(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

document.addEventListener("DOMContentLoaded", function(){
    /* chargement du modèle depuis model.json */
    fetch('model.json')
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Erreur lors de la lecture du fichier JSON:', error));

    const detailImage = document.getElementById('detail-image');
    const detImg = document.createElement('img');
    const table = document.createElement('table');
    const infos = document.getElementById('infos');
    

    function displayData(userData){
        const entries= Object.entries(userData);
        const detailsDiv =  document.getElementById('details');

        table.style.textWrap = "wrap";
        infos.appendChild(table);
        detailImage.appendChild(detImg);
        detImg.src = userData.image;
        
        for(let entry of entries){
            var row = document.createElement('tr');
            var col1 = document.createElement('td');
            var col2 = document.createElement('td');
            
            var string ="";
            col1.classList.add('col1');
            table.appendChild(row);
            row.appendChild(col1);
            row.appendChild(col2);

            switch(entry[0]){
                case "datePublication":
                    entry[0]="Date de publication";
                    break;
                case "editeur":
                    entry[0]="Éditeur";
                    break;
                case "resume":
                    entry[0]="Résumé";
                    break;
                case "nombrePages":
                    entry[0]="Nombre de pages";
                    break;
                case "disponibilite":
                    entry[0]="Disponibilité";
                    break;
                case "etat":
                    entry[0]="État";
                    break;
                default:
                    string = entry[0].charAt(0).toUpperCase()+entry[0].slice(1);
                    entry[0]=string;
                    break;

            }
            col1.innerText = entry[0];
            col2.innerText =  entry[1];
        }
    }


    const liste =  document.getElementById('liste');
    const ul =  document.createElement('ul');
    liste.appendChild(ul);
    for(var i=1;i<=12;i++){
        var li = document.createElement('li');
        var intern =  document.createElement('a');
        var img = document.createElement('img');
        
        intern.innerText="Détails";
        intern.setAttribute('href',"#details")
        li.classList.add('items');
        img.src ='img/bd1.jpg';
        img.classList.add('thumbnails');
        li.appendChild(img);
        li.appendChild(intern);
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
