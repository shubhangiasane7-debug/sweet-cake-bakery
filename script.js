// Go to Order Section
function goToOrder() {

    document.getElementById("order").scrollIntoView({
        behavior: "smooth"
    });

}


// Contact Button
function contactUs() {

    alert("Thank you for contacting Sweet Cake! 😊");

}


// Select Product
function selectProduct(productName) {

    document.getElementById("cake").value = productName;

    document.getElementById("order").scrollIntoView({
        behavior: "smooth"
    });

}


// Place Order
document.getElementById("orderForm").addEventListener("submit", function (event) {

    event.preventDefault();

    // Get customer details
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    // Get order details
    let product = document.getElementById("cake").value;
    let quantity = document.getElementById("quantity").value;


    // Create order
    let order = {

        name: name,
        mobile: mobile,
        address: address,
        product: product,
        quantity: quantity,
        date: new Date().toLocaleString()

    };


    // Get existing orders
    let orders =
        JSON.parse(localStorage.getItem("sweetCakeOrders")) || [];


    // Add new order
    orders.push(order);


    // Save orders
    localStorage.setItem(
        "sweetCakeOrders",
        JSON.stringify(orders)
    );


    // Success message
    alert(
        "Order Placed Successfully! 🎉\n\n" +
        "Name: " + name +
        "\nMobile: " + mobile +
        "\nAddress: " + address +
        "\nProduct: " + product +
        "\nQuantity: " + quantity
    );


    // Clear form
    document.getElementById("orderForm").reset();

});