const sqlite = require('sqlite3').verbose();
const database = new sqlite.Database(':memory:');
const products = ["Картошка", "Масло", "Молоко", "Соль", "Колбаса", "Лавровый лист"];


database.serialize(() => {
    database.run("CREATE TABLE Products (name TEXT)");
    const stmt = database.prepare("INSERT INTO Products VALUES (?)");

    for (i in products) {
        stmt.run(products[i]);
    }

    stmt.finalize();

    database.each(
        "SELECT row_id AS id, name FROM Products",
        (err, row) => {
            console.log(row.id + ': ' + row.type);
        }
    );
});

database.close();