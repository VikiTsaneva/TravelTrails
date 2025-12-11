 // Координати на центъра на всеки град
 const cityCenters = {
    gabrovo: [42.873955, 25.318224], // Център на Габрово
    dryanovo: [42.978, 25.476],      // Център на Дряново
    tryavna: [42.867, 25.500],       // Център на Трявна
    sevliew: [43.027532519350615, 25.099032671820268] // Център на Севлиево
};

// Взимаме данните от localStorage
const routeData = JSON.parse(localStorage.getItem('routeData'));
const cityObjects = {
    gabrovo: {
        "racho-kovacha": { name: "Паметник на Рачо Ковача", coords: [42.873955, 25.318224], visitTime: 30 },
        "clock-tower": { name: "Габровка часовникова кула", coords: [42.873491, 25.319071], visitTime: 10 },
        "baev-bridge": { name: "Баев мост", coords: [42.871101, 25.318320], visitTime: 15 },
        "national-aprilov-school": { name: "Национална Априловска гимназия", coords: [42.870700, 25.316765], visitTime: 15 },
        "culture-house": { name: "Дом на културата „Емануил Манолов“", coords: [42.870507, 25.314941], visitTime: 40 },
        "puppet-theater": { name: "Държавен куклен театър", coords: [42.868730, 25.316126], visitTime: 60 },
        "art-gallery": { name: "Художествена галерия „Христо Цокев“", coords: [42.868341, 25.315745], visitTime: 60 },
        "drama-theater": { name: "Драматичен театър", coords: [42.872505, 25.316936], visitTime: 90 },
        "industry-museum": { name: "Интерактивен музей на индустрията", coords: [42.871007, 25.319790], visitTime: 120 },
        "dechkova-house": { name: "Дечкова къща", coords: [42.873177, 25.320101], visitTime: 30 },
        "historical-museum": { name: "Регионален исторически музей – Габрово", coords: [42.870362, 25.319565], visitTime: 90 },
        "humor-museum": { name: "Музей „Дом на хумора и сатирата“", coords: [42.879738, 25.318025], visitTime: 180 },
        "etara-museum": { name: "Регионален етнографски музей на открито Етър", coords: [42.805335, 25.348517], visitTime: 180 },
        "bozhenci-reserve": { name: "Архитектурно-исторически резерват Боженци", coords: [42.8372, 25.3662], visitTime: 120 },
        "education-museum": { name: "Национален музей на образованието", coords: [42.868974, 25.317285], visitTime: 60 },
        "uzana": { name: "Узана", coords: [42.859754, 25.176619], visitTime: 240 },
        "fortress-gradishte": { name: "Крепост „Градище“", coords: [42.884302644645814, 25.3403597350866], visitTime: 180 },
        "shipka":{name:"Паметник на свободата (Шипка)",coords:[42.7483127734807, 25.3215229676037],visitTime:180},
        "planetarium":{name:"Планетариум – Габрово", coords:[42.87466294642401, 25.327428460453557], visitTime:120},
        "sokolski-monastery":{name:"Соколски манастир", coords:[42.79739442966949, 25.338016640622467], visitTime:120},
        "hram-Sveta Bogorodica":{name:"Храм „Успение на Пресвета Богородица“", coords:[42.87165769485379, 25.31965276644059], visitTime:30}

    },
    dryanovo: {
        "dryanovo-monastery": { name: "Дряновски манастир", coords: [42.950337, 25.432207], visitTime: 180 },
        "bacho-kiro-cave": { name: "Пещера Бачо Киро", coords: [42.947039, 25.430292], visitTime: 90 },
        "kolyo-ficheto-museum": { name: "Музей „Колю Фичето“", coords: [42.979492, 25.477408], visitTime: 60 },
        "ikonomova-house-museum": { name: "Къща-музей „Икономовата къща“", coords: [42.972500, 25.467500], visitTime: 60 },
        "dryanovo-clock-tower": { name: "Часовникова кула в Дряново", coords: [42.973611, 25.466111], visitTime: 30 },
        "st-nikola-church": { name: "Църква 'Свети Никола'", coords: [42.973333, 25.466667], visitTime: 45 },
        "kolyo-ficheto-bridge": { name: "Мостът на Колю Фичето над река Дряновска", coords: [42.971944, 25.468056], visitTime: 30 }
    },
    tryavna: {
        "tryavna-old-town": { name: "Старият град в Трявна", coords: [42.867, 25.500], visitTime: 120 },
        "daskalova-house-museum": { name: "Музей за резбарско и зографско изкуство – Даскаловата къща", coords: [42.865076, 25.486854], visitTime: 90 },
        "tryavna-icon-painting-museum": { name: "Музей „Тревненска иконописна школа“", coords: [42.867103, 25.481932], visitTime: 90 },
        "st-archangel-michael-church": { name: "Църква „Св. Архангел Михаил”", coords: [42.866489, 25.490408], visitTime: 45 },
        "tryavna-clock-tower": { name: "Часовниковата кула", coords: [42.866210, 25.489472], visitTime: 30 },
        "slaveikov-school": { name: "Славейковото школо (Старото школо)", coords: [42.866381, 25.489799], visitTime: 60 },
        "humpback-bridge": { name: "Гърбавият (Кивгирения мост)", coords: [42.866242, 25.489196], visitTime: 30 },
        "slaveikov-house": { name: "Славейковата къща", coords: [42.865275, 25.485857], visitTime: 60 },
        "raykova-house-museum": { name: "Музей Райковата къща", coords: [42.866886, 25.490298], visitTime: 60 },
        "asian-african-art-museum": { name: "Музей на азиатското и африканското изкуство", coords: [42.868121, 25.491401], visitTime: 90 }
    },
    sevliew: {
        "art-gallery":{name:"Художествена галерия „Асен и Илия Пейкови“",coords:[43.027532519350615, 25.099032671820268],visitTime:45},
        "hadjistoqqnov-school":{name:"Хаджистояново училище",coords:[43.02602845743554, 25.103087914762753],visitTime:30},
        "dandolovi-kushti": {name:"Етнографски комплекс Дандолови къщи", coords:[43.024903465711006, 25.101232509488426], visitTime:30},
        "hotalich": {name:"Крепост Хоталич", coords:[43.05775061210322, 25.061708954127813], visitTime:120},
        "museum-of-contemporary-art":{name:"Музей на съвременното изкуство", coords:[43.02819855405583, 25.10472493170673], visitTime:60}, 
        "sevlievo-clock-tower": { name: "Часовниковата кула", coords: [42.866210, 25.489472], visitTime: 30},
        "art-gallery1": {name:"Арт галерия „Видима“",coords:[43.02760468778748, 25.104213684814486], visitTime:60}
    }
};

