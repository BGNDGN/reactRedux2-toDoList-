import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/TodoList.css'

const TodoList = () => {
  const list = useSelector((state) => state.list);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeFromList = (index) => {
    dispatch({ type: "REMOVE_TODO", payload: index });
    alert("Seçtiğiniz değer listeden kaldırıldı.");
    console.log("Seçtiğiniz değer listeden kaldırıldı.");
  };

  return (
    <div className='todoListMainDiv'>
      <div>
        <h3 className='TodoList' >Todo List</h3>
        <hr/>
        <ul>{list.map((item, index) => 
        (<li button className='todoListLi' key={index}>- {item} <button className='todoListMainDivButton' onClick={() => removeFromList(index)}>-</button>
        </li>))}
      </ul>
      </div>

      <div className='backToAddtoListPageDiv'>
        <button className='backToAddtoListPage' onClick={() => navigate('/')}>Add To List Sayfasına Geri Dön</button>
      </div>
    </div>
  );
};

export default TodoList;
