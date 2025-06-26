const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/escola";

async function run() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        const dbo = client.db("escola");
        await dbo.createCollection("alunos");
        console.log("Coleção de alunos criada com sucesso!");
    } catch (err) {
        console.error("Erro ao criar coleção:", err);
    } finally {
        await client.close();
    }
}

run();
