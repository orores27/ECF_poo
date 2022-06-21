import Product from "/class/product.js";
import Categorie from "/class/categorie.js";
    var Product1 = new Product('Michaël Gregorio', 'Spectacle Rodez', 43.00, 'non', 'non');
    var Product2 = new Product('Daniel Guichard', 'Spectacle Rodez', 43.00, 'non', 43*20/100);
    var Product3 = new Product ('Pc Portable Gaming MSI GL75 Leopard 10SFK-457FR 17.3/ Intel Core i7 16 Go RAM 256 Go SSD + 1 To SATA Noir', 'Ordinateurs Portables', 1999.99, 'oui', 20*1999.99/100);
    var Product4 = new Product ('PC Portable Gaming Asus TUF505DV-HN232T 15.6/ AMD Ryzen 7 16 Go RAM 512 Go SSD Noir', 'Ordinateurs Portables', 1499.99, 'oui', 33*1499.99/100);
    var Product5 = new Product ('PC Portable Gaming Acer Predator Triton 700 PT715-51-76D4 15.6/ Gaming Intel Core i7 32 Go RAM 256 Go SSD + 256 Go SATA Noir', 'Ordinateurs Portables', 3499.99, 'non', "non");

//console.log(Product1.reduction());
let i;
let ProductArray = [Product1, Product2, Product3, Product4, Product5];
// ex 3 : méthode (getCatégorie) qui crée le lien entre la catégorie et le produit
ProductArray.forEach(product => console.log(product.getCategorie()));



/**
 * EX4
 * ProductArray.length est utilisé pour donner la longueur du tableau ou alors on utilise i<4
 */

for (i = 0; i< ProductArray.length; i++) {
    
    if (ProductArray[i].reduction()=== 'oui') 
        console.log(ProductArray[i].name)
    };
 
    /** ex 5 */

for (i = 0; i< ProductArray.length; i++) {
    
    if (ProductArray[i].remise() !== 'nom') 
            console.log(ProductArray[i].name, ProductArray[i].price, ProductArray[i].nvPrix());     
    };

    /** ex 6 */
    let ProductArray1 = [Product1.name, Product2.name, Product3.name, Product4.name, Product5.name];

    ProductArray1.sort();
    console.log(ProductArray1);

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






// ProductArray[i].discount;
//     // discount = discount++;
//     console.log( ProductArray[i].reduction() )
//         // afficherReduc()   
//};




