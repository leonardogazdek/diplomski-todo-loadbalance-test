import { Api } from "api-client/Api";

const apiClient = new Api();

async function saljiZahtjeve() {
  const noviTodo = (
    await apiClient.api.createTodo(
      {
        content: "Testna stavka",
        dueDate: new Date().toISOString(),
      },
      { format: "json" }
    )
  ).data;

  await apiClient.api.deleteTodo(noviTodo.id);
}

for (let i = 0; i < 100; i++) {
  saljiZahtjeve();
}
