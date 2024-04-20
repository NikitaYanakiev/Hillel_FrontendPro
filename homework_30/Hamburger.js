class Hamburger {
    
    /**
     * 
     * @param {Size{}} size - size of hamburger
     * @param {Stuffing{}} stuffing - stuffing for hamburger
     */
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    static SIZE_SMALL = { price: 50, calories: 20};
    static SIZE_LARGE = { price: 100, calories: 40};
    static STUFFING_CHEESE = { price: 10, calories: 20};
    static STUFFING_SALAD = { price: 20, calories: 5};
    static STUFFING_POTATOES = { price: 15, calories: 10};
    static TOPPING_SAUCE = { price: 15, calories: 0};
    static TOPPING_MAYO = { price: 20, calories: 5};

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let totalPrice = this.size.price + this.stuffing.price
        this.toppings.forEach(item => {
            totalPrice += item.price;
        });

        return totalPrice;
    }

    calculateCalories() {
        let totalCalories = this.size.calories + this.stuffing.calories
        this.toppings.forEach(item => {
            totalCalories += item.calories;
        });

        return totalCalories;
    }
}