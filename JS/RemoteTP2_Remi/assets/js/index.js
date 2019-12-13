var tableau = [
    {
        "title": "Un super article 1",
        "content": "1Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 1",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 2",
        "content": "2Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 2",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 3",
        "content": "3Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 3",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 4",
        "content": "4Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 4",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 5",
        "content": "5Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 5",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 6",
        "content": "6Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 6",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    }
];
window.onload = function() {
    
    function loadObject() {
        var i = 0; 7
        while (i < tableau.length) { // Tant que i est inférieur à l'index maximum du tableau (.length)
            var newArticle = document.querySelector('card.article').cloneNode(true); // On clone l'article hidden de notre html
            var section = document.getElementsByTagName('section')[0]; // On selectionne la section sur laquelle on veut injecter notre article
            section.appendChild(newArticle); // On injecte le nouvel article
            newArticle.classList.remove('hidden'); // On lui retire sa classe hidden a l element clone
            document.querySelectorAll('h2.titre')[i+1].textContent = tableau[i].title; // On lui injecte les différentes informations du tableau ([i+1] pour eviter d'affecter l'article hidden) 
            document.querySelectorAll('p.resumes')[i+1].textContent = tableau[i].resumes; // .title .resumes ect....
            document.querySelectorAll('p.author')[i+1].textContent = tableau[i].author;
            document.querySelectorAll('img.a-img')[i+1].setAttribute('src', tableau[i].img);
            document.querySelectorAll('div.but')[i+1].setAttribute('id', i); // On lui donne un id dans la boucle, pour que chaque article crée est un identifiant unique
            i += 1; // On increment i pour passer à la prochaine boucle
        }
    }
    function moveDown(elem) { // Animation de descente de la popup
        var top=-60;
        function frame() {  
            top++;
            elem.style.top = top + 'vh';  // .top renvoie a la propriete top{...}m, top est une variable correspondant a -60
            if (top == 20){
            clearInterval(id)
            }
        }
            var id = setInterval(frame, 10); //////// what is frame?? a function???
    }
    function moveUp(elem) { // Animation de montée de la popup
        var down=20;
        function frame() {
            down--;
            elem.style.top = down + 'vh';
            if (down == -60){
            clearInterval(id)
            }
        }
            var id = setInterval(frame, 10); 
    }
document.getElementById('ok').onclick = function() { // On selectionne le bouton ok, puis lors du clic (.onclick) on lui dit de lancer une fonction
    moveUp(document.querySelector('section.popup')); // Cette fonction appelle la fonction d'animation de fermeture de la popup par le haut
}
loadObject();


    var info = document.querySelectorAll('div.but') // On récupère les boutons plus d'info
    for (var n=0; n < info.length; n++) {   // On a récupérer un tableau avec chanque bouton, pour chaque bouton (longueur du tableau)
    var inf = info[n];  // Pour chaque itération de la boucle, on enregistre le bouton en cours de traitement
    inf.addEventListener("click", function() {  // Sur ce bouton on lui ajoute un mouchard (eventListener) qui detecte le click. Lors du click on lui demande d'exécuter une fonction.
        var id = this.id; // On enregistre l'id du bouton en cours de traitement (this)
        document.querySelector('.popup div h1').textContent = tableau[id].title; // On sélectionne le <p> de la popup et on remplace son contenu en fonction de l'id du bouton cliqué qui nous sert d'index dans le tableau de contenu.
        document.querySelector('.popup div p').textContent = tableau[id].content;
        moveDown(document.querySelector('.popup')); // On fait descendre la popup
        });
    };
    
}
