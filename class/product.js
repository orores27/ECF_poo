let prix = 0;
let promo = 0;
let price = 0;
class Product {
    
    constructor(produit, name, price, promotion, discount){
        this.produit = produit;
        this.name = name;
        this.price = price;
        this.promotion = promotion;
        this.discount = discount;
    }
    reduction() {
    return this.promotion;
    }
    // afficherReduc() {
    //  return 'Nom du produit:' + Product.name;
    // }
    remise(){
        return this.discount;
    }
    nvPrix() {
        prix = this.price - this.discount;
        return prix.toFixed(2);
        console.log(prix);
    }
     // ex 3
    getCategorie() {
        return this.name;
    }
    appliquerPromo(promo) {
       price = this.price - promo;
       return price;
    }
    appliquerPourcentage(pourcentage) {
        price = this.price * pourcentage;
       return price;
    }
};








export default Product;
