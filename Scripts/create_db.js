require('dotenv').config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URI;

async function run() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        const dbo = client.db("escola");

        const collections = await dbo.listCollections({ name: "alunos" }).toArray();
        if (collections.length === 0) {
            await dbo.createCollection("alunos");
            console.log("Coleção de alunos criada com sucesso!");
        } else {
            console.log("Coleção de alunos já existe.");
        }

    } catch (err) {
        console.error("Erro:", err);
    } finally {
        await client.close();
    }
}

run();
