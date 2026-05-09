if(localStorage.getItem("loggedIn") !== "true"){

    if(
        !window.location.pathname.includes("login.html") &&
        !window.location.pathname.includes("signup.html")
    ){

        window.location.href = "login.html";
    }
}


const books = [

    {
        id:1,

        title:"Java Programming",

        price:599,

        image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80"
    },

    {
        id:2,

        title:"Spring Boot Guide",

        price:799,

        image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
    },

    {
        id:3,

        title:"JavaScript Mastery",

        price:699,

        image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    },

    {
        id:4,

        title:"React Development",

        price:899,

        image:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80"
    }
];

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const booksContainer =
document.getElementById("booksContainer");

const cartItems =
document.getElementById("cartItems");

const totalPrice =
document.getElementById("totalPrice");

const searchInput =
document.getElementById("searchInput");

function displayBooks(bookList){

    if(!booksContainer) return;

    booksContainer.innerHTML = "";

    bookList.forEach(book => {

        booksContainer.innerHTML += `

        <div class="book-card">

            <img src="${book.image}"
            alt="Book">

            <div class="book-content">

                <h3>
                    ${book.title}
                </h3>

                <p class="price">
                    ₹${book.price}
                </p>

                <button onclick="addToCart(${book.id})">

                    Add To Cart

                </button>

            </div>

        </div>
        `;
    });
}

displayBooks(books);

function addToCart(id){

    const selectedBook =
    books.find(book => book.id === id);

    cart.push(selectedBook);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();

    alert("Book Added To Cart 🛒");
}

function updateCart(){

    if(!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    if(cart.length === 0){

        cartItems.innerHTML = `

        <p class="empty-cart">

            Your cart is empty 🛒

        </p>
        `;

        totalPrice.innerText = 0;

        return;
    }

    cart.forEach((item,index)=>{

        total += item.price;

        cartItems.innerHTML += `

        <div class="cart-item">

            <div class="cart-left">

                <img src="${item.image}"
                alt="Book">

                <div>

                    <h4>${item.title}</h4>

                    <p>₹${item.price}</p>

                </div>

            </div>

            <button class="remove-btn"
            onclick="removeFromCart(${index})">

                Remove

            </button>

        </div>
        `;
    });

    totalPrice.innerText = total;
}

function removeFromCart(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();
}

function goToCheckout(){

    const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){

        alert("Your cart is empty 🛒");

        return;
    }

    window.location.href = "checkout.html";
}

function logout(){

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";
}

if(searchInput){

    searchInput.addEventListener("keyup",()=>{

        const filteredBooks = books.filter(book =>

            book.title.toLowerCase().includes(

                searchInput.value.toLowerCase()
            )
        );

        displayBooks(filteredBooks);
    });
}

updateCart();