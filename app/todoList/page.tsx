"use client";

import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Task from "../components/Task";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };
  if (inputValue.match(/Найти девушку/gi)) {
    alert("Невыполнимая задача");
    setInputValue("");
  }
  return (
    <div className="w-full flex flex-col px-[144px]">
      <title>Задачи</title>
      <Sidebar />
      <div className="flex flex-col p-[40px] ml-[150px] w-[780px] space-y-2 border border-[#2c3e50] rounded-lg shadow-sm bg-[#505050e7] ">
        <h1 className="text-2xl font-bold">ToDoList</h1>
        <div className="flex flex-row">
          <input
            data-id="addTaskInput"
            placeholder="Введите задачу"
            maxLength={50}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? addTask() : 0)}
            className="w-full px-4 py-2 border border-[#2c3e50] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-[#3498db] transition-all"
          ></input>

          <button
            data-id="addTaskBtn"
            onClick={addTask}
            className="whitespace-nowrap px-4 py-2 bg-[#2ecc71] text-[#ecf0f1] rounded hover:bg-[#27ae60] mx-[8px] "
          >
            Добавить задачу
          </button>

          <button
            data-id="deleteAllTasksBtn"
            onClick={() => setTasks([])}
            className="whitespace-nowrap px-4 py-2 bg-[#e74c3c] text-[#ecf0f1] rounded hover:bg-[#c0392b]"
          >
            Удалить все задачи
          </button>
        </div>

        <h2 className="text-xl font-semibold mt-4 text-[#000000]">Задачи</h2>
        <ul
          className="space-y-2 overflow-y-auto max-h-[400px]"
          data-id="toDoList"
        >
          {tasks.map((item, index) => (
            <Task key={index} item={item} index={index} setTasks={setTasks} />
          ))}
        </ul>
      </div>
    </div>
  );
}
