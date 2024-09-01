import { ICardData } from "src/app/components/card/card";


export const listDemoItem: ICardData = {
    id: 1,
    name: 'Эвакуатор',
    picture: 'assets/img/car-1.jpg',
    dataItems: [
        { name: 'Легковой автомобиль', value: '5 000 руб' },
        { name: 'Мотоцикл (крадроцикл и т.д.)', value: '3 000 руб' },
        { name: 'Внедорожник', value: 'нет' },
        { name: 'Микроавтобус', value: 'нет' },
        { name: 'Загородный тариф', value: '50 руб/км' },
    ],
    phone: '+7 999 99 99',
    fax: '+7 999 99 99',
    place: 'Москва, ул Пушкина',
    text: 'Эвакуатор авто. Всегда на связи! Быстро и надежно'
};