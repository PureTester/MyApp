import React, { FC, useState } from "react";

type Props = {
  item: string;
  index: number;
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
};

const Task: FC<Props> = ({ index, item, setTasks }) => {
  const [editMode, setEditMod] = useState(false);
  const [Task, setEditedTask] = useState(item);
  return (
    <li
      className="flex justify-between items-center p-2 bg-[#ebebeb] text-[#111111] rounded h-[42px]  mb-[4px] "
      data-id="toDoListElement"
    >
      {editMode && (
        <div>
          <input
            data-id="editTaskInput"
            placeholder="Введите задачу"
            maxLength={50}
            value={Task}
            onChange={(e) => setEditedTask(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? setEditMod(false) : 0)}
            type="text"
            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>
      )}
      {!editMode && <div>{Task}</div>}
      <div className="flex gap-2">
        <button
          data-id={`${Task}-deleteTaskBtn`}
          className="whitespace-nowrap px-4 py-2 bg-[#e74c3c] text-[#ecf0f1] rounded  hover:bg-[#c0392b]"
          type="button"
          onClick={() => setTasks((prev) => prev.filter((_, i) => i !== index))}
        >
          Удалить
        </button>
        <button
          data-id="editTaskBtn"
          type="button"
          onClick={() => setEditMod(!editMode)}
          className="whitespace-nowrap px-4 py-2 bg-[#3498db] text-[#ecf0f1]  rounded hover:bg-[#2980b9]"
        >
          Редактировать
        </button>
      </div>
    </li>
  );
};

export default Task;
