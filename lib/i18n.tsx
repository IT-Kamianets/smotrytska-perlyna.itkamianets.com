"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Locale = "UK" | "EN" | "DE" | "FR" | "PL";

interface RoomItem {
  title: string;
  price: string;
  capacity: string;
  details: string;
}

interface PolicyItem {
  title: string;
  content: string;
}

interface DiningItem {
  title: string;
  desc: string;
}

interface Translations {
  nav: {
    amenities: string;
    rooms: string;
    restaurant: string;
    gallery: string;
    reviews: string;
    locationFaq: string;
    contacts: string;
    book: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    rating: string;
    rooms: string;
    fortress: string;
    checkin: string;
    checkout: string;
    guests: string;
    selectDate: string;
    adults: string;
    search: string;
  };
  highlights: {
    subtitle: string;
    title: string;
    features: {
      wifi: { title: string; desc: string };
      parking: { title: string; desc: string };
      comfort: { title: string; desc: string };
      delivery: { title: string; desc: string };
      reception: { title: string; desc: string };
      conference: { title: string; desc: string };
      nosmoking: { title: string; desc: string };
      cafe: { title: string; desc: string };
    };
  };
  reviews: {
    subtitle: string;
    title: string;
    ratingLabel: string;
    testimonials: { name: string; location: string; text: string; rating: number }[];
  };
  rooms: {
    subtitle: string;
    title: string;
    description: string;
    book: string;
    bottomNote: string;
    photoAlt: string;
    items: [RoomItem, RoomItem, RoomItem, RoomItem];
    amenities: {
      aircon: string;
      tv: string;
      wifi: string;
      privateBathroom: string;
      sharedBathroom: string;
      fridge: string;
      kettle: string;
      balconyView: string;
      balcony: string;
      sofa: string;
      desk: string;
    };
  };
  dining: {
    subtitle: string;
    title: string;
    description: string;
    items: [DiningItem, DiningItem, DiningItem, DiningItem, DiningItem];
    imgAlt: {
      kitchen: string;
      yard: string;
      diningRoom: string;
    };
  };
  gallery: {
    subtitle: string;
    title: string;
    photoAlt: string;
    prevPage: string;
    nextPage: string;
    close: string;
    prevPhoto: string;
    nextPhoto: string;
    page: string;
  };
  location: {
    subtitle: string;
    title: string;
    mapTitle: string;
    addressLabel: string;
    addressStreet: string;
    addressFormer: string;
    addressCity: string;
    policies: [PolicyItem, PolicyItem, PolicyItem, PolicyItem, PolicyItem];
  };
  footer: {
    brandName: string;
    brandDesc: string;
    navHeading: string;
    copyright: string;
  };
}