const selectedObjects = routeData.selectedAttractions;
const days = routeData.days;
const direction = routeData.direction;
const city = routeData.city;

// Инициализация на картата с център в избрания град
const map = L.map('map').setView(cityCenters[city], 13); // Центрирана върху избрания град
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Координати на входните точки (север, юг, изток, запад)
const entryPoints = {
    north: [42.9, 25.318224], 
    south: [42.8, 25.318224], 
    east: [42.873955, 25.4],  
    west: [42.873955, 25.2]   
};

// Функция за намиране на най-близкия обект спрямо входната точка с GraphHopper
async function findClosestAttraction(entryPointCoords, attractions) {
    let closestAttraction = null;
    let minDistance = Infinity;

    for (const attractionKey of attractions) {
        const place = cityObjects[city][attractionKey];
        const response = await fetch(
            `https://graphhopper.com/api/1/route?point=${entryPointCoords[0]},${entryPointCoords[1]}&point=${place.coords[0]},${place.coords[1]}&vehicle=car&key=76ebb35a-0b4c-4bcc-9939-0c567fe47636`
        );
        const data = await response.json();

        if (data.paths && data.paths.length > 0) {
            const distance = data.paths[0].distance; 
            if (distance < minDistance) {
                minDistance = distance;
                closestAttraction = attractionKey;
            }
        }
    }

    return closestAttraction;
}

