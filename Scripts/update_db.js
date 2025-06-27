require('dotenv').config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URI;

async function run() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const dbo = client.db("escola");
    const alunos = dbo.collection("alunos");

    // Exemplo: Atualizar o curso do aluno "Lucas" para "Ciência da Computação"
    const filtro = { nome: "Carla" }; // filtro para achar o aluno
    const atualizacao = { $set: { curso: "Ciência da Computação" } }; // o que será atualizado

    const resultado = await alunos.updateOne(filtro, atualizacao);

    if (resultado.matchedCount > 0) {
      console.log(`Aluno atualizado com sucesso! ${resultado.modifiedCount} documento(s) modificado(s).`);
    } else {
      console.log("Nenhum aluno encontrado com esse nome.");
    }

  } catch (err) {
    console.error("Erro ao atualizar aluno:", err);
  } finally {
    await client.close();
  }
}

run();