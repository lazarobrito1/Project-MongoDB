require('dotenv').config(); 
const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URI;

async function run() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const dbo = client.db("escola");
    const alunos = dbo.collection("alunos");

    // Exemplo: deletar o aluno com nome "Pedro"
    const filtro = { nome: "Pedro" };

    const resultado = await alunos.deleteOne(filtro);

    if (resultado.deletedCount > 0) {
      console.log("Aluno deletado com sucesso!");
    } else {
      console.log("Nenhum aluno encontrado com esse nome.");
    }

  } catch (err) {
    console.error("Erro ao deletar aluno:", err);
  } finally {
    await client.close();
  }
}

run();