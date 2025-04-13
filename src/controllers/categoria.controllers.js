import getConnection from "./../db/database.js";

const getCategorias = async (req, res) => {
    try{
        const connection = await getConnection();
        const [result] = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias")
        res.json(result);
    }catch (error) {
        console.error("ERROR 500:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const methodHTTP ={
    getCategorias
};