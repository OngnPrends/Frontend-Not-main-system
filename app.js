import express from 'express'
import { getProduct, getProducts, createProduct} from './database.js'

const app = express()
app.use(express.json())

app.get("/", (req,res) => {
    res.send("ONG n Prends - Store Sales and Inventory System")
})

app.get("/products", async(req, res) => {
    const products = await getProducts()
    res.send(products)
})

app.post('/products', async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const result = await createProduct(name, description, price, category);
        res.status(201).json({ success: true, message: 'Product created', data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to create product', error: error.message });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Server Failed!')
})

app.listen(8800, () => {
    console.log("Server running on port 8800")
})
