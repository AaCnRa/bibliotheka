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
    const detailImage = document.getElementById('detail-image');
    const detImg = document.createElement('img');
    const table = document.createElement('table');
    const infos = document.getElementById('infos');
    

    function displayData(userData){
        const entries= Object.entries(userData);
        const detailsDiv =  document.getElementById('details');

        table.innerHTML="";
        table.style.textWrap = "wrap";
        infos.appendChild(table);
        detailImage.appendChild(detImg);
        detImg.src = userData.image;

        detailImage.style.width= detImg.width>=detImg.height?"100%":"50%";
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

    /* lister les livres enregistrés */

    fetch('livres.json')
    .then(response => response.json())
    .then(data => list(data))
    .catch(error => console.error('Erreur lors de la lecture du fichier JSON:', error));

    function list(data){
        const listEntries = Object.entries(data);
        var liste =  document.getElementById('liste');
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
            /*li.appendChild(intern);*/
            div.appendChild(img);

            basics.innerHTML = `<label>Titre:</label> ${i[1].titre}<br>
            <label>Titre:</label> ${i[1].auteurs}`;
            intern.innerText="Détails";
            intern.setAttribute('href',"#details")
            console.log(i);
            img.src =i[1].image;

            li.classList.add('items');
            basics.style.textAlign ="left"
            img.classList.add('thumbnails');
            li.classList.add('books');
            
            li.addEventListener('click',function(){displayData(i[1])})
        }

    }
    
    /*
    loadJson('model.json').then(data => console.log(data)).catch(error => console.error('Erreur lors du chargement du fichier JSON:',error));
    */
   
    const datePublication = document.getElementById('datePublication');
    const today = new Date();
    datePublication.setAttribute('max',today.getFullYear());
    
})
