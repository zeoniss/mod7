// const targetBtnRef = document.querySelector('.js-target-btn')
// const addListenerBtnRef = document.querySelector('.js-add-listener')
// const removeListenerBtnRef = document.querySelector('.js-remove-listener')
// const doStuffOnRef = () => {
//     console.log('clicked to button!')
// }
// addListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.addEventListener('click', doStuffOnRef)
// })

// removeListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.removeEventListener('click', doStuffOnRef)
// })
// const formRef = document.querySelector('.js-register-form')
// formRef.addEventListener('submit', (event) => {
//         event.preventDefault()
//         const formRef = event.target
//         const formData = new FormData(formRef)
//         formData.forEach((value, key) => {
//             console.log('Value: ', value)
//             console.log('Key: ', key)
//         })
//     })
// -----------------------------------------------------------------------------------
// const inputRef = document.querySelector('.js-input')
// const nameLabelRef = document.querySelector('.js-button > span')
// const licenseRef = document.querySelector('.js-license')
// const btnRef = document.querySelector('.js-button')
// inputRef.addEventListener('focus', handleInputFocus)
// inputRef.addEventListener('blur', handleInputBlur)
// inputRef.addEventListener('input', handleInputChange)
// licenseRef.addEventListener('change', handleLicenseChange)

// function handleInputFocus(e) {
//     console.log('Получил фокус')
// }

// function handleInputBlur(e) {
//     console.log('Убрал фокус')
// }

// function handleInputChange(e) {
//     nameLabelRef.textContent = e.target.value
// }

// function handleLicenseChange(e) {
//     btnRef.disabled = !e.target.checked
// }
// ---------------Событие клавиатуры---------------------------------------------------
// const clearBtnRef = document.querySelector('.js-clear')
// const outputRef = document.querySelector('.js-output')
// window.addEventListener('keypress', onKeyPress)
// clearBtnRef.addEventListener('click', onClearOutput)

// function onKeyPress(e) {
//     outputRef.textContent += e.key
// }

// function onClearOutput(e) {
//     outputRef.textContent = ''

// ---------------------------Событие мыши--------------------------------------------
// const boxRef = document.querySelector(".js-box"); {
//     boxRef.addEventListener("mouseenter", e => {
//         console.log(e);
//     });
// }
// ----------------------------Колбэк-функция
// function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
// }

// //------------------------- Функция высшего порядка
// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// registerGuest('Манго', greet);
// ----------------------------------------------------------------------------------
const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName, makePizza, onOrderError) {
        if (!this.pizzas.includes(pizzaName)) {
            return onOrderError(
                `В ассортименте нет пиццы с названием ${pizzaName}.`
            );
        }
        return makePizza(`${pizzaName}`);
    },
};

// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
    return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);

// ----------------------------------------------------------------------------------
// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest('Манго', function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest('Поли', function notify(name) {
//     console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });
// -----------------------------------------------------------------------------------
// function findMatches(numbers, values) {
//     const matches = [] // Не изменяй эту строку
//     let valuesArray = new Array(values)

//     for (const number of numbers) {
//         if (valuesArray.includes(number)) {
//             matches.push(number)
//         }
//     }
//     // Пиши код выше этой строки
//     return matches
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2))
// const atTheOldToad = {
//     potions: [
//         { name: 'Зелье скорости', price: 460 },
//         { name: 'Дыхание дракона', price: 780 },
//         { name: 'Каменная кожа', price: 520 },
//     ],
//     // Пиши код ниже этой строки
//     getPotions() {
//         for (const potion of this.potions) {
//             return this.potions
//         }
//     },
//     addPotion(potionName) {
//         if (this.potions.includes(potionName)) {
//             return `Зелье ${potionName} уже есть в инвентаре!`
//         }

//         this.potions.push(potionName)
//     },
//     removePotion(potionName) {
//         for (let element of this.potions) {
//             if (element.name === potionName) {
//                 this.potions.splice(this.potions.indexOf(element), 1)
//             }
//         }
//     },
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName
//             }
//             return this.potions
//         }
//     },

//     // Пиши код выше этой строки
// }