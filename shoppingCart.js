const shoppingCart = {
    items: [],
    total: 0,

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
        this.total += price * quantity;
    },

    removeItem(nameToDelete) {
        const index = this.items.findIndex((element) => element.name === nameToDelete);
        if (index !== -1) {
            this.total -= this.items[index].price * this.items[index].quantity;
            this.items.splice(index, 1);
        }
    },

    updateQuantity(name, newQuantity) {
        const index = this.items.findIndex((element) => element.name === name);
        this.total -= this.items[index].price * this.items[index].quantity;
        this.items[index].quantity = newQuantity;
        this.total += this.items[index].price * this.items[index].quantity;
    },

    calculateTotal() {
        return this.total;
    },

    clearCart() {
        this.items = [];
        this.total = 0;
    }
};

/* ручная проверка функций

console.log(shoppingCart.addItem('popo', 15, 3));
console.log(shoppingCart.items)
console.log(shoppingCart.calculateTotal());

console.log(shoppingCart.updateQuantity('popo', 4));
console.log(shoppingCart.items);
console.log(shoppingCart.calculateTotal());

console.log(shoppingCart.addItem('papa', 20, 5));
console.log(shoppingCart.items);
console.log(shoppingCart.calculateTotal());

console.log(shoppingCart.removeItem('popo'));
console.log(shoppingCart.items);
console.log(shoppingCart.calculateTotal());

*/