const fs = require("fs");

const fileName = "products.json";

const getProductM = (id) => {
    const data = fs.readFileSync(fileName, "utf-8");
    const products = JSON.parse(data);

    for(let i = 0; i < products.length; i++)
    {
        if(products[i].id == id)
            return products[i];         
    }
}

const getProductsM = () => {
    const data = fs.readFileSync(fileName, "utf-8");
    const products = JSON.parse(data);

    return products;
}

const putProductM = (product) => {
    const data = fs.readFileSync(fileName, "utf-8");
    const products = JSON.parse(data);
    products.push(product);
    data = JSON.stringify(products);

    fs.writeFileSync(fileName, data);
}

const deleteProductM = (id) => {
    let data = fs.readFileSync(fileName, "utf-8");
    const products = JSON.parse(data);

    for(let i = 0; i < products.length; i++)
    {
        if(products[i].id == id)
        {
            products.splice(id, 1);
            break;
        }
    }
    data = JSON.stringify(products);
    fs.writeFileSync(fileName, data);

    return products;
}

module.exports = {getProductM, getProductsM, deleteProductM};