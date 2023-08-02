// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.

let tab1 = [11,22,33,44,55,66];
function last(a) {
    console.log (a[a.length-1])
    
}
last(tab1);
console.log (tab1);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
let tab2 = [13,23,33,44,55,77];
function last2(a) {
    return (a[a.length-1])
    
}
console.log (last2(tab2));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

let tab3 = [55,33,54,66,0,77];

function minTab (a) {
    let ok = a[0]; 
    for (let i = 1 ; i <a.length-1; i++) {
        
        if (a[i] < ok) {

            ok=a[i]
        }
        
    }
    return ok
}
console.log(minTab(tab3));

/*
function min(a) {

    for (let i = 0 ; i < (a[a.length-1]) ; i++) {

        let a = 0;
        let b = 1 ;

        if    (for (let i = 0 ; i < (a[a.length-1]) ; i++) { 
            tab1[a]<tab1[b] &&
        } )     
            {
                b++

            
    
        }

        console.log (tab1[a])
     }

    
    
}
*/



// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

let tab4 = [554,353,514,663,10,77];

function maxTab (a) {
    let ok = a[0]; 
    for (let i = 1 ; i <a.length; i++) {
        
        if (a[i] > ok) {

            ok=a[i]
        }
        
    }
    return ok
}
console.log(maxTab(tab4));




// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

let tab5 = [554,353,514,663,10,77];

function maxTab2 (a) {
    let ok1 = a[0]; 
    let ok2 = a[0];
    for (let i = 1 ; i <a.length; i++) {
        
        if (a[i] > ok1) {

            ok1=a[i];
        }
        else if (a[i] > ok2) {

            ok2=a[i];

        }
        
    }
    return ok2
}
console.log(maxTab2(tab5));



// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

let tab6 = [5,3,4,6,1,7,5,4,7,8,9,2,1,4,5,3,9,7,5,6,1,5,9,5];

function countTab (a,value) {
    
    let count = 0
    for (let i = 0 ; i <a.length; i++) {
        
        if (a[i] == value) {

            count++ ;
        }
        
    }
    return count
}
console.log(countTab(tab6,-3));



// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.


let tab7 = [55,37,44,66,1,7,5,24,7,83,9,2,17,43,5,3,29,87,45];

function check (a,value) {


    for (let i = 0 ; i <a.length; i++) {
        
        if (a[i] == value) {
    
            return true
        }
        
    }
    return false
}
console.log(check(tab7,7));




// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?



// Créer un tableau qui contient [1,2,3,...,7777].

let tabtab = [ 1,2,3]

for(i=3 ; i<7778 ; i++){
    tabtab.push(i);
} 

console.log (tabtab);

// Créer un tableau qui contient [10,20,30,...,77770].
let tabtab2 = [ 10,20,30]

for(i=4 ; i<77772 ; i++){
    tabtab2.push(i*10);
} 

console.log (tabtab2);

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

let tabtab3 = [ 5,10,15]

for(i=4 ; i<7778 ; i++){
    tabtab3.push(i*5);
} 

console.log (tabtab3);



// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.

let tab8 = [50,48,2,74,4,6,4964,64,4,85,87,87,63,321,65,748,7,79,4,1,3,1,534,507,37,37,73,72,697,48,3,857,7,5,4,154,38,46,7]

function minus50 (a) {
    let ok = a.length-1;
    

    for (i=0 ; i<a.length ; i++) {

        if  (a[ok] <50) {

            a.pop();
            ok--
        }
        
    }
   return a
}
console.log(tab8.length)

console.log (minus50 (tab8))

//---------------------------------------------------

function minus51 (a) {  

    while (a.length > 0 && a[a.length-1] <50)  {

        a.pop();
        
    }
   return a
}

console.log (minus51 (tab8))

// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]


function leNomDeVotreFonction (a) {

    for (let i = 0 ; i< 3 ; i++) {
        a.pop();
    }

return a;
}

console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]))