const translations: Record<Locale, Translations> = {
  UK: {
    nav: {
      amenities: "Зручності",
      rooms: "Номери",
      restaurant: "Ресторан",
      gallery: "Галерея",
      reviews: "Відгуки",
      locationFaq: "Локація",
      contacts: "Контакти",
      book: "Забронювати",
    },
    hero: {
      headline: "Еко-відпочинок у серці історичного міста",
      subheadline: "Відкрийте для себе гармонію спокою та величі минулого. Ваш ідеальний куточок для релаксу та натхнення.",
      rating: "Рейтинг / 10",
      rooms: "Затишних номерів",
      fortress: "До Старої фортеці",
      checkin: "Заїзд",
      checkout: "Виїзд",
      guests: "Гості",
      selectDate: "Оберіть дату",
      adults: "дорослих",
      search: "Шукати номери",
    },
    highlights: {
      subtitle: "Чому обирають нас",
      title: "Ваш затишок \u2013 наш пріоритет",
      features: {
        wifi: { title: "Безкоштовний Wi-Fi", desc: "Швидкісний інтернет надається на всій території готелю та в номерах абсолютно безкоштовно." },
        parking: { title: "Приватна парковка", desc: "До ваших послуг приватна парковка на території (потребує попереднього замовлення та узгодження часу виїзду)." },
        comfort: { title: "Комфорт у номерах", desc: "У кожному номері для вашої зручності є холодильник, електричний чайник, москітна сітка та власне опалення." },
        delivery: { title: "Доставка їжі та напоїв", desc: "Можливість замовити доставку їжі та напоїв безпосередньо у ваш номер для максимального релаксу." },
        reception: { title: "Цілодобова стійка реєстрації", desc: "Наша стійка реєстрації працює цілодобово, щоб забезпечити комфортний заїзд та виїзд у будь-який час." },
        conference: { title: "Конференц-зали / банкетні зали", desc: "Ідеальні приміщення для проведення конференцій, тренінгів та банкетних заходів на групи до 40 осіб." },
        nosmoking: { title: "Номери для некурців", desc: "Усі номери готелю є некурящими для забезпечення максимального комфорту та чистоти повітря." },
        cafe: { title: "Кав\u2019ярня", desc: "Затишна кав\u2019ярня на території готелю, де ви можете насолодитися ароматною кавою та свіжою випічкою." },
      },
    },
    reviews: {
      subtitle: "Відгуки",
      title: "Що кажуть наші гості",
      ratingLabel: "\u2013 рейтинг готелю",
      testimonials: [
        { name: "Олена К.", location: "Київ", text: "Неймовірне розташування! Фортеця буквально за рогом, а в готелі тиша та спокій. Персонал дуже уважний. Обов\u2019язково повернемося!", rating: 10 },
        { name: "Максим Д.", location: "Львів", text: "Сніданки тут просто божественні! Все свіже, домашнє, порції щедрі. Окремо хочу подякувати за чистоту в номерах.", rating: 10 },
        { name: "Ірина та Андрій", location: "Одеса", text: "Зелений дворик з виноградом та ягодами нас вразив. Влітку це справжній рай! Діти були в захваті від полуниць прямо з грядки.", rating: 10 },
        { name: "Тарас П.", location: "Харків", text: "Дуже тиха локація, при цьому все поруч. Номер чистий, ліжко зручне. Окремий плюс за парковку на території. Раджу усім!", rating: 9 },
        { name: "Наталія В.", location: "Дніпро", text: "Приїхали на вікенд і не хотілося їхати. Атмосфера еко-садиби, затишний двір, привітні господарі. Сніданок на 10 з 10!", rating: 10 },
        { name: "Олександр М.", location: "Вінниця", text: "Ідеальне місце для романтичної подорожі. Балкон з видом на сад, тиша, чисте повітря. Дякуємо за прекрасний відпочинок!", rating: 10 },
        { name: "Марія С.", location: "Тернопіль", text: "Була з подругами на дівич-вечір. Чудовий ресторан, літній бар, атмосферний двір. Все організовано на вищому рівні!", rating: 9 },
        { name: "Дмитро Л.", location: "Запоріжжя", text: "Другий раз тут і знову все бездоганно. Чистота ідеальна, Wi-Fi працює відмінно, а сніданки щоразу радують новими стравами.", rating: 10 },
        { name: "Юлія Б.", location: "Рівне", text: "Еко-садиба в самому центрі! Виноград, квіти, тиша \u2014 і це за 2 хвилини від фортеці. Неймовірне поєднання природи та історії.", rating: 10 },
        { name: "Сергій Ш.", location: "Чернівці", text: "Приїжджав у відрядження з колегами. Номери чисті, є все необхідне. Парковка зручна. Сніданок ситний, рекомендую для ділових поїздок.", rating: 9 },
        { name: "Катерина Р.", location: "Полтава", text: "Нарешті знайшли готель у Кам\u2019янці, де хочеться залишитися подовше. Привітний персонал, смачна кухня, зелений двір. Топ!", rating: 10 },
        { name: "Ігор Н.", location: "Хмельницький", text: "Регулярно привожу гостей з-за кордону саме сюди. Всі залишаються в захваті від атмосфери та близькості до фортеці. Якість стабільно висока.", rating: 10 },
        { name: "Анна Г.", location: "Суми", text: "Тихе місце з душевною атмосферою. Особливо вразив еко-сад і можливість зібрати ягоди. Сніданок домашній і дуже смачний!", rating: 10 },
        { name: "Василь К.", location: "Ужгород", text: "Проїхали пів України щоб зупинитися тут \u2014 і не пошкодували жодної секунди. Чудове розташування, чистота та ранковий сніданок із фермерськими продуктами.", rating: 10 },
        { name: "Людмила Т.", location: "Черкаси", text: "Подорожуємо з чоловіком щороку і це наш улюблений готель у Кам\u2019янці. Затишно, чисто, зелено. Господарі \u2014 золоті люди!", rating: 10 },
      ],
    },
    rooms: {
      subtitle: "Розміщення",
      title: "Наші номери",
      description: "Кожен номер продуманий до дрібниць для вашого максимального комфорту",
      book: "Забронювати",
      bottomNote: "Готель є відокремленою еко-садибою в структурі комплексу \u00ABПерлина Поділля\u00BB.",
      photoAlt: "фото",
      items: [
        { title: "Стандартний двомісний номер", price: "1\u00A0300 грн / ніч", capacity: "2 гості", details: "1 велике двоспальне ліжко" },
        { title: "Покращений двомісний номер", price: "1\u00A0500 грн / ніч", capacity: "2 гості", details: "Площа: 20 кв.м. 1 велике двоспальне ліжко" },
        { title: "Чотиримісний номер з душем", price: "2\u00A0000 грн / ніч", capacity: "4 гості", details: "Площа: 39 кв.м. 2 великі двоспальні ліжка" },
        { title: "Ліжко в загальному 6-місному номері", price: "450 грн / ніч", capacity: "1 гість", details: "Площа: 16 кв.м. 1 односпальне ліжко" },
      ],
      amenities: {
        aircon: "Кондиціонер",
        tv: "Телевізор",
        wifi: "Безкоштовний Wi-Fi",
        privateBathroom: "Власна ванна кімната",
        sharedBathroom: "Спільна ванна кімната",
        fridge: "Холодильник",
        kettle: "Чайник",
        balconyView: "Балкон з видом на двір",
        balcony: "Балкон",
        sofa: "Диван",
        desk: "Робочий стіл",
      },
    },
    dining: {
      subtitle: "Гастрономія та відпочинок",
      title: "Ресторан та Відпочинок",
      description: "Відчуйте автентичну подільську кухню у нашому затишному ресторані. Страви готуються з локальних фермерських продуктів та подаються з душею.",
      items: [
        { title: "Подільська кухня", desc: "Автентичні страви регіону з найсвіжіших інгредієнтів від місцевих фермерів." },
        { title: "Свіжі фрукти з подвір\u2019я", desc: "Влітку наші гості насолоджуються компліментарним виноградом, полуницями та іншими фруктами прямо з нашого еко-саду." },
        { title: "MICE-можливості", desc: "Ідеальний простір для невеликих корпоративних заходів, тренінгів та тім-білдингів на групи до 40 осіб." },
        { title: "Літній бар", desc: "Чудове місце на території готелю для вечірнього відпочинку на свіжому повітрі з улюбленими напоями." },
        { title: "Смачні сніданки", desc: "Гості надзвичайно високо оцінюють наші ситні сніданки (оцінка 9/10), які готуються виключно зі свіжих фермерських продуктів." },
      ],
      imgAlt: {
        kitchen: "Кухня готелю",
        yard: "Подвір\u2019я готелю",
        diningRoom: "Обідня зала",
      },
    },
    gallery: {
      subtitle: "Галерея",
      title: "Фотогалерея нашого готелю",
      photoAlt: "Фото готелю",
      prevPage: "Попередня сторінка",
      nextPage: "Наступна сторінка",
      close: "Закрити",
      prevPhoto: "Попереднє фото",
      nextPhoto: "Наступне фото",
      page: "Сторінка",
    },
    location: {
      subtitle: "Інформація",
      title: "Локація та Важлива інформація",
      mapTitle: "Розташування готелю Смотрицька Перлина",
      addressLabel: "Адреса",
      addressStreet: "вул. Олександра Удовиченка, 14",
      addressFormer: "(колишня вул. Папаніна)",
      addressCity: "Кам\u2019янець-Подільський, Хмельницька обл., Україна",
      policies: [
        { title: "Паркування", content: "Приватний паркінг закритого типу на території готелю. Важливо: у зв\u2019язку з компактною територією, просимо узгоджувати час вашого ранкового виїзду з адміністратором для комфортного паркування." },
        { title: "Час заїзду та виїзду", content: "Check-in: 14:00 \u2013 21:00. Check-out: 08:00 \u2013 12:00. Для пізнього заїзду після 21:00 обов\u2019язково зателефонуйте на рецепцію для узгодження." },
        { title: "Правила розміщення", content: "Оплата за проживання та послуги здійснюється виключно готівкою (терміналу немає). Просимо врахувати це при плануванні подорожі. Сімейні номери доступні, розміщення з дітьми вітається." },
        { title: "Питна вода в номерах", content: "Зверніть увагу, що питна бутильована вода в номерах не надається. Ви можете придбати її у продуктовому магазині, що знаходиться зовсім поруч із садибою." },
        { title: "Послуга раннього заїзду", content: "Ми завжди йдемо назустріч нашим гостям: якщо ваш номер вже прибраний та вільний до 14:00, ми з радістю поселимо вас раніше без жодних додаткових доплат." },
      ],
    },
    footer: {
      brandName: "Смотрицька Перлина",
      brandDesc: "Еко-готель у серці історичного Кам\u2019янця-Подільського. Ваш ідеальний баланс між історією та природою.",
      navHeading: "Навігація",
      copyright: "\u00A9 2026 Смотрицька Перлина. Усі права захищені.",
    },
  },
  EN: {
    nav: {
      amenities: "Amenities",
      rooms: "Rooms",
      restaurant: "Restaurant",
      gallery: "Gallery",
      reviews: "Reviews",
      locationFaq: "Location",
      contacts: "Contacts",
      book: "Book Now",
    },
    hero: {
      headline: "Eco-retreat in the heart of a historic city",
      subheadline: "Discover the harmony of tranquility and the grandeur of the past. Your perfect corner for relaxation and inspiration.",
      rating: "Rating / 10",
      rooms: "Cozy rooms",
      fortress: "To the Old Fortress",
      checkin: "Check-in",
      checkout: "Check-out",
      guests: "Guests",
      selectDate: "Select date",
      adults: "adults",
      search: "Search rooms",
    },
    highlights: {
      subtitle: "Why choose us",
      title: "Your comfort \u2013 our priority",
      features: {
        wifi: { title: "Free Wi-Fi", desc: "High-speed internet is available throughout the hotel and in all rooms completely free of charge." },
        parking: { title: "Private parking", desc: "Private parking on the premises is at your disposal (requires prior reservation and check-out time coordination)." },
        comfort: { title: "Room comfort", desc: "Every room is equipped with a refrigerator, electric kettle, mosquito net and individual heating for your convenience." },
        delivery: { title: "Food & drink delivery", desc: "Order food and drinks delivered directly to your room for maximum relaxation." },
        reception: { title: "24-hour front desk", desc: "Our front desk operates around the clock to ensure comfortable check-in and check-out at any time." },
        conference: { title: "Conference / banquet halls", desc: "Ideal venues for conferences, training sessions and banquets for groups of up to 40 people." },
        nosmoking: { title: "Non-smoking rooms", desc: "All hotel rooms are non-smoking to ensure maximum comfort and air quality." },
        cafe: { title: "Caf\u00E9", desc: "A cozy caf\u00E9 on the hotel premises where you can enjoy aromatic coffee and fresh pastries." },
      },
    },
    reviews: {
      subtitle: "Reviews",
      title: "What our guests say",
      ratingLabel: "\u2013 hotel rating",
      testimonials: [
        { name: "Olena K.", location: "Kyiv", text: "Incredible location! The fortress is literally around the corner, and the hotel is quiet and peaceful. The staff is very attentive. We will definitely come back!", rating: 10 },
        { name: "Maksym D.", location: "Lviv", text: "Breakfasts here are simply divine! Everything is fresh, homemade, generous portions. Special thanks for the cleanliness in the rooms.", rating: 10 },
        { name: "Iryna & Andriy", location: "Odesa", text: "The green courtyard with grapes and berries amazed us. In summer it's a real paradise! The kids loved picking strawberries right from the garden.", rating: 10 },
        { name: "Taras P.", location: "Kharkiv", text: "Very quiet location, yet everything is nearby. Room is clean, bed is comfortable. Extra plus for parking on the premises. Recommended!", rating: 9 },
        { name: "Nataliia V.", location: "Dnipro", text: "We came for the weekend and didn't want to leave. Eco-estate atmosphere, cozy courtyard, welcoming hosts. Breakfast 10 out of 10!", rating: 10 },
        { name: "Oleksandr M.", location: "Vinnytsia", text: "Perfect place for a romantic trip. Balcony overlooking the garden, silence, fresh air. Thank you for a wonderful vacation!", rating: 10 },
        { name: "Mariia S.", location: "Ternopil", text: "Was here with friends for a bachelorette party. Wonderful restaurant, summer bar, atmospheric courtyard. Everything organized at the highest level!", rating: 9 },
        { name: "Dmytro L.", location: "Zaporizhzhia", text: "Second time here and everything is flawless again. Cleanliness is perfect, Wi-Fi works great, and breakfasts delight with new dishes every time.", rating: 10 },
        { name: "Yuliia B.", location: "Rivne", text: "An eco-estate right in the center! Grapes, flowers, silence \u2014 and it's 2 minutes from the fortress. An incredible combination of nature and history.", rating: 10 },
        { name: "Serhii Sh.", location: "Chernivtsi", text: "Came on a business trip with colleagues. Rooms are clean, everything you need is there. Convenient parking. Hearty breakfast, recommended for business trips.", rating: 9 },
        { name: "Kateryna R.", location: "Poltava", text: "Finally found a hotel in Kamianets where you want to stay longer. Friendly staff, delicious cuisine, green courtyard. Top!", rating: 10 },
        { name: "Ihor N.", location: "Khmelnytskyi", text: "I regularly bring foreign guests here. Everyone is delighted by the atmosphere and proximity to the fortress. Consistently high quality.", rating: 10 },
        { name: "Anna H.", location: "Sumy", text: "A quiet place with a soulful atmosphere. The eco-garden and the ability to pick berries were especially impressive. Homemade and very tasty breakfast!", rating: 10 },
        { name: "Vasyl K.", location: "Uzhhorod", text: "We drove across half of Ukraine to stay here \u2014 and didn't regret a single second. Great location, cleanliness and morning breakfast with farm products.", rating: 10 },
        { name: "Liudmyla T.", location: "Cherkasy", text: "We travel with my husband every year and this is our favorite hotel in Kamianets. Cozy, clean, green. The owners are golden people!", rating: 10 },
      ],
    },
    rooms: {
      subtitle: "Accommodation",
      title: "Our Rooms",
      description: "Every room is thoughtfully designed for your maximum comfort",
      book: "Book Now",
      bottomNote: "The hotel is a separate eco-estate within the \u00ABPerlyna Podillia\u00BB complex.",
      photoAlt: "photo",
      items: [
        { title: "Standard Double Room", price: "UAH 1,300 / night", capacity: "2 guests", details: "1 large double bed" },
        { title: "Superior Double Room", price: "UAH 1,500 / night", capacity: "2 guests", details: "Area: 20 m². 1 large double bed" },
        { title: "Quadruple Room with Shower", price: "UAH 2,000 / night", capacity: "4 guests", details: "Area: 39 m². 2 large double beds" },
        { title: "Bed in 6-Bed Shared Room", price: "UAH 450 / night", capacity: "1 guest", details: "Area: 16 m². 1 single bed" },
      ],
      amenities: {
        aircon: "Air conditioning",
        tv: "TV",
        wifi: "Free Wi-Fi",
        privateBathroom: "Private bathroom",
        sharedBathroom: "Shared bathroom",
        fridge: "Refrigerator",
        kettle: "Kettle",
        balconyView: "Balcony with courtyard view",
        balcony: "Balcony",
        sofa: "Sofa",
        desk: "Work desk",
      },
    },
    dining: {
      subtitle: "Gastronomy & Leisure",
      title: "Restaurant & Relaxation",
      description: "Experience authentic Podilian cuisine in our cozy restaurant. Dishes are prepared from local farm products and served with heart.",
      items: [
        { title: "Podilian cuisine", desc: "Authentic regional dishes made from the freshest ingredients sourced from local farmers." },
        { title: "Fresh fruits from the yard", desc: "In summer our guests enjoy complimentary grapes, strawberries and other fruits straight from our eco-garden." },
        { title: "MICE capabilities", desc: "Ideal space for small corporate events, training sessions and team-building activities for groups up to 40 people." },
        { title: "Summer bar", desc: "A wonderful outdoor spot on the hotel grounds for evening relaxation with your favorite drinks." },
        { title: "Delicious breakfasts", desc: "Guests rate our hearty breakfasts very highly (9/10), prepared exclusively from fresh farm products." },
      ],
      imgAlt: {
        kitchen: "Hotel kitchen",
        yard: "Hotel courtyard",
        diningRoom: "Dining hall",
      },
    },
    gallery: {
      subtitle: "Gallery",
      title: "Our Hotel Photo Gallery",
      photoAlt: "Hotel photo",
      prevPage: "Previous page",
      nextPage: "Next page",
      close: "Close",
      prevPhoto: "Previous photo",
      nextPhoto: "Next photo",
      page: "Page",
    },
    location: {
      subtitle: "Information",
      title: "Location & Important Information",
      mapTitle: "Location of Smotrytska Perlyna Hotel",
      addressLabel: "Address",
      addressStreet: "14 Oleksandra Udovychenka St.",
      addressFormer: "(formerly Papanina St.)",
      addressCity: "Kamianets-Podilskyi, Khmelnytskyi Oblast, Ukraine",
      policies: [
        { title: "Parking", content: "Private enclosed parking on the hotel grounds. Important: due to the compact territory, please coordinate your morning departure time with the administrator for convenient parking." },
        { title: "Check-in & check-out times", content: "Check-in: 14:00 \u2013 21:00. Check-out: 08:00 \u2013 12:00. For late check-in after 21:00, please call the front desk to arrange." },
        { title: "Accommodation policies", content: "Payment for accommodation and services is accepted in cash only (no card terminal). Please take this into account when planning your trip. Family rooms are available; children are welcome." },
        { title: "Drinking water", content: "Please note that bottled drinking water is not provided in the rooms. You can purchase it at the grocery store located right next to the estate." },
        { title: "Early check-in service", content: "We always try to accommodate our guests: if your room is already cleaned and available before 14:00, we will gladly check you in early at no extra charge." },
      ],
    },
    footer: {
      brandName: "Smotrytska Perlyna",
      brandDesc: "Eco-hotel in the heart of historic Kamianets-Podilskyi. Your perfect balance between history and nature.",
      navHeading: "Navigation",
      copyright: "\u00A9 2026 Smotrytska Perlyna. All rights reserved.",
    },
  },
  DE: {
    nav: {
      amenities: "Ausstattung",
      rooms: "Zimmer",
      restaurant: "Restaurant",
      gallery: "Galerie",
      reviews: "Bewertungen",
      locationFaq: "Lage",
      contacts: "Kontakt",
      book: "Buchen",
    },
    hero: {
      headline: "Oko-Erholung im Herzen einer historischen Stadt",
      subheadline: "Entdecken Sie die Harmonie von Ruhe und der Pracht der Vergangenheit. Ihre perfekte Ecke zum Entspannen und Inspirieren.",
      rating: "Bewertung / 10",
      rooms: "Gemutliche Zimmer",
      fortress: "Zur alten Festung",
      checkin: "Check-in",
      checkout: "Check-out",
      guests: "Gaste",
      selectDate: "Datum wahlen",
      adults: "Erwachsene",
      search: "Zimmer suchen",
    },
    highlights: {
      subtitle: "Warum uns wahlen",
      title: "Ihr Komfort \u2013 unsere Prioritat",
      features: {
        wifi: { title: "Kostenloses WLAN", desc: "Highspeed-Internet ist im gesamten Hotel und in allen Zimmern vollig kostenlos verfugbar." },
        parking: { title: "Privater Parkplatz", desc: "Privater Parkplatz auf dem Gelande steht Ihnen zur Verfugung (Vorreservierung und Absprache der Abreisezeit erforderlich)." },
        comfort: { title: "Zimmerkomfort", desc: "Jedes Zimmer ist mit Kuhlschrank, Wasserkocher, Moskitonetz und eigener Heizung ausgestattet." },
        delivery: { title: "Speisen- und Getrankelieferung", desc: "Bestellen Sie Speisen und Getranke direkt auf Ihr Zimmer fur maximale Entspannung." },
        reception: { title: "24-Stunden-Rezeption", desc: "Unsere Rezeption ist rund um die Uhr geoffnet fur einen komfortablen Check-in und Check-out." },
        conference: { title: "Konferenz- / Bankettsale", desc: "Ideale Raumlichkeiten fur Konferenzen, Schulungen und Bankette fur Gruppen bis 40 Personen." },
        nosmoking: { title: "Nichtraucherzimmer", desc: "Alle Hotelzimmer sind Nichtraucherzimmer fur maximalen Komfort und Luftqualitat." },
        cafe: { title: "Caf\u00E9", desc: "Ein gemutliches Caf\u00E9 auf dem Hotelgelande, wo Sie aromatischen Kaffee und frisches Gebacken geniessen konnen." },
      },
    },
    reviews: {
      subtitle: "Bewertungen",
      title: "Was unsere Gaste sagen",
      ratingLabel: "\u2013 Hotelbewertung",
      testimonials: [
        { name: "Olena K.", location: "Kyjiw", text: "Unglaubliche Lage! Die Festung ist buchstablich um die Ecke, und im Hotel herrscht Ruhe und Frieden. Das Personal ist sehr aufmerksam. Wir kommen definitiv wieder!", rating: 10 },
        { name: "Maksym D.", location: "Lwiw", text: "Die Fruhstucke hier sind einfach gottlich! Alles frisch, hausgemacht, grosszugige Portionen. Besonderer Dank fur die Sauberkeit in den Zimmern.", rating: 10 },
        { name: "Iryna & Andrij", location: "Odessa", text: "Der grune Innenhof mit Trauben und Beeren hat uns beeindruckt. Im Sommer ist es ein wahres Paradies! Die Kinder waren begeistert von den Erdbeeren direkt aus dem Garten.", rating: 10 },
        { name: "Taras P.", location: "Charkiw", text: "Sehr ruhige Lage, und dennoch ist alles in der Nahe. Zimmer ist sauber, Bett bequem. Extraplus fur den Parkplatz auf dem Gelande. Empfehlenswert!", rating: 9 },
        { name: "Natalija W.", location: "Dnipro", text: "Wir kamen fur das Wochenende und wollten nicht mehr weg. Oko-Anwesen-Atmosphare, gemutlicher Innenhof, gastfreundliche Gastgeber. Fruhstuck 10 von 10!", rating: 10 },
        { name: "Oleksandr M.", location: "Winnyzja", text: "Perfekter Ort fur eine romantische Reise. Balkon mit Blick auf den Garten, Stille, frische Luft. Danke fur einen wunderbaren Urlaub!", rating: 10 },
        { name: "Marija S.", location: "Ternopil", text: "War mit Freundinnen zum Junggesellinnenabschied hier. Wunderbares Restaurant, Sommerbar, atmospharischer Innenhof. Alles auf hochstem Niveau organisiert!", rating: 9 },
        { name: "Dmytro L.", location: "Saporischschja", text: "Zum zweiten Mal hier und wieder alles einwandfrei. Sauberkeit ist perfekt, WLAN funktioniert hervorragend, und die Fruhstucke begeistern jedes Mal mit neuen Gerichten.", rating: 10 },
        { name: "Julija B.", location: "Riwne", text: "Ein Oko-Anwesen mitten im Zentrum! Trauben, Blumen, Stille \u2014 und das 2 Minuten von der Festung entfernt. Eine unglaubliche Kombination aus Natur und Geschichte.", rating: 10 },
        { name: "Serhij Sch.", location: "Tscherniwzi", text: "Kam auf Geschaftsreise mit Kollegen. Zimmer sind sauber, alles Notwendige vorhanden. Parkplatz bequem. Fruhstuck sattigend, fur Geschaftsreisen empfohlen.", rating: 9 },
        { name: "Kateryna R.", location: "Poltawa", text: "Endlich ein Hotel in Kamjanez gefunden, wo man langer bleiben mochte. Freundliches Personal, leckere Kuche, gruner Innenhof. Top!", rating: 10 },
        { name: "Ihor N.", location: "Chmelnyzkyj", text: "Ich bringe regelmassig auslandische Gaste hierher. Alle sind begeistert von der Atmosphare und der Nahe zur Festung. Konstant hohe Qualitat.", rating: 10 },
        { name: "Anna H.", location: "Sumy", text: "Ein ruhiger Ort mit herzlicher Atmosphare. Besonders beeindruckend war der Oko-Garten und die Moglichkeit Beeren zu pflucken. Hausgemachtes und sehr leckeres Fruhstuck!", rating: 10 },
        { name: "Wassyl K.", location: "Uschhorod", text: "Wir fuhren durch die halbe Ukraine um hier zu ubernachten \u2014 und bereuten keine einzige Sekunde. Tolle Lage, Sauberkeit und Morgenfruhstuck mit Bauernprodukten.", rating: 10 },
        { name: "Ljudmyla T.", location: "Tscherkasy", text: "Wir reisen jedes Jahr mit meinem Mann und dies ist unser Lieblingshotel in Kamjanez. Gemutlich, sauber, grun. Die Besitzer sind goldene Menschen!", rating: 10 },
      ],
    },
    rooms: {
      subtitle: "Unterkunft",
      title: "Unsere Zimmer",
      description: "Jedes Zimmer ist bis ins Detail fur Ihren maximalen Komfort durchdacht",
      book: "Buchen",
      bottomNote: "Das Hotel ist ein separates Oko-Anwesen innerhalb des Komplexes \u00ABPerlyna Podillia\u00BB.",
      photoAlt: "Foto",
      items: [
        { title: "Standard-Doppelzimmer", price: "UAH 1.300 / Nacht", capacity: "2 Gaste", details: "1 grosses Doppelbett" },
        { title: "Superior-Doppelzimmer", price: "UAH 1.500 / Nacht", capacity: "2 Gaste", details: "Flache: 20 m². 1 grosses Doppelbett" },
        { title: "Vierbettzimmer mit Dusche", price: "UAH 2.000 / Nacht", capacity: "4 Gaste", details: "Flache: 39 m². 2 grosse Doppelbetten" },
        { title: "Bett im 6-Bett-Schlafsaal", price: "UAH 450 / Nacht", capacity: "1 Gast", details: "Flache: 16 m². 1 Einzelbett" },
      ],
      amenities: {
        aircon: "Klimaanlage",
        tv: "Fernseher",
        wifi: "Kostenloses WLAN",
        privateBathroom: "Eigenes Badezimmer",
        sharedBathroom: "Gemeinschaftsbad",
        fridge: "Kuhlschrank",
        kettle: "Wasserkocher",
        balconyView: "Balkon mit Hofblick",
        balcony: "Balkon",
        sofa: "Sofa",
        desk: "Schreibtisch",
      },
    },
    dining: {
      subtitle: "Gastronomie & Erholung",
      title: "Restaurant & Entspannung",
      description: "Erleben Sie die authentische podolische Kuche in unserem gemutlichen Restaurant. Die Gerichte werden aus lokalen Bauernprodukten zubereitet und mit Herz serviert.",
      items: [
        { title: "Podolische Kuche", desc: "Authentische regionale Gerichte aus den frischesten Zutaten von lokalen Bauern." },
        { title: "Frische Fruchte aus dem Hof", desc: "Im Sommer geniessen unsere Gaste kostenlose Trauben, Erdbeeren und andere Fruchte direkt aus unserem Oko-Garten." },
        { title: "MICE-Moglichkeiten", desc: "Idealer Raum fur kleine Firmenveranstaltungen, Schulungen und Teambuilding-Aktivitaten fur Gruppen bis 40 Personen." },
        { title: "Sommerbar", desc: "Ein wunderbarer Ort im Freien auf dem Hotelgelande fur abendliche Entspannung mit Ihren Lieblingsgetranken." },
        { title: "Leckere Fruhstucke", desc: "Gaste bewerten unsere herzhaften Fruhstucke sehr hoch (9/10), die ausschliesslich aus frischen Bauernprodukten zubereitet werden." },
      ],
      imgAlt: {
        kitchen: "Hotelkuche",
        yard: "Hotelinnenhof",
        diningRoom: "Speisesaal",
      },
    },
    gallery: {
      subtitle: "Galerie",
      title: "Fotogalerie unseres Hotels",
      photoAlt: "Hotelfoto",
      prevPage: "Vorherige Seite",
      nextPage: "Nachste Seite",
      close: "Schliessen",
      prevPhoto: "Vorheriges Foto",
      nextPhoto: "Nachstes Foto",
      page: "Seite",
    },
    location: {
      subtitle: "Information",
      title: "Lage & Wichtige Informationen",
      mapTitle: "Standort des Hotels Smotrytska Perlyna",
      addressLabel: "Adresse",
      addressStreet: "Oleksandra-Udowytschenka-Str. 14",
      addressFormer: "(ehemals Papanina-Str.)",
      addressCity: "Kamjanez-Podilskyj, Oblast Chmelnyzkyj, Ukraine",
      policies: [
        { title: "Parkplatz", content: "Privater geschlossener Parkplatz auf dem Hotelgelande. Wichtig: Aufgrund des kompakten Gelandes bitten wir Sie, Ihre morgendliche Abreisezeit mit der Rezeption abzustimmen." },
        { title: "Check-in & Check-out Zeiten", content: "Check-in: 14:00 \u2013 21:00. Check-out: 08:00 \u2013 12:00. Fur einen spaten Check-in nach 21:00 rufen Sie bitte die Rezeption an." },
        { title: "Unterbringungsregeln", content: "Die Bezahlung fur Unterkunft und Dienstleistungen erfolgt ausschliesslich in bar (kein Kartenterminal). Bitte berucksichtigen Sie dies bei der Reiseplanung. Familienzimmer sind verfugbar; Kinder sind willkommen." },
        { title: "Trinkwasser", content: "Bitte beachten Sie, dass in den Zimmern kein Flaschenwasser bereitgestellt wird. Sie konnen es im Lebensmittelgeschaft direkt neben dem Anwesen kaufen." },
        { title: "Fruher Check-in", content: "Wir kommen unseren Gasten immer entgegen: Wenn Ihr Zimmer bereits vor 14:00 Uhr gereinigt und verfugbar ist, checken wir Sie gerne ohne Aufpreis fruher ein." },
      ],
    },
    footer: {
      brandName: "Smotrytska Perlyna",
      brandDesc: "Oko-Hotel im Herzen des historischen Kamjanez-Podilskyj. Ihre perfekte Balance zwischen Geschichte und Natur.",
      navHeading: "Navigation",
      copyright: "\u00A9 2026 Smotrytska Perlyna. Alle Rechte vorbehalten.",
    },
  },
  FR: {
    nav: {
      amenities: "Commodites",
      rooms: "Chambres",
      restaurant: "Restaurant",
      gallery: "Galerie",
      reviews: "Avis",
      locationFaq: "Lieu",
      contacts: "Contacts",
      book: "Reserver",
    },
    hero: {
      headline: "Eco-repos au coeur d'une ville historique",
      subheadline: "Decouvrez l'harmonie de la tranquillite et la grandeur du passe. Votre coin ideal pour la detente et l'inspiration.",
      rating: "Note / 10",
      rooms: "Chambres cosy",
      fortress: "A la Vieille Forteresse",
      checkin: "Arrivee",
      checkout: "Depart",
      guests: "Voyageurs",
      selectDate: "Choisir la date",
      adults: "adultes",
      search: "Chercher chambres",
    },
    highlights: {
      subtitle: "Pourquoi nous choisir",
      title: "Votre confort \u2013 notre priorite",
      features: {
        wifi: { title: "Wi-Fi gratuit", desc: "Internet haut debit disponible dans tout l'hotel et dans toutes les chambres, entierement gratuit." },
        parking: { title: "Parking prive", desc: "Parking prive sur place a votre disposition (reservation prealable et coordination de l'heure de depart requises)." },
        comfort: { title: "Confort en chambre", desc: "Chaque chambre est equipee d'un refrigerateur, d'une bouilloire electrique, d'une moustiquaire et d'un chauffage individuel." },
        delivery: { title: "Livraison repas et boissons", desc: "Commandez la livraison de repas et de boissons directement dans votre chambre pour un maximum de detente." },
        reception: { title: "Reception ouverte 24h/24", desc: "Notre reception fonctionne 24 heures sur 24 pour un enregistrement et un depart confortables a tout moment." },
        conference: { title: "Salles de conference / banquet", desc: "Espaces ideaux pour conferences, formations et banquets pour des groupes jusqu'a 40 personnes." },
        nosmoking: { title: "Chambres non-fumeurs", desc: "Toutes les chambres de l'hotel sont non-fumeurs pour un confort maximal et une qualite d'air optimale." },
        cafe: { title: "Caf\u00E9", desc: "Un cafe chaleureux sur le territoire de l'hotel ou vous pourrez deguster un cafe aromatique et des patisseries fraiches." },
      },
    },
    reviews: {
      subtitle: "Avis",
      title: "Ce que disent nos clients",
      ratingLabel: "\u2013 note de l'hotel",
      testimonials: [
        { name: "Olena K.", location: "Kiev", text: "Emplacement incroyable ! La forteresse est litteralement au coin de la rue, et l'hotel est calme et paisible. Le personnel est tres attentif. Nous reviendrons certainement !", rating: 10 },
        { name: "Maksym D.", location: "Lviv", text: "Les petits-dejeuners ici sont tout simplement divins ! Tout est frais, fait maison, portions genereuses. Merci particulierement pour la proprete des chambres.", rating: 10 },
        { name: "Iryna & Andriy", location: "Odessa", text: "La cour verte avec ses raisins et ses baies nous a impressionnes. En ete, c'est un vrai paradis ! Les enfants ont adore cueillir des fraises directement du jardin.", rating: 10 },
        { name: "Taras P.", location: "Kharkiv", text: "Emplacement tres calme, pourtant tout est a proximite. Chambre propre, lit confortable. Un plus pour le parking sur place. Recommande !", rating: 9 },
        { name: "Nataliia V.", location: "Dnipro", text: "Nous sommes venus pour le week-end et ne voulions plus partir. Atmosphere d'eco-domaine, cour accueillante, hotes chaleureux. Petit-dejeuner 10 sur 10 !", rating: 10 },
        { name: "Oleksandr M.", location: "Vinnytsya", text: "Endroit parfait pour un voyage romantique. Balcon avec vue sur le jardin, silence, air frais. Merci pour de merveilleuses vacances !", rating: 10 },
        { name: "Mariia S.", location: "Ternopil", text: "J'etais ici avec des amies pour un enterrement de vie de jeune fille. Restaurant merveilleux, bar d'ete, cour atmospherique. Tout organise au plus haut niveau !", rating: 9 },
        { name: "Dmytro L.", location: "Zaporijjia", text: "Deuxieme fois ici et tout est a nouveau impeccable. La proprete est parfaite, le Wi-Fi fonctionne parfaitement, et les petits-dejeuners ravissent a chaque fois avec de nouveaux plats.", rating: 10 },
        { name: "Yuliia B.", location: "Rivne", text: "Un eco-domaine en plein centre ! Raisins, fleurs, silence \u2014 et c'est a 2 minutes de la forteresse. Une combinaison incroyable de nature et d'histoire.", rating: 10 },
        { name: "Serhii Sh.", location: "Tchernivtsi", text: "Venu en voyage d'affaires avec des collegues. Chambres propres, tout le necessaire est la. Parking pratique. Petit-dejeuner copieux, recommande pour les voyages d'affaires.", rating: 9 },
        { name: "Kateryna R.", location: "Poltava", text: "Enfin trouve un hotel a Kamianets ou l'on veut rester plus longtemps. Personnel amical, cuisine delicieuse, cour verte. Top !", rating: 10 },
        { name: "Ihor N.", location: "Khmelnytskyy", text: "J'amene regulierement des invites etrangers ici. Tous sont ravis de l'atmosphere et de la proximite de la forteresse. Qualite constamment elevee.", rating: 10 },
        { name: "Anna H.", location: "Soumy", text: "Un endroit calme avec une atmosphere chaleureuse. Le jardin ecologique et la possibilite de cueillir des baies etaient particulierement impressionnants. Petit-dejeuner maison et tres savoureux !", rating: 10 },
        { name: "Vasyl K.", location: "Oujhorod", text: "Nous avons traverse la moitie de l'Ukraine pour sejourner ici \u2014 et n'avons pas regrette une seule seconde. Superbe emplacement, proprete et petit-dejeuner matinal avec des produits fermiers.", rating: 10 },
        { name: "Lioudmyla T.", location: "Tcherkasy", text: "Nous voyageons avec mon mari chaque annee et c'est notre hotel prefere a Kamianets. Confortable, propre, verdoyant. Les proprietaires sont des gens en or !", rating: 10 },
      ],
    },
    rooms: {
      subtitle: "Hebergement",
      title: "Nos Chambres",
      description: "Chaque chambre est pensee dans les moindres details pour votre confort maximal",
      book: "Reserver",
      bottomNote: "L'hotel est un eco-domaine separe au sein du complexe \u00ABPerlyna Podillia\u00BB.",
      photoAlt: "photo",
      items: [
        { title: "Chambre Double Standard", price: "UAH 1 300 / nuit", capacity: "2 voyageurs", details: "1 grand lit double" },
        { title: "Chambre Double Superieure", price: "UAH 1 500 / nuit", capacity: "2 voyageurs", details: "Surface : 20 m². 1 grand lit double" },
        { title: "Chambre Quadruple avec Douche", price: "UAH 2 000 / nuit", capacity: "4 voyageurs", details: "Surface : 39 m². 2 grands lits doubles" },
        { title: "Lit en Dortoir 6 Lits", price: "UAH 450 / nuit", capacity: "1 voyageur", details: "Surface : 16 m². 1 lit simple" },
      ],
      amenities: {
        aircon: "Climatisation",
        tv: "Television",
        wifi: "Wi-Fi gratuit",
        privateBathroom: "Salle de bain privee",
        sharedBathroom: "Salle de bain commune",
        fridge: "Refrigerateur",
        kettle: "Bouilloire",
        balconyView: "Balcon avec vue sur la cour",
        balcony: "Balcon",
        sofa: "Canape",
        desk: "Bureau",
      },
    },
    dining: {
      subtitle: "Gastronomie & Detente",
      title: "Restaurant & Relaxation",
      description: "Decouvrez la cuisine authentique de Podolie dans notre restaurant chaleureux. Les plats sont prepares avec des produits fermiers locaux et servis avec coeur.",
      items: [
        { title: "Cuisine podolienne", desc: "Plats regionaux authentiques prepares avec les ingredients les plus frais des agriculteurs locaux." },
        { title: "Fruits frais de la cour", desc: "En ete, nos clients profitent de raisins, fraises et autres fruits offerts, cueillis directement dans notre eco-jardin." },
        { title: "Possibilites MICE", desc: "Espace ideal pour de petits evenements d'entreprise, formations et activites de team-building pour des groupes jusqu'a 40 personnes." },
        { title: "Bar d'ete", desc: "Un endroit merveilleux en plein air sur le terrain de l'hotel pour la detente du soir avec vos boissons preferees." },
        { title: "Delicieux petits-dejeuners", desc: "Les clients evaluent tres bien nos petits-dejeuners copieux (9/10), prepares exclusivement avec des produits fermiers frais." },
      ],
      imgAlt: {
        kitchen: "Cuisine de l'hotel",
        yard: "Cour de l'hotel",
        diningRoom: "Salle a manger",
      },
    },
    gallery: {
      subtitle: "Galerie",
      title: "Galerie photo de notre hotel",
      photoAlt: "Photo de l'hotel",
      prevPage: "Page precedente",
      nextPage: "Page suivante",
      close: "Fermer",
      prevPhoto: "Photo precedente",
      nextPhoto: "Photo suivante",
      page: "Page",
    },
    location: {
      subtitle: "Informations",
      title: "Lieu & Informations Importantes",
      mapTitle: "Emplacement de l'hotel Smotrytska Perlyna",
      addressLabel: "Adresse",
      addressStreet: "14, rue Oleksandra Oudovytchenka",
      addressFormer: "(anciennement rue Papanina)",
      addressCity: "Kamianets-Podilskyï, Oblast de Khmelnytskyï, Ukraine",
      policies: [
        { title: "Parking", content: "Parking prive couvert sur le terrain de l'hotel. Important : en raison du territoire compact, veuillez coordonner votre heure de depart matinale avec l'administration." },
        { title: "Heures d'arrivee et de depart", content: "Arrivee : 14h00 \u2013 21h00. Depart : 08h00 \u2013 12h00. Pour une arrivee tardive apres 21h00, appelez la reception pour convenir des modalites." },
        { title: "Regles d'hebergement", content: "Le paiement de l'hebergement et des services se fait exclusivement en especes (pas de terminal de paiement). Veuillez en tenir compte lors de la planification de votre voyage. Chambres familiales disponibles ; les enfants sont les bienvenus." },
        { title: "Eau potable", content: "Veuillez noter que l'eau en bouteille n'est pas fournie dans les chambres. Vous pouvez l'acheter a l'epicerie situee juste a cote du domaine." },
        { title: "Arrivee anticipee", content: "Nous faisons toujours notre possible pour nos clients : si votre chambre est deja nettoyee et disponible avant 14h00, nous vous installerons avec plaisir sans frais supplementaires." },
      ],
    },
    footer: {
      brandName: "Smotrytska Perlyna",
      brandDesc: "Eco-hotel au coeur de la ville historique de Kamianets-Podilskyï. Votre equilibre parfait entre histoire et nature.",
      navHeading: "Navigation",
      copyright: "\u00A9 2026 Smotrytska Perlyna. Tous droits reserves.",
    },
  },
  PL: {
    nav: {
      amenities: "Udogodnienia",
      rooms: "Pokoje",
      restaurant: "Restauracja",
      gallery: "Galeria",
      reviews: "Opinie",
      locationFaq: "Lokalizacja",
      contacts: "Kontakty",
      book: "Zarezerwuj",
    },
    hero: {
      headline: "Eko-wypoczynek w sercu historycznego miasta",
      subheadline: "Odkryj harmonie spokoju i wspanialosci przeszlosci. Twoj idealny zakatek do relaksu i inspiracji.",
      rating: "Ocena / 10",
      rooms: "Przytulnych pokoi",
      fortress: "Do Starej Twierdzy",
      checkin: "Zameldowanie",
      checkout: "Wymeldowanie",
      guests: "Goscie",
      selectDate: "Wybierz date",
      adults: "doroslych",
      search: "Szukaj pokoi",
    },
    highlights: {
      subtitle: "Dlaczego nas wybierac",
      title: "Twoj komfort \u2013 nasz priorytet",
      features: {
        wifi: { title: "Bezplatne Wi-Fi", desc: "Szybki internet jest dostepny w calym hotelu i we wszystkich pokojach calkowicie bezplatnie." },
        parking: { title: "Prywatny parking", desc: "Do Twojej dyspozycji prywatny parking na terenie (wymaga wczesniejszej rezerwacji i uzgodnienia czasu wyjazdu)." },
        comfort: { title: "Komfort w pokojach", desc: "Kazdy pokoj wyposazone jest w lodowke, czajnik elektryczny, moskitiere i ogrzewanie indywidualne." },
        delivery: { title: "Dostawa jedzenia i napojow", desc: "Mozliwosc zamowienia dostawy jedzenia i napojow bezposrednio do pokoju dla maksymalnego relaksu." },
        reception: { title: "Calodobowa recepcja", desc: "Nasza recepcja dziala calodobowo, zapewniajac wygodne zameldowanie i wymeldowanie o kazdej porze." },
        conference: { title: "Sale konferencyjne / bankietowe", desc: "Idealne pomieszczenia na konferencje, szkolenia i bankiety dla grup do 40 osob." },
        nosmoking: { title: "Pokoje dla niepalacych", desc: "Wszystkie pokoje hotelowe sa dla niepalacych, co zapewnia maksymalny komfort i jakosc powietrza." },
        cafe: { title: "Kawiarnia", desc: "Przytulna kawiarnia na terenie hotelu, gdzie mozna skosztowac aromatycznej kawy i swiezych wypiekow." },
      },
    },
    reviews: {
      subtitle: "Opinie",
      title: "Co mowia nasi goscie",
      ratingLabel: "\u2013 ocena hotelu",
      testimonials: [
        { name: "Olena K.", location: "Kijow", text: "Niesamowita lokalizacja! Twierdza jest dosrownie za rogiem, a w hotelu cisza i spokoj. Personel bardzo uwazny. Na pewno wrocimy!", rating: 10 },
        { name: "Maksym D.", location: "Lwow", text: "Sniadania tutaj sa po prostu boskie! Wszystko swieze, domowe, porcje obfite. Szczegolne podziekowania za czystosc w pokojach.", rating: 10 },
        { name: "Iryna i Andrij", location: "Odessa", text: "Zielone podworko z winogronami i jagodami nas zachwyciLo. Latem to prawdziwy raj! Dzieci byly zachwycone truskawkami prosto z grządki.", rating: 10 },
        { name: "Taras P.", location: "Charkow", text: "Bardzo spokojna lokalizacja, a jednak wszystko blisko. Pokoj czysty, lozko wygodne. Dodatkowy plus za parking na terenie. Polecam!", rating: 9 },
        { name: "Nataliia W.", location: "Dniepr", text: "Przyjechalismy na weekend i nie chcielismy wyjezdzac. Atmosfera eko-posiadlosci, przytulne podworko, goscinni gospodarze. Sniadanie 10 na 10!", rating: 10 },
        { name: "Oleksandr M.", location: "Winnica", text: "Idealne miejsce na romantyczna podroz. Balkon z widokiem na ogrod, cisza, swieze powietrze. Dziekujemy za wspanialy wypoczynek!", rating: 10 },
        { name: "Marija S.", location: "Tarnopol", text: "Bylam z przyjaciolkami na wieczorze panienskim. Wspaniala restauracja, letni bar, klimatyczne podworko. Wszystko zorganizowane na najwyzszym poziomie!", rating: 9 },
        { name: "Dmytro L.", location: "Zaporoze", text: "Drugi raz tutaj i znow wszystko nienaganne. Czystosc idealna, Wi-Fi dziala doskonale, a sniadania za kazdym razem zachwycaja nowymi potrawami.", rating: 10 },
        { name: "Julija B.", location: "Rowne", text: "Eko-posiadlosc w samym centrum! Winogrona, kwiaty, cisza \u2014 i to 2 minuty od twierdzy. Niesamowite polaczenie natury i historii.", rating: 10 },
        { name: "Serhij Sz.", location: "Czerniowce", text: "Przyjechalem sluzbowo z kolegami. Pokoje czyste, jest wszystko co potrzeba. Wygodny parking. Sniadanie syte, polecam na wyjazdy sluzbowe.", rating: 9 },
        { name: "Kateryna R.", location: "Poltawa", text: "Wreszcie znalezlismy hotel w Kamiencu, gdzie chce sie zostac dluzej. Przyjazny personel, pyszna kuchnia, zielone podworko. Top!", rating: 10 },
        { name: "Ihor N.", location: "Chmielnicki", text: "Regularnie przywoze tu gosci z zagranicy. Wszyscy sa zachwyceni atmosfera i bliskoscia twierdzy. Stale wysoka jakosc.", rating: 10 },
        { name: "Anna H.", location: "Sumy", text: "Spokojne miejsce z ciepla atmosfera. Szczegolnie zaimponowal eko-ogrod i mozliwosc zbierania jagod. Sniadanie domowe i bardzo smaczne!", rating: 10 },
        { name: "Wasyl K.", location: "Uzhorod", text: "Przejachalismy pol Ukrainy zeby sie tu zatrzymac \u2014 i nie zaLowaliscmy ani jednej sekundy. Swietna lokalizacja, czystosc i poranne sniadanie z produktami z farmy.", rating: 10 },
        { name: "Ludmyla T.", location: "Czerkasy", text: "Podrozujemy z mezem co roku i to nasz ulubiony hotel w Kamiencu. Przytulnie, czysto, zielono. Wlasciciele to zloci ludzie!", rating: 10 },
      ],
    },
    rooms: {
      subtitle: "Zakwaterowanie",
      title: "Nasze Pokoje",
      description: "Kazdy pokoj jest przemyslany w najdrobniejszych szczegolach dla Twojego maksymalnego komfortu",
      book: "Zarezerwuj",
      bottomNote: "Hotel jest oddzielna eko-posiadloscia w strukturze kompleksu \u00ABPerlyna Podillia\u00BB.",
      photoAlt: "zdjecie",
      items: [
        { title: "Standardowy pokoj dwuosobowy", price: "UAH 1 300 / noc", capacity: "2 goscie", details: "1 duze lozko podwojne" },
        { title: "Ulepszony pokoj dwuosobowy", price: "UAH 1 500 / noc", capacity: "2 goscie", details: "Powierzchnia: 20 m². 1 duze lozko podwojne" },
        { title: "Pokoj czteroosobowy z prysznicem", price: "UAH 2 000 / noc", capacity: "4 goscie", details: "Powierzchnia: 39 m². 2 duze lozka podwojne" },
        { title: "Lozko w 6-osobowym dormitorium", price: "UAH 450 / noc", capacity: "1 gosc", details: "Powierzchnia: 16 m². 1 lozko pojedyncze" },
      ],
      amenities: {
        aircon: "Klimatyzacja",
        tv: "Telewizor",
        wifi: "Bezplatne Wi-Fi",
        privateBathroom: "Prywatna lazienka",
        sharedBathroom: "Wspolna lazienka",
        fridge: "Lodowka",
        kettle: "Czajnik",
        balconyView: "Balkon z widokiem na podworko",
        balcony: "Balkon",
        sofa: "Sofa",
        desk: "Biurko",
      },
    },
    dining: {
      subtitle: "Gastronomia i Wypoczynek",
      title: "Restauracja i Relaks",
      description: "Poczuj autentyczna kuchnie podolska w naszej przytulnej restauracji. Potrawy przygotowywane sa z lokalnych produktow rolniczych i serwowane z sercem.",
      items: [
        { title: "Kuchnia podolska", desc: "Autentyczne regionalne potrawy z najswiezszych skladnikow od lokalnych rolnikow." },
        { title: "Swieze owoce z podworka", desc: "Latem nasi goscie moga degustowac bezplatne winogrona, truskawki i inne owoce prosto z naszego eko-ogrodu." },
        { title: "Mozliwosci MICE", desc: "Idealna przestrzen na male wydarzenia firmowe, szkolenia i team-buildingi dla grup do 40 osob." },
        { title: "Letni bar", desc: "Wspaniale miejsce na swiezym powietrzu na terenie hotelu do wieczornego relaksu z ulubionymi napojami." },
        { title: "Pyszne sniadania", desc: "Goscie bardzo wysoko oceniaja nasze syte sniadania (9/10), przygotowywane wylacznie ze swiezych produktow z farmy." },
      ],
      imgAlt: {
        kitchen: "Kuchnia hotelowa",
        yard: "Podworko hotelowe",
        diningRoom: "Sala jadalna",
      },
    },
    gallery: {
      subtitle: "Galeria",
      title: "Galeria zdjec naszego hotelu",
      photoAlt: "Zdjecie hotelu",
      prevPage: "Poprzednia strona",
      nextPage: "Nastepna strona",
      close: "Zamknij",
      prevPhoto: "Poprzednie zdjecie",
      nextPhoto: "Nastepne zdjecie",
      page: "Strona",
    },
    location: {
      subtitle: "Informacje",
      title: "Lokalizacja i Wazne Informacje",
      mapTitle: "Lokalizacja hotelu Smotrytska Perlyna",
      addressLabel: "Adres",
      addressStreet: "ul. Oleksandra Udowyczenki 14",
      addressFormer: "(dawniej ul. Papanina)",
      addressCity: "Kamieniec Podolski, obwod chmielnicki, Ukraina",
      policies: [
        { title: "Parking", content: "Prywatny parking zamkniety na terenie hotelu. Wazne: ze wzgledu na kompaktowe terytorium, prosimy o uzgodnienie czasu porannego wyjazdu z recepcja." },
        { title: "Godziny zameldowania i wymeldowania", content: "Zameldowanie: 14:00 \u2013 21:00. Wymeldowanie: 08:00 \u2013 12:00. W przypadku poznego zameldowania po 21:00 prosimy o kontakt z recepcja." },
        { title: "Zasady zakwaterowania", content: "Platnosc za zakwaterowanie i uslugi przyjmowana jest wylacznie gotowka (brak terminala platniczego). Prosimy to uwzglednic przy planowaniu podrozy. Pokoje rodzinne dostepne; dzieci mile widziane." },
        { title: "Woda pitna", content: "Prosimy zauwazyc, ze butelkowana woda pitna nie jest zapewniana w pokojach. Mozna ja kupic w sklepie spozywczym znajdujacym sie tuz obok posiadlosci." },
        { title: "Wczesne zameldowanie", content: "Zawsze wchodzimy naprzeciw naszym gosciom: jesli pokoj jest juz posprzatany i dostepny przed 14:00, z przyjemnoscia zameldujemy Panstwa wczesniej bez dodatkowych oplat." },
      ],
    },
    footer: {
      brandName: "Smotrytska Perlyna",
      brandDesc: "Eko-hotel w sercu historycznego Kamieniec Podolskiego. Twoja idealna rownowaga miedzy historia a natura.",
      navHeading: "Nawigacja",
      copyright: "\u00A9 2026 Smotrytska Perlyna. Wszelkie prawa zastrzezone.",
    },
  },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  locale: "UK",
  setLocale: () => {},
  t: translations.UK,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("UK");

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, t: translations[locale] }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
