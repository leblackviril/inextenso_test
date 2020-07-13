/**
 * Auteur: Arthur NGAKU
 *
 * Test Algo: Ecrire une fonction qui prend en entrée un entier et retourne un tableau avec chaque ligne correspondant à chaque digit de l'entier
 * 
 */

 /*Fonction qui prend un nombre en entier et teste si le nombre est un entier:
  si non: on renvoi un tableau vide, 
  si oui, je transforme le nombre en string, sachant que un string est un tableau de caratère, je sépare chaque element en le rajoutant comme entier dans un tableau de sortie */
 function increment(num) {
    var tab = [];
    if(!isNaN(num)) {
        num.toString().split('').forEach(function(c) {
            tab.push(Number(c));
        });
    }
    return tab;
 }

 //Pour tester
 console.log(increment(123));
 