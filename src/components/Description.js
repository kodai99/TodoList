import React from 'react'
import { Link } from 'react-router-dom';

export const Description = () => {
  return (
    <div className="description" >
      <header>
        <Link className="toHome" to="/" ><h2>Todo List に戻る</h2></Link>
      </header>
      <div className="description1">
        <h2>タスクを入力して追加しましょう</h2>
        <h3>それだけのシンプルなTodoListです</h3>
        <h2>追加後もクリックして編集できます</h2>
      </div>
      <div className="description2">
        <h2>ボタン説明</h2>
        <h3><i class="fas fa-check fa-lg"></i> ： タスク完了/未完了</h3>
        <h3><i class="fas fa-share fa-lg"></i> ： タスクの編集送信</h3>
        <h3><i class="fas fa-trash-alt fa-lg"></i> ： タスクの削除</h3>
      </div>
    </div>
  )
}