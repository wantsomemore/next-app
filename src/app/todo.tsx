"use client";

import { useState } from "react";

export function Todo({ todo }: { todo: { todo: string; id: number } }) {
  const [is, setIs] = useState(false);
  return (
    <div>
      <h1 key={todo.id}>
        {todo.id}. {todo.todo}
      </h1>
      <p>State:{is.toString()}</p>
      <button onClick={() => setIs(!is)}>Set state</button>
    </div>
  );
}
