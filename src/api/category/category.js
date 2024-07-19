const card_category = document.querySelector("#card-category");
const card_product = document.querySelector("#card-product");
async function fetchApiCategory() {
    try {
        const response = await fetch("http://localhost:3000/category");
        const resp = await response.json();
        resp.map((item) => {
            const { id, imgage, desc } = item; 
            const card =`<div class="card d-flex flex-column align-items-center shadow-sm pt-4"
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
async function fetchApiProduct(){
    
}
fetchApiCategory();
