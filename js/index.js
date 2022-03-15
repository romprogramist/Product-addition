

const objectsFromDb = [
    {
        img: 'https://s0.rbk.ru/v6_top_pics/media/img/7/62/756371626959627.jpg',
        alt: 'Volkswagen',
        title: 'Volkswagen',
        header: 'Volkswagen',
        subtitle: 'Группа Volkswagen стала крупнейшим в мире производителем всех типов автомобилей в 2018 г',
        price: 187000,
        id: Date.now()+1
    },
    {
        img: 'https://s0.rbk.ru/v6_top_pics/media/img/7/11/756420591959117.jpg',
        alt: 'Bmw',
        title: 'Bmw',
        header: 'Bmw',
        subtitle: 'История BMW начиналась в баварском Мюнхене, где в 1913',
        price: 254000,
        id: Date.now()+2
    },
    {
        img: 'https://img.zr.ru/_ah/img/V3y1K75omY_e6jp2ewrOAA=s800',
        alt: 'ŠKODA',
        title: 'ŠKODA',
        header: 'ŠKODA',
        subtitle: 'Но ŠKODA входит в концерн Volkswagen. Концерн является одним из ведущих игроков на мировом рынке и главным европейским производителем.',
        price: 97000,
        id: Date.now()+3
    },
    {
        img: 'https://img.gazeta.ru/files3/779/14255779/performance.jpg.ximg.l_full_m-pic_32ratio_900x600-900x600-63838.jpg',
        alt: 'Nissan',
        title: 'Nissan',
        header: 'Nissan',
        subtitle: 'Ниссан принадлежит ряд автомобилестроительных предприятий в Японии, Великобритании, Соединённых Штатах Америки, Мексике, ЮАР и т. д.',
        price: 138000,
        id: Date.now()+4
    },
]

const addKeyObjectsFromDb = objectsFromDb.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}, {})


const cardsContainer = document.querySelector('.cards');

const sortSelect = document.getElementById('price-category');

const inputsData = document.querySelectorAll('#new-item input, textarea');




let btnSubmitForm = document.querySelector('#new-item button');


function formValidation() {
    inputsData.forEach(input => {
        input.addEventListener('input', () => {
            if(input.value.length) {
                input.previousElementSibling.classList.remove('red-label');
                input.classList.remove('general-class-inputs-red');
                input.nextElementSibling.textContent = ''                

            } else {
                input.previousElementSibling.classList.add('red-label');
                input.classList.add('general-class-inputs-red');
                input.nextElementSibling.textContent = 'Поле является обязательным'
            }              
            
            let fieldValidationResult = [... inputsData].every((a) => a.value);            
            if(fieldValidationResult) {
                btnSubmitForm.classList.add('buttonStyleActive');      

            }
        })
    })
}

formValidation()

const form = document.querySelector('#new-item');

cardsContainer.addEventListener('click', (e) => {
    const target = e.target;
    if(target.classList.contains('icon-trach')) {
        console.log(e.target);
        let domElId = Number(target.parentElement.id);        
        Object.keys(addKeyObjectsFromDb).forEach(id => {            
            if(id == domElId) {
                delete addKeyObjectsFromDb[id];
            }
        });
        renderCards(addKeyObjectsFromDb);
    }
});


sortSelect.addEventListener('change', () => {
    cardsContainer.innerHTML = '';
    let res;
    switch(sortSelect.value) {
        case 'Максимальная цена':  
            res = Object.values(addKeyObjectsFromDb).sort((a, b) => parseInt(b.price) - parseInt(a.price));                  
            break;
        case 'Минимальная цена':
            res = Object.values(addKeyObjectsFromDb).sort((a, b) =>  parseInt(a.price) - parseInt(b.price));
            break;
        case 'По умолчанию':
            res = Object.entries(addKeyObjectsFromDb).sort((a, b) => b[0] - a[0]).map(e => e[1])
            break;
    } 
    renderCards(res);
});


form.addEventListener('submit', (e) => {
    e.preventDefault();



    const res = [ ...inputsData ].reduce((acc, curr) => {
        acc[curr.dataset.fieldName] = curr.value;        
        return acc;
    } , { id: Date.now()});  
    addKeyObjectsFromDb[res.id] = res;
    
    renderCards(Object.entries(addKeyObjectsFromDb).sort((a, b) => b[0] - a[0]).map(e => e[1]));    

    document.querySelector('#new-item').reset();

    btnSubmitForm.classList.remove('buttonStyleActive');
    inputsData.forEach(input => input.previousElementSibling.classList.add('red-label'));
    
});

renderCards(addKeyObjectsFromDb);


function renderCards(cardObjects) {
    cardsContainer.innerHTML = '';
    
    Object.values(cardObjects).forEach(({img, alt, id, title, subtitle, header, price}) => {
        
        const iconTrach = document.createElement('span');
        iconTrach.classList.add('icon-trach');

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
        let newStr = str.split("").reverse().map(( c, i ) =>  i % 3 === 0 ? c + ' ': c ).reverse().join("").trim();
        priceEl.textContent = newStr += ' руб';
    
        
        childSection.appendChild(h3);
        childSection.appendChild(subtitleElement);
        childSection.appendChild(priceEl);
    
        
        wrapperDiv.appendChild(iconTrach);
        wrapperDiv.appendChild(imgEl);
        wrapperDiv.appendChild(childSection);
        
        cardsContainer.appendChild(wrapperDiv);
        
    })
}