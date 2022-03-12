

const objectsFromDb = [
    {
        img: 'images/bg/img2.jpeg',
        alt: 'Стиральная машина',
        title: 'Стиральная машина',
        header: 'Стиральная машина',
        subtitle: 'Установка для стирки текстильных изделий (одежды, нижнего и постельного белья, сумок и других вещей), а также иногда обуви.',
        price: 87000,
        id: Date.now()+1
    },
    {
        img: 'images/bg/img4.jpeg',
        alt: 'Обогреватель',
        title: 'Обогреватель',
        header: 'Обогреватель',
        subtitle: 'Отопительный прибор, нагревающий поток воздуха, продуваемого через нагревательный элемент, при помощи встроенного вентилятора.',
        price: 54000,
        id: Date.now()+2
    },
    {
        img: 'images/bg/img3.jpeg',
        alt: 'Пылесос',
        title: 'Пылесос',
        header: 'Пылесос',
        subtitle: 'Машина для уборки пыли и загрязнений с поверхностей за счёт всасывания потоком воздуха.',
        price: 97000,
        id: Date.now()+3
    },
    {
        img: 'images/bg/img1.jpeg',
        alt: 'холодильник',
        title: 'холодильник',
        header: 'Холодильник',
        subtitle: 'Устройство, поддерживающее низкую температуру в теплоизолированной камере.',
        price: 38000,
        id: Date.now()+4
    },
]

const addKeyObjectsFromDb = objectsFromDb.reduce((acc, curr) => {
    acc[curr.id] = curr
    return acc
}, {})


const cardsContainer = document.querySelector('.cards');

const sortSelect = document.getElementById('price-category');

const inputsData = document.querySelectorAll('.form input, textarea');




let btnSubmitForm = document.querySelector('button');
function formValidation() {
    
    inputsData.forEach(input => {
        input.addEventListener('input', () => {
            if(input.value.length) {
                input.previousElementSibling.classList.remove('label')
            } else {
                input.previousElementSibling.classList.add('label');
            }              
            let fieldValidationResult = [... inputsData].every((a) => a.value);
            if(fieldValidationResult) {
                btnSubmitForm.classList.add('buttonStyleActive');            
            } 
        })
    })
}

formValidation()

const form = document.querySelector('.form');

cardsContainer.addEventListener('click', (e) => {
    const target = e.target;
    if(target.classList.contains('iconTrach')) {
        let domElId = Number(target.parentElement.parentElement.id);        
        Object.keys(addKeyObjectsFromDb).forEach(id => {            
            if(id == domElId) {
                delete addKeyObjectsFromDb[id]
            }
        });
        renderCards(addKeyObjectsFromDb);
    }
});


sortSelect.addEventListener('change', () => {
    cardsContainer.innerHTML = ''    
    let res;
    switch(sortSelect.value) {
        case 'Максимальная цена':  
            res = Object.values(addKeyObjectsFromDb).sort((a, b) => parseInt(b.price) - parseInt(a.price));                  
            break      
        case 'Минимальная цена':
            res = Object.values(addKeyObjectsFromDb).sort((a, b) =>  parseInt(a.price) - parseInt(b.price));
            break      
        case 'По умолчанию':
            res = Object.values(addKeyObjectsFromDb).sort((a, b) =>  a.id - b.id);
            break
    }
    renderCards(res);
});


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const res = [ ...inputsData ].reduce((acc, curr) => {
        acc[curr.dataset.fieldName] = curr.value;        
        return acc;
    } , { id: Date.now()});  
    //     
    console.log(res);
    addKeyObjectsFromDb[res.id] = res;
    renderCards(addKeyObjectsFromDb);    
    document.querySelector('.form').reset();

    btnSubmitForm.classList.remove('buttonStyleActive');
    inputsData.forEach(input => input.previousElementSibling.classList.add('label'));
});

renderCards(addKeyObjectsFromDb);


function renderCards(cardObjects) {
    cardsContainer.innerHTML = '';
    
    Object.values(cardObjects).forEach(({img, alt, id, title, subtitle, header, price}) => {
        
        const iconTrach = document.createElement('span');
        iconTrach.classList.add('iconTrach');
        const liTrash = document.createElement('a');
        liTrash.appendChild(iconTrach);


        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('item')
        wrapperDiv.setAttribute('id', id);

        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', img);
        imgEl.setAttribute('alt', alt);
        imgEl.setAttribute('title', title);
        const childSection = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.textContent = header;
        const subtitleElement = document.createElement('p');
        subtitleElement.textContent = subtitle;
        const priceEl = document.createElement('p');
        priceEl.classList.add('price');
        


        let str = String(price);
        let newStr = str.split("").reverse().map(( c, i ) =>  i % 3 === 0 ? c + ' ': c ).reverse().join("").trim()
        priceEl.textContent = newStr += ' руб';
    
        
        childSection.appendChild(h3);
        childSection.appendChild(subtitleElement);
        childSection.appendChild(priceEl);
    
        
        wrapperDiv.appendChild(liTrash)
        wrapperDiv.appendChild(imgEl);
        wrapperDiv.appendChild(childSection);
        
        cardsContainer.appendChild(wrapperDiv);
        
    })
}