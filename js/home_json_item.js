fetch("item.json")
  .then((response) => response.json())
  .then((data) => {
    const dior_item = document.getElementById("dior_item");
    const soiber_item = document.getElementById("soiber_item");
    const shanel_item = document.getElementById("shannel_item");
    const cart_item = JSON.parse(localStorage.getItem("cart")) || [];

    data.forEach((product) => {
      if (product.old_price) {
        const isIncart = cart_item.some(
          (cartitem) => cartitem.id === product.id
        );

        const porcnt_100 = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );
        soiber_item.innerHTML += `
 <div class="swiper-slide product">
              <span class="sale_present">${porcnt_100}%</span>
              <div class="img_roduct">
                <a href="">
                  <img src="${product.img}" alt="" />
                </a>
              </div>
              <div class="stars">
                <img src="icon/icons8-star-16.png" alt="" />
                <img src="icon/icons8-star-16.png" alt="" />
                <img src="icon/icons8-star-16.png" alt="" />
                <img src="icon/icons8-star-16.png" alt="" />
                <img src="icon/icons8-star-16.png" alt="" />
              </div>
              <p class="name_product">
                <a href="">${product.name}</a>
              </p>
              <div class="price">
                <p><span>$${product.price}</span></p>
                <p class="old_price">$${product.old_price}</p>
              </div>
              <div class="icons">
                <span class="btn_add ${isIncart ? "active" : ""}" id_item="${
          product.id
        }" >
                  <img src="icon/icons8-shopping-cart-16.png" alt="" />
                   ${isIncart ? "ok" : "add to cart"}
                </span>
                <span class="icon_product">
                  <img src="icon/icons8-love-32.png" alt="" />
                </span>
              </div>
            </div>

            `;
      }
    });

    data.forEach((product) => {
      if (product.type == "shanel") {
        const isIncart = cart_item.some(
          (cartitem) => cartitem.id === product.id
        );
        shanel_item.innerHTML += `
 <div class="swiper-slide product">
             
              <div class="img_roduct">
                <a href="">
                  <img src="${product.img}" alt="" />
                </a>
              </div>
              <div class="stars">
                <img src="icon/icons8-star-16.png" alt="" />
                <img src="icon/icons8-star-16.png" alt="" />
                <img src="icon/icons8-star-16.png" alt="" />
                <img src="icon/icons8-star-16.png" alt="" />
                <img src="icon/icons8-star-16.png" alt="" />
              </div>
              <p class="name_product">
                <a href="">${product.name}</a>
              </p>
              <div class="price">
                <p><span>$${product.price}</span></p>
              
              </div>
              <div class="icons">
                <span class="btn_add ${isIncart ? "active" : ""}" id_item="${
          product.id
        }" >
                  <img src="icon/icons8-shopping-cart-16.png" alt="" />
                   ${isIncart ? "ok" : "add to cart"}
                </span>
                <span class="icon_product">
                  <img src="icon/icons8-love-32.png" alt="" />
                </span>
              </div>
            </div>

            `;
      }
    });

    data.forEach((product) => {
      if (product.type == "Dior") {
        const isIncart = cart_item.some(
          (cartitem) => cartitem.id === product.id
        );
        dior_item.innerHTML += `
 <div class="swiper-slide product">
            
              <div class="img_roduct">
                <a href="">
                  <img src="${product.img}" alt="" />
                </a>
              </div>
              <div class="stars">
                <img src="icon/icons8-star-16.png" alt="" />
                <img src="icon/icons8-star-16.png" alt="" />
                <img src="icon/icons8-star-16.png" alt="" />
                <img src="icon/icons8-star-16.png" alt="" />
                <img src="icon/icons8-star-16.png" alt="" />
              </div>
              <p class="name_product">
                <a href="">${product.name}</a>
              </p>
              <div class="price">
                <p><span>$${product.price}</span></p>
           
              </div>
              <div class="icons">
                <span class="btn_add ${isIncart ? "active" : ""}" id_item="${
          product.id
        }" >
                  <img src="icon/icons8-shopping-cart-16.png" alt="" />
                   ${isIncart ? "ok" : "add to cart"}
                </span>
                <span class="icon_product">
                  <img src="icon/icons8-love-32.png" alt="" />
                </span>
              </div>
            </div>

            `;
      }
    });
  });
