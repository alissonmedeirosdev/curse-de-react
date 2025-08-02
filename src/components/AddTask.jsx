export function AddTask() {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-white"
        placeholder="Digite o nome da tarefa"
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-white"
      />
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium ">
        Adicionar
      </button>
    </div>
  );
}
