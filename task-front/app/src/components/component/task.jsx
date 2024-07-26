"use client"

import { useState, useEffect } from "react"
import { fetchTasks, addTask, updateTask, deleteTask, fetchShoppingItems, addShoppingItem, updateShoppingItem, deleteShoppingItem } from '../../lib/apiService';

export function Task() {
  const [tasks, setTasks] = useState([]);
  const [shoppingItems, setShoppingItems] = useState([]);
  const [activeTab, setActiveTab] = useState("tasks");

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };
    const loadShoppingItems = async () => {
      try {
        const data = await fetchShoppingItems();
        setShoppingItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadTasks();
    loadShoppingItems();
  }, []);

  const handleAddTask = async (title) => {
    try {
      const newTask = await addTask(title);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddShoppingItem = async (name) => {
    try {
      const newItem = await addShoppingItem(name);
      setShoppingItems([...shoppingItems, newItem]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleTaskCompletion = async (id) => {
    const task = tasks.find((task) => task.id === id);
    try {
      const updatedTask = await updateTask(id, { ...task, completed: !task.completed });
      setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleItemBought = async (id) => {
    const item = shoppingItems.find((item) => item.id === id);
    try {
      const updatedItem = await updateShoppingItem(id, { ...item, bought: !item.bought });
      setShoppingItems(shoppingItems.map((item) => (item.id === id ? updatedItem : item)));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteShoppingItem = async (id) => {
    try {
      await deleteShoppingItem(id);
      setShoppingItems(shoppingItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Task Manager</div>
          <div className="flex space-x-4">
            <button
              className={`hover:bg-primary-hover hover:text-primary-foreground-hover px-4 py-2 rounded-md transition-colors ${
                activeTab === "tasks" ? "bg-primary-hover text-primary-foreground-hover" : ""
              }`}
              onClick={() => setActiveTab("tasks")}
            >
              Tasks
            </button>
            <button
              className={`hover:bg-primary-hover hover:text-primary-foreground-hover px-4 py-2 rounded-md transition-colors ${
                activeTab === "shopping" ? "bg-primary-hover text-primary-foreground-hover" : ""
              }`}
              onClick={() => setActiveTab("shopping")}
            >
              Shopping
            </button>
          </div>
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto">
        {activeTab === "tasks" && (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Tasks</h2>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white rounded-md shadow-md p-4 flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleTaskCompletion(task.id)}
                      className="w-5 h-5 text-primary rounded"
                    />
                    <span
                      className={`text-lg ${task.completed ? "line-through text-gray-500" : ""}`}
                    >
                      {task.title}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add a new task"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleAddTask(e.target.value);
                    e.target.value = "";
                  }
                }}
                className="w-full bg-white rounded-md shadow-md p-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        )}
        {activeTab === "shopping" && (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Shopping</h2>
            <div className="space-y-4">
              {shoppingItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-md shadow-md p-4 flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={item.bought}
                      onChange={() => handleToggleItemBought(item.id)}
                      className="w-5 h-5 text-primary rounded"
                    />
                    <span className={`text-lg ${item.bought ? "line-through text-gray-500" : ""}`}>
                      {item.name}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDeleteShoppingItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add a new item"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleAddShoppingItem(e.target.value);
                    e.target.value = "";
                  }
                }}
                className="w-full bg-white rounded-md shadow-md p-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
