const items = document.querySelector('.items');

//items.remove();

//items.firstElementChild.remove();
//items.lastElementChild.remove();

items.children[0].textContent = "Item Um";

items.lastElementChild.innerHTML = "<h1>Hello world!</h1>";