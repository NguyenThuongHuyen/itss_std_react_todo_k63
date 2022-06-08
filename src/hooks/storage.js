import { useState, useEffect } from 'react';

/* 
  【Storageフック】
　・TodoをlocalStorageを使って保存する
　・以下機能をサポートする
　  - localstrageに保存されているすべてのTodoの読み出し機能
　  - Todoをlocalstrageに保存する
　  - localstrageにあるTodoを削除する
*/

const STORAGE_KEY = 'itss-todo';

function useStorage() {
  const [items, setItems] = useState([]);
　
　/* 副作用を使う */
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('items')) || [];
    setItems([...todos]);
  }, []);

  const putItems = items => {
    let todos = [...items];
    todos.push(items);
    
    setItems([...todos]);
    
    localStorage.setItem('items', JSON.stringify(todos));
  };

  const clearItems = () => {
    setItems([]);
    localStorage.removeItem('todos');
  };

  return [items, putItems, clearItems];
}

export default useStorage;