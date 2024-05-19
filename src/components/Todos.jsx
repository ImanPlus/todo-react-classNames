import Todo from "./Todo";

export default function Todos() {
  const todos = [
    { text: "test - 1", status: "todo" },
    { text: "test - 2", status: "todo" },
    { text: "test - 3", status: "done" },
  ];

  return (
    <>
      <div id="todos">
        {todos.map((todo) => (
          <Todo key={todo.text} text={todo.text} status={todo.status} />
        ))}
      </div>
    </>
  );
}