// Функция за изчисляване на разстоянията и времето за пътуване
async function calculateDistancesAndTimes(selectedObjects) {
    const distancesAndTimes = [];
    for (let i = 0; i < selectedObjects.length - 1; i++) {
        const from = cityObjects[city][selectedObjects[i]].coords;
        const to = cityObjects[city][selectedObjects[i + 1]].coords;
        const response = await fetch(
            `https://graphhopper.com/api/1/route?point=${from[0]},${from[1]}&point=${to[0]},${to[1]}&vehicle=car&key=76ebb35a-0b4c-4bcc-9939-0c567fe47636`
        );
        const data = await response.json();
        const distance = (data.paths[0].distance / 1000).toFixed(1); // Разстояние в километри
        const time = (data.paths[0].time / 1000 / 60).toFixed(0); // Време в минути
        distancesAndTimes.push({ distance, time });
    }
    return distancesAndTimes;
}

// Функция за проверка на ограниченията
async function validateRoute(selectedObjects, days) {
    const minObjectsPerDay = 1; // Минимален брой обекти на ден
    const maxObjectsPerDay = 5; // Максимален брой обекти на ден
    const maxTimePerDay = 300; // Максимално време за престой и пътуване на ден (5 часа)

    const totalObjects = selectedObjects.length;
    const totalVisitTime = selectedObjects.reduce((sum, objectId) => sum + cityObjects[city][objectId].visitTime, 0);

    if (totalObjects < days * minObjectsPerDay) {
        return `Твърде малко обекти за избрания брой дни. Минимум ${days * minObjectsPerDay} обекта са необходими.`;
    }

    if (totalObjects > days * maxObjectsPerDay) {
        return `Твърде много обекти за избрания брой дни. Максимум ${days * maxObjectsPerDay} обекта са позволени.`;
    }

    // Изчисляваме времето за пътуване между обектите
    const distancesAndTimes = await calculateDistancesAndTimes(selectedObjects);
    const totalTravelTime = distancesAndTimes.reduce((sum, dt) => sum + parseInt(dt.time), 0);

    if (totalVisitTime + totalTravelTime > days * maxTimePerDay) {
        return `Твърде много време за престой и пътуване за избрания брой дни. Максимум ${days * maxTimePerDay} минути (${days * 4} часа) са позволени.`;
    }

    return null; // Няма грешка
}

// Функция за разпределяне на обектите по дни
function distributeObjectsByDays(selectedObjects, days) {
    const distributedObjects = Array.from({ length: days }, () => []); // Създаваме масив от празни масиви за всеки ден
    const totalVisitTime = selectedObjects.reduce((sum, objectId) => sum + cityObjects[city][objectId].visitTime, 0); // Общо време за престой
    const averageTimePerDay = totalVisitTime / days; // Средно време за престой на ден

    let currentDay = 0;
    let currentDayTime = 0;

    // Сортираме обектите по време за престой в низходящ ред
    const sortedObjects = selectedObjects.sort((a, b) => cityObjects[city][b].visitTime - cityObjects[city][a].visitTime);

    sortedObjects.forEach(objectId => {
        const visitTime = cityObjects[city][objectId].visitTime;

        // Намираме деня с най-малко време за престой
        let minTimeDay = 0;
        let minTime = distributedObjects[0].reduce((sum, id) => sum + cityObjects[city][id].visitTime, 0);
        for (let i = 1; i < days; i++) {
            const dayTime = distributedObjects[i].reduce((sum, id) => sum + cityObjects[city][id].visitTime, 0);
            if (dayTime < minTime) {
                minTime = dayTime;
                minTimeDay = i;
            }
        }

        // Добавяме обекта към деня с най-малко време за престой
        distributedObjects[minTimeDay].push(objectId);
    });

    return distributedObjects;
}

