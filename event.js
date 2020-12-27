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
}
// ---------------------------Событие мыши--------------------------------------------
const boxRef = document.querySelector('.js-box')
{
    boxRef.addEventListener('mouseenter', (e)=>
    {console.log(e)})
}
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