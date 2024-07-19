const shopping_btn = document.querySelector("#shopping-btn");
const shopping_values = document.querySelector("#shopping-values");
const shophing_value_top = document.querySelector("#shophing_value_top");
shopping_values.value = 0;
shophing_value_top.value = 0;
shopping_btn.addEventListener("click", () => {
    shopping_values.value++;
    shophing_value_top.value++;
    shopping_values.textContent = shopping_values.value;
    shophing_value_top.textContent = shophing_value_top.value;
});
