const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === productName) {
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      if (item.quantity > 1) {
        totalPrice += item.price * item.quantity;
        continue;
      }
      totalPrice += item.price;
    }
    return totalPrice;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity -= 1;
      }
    }
  },
};

// console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

// console.log(cart.countTotalPrice());
// cart.clear();
// console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

cart.increaseQuantity('🍎');
console.table(cart.getItems());

// cart.decreaseQuantity('🍎');
// console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
