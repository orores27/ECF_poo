import Product from "/class/product.js";
import Categorie from "/class/categorie.js";
    var Product1 = new Product('Michaël Gregorio', 'Spectacle Rodez', 43.00, 'non', 'non');
    var Product2 = new Product('Daniel Guichard', 'Spectacle Rodez', 43.00, 'non', 43*20/100);
    var Product3 = new Product ('Pc Portable Gaming MSI GL75 Leopard 10SFK-457FR 17.3/ Intel Core i7 16 Go RAM 256 Go SSD + 1 To SATA Noir', 'Ordinateurs Portables', 1999.99, 'oui', 20*1999.99/100);
    var Product4 = new Product ('PC Portable Gaming Asus TUF505DV-HN232T 15.6/ AMD Ryzen 7 16 Go RAM 512 Go SSD Noir', 'Ordinateurs Portables', 1499.99, 'oui', 33*1499.99/100);
    var Product5 = new Product ('PC Portable Gaming Acer Predator Triton 700 PT715-51-76D4 15.6/ Gaming Intel Core i7 32 Go RAM 256 Go SSD + 256 Go SATA Noir', 'Ordinateurs Portables', 3499.99, 'non', "non");

/**
 * Mise en page : liaison HTML/JS pour l'affichage
 */
// Création d'une constante pour appeler l'élément HTML 
const productContainer = document.querySelector('.product-container');
const template = document.querySelector('.template');
// Création d'un variable (tableau de tous les objets 'produit')
let ProductArray = [Product1, Product2, Product3, Product4, Product5];
// Le sort() permet de ranger par ordre alphabétique les nom de produit
ProductArray.sort(function compare(a, b) {
    if (a.produit < b.produit)
        return -1;
    if (a.produit > b.produit)
        return 1;
    return 0;
});
// Boucle pour afficher de manière dynamique
ProductArray.forEach((product) => {
    //La variable 'clone' sert à créer une ligne à partir du template pr chaque nouveau produit ** un template c'est un modèle de base pour créer une ligne ou autre
    let clone = document.importNode(template.content, true);
    //on selectionne toutes les balises (d'où le ALL) <td>
    var td = clone.querySelectorAll("td");
    // On sélectionne chaque case en lui donnant son contenu
    td[0].textContent = product.produit;
    // On place = product.getCategorie() pour répondre à la question de l'ex 3. C'est la méthode qui permet d'afficher la catégorie du produit directement.  
    td[1].textContent = product.getCategorie();
    td[2].textContent = product.price.toFixed(2);
    td[3].textContent = product.promotion;
    // je l'enlève et le met dans la boucle, il sera lu de la même manière 
    // td[4].textContent = product.discount;
// On met les produits en promo en vert
    if (product.reduction() === 'oui') {
        clone.querySelector("tr").classList.add('promo-vert')
        //toFixed pour le nombre de chiffre voulu après la virgule
        td[4].textContent = product.discount.toFixed(2);
    }
    else {
        td[4].textContent = product.discount;
    }
    // On appelle notre <tbody> et on lui dit d'ajouter une ligne, ici il le fera 5 fois parce que c'est une boucle
    productContainer.appendChild(clone);
});

//console.log(Product1.reduction());
let i;

// ex 3 : méthode (getCatégorie) qui crée le lien entre la catégorie et le produit
// ProductArray.forEach(product => console.log(product.getCategorie()));



/**
 * EX4
 * ProductArray.length est utilisé pour donner la longueur du tableau ou alors on utilise i<4
 */

for (i = 0; i< ProductArray.length; i++) {
    
    if (ProductArray[i].reduction()=== 'oui') {
    //Création d'un li en js pour afficher le nom de chaque produit en promo mais la liste est vide 
        let li = document.createElement('li')
        // on remplit la li
        li.textContent = ProductArray[i].produit
        //On affiche dans le HTML le produit
        document.querySelector('.promotion').appendChild(li);

    };
}
    /** ex 5 */

for (i = 0; i< ProductArray.length; i++) {
    
    if (ProductArray[i].remise() !== 'non') {
    // cf ex 4
    let li = document.createElement('li') 
    // Ajout de texte en plus des données de prix, remise etc
    li.textContent = 'Le produit ' +ProductArray[i].produit + ' d\'une valeur de '+ ProductArray[i].price + '€ coûte '+ProductArray[i].nvPrix() + '€ avec remise.'
    document.querySelector('.remise').appendChild(li);

         
    };
}
    /** ex 6 */
    // let ProductArray1 = [Product1.name, Product2.name, Product3.name, Product4.name, Product5.name];

    // ProductArray1.sort();
    
    

    /**ex 7 */
    let array = [];
    for (i=0; i<ProductArray.length; i++) {
        let produit = [ProductArray[i].name, ProductArray[i].produit]
        array.push(produit);
    }
    console.log(array.sort());

    /** ex 8
     * 1/ Mettre un produit en promo : 
     * a) créer une méthode appliquerPromo qui prend le produit et lui calcule une promo
     * 2/ Affecter une remise
     */

     for (i = 0; i< ProductArray.length; i++) {
        console.log(ProductArray[i].appliquerPromo(20));
        console.log(ProductArray[i].appliquerPourcentage(50/100));        
        // ProductArray.forEach(product => console.log(product.AppliquerPromo()));
}

// on relie les élement HTML au JS
    const select = document.querySelector('select');
    const price = document.querySelector('#price');
    const priceWithPromo = document.querySelector('#price-with-remise');
    const input = document.querySelector('input');
    let button = document.querySelector('button');

    //on fait une boucle pour afficher dans le select les produits sous forme de liste === c'est une liste d'option
    for(i = 0; i<ProductArray.length; i++) {
        let option = document.createElement('option')
        option.value = i
        option.textContent = ProductArray[i].produit
        select.appendChild(option)
    };
    //Afficher le prix en valeur par défaut
    price.textContent = ProductArray[0].price;
    // Création de la fonction qui permet d'affficher le prix en rapport avec le nom du produit
    function afficherPrix(){
        price.textContent = ProductArray[select.value].price
    }
    // Mise en place d'un écouteur d'événement = afficher prix en fonction du nom du produit
    select.addEventListener('change', afficherPrix)

    /**
     * Création d'une fonction pour calculer le prix de la réduction
        input. value = la valeur de la réduction qu'on entre dans l'input
     */

    function calculerReduc(){
        let promotion = input.value
        // condition si la valeur de la réduction est inférieure à zéro ou supérieur à 100, un message d'erreur s'affiche
        if (promotion < 0 || promotion > 100) {
            document.querySelector('.error').textContent = 'Promotion invalide !'
        }
        // calcul de la promotion: ***ProductArray[select.value].price***c'est le prix initial de l'objet 
        else {
            let prix = ProductArray[select.value].price 
            //calcul de la promotion
            let remise = ProductArray[select.value].appliquerPourcentage(promotion)
            let nvPrix = prix - remise
            //affichage du prix avec promotion arrondi à deux chiffres après la virgule
            priceWithPromo.textContent = nvPrix.toFixed(2)
        }
    }
    //Au clic du bouton, on calcul la réduction avec la fonction 'calculerReduc'
        button.addEventListener('click', calculerReduc)





