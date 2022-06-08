import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {onAdd} ) {

  const [text,setText] = useState('');
  const handleChange = (e) => {
    const {value} = e.target;
    setText(value);
  };
  const handleAdd = (e) => {
    if(text !== "" && e.keyCode === 13){
      onAdd(text);
      setText('');
    }
  };
  return (
    <div className="panel-block">
      <input
          className="input"
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleAdd}
      />
    </div>
  );
}

export default Input;
