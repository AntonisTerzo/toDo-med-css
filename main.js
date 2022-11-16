const todoList = document.querySelector('ul');
let completedCount = 0;

document.querySelector('form').addEventListener('submit', ev =>{
    ev.preventDefault();

  const text = document.querySelector('input').value;
  if (text.length ==0) {
    document.querySelector('.error-msg').classList.add('visible');
    return;
  }
  else {
    document.querySelector('.error-msg').classList.remove('visible');
  }
  const item =document.createElement('li');
  item.classList.add('to-do__item');

  const itemText = document.createElement('span');
  itemText.innerText = text;
  item.append(itemText);

  itemText.addEventListener('click', () => {
    item.classList.toggle('completed');
    if(item.classList.contains('completed')) {
      completedCount++;
    }
    else {
      completedCount--;
    }
    document.querySelector('p').innerText = `${completedCount} completed`;
  })

  const removeButton = document.createElement('button');
  removeButton.innerText = '🗑';
  removeButton.classList.add('remove__button');
  item.append(removeButton);
  removeButton.addEventListener('click', () => {
    todoList.removeChild(item);
  })
  todoList.append(item);
  
})