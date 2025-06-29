// Данные для галереи (можно заменить на свои)
const galleryData = [
    {
        id: 1,
        imageUrl: 'images/photo1.jpg',
        title: 'Горный пейзаж',
        location: 'Альпы, Швейцария',
        description: 'Великолепный вид на заснеженные вершины Альп на рассвете. Фотография сделана во время экспедиции в июне 2022 года.'
    },
    {
        id: 2,
        imageUrl: 'images/photo2.jpg',
        title: 'Городские огни',
        location: 'Токио, Япония',
        description: 'Ночной вид на оживлённые улицы Токио. Контраст неоновых вывесок и традиционной японской архитектуры.'
    },
    {
        id: 3,
        imageUrl: 'images/photo3.jpg',
        title: 'Пустынный каньон',
        location: 'Аризона, США',
        description: 'Глубокий каньон, образованный тысячелетиями эрозии. Уникальные геологические образования и игра света на скалах.'
    },
    {
        id: 4,
        imageUrl: 'images/photo4.jpg',
        title: 'Тропический лес',
        location: 'Амазонка, Бразилия',
        description: 'Богатая экосистема амазонского тропического леса. Фотография сделана с высоты птичьего полёта.'
    },
    {
        id: 5,
        imageUrl: 'images/photo5.jpg',
        title: 'Северное сияние',
        location: 'Тромсё, Норвегия',
        description: 'Завораживающее северное сияние над фьордами. Снято с длительной экспозицией в ясную зимнюю ночь.'
    },
    {
        id: 6,
        imageUrl: 'images/photo6.jpg',
        title: 'Старый город',
        location: 'Прага, Чехия',
        description: 'Вид на исторический центр Праги с Карлова моста. Архитектура в стиле барокко и готики.'
    }
];

// Инициализация галереи
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.querySelector('.gallery-grid');

    // Заполняем галерею изображениями
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${item.imageUrl}" alt="${item.title}">`;
        galleryItem.addEventListener('click', () => openModal(item));
        galleryGrid.appendChild(galleryItem);
    });
});

// Работа с модальным окном
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const imageTitle = document.getElementById('imageTitle');
const imageLocation = document.getElementById('imageLocation');
const imageDescription = document.getElementById('imageDescription');
const closeBtn = document.querySelector('.close');

function openModal(item) {
    modal.style.display = 'block';
    modalImg.src = item.imageUrl;
    modalImg.alt = item.title;
    imageTitle.textContent = item.title;
    imageLocation.textContent = item.location;
    imageDescription.textContent = item.description;

    // Блокируем прокрутку страницы при открытом модальном окне
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Закрытие модального окна при нажатии Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});
