






// listSorting.addEventListener('change', () => {
//     if (listSorting.value === 'Максимальная цена') {
//         arrObg.sort((a, b) =>  b.price - a.price);
//     }
//     if (listSorting.value === 'Минимальная цена') {
//         arrObg.sort((a, b) =>   a.price - b.price);        
//     }
//     if (listSorting.value === 'По умолчанию') {
//         cards.innerHTML = ''
//         renderDom(arrDefault); 
//         return
//     }
//     cards.innerHTML = ''
//     renderDom(arrObg);
// })

document.querySelectorAll('.form input').forEach(el => {
    el.addEventListener('input', () => {
        if(el.id === 'nameProd') {
            el.value = el.value.slice(0, 17);                
        }
        if(el.id === 'descriptionProd') {       
            el.value = el.value.slice(0, 123);  
        }
        if(el.id === 'numberProd') {
            if (el.value.match(/[0-9]/)) {
                if(el.value.length === 2) {
                    el.value += ' '
                }
                el.value = el.value.slice(0, 8);  
            } else {
                el.value = el.value.slice(0, 0); 
            }
        }
    })
})






// const arrObg = [
//     {
//         img: 'images/bg/img2.jpeg',
//         alt: 'Стиральная машина',
//         title: 'Стиральная машина',
//         header: 'Стиральная машина',
//         subtitle: 'Установка для стирки текстильных изделий (одежды, нижнего и постельного белья, сумок и других вещей), а также иногда обуви.',
//         price: `${80000} руб`
//     },
//     {
//         img: 'images/bg/img4.jpeg',
//         alt: 'Обогреватель',
//         title: 'Обогреватель',
//         header: 'Обогреватель',
//         subtitle: 'Отопительный прибор, нагревающий поток воздуха, продуваемого через нагревательный элемент, при помощи встроенного вентилятора.',
//         price: `${15000} руб`
//     },
//     {
//         img: 'images/bg/img3.jpeg',
//         alt: 'Пылесос',
//         title: 'Пылесос',
//         header: 'Пылесос',
//         subtitle: 'Машина для уборки пыли и загрязнений с поверхностей за счёт всасывания потоком воздуха.',
//         price: `${30000} руб`
//     },
//     {
//         img: 'images/bg/img1.jpeg',
//         alt: 'холодильник',
//         title: 'холодильник',
//         header: 'Холодильник',
//         subtitle: 'Устройство, поддерживающее низкую температуру в теплоизолированной камере.',
//         price: `${120000} руб`
//     },
// ]
// const arrDefault = [...arrObg];

// const cards = document.querySelector('.cards')
// const fragment = document.createDocumentFragment();
// function renderDom(arr) {
//     arr.forEach((el) => {
//         const div = document.createElement('div');
//         const img = document.createElement('img');
//         img.setAttribute('src', el.img);
//         img.setAttribute('alt', el.alt);
//         img.setAttribute('title', el.title);
//         const childSection = document.createElement('div');
//         const HThree = document.createElement('h3');
//         HThree.textContent = el.header;
//         const subtitle = document.createElement('p');
//         subtitle.textContent = el.subtitle;
//         const price = document.createElement('p');
//         price.setAttribute('class', 'price');
//         price.textContent = el.price;
    
    
    
//         childSection.appendChild(HThree);
//         childSection.appendChild(subtitle);
//         childSection.appendChild(price);
    
    
//         div.appendChild(img);
//         div.appendChild(childSection);
    
    
//         fragment.appendChild(div);
    
//         cards.appendChild(fragment);
//     })
// }
// renderDom(arrObg);
// const listSorting = document.getElementById('price-category');

// listSorting.addEventListener('change', () => {
//     if (listSorting.value === 'Максимальная цена') {
//         arrObg.sort((a, b) =>  b.price - a.price);
//     }
//     if (listSorting.value === 'Минимальная цена') {
//         arrObg.sort((a, b) =>   a.price - b.price);        
//     }
//     if (listSorting.value === 'По умолчанию') {
//         cards.innerHTML = ''
//         renderDom(arrDefault); 
//         return
//     }
//     cards.innerHTML = ''
//     renderDom(arrObg);
// })

// document.querySelectorAll('.form input').forEach(el => {
//     el.addEventListener('input', () => {
//         if(el.id === 'nameProd') {
//             el.value = el.value.slice(0, 17);                
//         }
//         if(el.id === 'descriptionProd') {       
//             el.value = el.value.slice(0, 123);  
//         }
//         if(el.id === 'numberProd') {
//             if (el.value.match(/[0-9]/)) {
//                 if(el.value.length === 2) {
//                     el.value += ' '
//                 }
//                 el.value = el.value.slice(0, 8);  
//             } else {
//                 el.value = el.value.slice(0, 0); 
//             }
//         }
//     })
// })

// const inputsData = document.querySelectorAll('.form input');

