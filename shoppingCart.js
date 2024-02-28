const shoppingCart = {
    items: [],
    total: 0,

    //добавление товара в корзину(items)
    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
        this.total += price * quantity;
    },

    //удаление товара
    removeItem(nameToDelete) {
        //находим индекс товара по имени
        const index = this.items.findIndex((element) => element.name === nameToDelete);
        //проверка на существование товара в корзине(items)
        if (index !== -1) {
            //отнимаем стоимость товара из корзины, а затем удаляем его
            this.total -= this.items[index].price * this.items[index].quantity;
            this.items.splice(index, 1);
        }
    },

    //обновление количества товара
    updateQuantity(name, newQuantity) {
        //находим с помощью имени индекс товара в items
        const index = this.items.findIndex((element) => element.name === name);
        //отнимаем от общей стоимости старую стоимость товара(цена * количество)
        this.total -= this.items[index].price * this.items[index].quantity;
        //обновляем количество товара
        this.items[index].quantity = newQuantity;
        //прибавляем новую стоимость 
        this.total += this.items[index].price * this.items[index].quantity;
    },

    //получениие стоимости корзины
    calculateTotal() {
        return this.total;
    },

    //очищение и обнуление стоимости корзины
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