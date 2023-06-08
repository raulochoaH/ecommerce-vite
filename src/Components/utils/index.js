/**
 * This function calculates total price of a new order
 * @param {Array} cartProducts: Array of Objects
 * @returns {number} Total price
 */

export const totalPrice = (Products) => {
    const total = Products.reduce((accumulator, currentProduct) => {
        return accumulator + currentProduct.price;
    }, 0);
    return total.toFixed(2);
}