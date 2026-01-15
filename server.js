import app from "./src/app.js";

const port = 1209;

app.listen(port, () => {
    console.log(`Servidor corriendo en...`);
    console.log(`http://localhost:${port}`);
});