// Функция за визуализация на маршрута за определен ден
async function showRouteForDay(dayIndex, distributedObjects) {
    const objectsForDay = distributedObjects[dayIndex];
    const routeInfo = document.getElementById('route-info');
    routeInfo.innerHTML = `<h3>Ден ${dayIndex + 1}</h3><ul>`;

    // Изчисляваме разстоянията и времето за пътуване
    const distancesAndTimes = await calculateDistancesAndTimes(objectsForDay);

    objectsForDay.forEach((objectId, index) => {
        const object = cityObjects[city][objectId];
        routeInfo.innerHTML += `<li>${index + 1}. ${object.name} (${object.visitTime} минути)</li>`;

        // Добавяме информация за разстоянието и времето за пътуване
        if (index < objectsForDay.length - 1) {
            const dt = distancesAndTimes[index];
            routeInfo.innerHTML += `<li>→ ${dt.distance} км (~${dt.time} мин с кола)</li>`;
        }
    });

    routeInfo.innerHTML += '</ul>';

    // Визуализация на маршрута на картата
    const coordinates = objectsForDay.map(objectId => cityObjects[city][objectId].coords);
    const polyline = L.polyline(coordinates, { color: 'blue' }).addTo(map);

    // Добавяне на маркери за всеки обект
    objectsForDay.forEach(objectId => {
        const object = cityObjects[city][objectId];
        const marker = L.marker(object.coords).addTo(map);
        marker.bindPopup(`<b>${object.name}</b><br>Време за престой: ${object.visitTime} минути`);
    });

    map.fitBounds(polyline.getBounds());

    // Добавяне на зелен бутон за интегриране в Google Maps за този ден
    const integrateButton = document.createElement('button');
    integrateButton.textContent = `Интегрирай Ден ${dayIndex + 1} в Google Maps`;
    integrateButton.className = 'integrate-button';
    integrateButton.onclick = () => integrateGoogleMapsForDay(dayIndex, distributedObjects, direction);
    routeInfo.appendChild(integrateButton);
}

// Функция за интегриране на маршрута в Google Maps за конкретен ден
function integrateGoogleMapsForDay(dayIndex, distributedObjects, direction) {
    const dayObjects = distributedObjects[dayIndex];
    if (dayObjects.length === 0) {
        alert("Няма обекти за този ден.");
        return;
    }

    let googleMapsUrl = 'https://www.google.com/maps/dir/';

    // За първия ден добавяме началната точка според посоката
    if (dayIndex === 0) {
        const startCoords = entryPoints[direction];
        googleMapsUrl += `${startCoords[0]},${startCoords[1]}/`;
    }

    // Добавяме координатите на обектите за този ден
    dayObjects.forEach((attractionKey, index) => {
        const place = cityObjects[city][attractionKey];
        googleMapsUrl += `${place.coords[0]},${place.coords[1]}/`;
    });

    // Отваряне на Google Maps в нов таб
    window.open(googleMapsUrl, '_blank');
}

// Функция за изчистване на маршрута и връщане към началната страница
function clearRoute() {
    localStorage.removeItem('routeData'); // Изчистване на данните за маршрута
    window.location.href = 'gabrovotour.html'; // Пренасочване към началната страница
}

// Проверка на ограниченията
validateRoute(selectedObjects, days).then(errorMessage => {
    if (errorMessage) {
        document.getElementById('error-message').textContent = errorMessage;
    } else {
        // Намираме най-близкия обект спрямо посоката на влизане
        const entryPointCoords = entryPoints[direction];
        findClosestAttraction(entryPointCoords, selectedObjects).then(closestAttraction => {
            // Премахваме най-близкия обект от списъка и го поставяме на първо място
            const remainingObjects = selectedObjects.filter(objectId => objectId !== closestAttraction);
            const sortedObjects = [closestAttraction, ...remainingObjects];

            // Разпределяме обектите по дни
            const distributedObjects = distributeObjectsByDays(sortedObjects, days);

            // Генериране на бутони за дни
            const dayButtons = document.getElementById('day-buttons');
            for (let i = 0; i < days; i++) {
                const button = document.createElement('button');
                button.textContent = `Ден ${i + 1}`;
                button.onclick = () => showRouteForDay(i, distributedObjects);
                dayButtons.appendChild(button);
            }

            // Показване на маршрута за първия ден по подразбиране
            showRouteForDay(0, distributedObjects);
        });
    }
});