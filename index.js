// const selectedById = document.querySelector('#menu');
// selectedById.style.textTransform = 'uppercase';
// selectedById.style.fontSize = '4rem';
// console.log(selectedById); // ...

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName); // ...


// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass); // ...


// // const firstMenuItem = document.querySelector(".menu-item");
// // firstMenuItem.style.color = '#BF4E30';
// // console.log(firstMenuItem); // ...
// =================================================================
//===================================================
// const text = document.getElementById("text");
// text.hidden = true; // текст стал невидимым

// // //===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// // //===================================================
// const link = document.querySelector(".active");
// console.log(link.href); // https://s.codepen.io/about

// // //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';
// =================================================================
// const text = document.querySelector(".article-text");
// console.log(text.textContent); // текстовый контент внутри p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = 'Welcome to Bahamas!';
// =================================================================
// const elem = document.querySelector("#paragraph");

// console.log(elem.classList); // ["text", "red", "big", value: "text red big"]

// console.log(elem.classList.contains("purple")); // false

// elem.classList.remove("big");
// console.log(elem.classList); // ["text", "red", value: "text red"]

// elem.classList.add("pistol");
// console.log(elem.classList); // ["text", "red", "pistol", value: "text red pistol"]

// // можно добавлять множественные классы
// elem.classList.add("a", "b", "c");
// console.log(elem.classList);

// elem.classList.toggle("hidden"); // спрячется, добавился класс hidden
// elem.classList.toggle("hidden"); // покажется, удалили класс hidden

// // classList – это псевдо-массив, в прототипе которого есть метод forEach,
// // поэтому можно перебрать классы в цикле
// elem.classList.forEach(cls => {
//     console.log(cls); // text, red, new-class
// });
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const image = document.querySelector(".image");

// console.log(image.attributes); // обьект всех аттрибутов елемента 
// // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // lake and clouds

// image.setAttribute("alt", "amazing lake and clouds");

// console.log(image.getAttribute("alt")); // amazing lake and clouds
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// // Для получения значения data-атрибута используется
// // свойство dataset, после коготого идет свойство
// // data-action это action, data=close это close
// // то есть data- отбрасывается, а остальное имя записывается
// // как ключ объекта
// const saveBtnAction = saveBtn.dataset.action;
// console.log(saveBtnAction); //save

// const closeBtnAction = closeBtn.dataset.action;
// console.log(closeBtnAction); //close
// ================================================================================
// const heading = document.createElement('h1');
// console.log(heading); // <h1></h1>

// heading.textContent = 'This is a heading';
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement('img');
// image.setAttribute('src', 'https://placeimg.com/640/480/nature');
// image.setAttribute('alt', 'nature');

// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="nature">
// ====================================================================================
// Создадим еще один li и вставим его в конец списка
// const item = document.createElement("a");
// item.href = "#";
// item.classList.add("btn");
// item.textContent = "item 4";

// const nav = document.querySelector(".nav");
// nav.appendChild(item);

// // Создадим заголовок и вставим его в container перед списком
// const heading = document.createElement("h1");
// heading.textContent = "Nav heading";

// const container = document.querySelector(".container");
// container.insertBefore(heading, nav);
// -----------------------------------------------------------------------------------
// Методы append/prepend, before/after, replaceWith

// const list = document.querySelector(".list");
// // Добавлем элемент в конец списка
// const item = document.createElement('li')
// item.textContent = 'Blunt'
// list.prepend(item)
//     // // Добавляем элемент в начало списка
// const clone = item.cloneNode(true);
// clone.textContent = "Ajax";
// list.prepend(clone);

// // Добавляет заголовок перед списком
// const title = document.createElement('h2')
// title.textContent = 'список псевдонимов'
// list.before(title)
//     // Добавляет абзац после списка
// const text = document.createElement("p");
// text.textContent =
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);
// ------------------------------------------------------------------------------------
// // Удаление.Первый, более старый метод, работающий во всех браузерах, 
// // позволяет удалить ребенка elem из родителя parent.
// // В таком случае необходимо иметь ссылку как на родителя, так и на ребенка.
// const article = document.querySelector('.article');
// const text = article.querySelector('.text')
// article.removeChild(text)
//     // Более современный метод, но с гарантированной поддержкой только в новых браузерах,
//     // он вызывается на самом элементе elem, который необходимо удалить.
// const link = article.querySelector('.link')
// link.remove()
// =====================================================================================
const parent = document.querySelector('.parent');
const article = document.querySelector('.article');

// Создает точную глубокую копию всей статьи
const clone = article.cloneNode(true);
clone.classList.add('blue-text');
parent.appendChild(clone);