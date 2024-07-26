// lib/apiService.js

// Funções para Task
export async function fetchTasks() {
    const response = await fetch('http://localhost:8080/api/tasks');
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    return response.json();
  }
  
  export async function addTask(title) {
    const response = await fetch('http://localhost:8080/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, completed: false }),
    });
    if (!response.ok) {
      throw new Error('Failed to add task');
    }
    return response.json();
  }
  
  export async function updateTask(id, taskDetails) {
    const response = await fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskDetails),
    });
    if (!response.ok) {
      throw new Error('Failed to update task');
    }
    return response.json();
  }
  
  export async function deleteTask(id) {
    const response = await fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  }
  
  // Funções para ShoppingItem
  export async function fetchShoppingItems() {
    const response = await fetch('http://localhost:8080/api/shopping');
    if (!response.ok) {
      throw new Error('Failed to fetch shopping items');
    }
    return response.json();
  }
  
  export async function addShoppingItem(name) {
    const response = await fetch('http://localhost:8080/api/shopping', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, bought: false }),
    });
    if (!response.ok) {
      throw new Error('Failed to add shopping item');
    }
    return response.json();
  }
  
  export async function updateShoppingItem(id, itemDetails) {
    const response = await fetch(`http://localhost:8080/api/shopping/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemDetails),
    });
    if (!response.ok) {
      throw new Error('Failed to update shopping item');
    }
    return response.json();
  }
  
  export async function deleteShoppingItem(id) {
    const response = await fetch(`http://localhost:8080/api/shopping/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete shopping item');
    }
  }
  