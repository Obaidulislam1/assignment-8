const addLocalStore = id =>{
    let shoppingCart = {};

    const dataStore = localStorage.getItem('Time-store');
    if(dataStore){
        shoppingCart = JSON.parse(dataStore);
    }

    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('Time-store', JSON.stringify(shoppingCart));
}
export default addLocalStore;
