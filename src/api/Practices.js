import simg from '../images/service-single/img-1.jpg'
import simg2 from '../images/service-single/img-2.jpg'
import simg3 from '../images/service-single/img-3.jpg'
import simg4 from '../images/service-single/img-4.jpg'
import simg5 from '../images/service-single/img-5.jpg'
import simg6 from '../images/service-single/img-6.jpg'
import simg7 from '../images/service-single/img-7.jpg'
import simg8 from '../images/service-single/img-8.jpg'
import simg9 from '../images/service-single/img-9.jpg'
 

const Practices = [
    {
        Id: '1',
        sImg: simg,
        sIcon: 'flaticon-parents', // примерна иконка
        sTitle: 'Търговско право',
        slug: 'targovsko-pravo',
        description:
            'Предлагаме съдействие и консултации за регистрация на фирми, промени в обстоятелствата, преобразувания, ликвидация и всичко свързано с търговски дружества.',
        des2:
            'Допълнителна информация за процедурите и необходимите документи по Търговско право.',
        des3:
            'Ползите от услугата включват спестяване на време, намаляване на административните рискове и професионална правна подкрепа.',
    },
    {
        Id: '2',
        sImg: simg2,
        sIcon: 'flaticon-wounded',
        sTitle: 'Аружствено право',
        slug: 'aruzhestveno-pravo',
        description:
            'Консултации и съдействие при уреждане на правоотношения, свързани с дружества и сдружения, учредяване на фондации и други юридически лица с нестопанска цел.',
        des2:
            'Информация за процедури по регистрация, вписване в публични регистри и промени в съответните дружества.',
        des3:
            'Предимството е качествена правна помощ и навременна реакция при конфликти в дружеството.',
    },
    {
        Id: '3',
        sImg: simg3,
        sIcon: 'flaticon-thief',
        sTitle: 'Недвижими имоти',
        slug: 'nedvizhimi-imoti',
        description:
            'Правни услуги при покупко-продажба на недвижими имоти, изготвяне на предварителни договори, нотариални актове, проучване на имотния статут и др.',
        des2:
            'Обхваща съдействие при прехвърляне на собственост, учредяване на ипотеки, договори за наем, спорове между съсобственици и т.н.',
        des3:
            'Гарантираме коректност и защита на интересите ви при сделките с недвижими имоти.',
    },
    {
        Id: '4',
        sImg: simg4,
        sIcon: 'flaticon-mortarboard',
        sTitle: 'Семейно и наследствено право',
        slug: 'semeino-i-nasledstveno-pravo',
        description:
            'Развод по взаимно съгласие или по исков ред, брачни договори, установяване на родителски права, уреждане на наследствени дялове и пр.',
        des2:
            'Помощ при производство по делби, разпределение на имущество при развод, защита правата на децата и наследяване.',
        des3:
            'Целта е постигане на справедливи и законосъобразни решения в семейните и наследствени въпроси.',
    },
    {
        Id: '5',
        sImg: simg5,
        sIcon: 'flaticon-architecture-and-city',
        sTitle: 'Трудово право',
        slug: 'trudovo-pravo',
        description:
            'Изготвяне и преглед на трудови договори, защита при незаконно уволнение, обезщетения, дисциплинарни наказания, съдействие при преговори между работодател и служител.',
        des2:
            'Правилна интерпретация на трудовото законодателство, колективни трудови договори и защита при трудови спорове.',
        des3:
            'Ползи: запазване на правата на страните и минимизиране на трудови конфликти.',
    },
    {
        Id: '6',
        sImg: simg6,
        sIcon: 'flaticon-save-money',
        sTitle: 'Процесуално представителство',
        slug: 'procesualno-predstavitelstvo',
        description:
            'Представителство пред съд и арбитраж при търговски, граждански, семейни, административни и други дела. Изготвяне на процесуални документи и защита.',
        des2:
            'Проучване на казуса, стратегия на защита, процесуална тактика, обжалване на съдебни актове.',
        des3:
            'Гарантираме професионализъм и индивидуален подход за постигане на най-добрия възможен правен резултат.',
    },
    {
        Id: '7',
        sImg: simg7, // ако нямате simg7, ползвайте някоя от наличните
        sIcon: 'flaticon-parents',
        sTitle: 'Административно право',
        slug: 'administrativno-pravo',
        description:
            'Обжалване на наказателни постановления, възражения срещу АУАН, обжалване на административни актове и др.',
        des2:
            'Съдействие при издаване на лицензи, разрешения и регистрации в публични регистри, обжалване на актове на НАП, НОИ и др.',
        des3:
            'Целта е законосъобразно решаване на административни спорове и защита на правата на граждани и организации.',
    },
    {
        Id: '8',
        sImg: simg8, // ако нямате simg8, ползвайте друга
        sIcon: 'flaticon-thief',
        sTitle: 'Изпълнително дело',
        slug: 'izpalnitelno-delo',
        description:
            'Преглед и консултация по изпълнително дело, обжалване на незаконносъобразни действия на ЧСИ, защита на длъжника и взискателя, прекратяване на изпълнително дело.',
        des2:
            'Съдействие при налагане на запори, възбрани и принудително събиране на задължения.',
        des3:
            'Нашата цел е да намерим най-ефективното решение, съобразено с интересите на клиента и закона.',
    },
    {
        Id: '9',
        sImg: simg9, // или повторете някоя друга, ако нямате
        sIcon: 'flaticon-mortarboard',
        sTitle: 'Медицинско право',
        slug: 'medicinsko-pravo',
        description:
            'Правна помощ при казуси, свързани с медицински грешки, правата на пациентите, договори с лечебни заведения, административни процедури в здравеопазването и др.',
        des2:
            'Съдействие при уреждане на отговорността на медицински лица и защита на професионалната им практика.',
        des3:
            'Осигуряваме качествена правна консултация с цел защита на здравните права на пациентите и интересите на медицинския персонал.',
    },
];

export default Practices;
