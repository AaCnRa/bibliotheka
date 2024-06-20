async function loadJson(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

document.addEventListener("DOMContentLoaded", function(){
    /* chargement du modèle depuis model.json */
    /*fetch('model.json')
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Erreur lors de la lecture du fichier JSON:', error));
    */
    
    const detailsDiv = document.getElementById('details');
    const liste =  document.getElementById('liste');
    const gestion = document.getElementById("gestion");
    const detailImage = document.createElement('div');
    const detImg = document.createElement('img');
    const table = document.createElement('table');
    const infos = document.createElement('div');
    const modifier=document.createElement('button');
    const message = document.createElement('h4');    
        
    message.innerText="(Veuillez sélectionner un livre)";
    message.style.color ="gray";
    message.id = "avertissement";
    
    detailsDiv.innerHTML ="<h2>Détails</h2>";
    detailsDiv.appendChild(message);
    function displayData(userData){
        
        const entries= Object.entries(userData);

        if(document.getElementById("avertissement")){
            detailsDiv.removeChild(message);
            infos.appendChild(table);
            detailsDiv.appendChild(detailImage);
            detailsDiv.appendChild(infos);
            detailsDiv.appendChild(modifier);
            detailImage.appendChild(detImg);    
        }

        modifier.id="modifier";
        detailImage.id = "detail-image";
        infos.id = "infos";
        modifier.innerText="Modifier";
        table.innerHTML="";
        table.style.textWrap = "wrap";
        detImg.src = userData.image;
        detailImage.style.width= detImg.width>=detImg.height?"100%":"50%";        

        for(let entry of entries){
            let row = document.createElement('tr');
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
        liste.style.maxHeight = gestion.offsetHeight +"px";
        liste.style.minHeight = gestion.offsetHeight +"px";
    }
    /* lister les livres enregistrés */

    fetch('livres.json')
    .then(response => response.json())
    .then(data => list(data))
    .catch(error => console.error('Erreur lors de la lecture du fichier JSON:', error));

/*
    const livre = loadJson('livres.json');
    list(livre);*/
    function list(data){
        const listEntries = Object.entries(data);
        var ul =  document.createElement('ul');
        
        liste.appendChild(ul);
        
        for(let i of listEntries){
            var div = document.createElement('div');
            var li = document.createElement('li');
            var intern =  document.createElement('a');
            var img = document.createElement('img');
            var basics = document.createElement('p');
            
            ul.appendChild(li);
            li.appendChild(div);
            li.appendChild(basics);
            div.appendChild(img);

            basics.innerHTML = `<label>Titre:</label> ${i[1].titre}<br>
            <label>Auteur:</label> ${i[1].auteurs}`;
            intern.innerText="Détails";
            intern.setAttribute('href',"#details")
            img.src =i[1].image;

            li.classList.add('items');
            img.classList.add('thumbnails');
            li.classList.add('books');
            //basics.style.textAlign ="left"
            
            li.addEventListener('click',function(){displayData(i[1])})
        }

        liste.style.maxHeight = gestion.offsetHeight +"px";
        liste.style.minHeight = gestion.offsetHeight +"px";
    }
    
    /*
    loadJson('model.json').then(data => console.log(data)).catch(error => console.error('Erreur lors du chargement du fichier JSON:',error));
    */
   const model = loadJson("model.json");
   /*console.log(model);*/
   
    const datePublication = document.getElementById('datePublication');
    const today = new Date();
    datePublication.setAttribute('max',today.getFullYear());
    
})
