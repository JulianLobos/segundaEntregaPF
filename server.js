import express from 'express';
import productsRouter from './src/routes/productRoutes';
import cartRouter from './src/routes/cartRoutes';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/productos", productsRouter);
app.use("/api/carrito", cartRouter);
app.get('/', (req, res) => {
    res.sendFile("index", {root: __dirname})
})

app.all('*', (req, res) => {
    res.status(404).send('<h1> Error 404! Page not found.</h1>')
})

app.set('port', PORT)

const server = app.listen(PORT, () => {
    console.log(`Server listen port ${PORT}`);
})

server.on("Error", error => console.log(`Error: ${error}`));

