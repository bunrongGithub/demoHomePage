const card_category = document.querySelector("#card-category");
const card_product = document.querySelector("#card-product");
const shophing_value_top = document.querySelector("#shophing_value_top");
async function fetchApiCategory() {
    try {
        const response = await fetch("http://localhost:3000/category");
        const resp = await response.json();
        resp.map((item) => {
            const { id, imgage, desc } = item;
            const card = `<div class="card d-flex align-items-center shadow-sm pt-4 col-xl-3 col-lg-3 col-md-4"
                style="width: 13rem; height: 16rem; background-color: transparent;">
                <img src="${imgage}" style="width:100px;" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title">${desc}</h6>
                </div>
            </div>`
            card_category.innerHTML += card;
        })
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function fetchApiProduct() {
    try {
        const response = await fetch("http://localhost:3000/products");
        const resp = await response.json();
        resp.forEach((item) => {
            const { id, title, desc, images, price, discount } = item;
            const cardProduct = `<div class="card col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 align-items-center shadow-sm pt-4"
                style="background-color: transparent;">
                <img src="${images}" style="width:100%;" class="card-img-top w-75" alt="...">
                <div class="card-body d-flex flex-row pb-5">
                    <div class="d-flex flex-column align-items-start pe-5">
                        <span class="text-align-start" style="font-size: 10px; color: gray;">${title}</span>
                        <div>
                            <h6 class="card-title">${desc}</h6>
                        </div>
                        <div class="d-flex flex-row align-items-center justify-content-center">
                            <span>${price}</span>
                            <del style="color: gray;">: ${discount}</del><br>
                        </div>
                        <span>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                        </span>
                    </div>
                    <div class="d-flex justify-content-center align-items-center position-relative"
                        style="width: 70px; height: 70px; background-color: gray; border-radius: 50%; cursor: pointer;">
                        <a class="parent position-relative" href="#">
                            <i class="fa fa-shopping-bag fs-5 text-white"></i>
                            <span class="badge badge-primary position-absolute top-0 start-100 translate-middle"
                                style="background-color: blue; display: none;">0</span>
                        </a>
                    </div>
                </div>
            </div>`;
            card_product.innerHTML += cardProduct;
        });

        const shopping_btns = document.querySelectorAll(".parent"); // Changed to class selector

        shopping_btns.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                event.preventDefault();
                const badge = btn.querySelector(".badge");
                let currentValue = parseInt(badge.textContent) || 0;
                badge.textContent = currentValue + 1;
                badge.style.display = 'inline-block';

                // Calculate total items in shopping cart
                const totalShopCard = Array.from(shopping_btns).reduce((acc, btn) => {
                    const badgeValue = parseInt(btn.querySelector(".badge").textContent) || 0;
                    return acc + badgeValue;
                }, 0);

                shophing_value_top.textContent = totalShopCard
            });
        });

    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchApiProduct();


fetchApiCategory();
