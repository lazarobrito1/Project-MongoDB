const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

async function run() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        const dbo = client.db("escola");
        const alunos = dbo.collection("alunos");

        const novosAlunos = [
            { nome: "Lucas", idade: 21, curso: "Matemática" },
            { nome: "Carla", idade: 22, curso: "História" },
            { nome: "Pedro", idade: 20, curso: "Física" }
        ];

        const resultado = await alunos.insertMany(novosAlunos);
        console.log(`${resultado.insertedCount} alunos inseridos com sucesso!`);
    } catch (err) {
        console.error("Erro ao inserir alunos:", err);
    } finally {
        await client.close();
    }
}

run();