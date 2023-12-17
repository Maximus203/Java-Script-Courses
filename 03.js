let mystere = Math.floor(Math.random() * (100 - 0) + 0);

/**
 * 
 * @param {string} message message a ajouter dans la balise avec l'id resultat
 */
function setMessage(message) {
    let resultat = document.getElementById('resultat');
    let elementMessage = document.createElement('div');
    elementMessage.innerHTML = message;
    resultat.appendChild(elementMessage);
}



/**
 * Permet de valider le formulaire pour voir si l'utilisateur a trouver le nombre mystere
 */
function validation() {
    let number = document.getElementById('number');
    if (number.value == mystere) {
        setMessage("Bravo !");
        number.value = '';
        setTimeout(() => {
            if (confirm("Voulez-vous rejouer !"))
                location.reload();
        }, 3000);
    }
    else if (number.value < mystere) {
        setMessage("C'est plus que " + number.value);
        number.value = '';
    }
    else if (number.value > mystere) {
        setMessage("C'est moins que " + number.value);
        number.value = '';
    }
}