// inputsData.forEach(el => {
//     el.addEventListener('input', () => {
//         if(el.id === 'nameProd') {
//             el.value = el.value.slice(0, 17);                
//         }
//         if(el.id === 'descriptionProd') {       
//             el.value = el.value.slice(0, 123);  
//         }
//         if(el.id === 'numberProd') {
//             if (el.value.match(/[0-9]/)) {
//                 if(el.value.length === 2) {
//                     el.value += ' '
//                 }
//                 el.value = el.value.slice(0, 8);  
//             } else {
//                 el.value = el.value.slice(0, 0); 
//             }
//         }
//     })
// })

// document.getElementById('nameProd').addEventListener('input', () => {
//     if ( document.getElementById('nameProd').value.length === 10 ) {
//         console.log('object');
//     }
// })


// document.querySelector('.form').addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     [...inputsData].reduce((acc, curr, i) => {
//         console.log(i);
//         acc[curr.dataset.fieldName] = curr.value
//         // console.log(acc);
        
//     } , {})
    
    // cards.innerHTML = ''
    // arrObg.push(newObj);
    // renderDom(arrObg);
// });



// !document.get_by.cost.value.match(/[0-9]/)

// document.getElementById('nameProd').addEventListener('input', () => {
//     if ( document.getElementById('nameProd').value.length === 10 ) {
//         console.log('object');
//     }
// })

// document.querySelector('.form').addEventListener('submit', (e) => {
//     e.preventDefault();
    
// });











// const arrDefault = [...arrObg];

// const cards = document.querySelector('.cards')
// const fragment = document.createDocumentFragment();
// function renderDom(arr) {
//     arr.forEach((el) => {
//         const div = document.createElement('div');
//         const img = document.createElement('img');
//         img.setAttribute('src', el.img);
//         img.setAttribute('alt', el.alt);
//         img.setAttribute('title', el.title);
//         const childSection = document.createElement('div');
//         const HThree = document.createElement('h3');
//         HThree.textContent = el.header;
//         const subtitle = document.createElement('p');
//         subtitle.textContent = el.subtitle;
//         const price = document.createElement('p');
//         price.setAttribute('class', 'price');
//         price.textContent = el.price;
    
    
    
//         childSection.appendChild(HThree);
//         childSection.appendChild(subtitle);
//         childSection.appendChild(price);
    
    
//         div.appendChild(img);
//         div.appendChild(childSection);
    
    
//         fragment.appendChild(div);
    
//         cards.appendChild(fragment);
//     })
// }
// renderDom(arrObg);
// const listSorting = document.getElementById('price-category');

// listSorting.addEventListener('change', () => {
//     if (listSorting.value === 'Максимальная цена') {
//         arrObg.sort((a, b) =>  b.price - a.price);
//     }
//     if (listSorting.value === 'Минимальная цена') {
//         arrObg.sort((a, b) =>   a.price - b.price);        
//     }
//     if (listSorting.value === 'По умолчанию') {
//         cards.innerHTML = ''
//         renderDom(arrDefault); 
//         return
//     }
//     cards.innerHTML = ''
//     renderDom(arrObg);
// })

// document.querySelectorAll('.form input').forEach(el => {
//     el.addEventListener('input', () => {
//         if(el.id === 'nameProd') {
//             el.value = el.value.slice(0, 17);                
//         }
//         if(el.id === 'descriptionProd') {       
//             el.value = el.value.slice(0, 123);  
//         }
//         if(el.id === 'numberProd') {
//             if (el.value.match(/[0-9]/)) {
//                 if(el.value.length === 2) {
//                     el.value += ' '
//                 }
//                 el.value = el.value.slice(0, 8);  
//             } else {
//                 el.value = el.value.slice(0, 0); 
//             }
//         }
//     })
// })

// const inputsData = document.querySelectorAll('.form input');

// inputsData.forEach(el => {
//     el.addEventListener('input', () => {
//         if(el.id === 'nameProd') {
//             el.value = el.value.slice(0, 17);                
//         }
//         if(el.id === 'descriptionProd') {       
//             el.value = el.value.slice(0, 123);  
//         }
//         if(el.id === 'numberProd') {
//             if (el.value.match(/[0-9]/)) {
//                 if(el.value.length === 2) {
//                     el.value += ' '
//                 }
//                 el.value = el.value.slice(0, 8);  
//             } else {
//                 el.value = el.value.slice(0, 0); 
//             }
//         }
//     })
// })

// document.getElementById('nameProd').addEventListener('input', () => {
//     if ( document.getElementById('nameProd').value.length === 10 ) {
//         console.log('object');
//     }
// })


// document.querySelector('.form').addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     [...inputsData].reduce((acc, curr, i) => {
//         console.log(i);
//         acc[curr.dataset.fieldName] = curr.value
//         // console.log(acc);
        
//     } , {})
    
    // cards.innerHTML = ''
    // arrObg.push(newObj);
    // renderDom(arrObg);
// });