import Product from "/class/product.js";
import Categorie from "/class/categorie.js";
    var Product1 = new Product('Spectacle Rodez', 43.00, 'non', 'non');
    var Product2 = new Product('Spectacle Rodez', 43.00, 'non', 20*100/43);
    var Product3 = new Product ('HP', 1999.99, 'oui', 20*100/1999.99);
    var Product4 = new Product ('MAC', 1499.99, 'oui', 33*100/1499.99);
    var Product5 = new Product ('ASUS', 3499.99, 'non', "non");

//console.log(Product1.reduction());
let i;
let ProductArray = [Product1, Product2, Product3, Product4, Product5];
// console.log(ProductArray);


/**
 * EX4
 * ProductArray.length est utilisé pour donner la longueur du tableau ou alors on utilise i<4
 */

for (i = 0; i< ProductArray.length; i++) {
    
    if (ProductArray[i].reduction()=== 'oui') {
        console.log(ProductArray[i].name)
     };     
// ProductArray[i].discount;
//     // discount = discount++;
//     console.log( ProductArray[i].reduction() )
//         // afficherReduc()   
};




