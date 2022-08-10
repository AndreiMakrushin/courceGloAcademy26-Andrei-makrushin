const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const adv = document.querySelector('.adv').remove();

//--------------------------------------------------------------------------------------------------------------------------------------

document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
//------------------------------------------------------------------------------------------------------------------------------------

book[0].before(book[1])
book[0].after(book[4])
book[4].after(book[3])
book[3].after(book[5])
//-----------------------------------------------------------------------------------------------------------------------------------

books[0].children[2].querySelector('a').text = 'Книга 3. this и Прототипы Объектов';
//-----------------------------------------------------------------------------------------------------------------------------------

let book2 = book[0].children[1]
book2.children[3].after(book2.children[6])
book2.children[4].after(book2.children[8])

let book5 = book[5].children[1]
book5.children[1].after(book5.children[9])
book5.children[2].after(book5.children[4])
book5.children[3].after(book5.children[5])

//----------------------------------------------------------------------------------------------------------------------------------------
book[2].children[1].insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>')
