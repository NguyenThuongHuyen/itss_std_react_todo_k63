import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  const handleCheckTodoItem = (i) => {
    const newItems = items.map((item) => {
        if(item.key === i.key)
            item.done = !item.done;
        return item;
    });
      putItems(newItems);
  };
  const handleAdd = (text) => {
      const newItem = {key: getKey(), text: text, done: false};
      putItems([...items,newItem]);
  };
  const [tab,setTab] = useState("すべて");
  const itemTab = () => {
      const tabItem = items.filter((item) => {
          if (tab === "すべて")
              return item;
          if (tab === "未完了" && !item.done) {
              return item;
          }
          if (tab === "完了済み" && item.done) {
              return item;
          }
      });
      return tabItem;
  };
  const handleChangeTab = (target) =>{
      setTab(target);
  };
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
        <Input onAdd={handleAdd}/>
        <Filter onClick={handleChangeTab}/>
      {itemTab().map(item => (
        <TodoItem item={item} key={item.key} onCheck={handleCheckTodoItem}/>
      ))}
      <div className="panel-block">
        {itemTab().length} items
      </div>
    </div>
  );
}

export default Todo;