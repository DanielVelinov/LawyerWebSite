// снимки
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";

import blogSingleImg1 from "../images/blog/img-4.jpg";
import blogSingleImg2 from "../images/blog/img-5.jpg";
import blogSingleImg3 from "../images/blog/img-6.jpg";

const blogs = [
    {
        id: '1',
        title: 'Предоставяне на информация как бизнесмени могат да използват канабиса',
        slug:'Provide-insight-into-how-canna-businesspeople-can-use',
        screens: blogImg1,
        thumb:'Адвокат, Право',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Ан Уилям',
        authorTitle:'Наказателен адвокат',
        create_at: '14 AUG,23',
        blogSingleImg: blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Блогът за канабис е форум за обсъждане на практически въпроси',
        slug:'Canna-Law-Blog-is-a-forum-for-discussing-the-practical',
        screens: blogImg2,
        thumb:'Адвокат, Право',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Канал Бири',
        authorTitle:'Семеен адвокат',
        create_at: '16 AUG,23',
        blogSingleImg: blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Кого може да съди жертва след автомобилна катастрофа?',
        slug:'Who-Can-a-Victim-Sue-after-a-Car-Accident',
        screens: blogSingleImg3,
        thumb:'Адвокат, Право',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Дженифър Уили',
        authorTitle:'Бизнес адвокат',
        create_at: '18 AUG,23',
        blogSingleImg: blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
];

export default blogs;
