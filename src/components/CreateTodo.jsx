import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function CreateTodo() {
  return (
    <>
      <div className="flex gap-2 mb-2">
        <input
          id="todo-input"
          type="text"
          className="flex-grow bg-gray-100 rounded-xl p-2"
        />
        <button
          id="create-btn"
          type="button"
          className="bg-blue-100 rounded-xl p-2 w-20"
        >
          <FontAwesomeIcon icon={faPlus} className="text-blue-500" />
        </button>
      </div>
    </>
  );
}
