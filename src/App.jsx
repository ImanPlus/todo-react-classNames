import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <main className="flex justify-center items-center bg-gray-200 min-h-screen">
        <div className="bg-white rounded-xl shadow p-4 w-1/2 min-w-80">
          <CreateTodo />
          <Todos />
        </div>
      </main>
    </>
  );
}

export default App;
