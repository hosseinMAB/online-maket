let down_list = document.querySelector(".nav_category_links");
function open_list_category() {
  down_list.classList.toggle("active");
}

let cart_item_list = document.getElementById("carts_item");
function show_clos_cart_item() {
  cart_item_list.classList.toggle("active");
  console.log("hi");
  const cartCont = JSON.parse(localStorage.getItem("cart")) || [];
  const priceTotal = document.querySelector(".pricl_total");
  let priceitemtotal = 0;
  cartCont.forEach((item) => {
    priceitemtotal += item.price;
  });
  const itemcont = document.querySelector(".cont_item");
  itemcont.innerHTML = cartCont.length;
  priceTotal.innerHTML = priceitemtotal;
}

fetch("item.json")
  .then((response) => response.json())
  .then((data) => {
    let addtocartbutton = document.querySelectorAll(".btn_add");

    addtocartbutton.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productid = event.target.getAttribute("id_item");
        const selectedprodut = data.find((product) => product.id == productid);
        addToCart(selectedprodut);
        const allMatchbutton = document.querySelectorAll(
          `.btn_add[id_item="${productid}"]`
        );
        allMatchbutton.forEach((btn) => {
          btn.classList.add("active");
          btn.innerHTML = `   <img src="icon/icons8-shopping-cart-16.png" alt="" />
                  ok 
                </span>`;
        });
      });
    });
  });

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ ...product, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  apudateCart();
}

function apudateCart() {
  const cartItemadd = document.getElementById("item_cart");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const checkout = document.getElementById("checkout");
  cartItemadd.innerHTML = "";
  if (checkout) {
    checkout.innerHTML = "";
  }
  cart.forEach((item, index) => {
    cartItemadd.innerHTML += `
       <div class="cart_item">
        <img src="${item.img}" alt="">
        <div class="content">
          <h4>${item.name}</h4>
          <p class="price_item">$${item.price}</p>
          <div class="quantity_control">
            <button class="decrease" onclick="quantity_item_inct(${item.id})">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increase" onclick="quantity_item_blus(${item.id})">+</button>
            <button class="delet" ><img src="icon/icons8-delete-16.png"  id_item="${item.id}"></button>
          </div>
          </div>
            </div>
    `;

    if (checkout) {
      checkout.innerHTML += `
        <div class="item_cart">

                        <div class="image_name">
                            <img  src="${item.img}" alt="">
                        </div>

                        <div class="containt">

                            <h4>${item.name}</h4>
                            <p class="price_item">$${item.price}</p>


                            <div class="quantity_control">
                                <button class="decrease" onclick="quantity_item_inct(${item.id})">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="increase" onclick="quantity_item_blus(${item.id})">+</button>
                            </div>
                        </div>


                        <button class="delet_check"><img src="icon/icons8-delete-16.png" id_item="${item.id}"></button>
                    </div>
      `;
    }
    const delet_btn = document.querySelectorAll(".delet");
    const delet_check = document.querySelectorAll(".delet_check");
    delet_for_cart(delet_btn);
    delet_for_cart(delet_check);
  });

  const itemcont = document.querySelector(".cont_item_marcting");
  const cartcont = document.querySelector(".cont_item");
  const priceTotal = document.querySelector(".pricl_total");

  var contItem_var = 0;
  let priceitemtotal = 0;
  cart.forEach((item) => {
    priceitemtotal += item.price;
    contItem_var += item.quantity;
  });
  priceTotal.innerHTML = `$ ${priceitemtotal}`;
  itemcont.innerHTML = contItem_var;
  cartcont.innerHTML = contItem_var;
  if (checkout) {
    const suptotal = document.querySelector(".suptotal_check_out");
    const check_total = document.querySelector(".total_check");
    suptotal.innerHTML = ` $${priceitemtotal}`;
    check_total.innerHTML = ` $${priceitemtotal + 20}`;
  }
}

function delet_for_cart(deletButton) {
  deletButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id_item_delet = event.target.getAttribute("id_item");
      let item_storeg = JSON.parse(localStorage.getItem("cart")) || [];

      item_storeg = item_storeg.filter((item) => item.id !== id_item_delet);
      localStorage.setItem("cart", JSON.stringify(item_storeg));
      apudateCart();

      let addtocartbutton = document.querySelectorAll(".btn_add");
      addtocartbutton.forEach((btn) => {
        if (btn.getAttribute("id_item") == id_item_delet) {
          btn.classList.remove("active");
          btn.innerHTML = ` <img src="icon/icons8-shopping-cart-16.png" alt="" />
                  add to cart`;
        }
      });
    });
  });
}

function quantity_item_blus(btn_id) {
  fetch("item.json")
    .then((response) => response.json())
    .then((data) => {
      const selectedprodut = data.find((product) => product.id == btn_id);
      const pric_main = selectedprodut.price;
      let local_item = JSON.parse(localStorage.getItem("cart")) || [];
      local_item.forEach((item) => {
        if (item.id == btn_id) {
          item.quantity += 1;
          item.price += pric_main;
        }
      });
      localStorage.setItem("cart", JSON.stringify(local_item));
      apudateCart();
    });
}

function quantity_item_inct(btn_id) {
  fetch("item.json")
    .then((response) => response.json())
    .then((data) => {
      const selectedprodut = data.find((product) => product.id == btn_id);
      const pric_main = selectedprodut.price;
      let local_item = JSON.parse(localStorage.getItem("cart")) || [];
      local_item.forEach((item) => {
        if (item.id == btn_id) {
          if (item.quantity == 1) {
            item.quantity = 1;
          } else {
            item.quantity -= 1;
            item.price -= pric_main;
          }
        }
      });
      localStorage.setItem("cart", JSON.stringify(local_item));
      apudateCart();
    });
}
window.onload = () => {
  apudateCart();
};

/* media */
let menu_ul = document.querySelector(".ul_links");
function clos_menu() {
  menu_ul.classList.remove("active");
}
function open_menu() {
  menu_ul.classList.add("active");
}

function showp_item() {
  window.location.href = "CHECK.html";
}
function go_home() {
  window.location.href = "index.html";
}
