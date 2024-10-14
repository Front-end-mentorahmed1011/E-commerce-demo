// بيئه العمل
var productsNames = document.querySelectorAll(".desc .pro-title")  
var productsPrices = document.querySelectorAll(".desc .price")
var btns = document.querySelectorAll(".desc .cart_adder")
var span = document.getElementById("items-number")
var closing = document.getElementById("close")
var cartItems = document.getElementById('cart-items')
var checkout = document.getElementById("checkout")
var cart = document.getElementById("cart")
var total_price = document.getElementById("total_price")
var overlay = document.getElementById("overlay")
var heading = document.getElementById("heading")
var productName ;
var productPrice ;
var counts = 0
var total = 0

// القسم اللوجيكال


btns.forEach(function (btn , position) {
    btn.onclick = function (){
        productName = productsNames[position].textContent
        productPrice = productsPrices[position].getAttribute("price")
        counts++
        total += +productPrice
        if (span != '') {
            span.style.display = 'inline'
            span.innerHTML = counts
        }
        cartItems.innerHTML += counts + "-" + " " + productName + " " + "||" + " Price: " + productPrice + "<br>"
        total_price.innerHTML = "total: " + total
        if(cartItems.innerHTML != ''){
            heading.innerHTML = 'Your cart ' + "( "  + counts + " )"
        }
    }
})

checkout.onclick = function(){
    var check = confirm("are you sure you want to pay " + total + " ?")
    if (check == true){
        alert("Payment successful")
        cartItems.innerHTML = '';
        heading.innerHTML = 'Your cart is empty';
        total = 0
        counts = 0
        span.style.display = 'none'
        total_price.innerHTML = "total: " + total
    } else {
        alert("Payment denied")
    }
}

cart.onclick = function (){
    overlay.style.display = 'flex'
}

closing.onclick = function(){
    overlay.style.display = 'none'
}
