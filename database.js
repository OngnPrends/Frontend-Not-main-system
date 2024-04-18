import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise()

export async function getProducts() {
    const [rows] = await pool.query("SELECT * FROM products;")
    return rows
}

export async function getProduct(id){
    const [rows] = await pool.query(`
    SELECT *
    FROM products
    WHERE product_id = ?
    `, [id])
    return rows[0]
}
export async function createProduct(name, description, price, category){
    const [result] = await pool.query(`
    INSERT INTO products (name, description, price, category)
    VALUES (?, ?, ?, ?)
    `, [req.body.name, 
        req.body.description, 
        req.body.price, 
        req.body.category])
    return data
}