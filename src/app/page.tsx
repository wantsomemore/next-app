import Image from "next/image";
import styles from "./page.module.css";
import { Todo } from "./todo";

export default async function Home() {
  const data = await fetch("https://dummyjson.com/todos").then((res) =>
    res.json()
  );
  return (
    <main className={styles.main}>
      <h1>Todos</h1>
      <div>
        {data.todos.map((todo: any) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </main>
  );
}
