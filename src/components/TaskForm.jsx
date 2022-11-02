import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto mb-10">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-300 p-10 mb-4 rounded-md"
      >
        <h1 className="font-bold text-2xl text-center mb-3">CREA TU TAREA</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-200 p-3 w-full mb-2 rounded-md"
        />
        <textarea
          placeholder="Descripcion de tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className="bg-slate-200 p-3 w-full mb-2 rounded-md"
        ></textarea>
        <button className="bg-green-600 rounded-md py-2 px-3 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
