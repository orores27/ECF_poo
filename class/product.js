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
};








export default Product;
