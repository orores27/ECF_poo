let prix = 0;
class Product {
    
    constructor(name, price, promotion, discount){
        this.name = name;
        this.price = price;
        this.promotion = promotion;
        this.discount = discount;
    }
    reduction() {
    return this.promotion;
    }
    afficherReduc() {
     return 'Nom du produit:' + Product.name;
    }
    remise(){
        return this.discount;
    }
    nvPrix() {
        prix = this.price - this.discount;
        return prix;
    }
};








export default Product;
