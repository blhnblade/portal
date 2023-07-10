const portal = {
    init: function(){ 
        this.getEventsMessage.init();
        this.navigationBlock.init();
        this.navActive.init();
        this.getSurveyItems.init();
        this.getUserProgress.init();
        this.fieldСleaning.init();
        this.modalWindow.init();
        this.tabs.init();
        this.calendarOpen.init();
    },
    getEventsMessage:{
        init: function(){
            if(document.body.dataset.page === 'main'){
                this.start();
            }
        },
        start: function(){
            const container = document.querySelector('.events__info_1');

            const data = [
                {img: './img/events/s-photo.png', heading: 'День рождения Константина Константинопольского', time: 'Сегодня', info: 'Исполнилось 25 лет'},
                {img: './img/events/s-photo.png', heading: 'Hook Bar', time: 'Cегодня, 21:00 МСК', info: 'Discord-канал Hook Production. Будем играть в «Бункер»'},
                {img: './img/events/s-photo.png', heading: '+1 UX/UI дизайнер в команду', time: 'Сегодня', info: 'Анастасия Кулешова'}
            ]

            for(let i = 0; i < data.length; i++){
                const message = document.createElement('div');
                message.classList.add('events__message');
                message.innerHTML = `
                <div class="events__user-photo">
                    <div class="events__user-block"></div>
                    <img src="${data[i].img}" alt="user" class="events__img">
                </div>
                <div class="events__message-text">
                    <h5 class="events__message-heading">${data[i].heading}</h5>
                    <p class="events__message-time">${data[i].time}</p>
                    <p class="events__message-info">${data[i].info}</p>
                </div>
                `;
                container.append(message);
            }
            
        }
    },
    navigationBlock: {
        init: function(){
            this.blockInsert();
        },
        blockInsert: function(){
            // containers
            const navContainer = document.querySelector('.nav-container');

            // get data
            const data = {
                avatar: './img/sidebar/person/Avatar.png',
                firstName: 'Николой',
                secondName: 'Константинов',
                balance: 14,
            };

            const  nav = document.createElement('nav');
            nav.classList.add('nav');
            nav.innerHTML = `
            <div class="nav-logo-container">
            <img class="nav-logo" src="./img/sidebar/logo.png" alt="logo">
            <img class="nav-logo-small" src="./img/sidebar/logo-2.png" alt="logo">
            </div>
            <div class="sidebar">
                <div class="person">
                    <a class="avatar" href='./profile.html'>
                        <img class="avatar__img" src="${data.avatar}" alt="avatar">
                        <div class="avatar__balance-container">
                            <div class="avatar__icon-container">
                                <img class="avatar__icon" src="./img/sidebar/person/Wallet.png" alt="wallet">
                            </div>
                            <p class="avatar__balance">${data.balance}</p>
                        </div>
                    </a>
                    <div class="person-name-container">
                        <p class="person-name">
                            <span class="person-name__f-name">${data.firstName}</span>
                            <span class="person-name__s-name">${data.secondName}</span>
                        </p>
                    </div>
                    <div class="menu__active-block hidden"></div>
                </div>
                <ul class="menu">
                    <li class="menu__item">
                        <a class="menu__link" href="./index.html">
                            <div class="menu__active-block"></div>
                            <div class="menu__choice">
                                <div class="menu__icon-container">
                                    <svg class="menu__icon menu__icon_active" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.13478 20.8642V17.8064C9.13478 17.0259 9.77217 16.3931 10.5584 16.3931H13.4326C13.8102 16.3931 14.1723 16.542 14.4393 16.8071C14.7063 17.0721 14.8563 17.4316 14.8563 17.8064V20.8642C14.8539 21.1887 14.9821 21.5007 15.2124 21.731C15.4427 21.9613 15.7561 22.0908 16.0829 22.0908H18.0438C18.9596 22.0932 19.8388 21.7337 20.4872 21.0916C21.1356 20.4496 21.5 19.5778 21.5 18.6686V9.95768C21.5 9.22328 21.1721 8.52666 20.6046 8.05549L13.934 2.76669C12.7737 1.83938 11.1111 1.86932 9.98539 2.8378L3.46701 8.05549C2.87274 8.51277 2.51755 9.21146 2.5 9.95768V18.6598C2.5 20.5547 4.04738 22.0908 5.95617 22.0908H7.87229C8.55123 22.0908 9.103 21.547 9.10792 20.8731L9.13478 20.8642Z" fill="white" fill-opacity="0.7"/>
                                    </svg>
                                </div>
                                <p class="menu__text menu__text-active">Главная</p>
                            </div>
                        </a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link">
                            <div class="menu__active-block hidden"></div>
                            <div class="menu__choice">
                                <div class="menu__icon-container">
                                    <svg class="menu__icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.191 2.09082C19.28 2.09082 21 3.87082 21 6.92082V17.2508C21 20.3508 19.28 22.0908 16.191 22.0908H7.81C4.77 22.0908 3 20.3508 3 17.2508V6.92082C3 3.87082 4.77 2.09082 7.81 2.09082H16.191ZM8.08 15.8308C7.78 15.8008 7.49 15.9408 7.33 16.2008C7.17 16.4508 7.17 16.7808 7.33 17.0408C7.49 17.2908 7.78 17.4408 8.08 17.4008H15.92C16.319 17.3608 16.62 17.0198 16.62 16.6208C16.62 16.2108 16.319 15.8708 15.92 15.8308H8.08ZM15.92 11.2698H8.08C7.649 11.2698 7.3 11.6208 7.3 12.0508C7.3 12.4808 7.649 12.8308 8.08 12.8308H15.92C16.35 12.8308 16.7 12.4808 16.7 12.0508C16.7 11.6208 16.35 11.2698 15.92 11.2698ZM11.069 6.74082H8.08V6.75082C7.649 6.75082 7.3 7.10082 7.3 7.53082C7.3 7.96082 7.649 8.31082 8.08 8.31082H11.069C11.5 8.31082 11.85 7.96082 11.85 7.51982C11.85 7.09082 11.5 6.74082 11.069 6.74082Z" fill="white" fill-opacity="0.7"/>
                                    </svg>                                    
                                </div>
                                <p class="menu__text">Новости</p>
                            </div>
                        </a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link">
                            <div class="menu__active-block hidden"></div>
                            <div class="menu__choice">
                                <div class="menu__icon-container">
                                    <svg class="menu__icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.949 14.6304C15.3802 14.6304 18.31 15.1744 18.31 17.3512C18.31 19.527 15.399 20.0908 11.949 20.0908C8.51785 20.0908 5.58809 19.5469 5.58809 17.371C5.58809 15.1942 8.49904 14.6304 11.949 14.6304ZM17.4351 13.3197C18.7468 13.2954 20.1571 13.4755 20.6782 13.6034C21.7823 13.8204 22.5084 14.2635 22.8093 14.9075C23.0636 15.4361 23.0636 16.0494 22.8093 16.5772C22.349 17.576 20.8654 17.8966 20.2887 17.9794C20.1696 17.9974 20.0738 17.8939 20.0864 17.7741C20.3809 15.0065 18.0377 13.6944 17.4315 13.3926C17.4055 13.3791 17.4002 13.3584 17.4028 13.3458C17.4046 13.3368 17.4154 13.3224 17.4351 13.3197ZM6.5656 13.3201C6.5853 13.3228 6.59515 13.3372 6.59694 13.3453C6.59962 13.3588 6.59425 13.3786 6.56918 13.393C5.9621 13.6947 3.61883 15.0069 3.91342 17.7736C3.92595 17.8942 3.83104 17.9969 3.71195 17.9798C3.13531 17.8969 1.65163 17.5763 1.19139 16.5776C0.936203 16.0489 0.936203 15.4365 1.19139 14.9078C1.49225 14.2639 2.21752 13.8208 3.32156 13.6028C3.84358 13.4759 5.25294 13.2957 6.5656 13.3201ZM11.949 4.09082C14.2851 4.09082 16.1583 5.97309 16.1583 8.32367C16.1583 10.6734 14.2851 12.5574 11.949 12.5574C9.61292 12.5574 7.73974 10.6734 7.73974 8.32367C7.73974 5.97309 9.61292 4.09082 11.949 4.09082ZM17.6634 4.79672C19.9198 4.79672 21.6918 6.93205 21.0883 9.31056C20.6809 10.9118 19.2062 11.9755 17.5631 11.9322C17.3984 11.9277 17.2363 11.9124 17.0796 11.8854C16.9659 11.8656 16.9086 11.7368 16.973 11.6413C17.5998 10.7137 17.9571 9.59785 17.9571 8.40004C17.9571 7.15 17.5667 5.98462 16.8889 5.02907C16.8674 4.99935 16.8513 4.95342 16.8728 4.9192C16.8907 4.89128 16.9238 4.87687 16.9551 4.86967C17.1835 4.82283 17.4181 4.79672 17.6634 4.79672ZM6.33593 4.79663C6.58127 4.79663 6.81586 4.82274 7.04509 4.86958C7.07553 4.87678 7.10956 4.89209 7.12746 4.91911C7.14806 4.95333 7.13284 4.99926 7.11135 5.02898C6.43353 5.98453 6.04313 7.14991 6.04313 8.39995C6.04313 9.59776 6.4004 10.7136 7.02718 11.6412C7.09165 11.7367 7.03434 11.8655 6.92063 11.8853C6.76304 11.9132 6.60186 11.9276 6.43711 11.9321C4.79404 11.9754 3.31932 10.9117 2.91191 9.31047C2.30751 6.93196 4.07951 4.79663 6.33593 4.79663Z" fill="white" fill-opacity="0.7"/>
                                    </svg>
                                    
                                </div>
                                <p class="menu__text">Команда</p>
                            </div>
                        </a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link">
                            <div class="menu__active-block hidden"></div>
                            <div class="menu__choice">
                                <div class="menu__icon-container">
                                    <svg class="menu__icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.05 2.09099C9.981 2.08116 10.85 2.51116 11.42 3.24116L12.3 4.41116C12.58 4.76116 13 4.97116 13.45 4.97116H16.52C20.21 4.97116 22.01 6.94116 22 10.9812V15.8512C22 19.7112 19.62 22.0912 15.75 22.0912H8.24C4.39 22.0912 2 19.7112 2 15.8412V8.33116C2 4.19116 3.84 2.09099 7.47 2.09099H9.05ZM16.63 13.8812H7.37C6.95 13.8812 6.62 14.2112 6.62 14.6312C6.62 15.0412 6.95 15.3812 7.37 15.3812H16.63C17.04 15.3812 17.37 15.0412 17.37 14.6312C17.37 14.2112 17.04 13.8812 16.63 13.8812Z" fill="white" fill-opacity="0.7"/>
                                    </svg>
                                </div>
                                <p class="menu__text">Проекты</p>
                            </div>
                        </a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link">
                            <div class="menu__active-block hidden"></div>
                            <div class="menu__choice">
                                <div class="menu__icon-container">
                                    <svg class="menu__icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.3338 2.09082C19.7231 2.09082 22 4.46893 22 8.00754V16.1741C22 19.7127 19.7231 22.0908 16.3328 22.0908H7.66618C4.2769 22.0908 2 19.7127 2 16.1741V8.00754C2 4.46893 4.2769 2.09082 7.66618 2.09082H16.3338ZM17.4366 12.6409C16.3646 11.9721 15.5371 12.9113 15.3138 13.2116C15.0986 13.5016 14.9136 13.8215 14.7185 14.1414C14.2419 14.9309 13.6958 15.8411 12.7506 16.3705C11.377 17.1311 10.3342 16.4303 9.58404 15.9205C9.30248 15.7307 9.02897 15.5511 8.75645 15.4314C8.08473 15.1414 7.48038 15.4716 6.5834 16.6109C6.11279 17.2064 5.6462 17.7967 5.17358 18.3849C4.89102 18.7368 4.95839 19.2797 5.3395 19.515C5.94788 19.8896 6.68999 20.0908 7.52864 20.0908H15.9564C16.432 20.0908 16.9087 20.0258 17.3632 19.8772C18.3869 19.5428 19.1994 18.7771 19.6237 17.7657C19.9817 16.9154 20.1557 15.8834 19.8208 15.0248C19.7092 14.7399 19.5423 14.4747 19.308 14.2415C18.6936 13.6316 18.1194 13.0619 17.4366 12.6409ZM8.49886 6.09082C7.12021 6.09082 6 7.21255 6 8.59082C6 9.96909 7.12021 11.0908 8.49886 11.0908C9.8765 11.0908 10.9977 9.96909 10.9977 8.59082C10.9977 7.21255 9.8765 6.09082 8.49886 6.09082Z" fill="white" fill-opacity="0.7"/>
                                    </svg>                                    
                                </div>
                                <p class="menu__text">Фотоальбом</p>
                            </div>
                        </a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link">
                            <div class="menu__active-block hidden"></div>
                            <div class="menu__choice">
                                <div class="menu__icon-container">
                                    <svg class="menu__icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0049 2.09082C14.6849 2.09082 16.8882 4.19673 17 6.86514H16.9739C16.977 6.94271 16.9621 7.01995 16.9303 7.09082H17.0865C18.3035 7.09082 19.5778 7.93433 20.0888 9.97062L20.1444 10.2109L20.9133 16.4056C21.4666 20.3566 19.305 22.0181 16.3562 22.0885L16.1585 22.0908H7.86853C4.87178 22.0908 2.56254 20.9988 3.07028 16.6744L3.1049 16.4056L3.88264 10.2109C4.26614 8.01801 5.55361 7.15307 6.79412 7.09408L6.93171 7.09082H7.00989C6.9967 7.01617 6.9967 6.9398 7.00989 6.86514C7.12172 4.19673 9.325 2.09082 12.0049 2.09082ZM9.097 10.4201C8.60889 10.4201 8.21321 10.8274 8.21321 11.3298C8.21321 11.8321 8.60889 12.2394 9.097 12.2394C9.5851 12.2394 9.98079 11.8321 9.98079 11.3298L9.9739 11.2156C9.91936 10.7671 9.54755 10.4201 9.097 10.4201ZM14.8858 10.4201C14.3977 10.4201 14.002 10.8274 14.002 11.3298C14.002 11.8321 14.3977 12.2394 14.8858 12.2394C15.3739 12.2394 15.7696 11.8321 15.7696 11.3298C15.7696 10.8274 15.3739 10.4201 14.8858 10.4201ZM11.9657 3.3932C10.0416 3.3932 8.48184 4.94765 8.48184 6.86514C8.49502 6.9398 8.49502 7.01617 8.48184 7.09082H15.4932C15.4654 7.01876 15.4506 6.94235 15.4497 6.86514C15.4497 4.94765 13.8899 3.3932 11.9657 3.3932Z" fill="white" fill-opacity="0.7"/>
                                    </svg>                                    
                                </div>
                                <p class="menu__text">Магазин</p>
                            </div>
                        </a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link">
                            <div class="menu__active-block hidden"></div>
                            <div class="menu__choice">
                                <div class="menu__icon-container">
                                    <svg class="menu__icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.07 2.09082C17.78 2.09082 19.97 3.16082 20 5.88082V21.0608C20 21.2308 19.96 21.4008 19.88 21.5508C19.75 21.7908 19.53 21.9708 19.26 22.0508C19 22.1308 18.71 22.0908 18.47 21.9508L11.99 18.7108L5.5 21.9508C5.351 22.0298 5.18 22.0808 5.01 22.0808C4.45 22.0808 4 21.6208 4 21.0608V5.88082C4 3.16082 6.2 2.09082 8.9 2.09082H15.07ZM15.75 8.13082H8.22C7.79 8.13082 7.44 8.48082 7.44 8.92082C7.44 9.35982 7.79 9.71082 8.22 9.71082H15.75C16.18 9.71082 16.53 9.35982 16.53 8.92082C16.53 8.48082 16.18 8.13082 15.75 8.13082Z" fill="white" fill-opacity="0.7"/>
                                    </svg>
                                </div>
                                <p class="menu__text">Библиотека</p>
                            </div>
                        </a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link">
                            <div class="menu__active-block hidden"></div>
                            <div class="menu__choice">
                                <div class="menu__icon-container">
                                    <svg class="menu__icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.09082C17.52 2.09082 22 6.57082 22 12.0908C22 17.6208 17.52 22.0908 12 22.0908C6.47 22.0908 2 17.6208 2 12.0908C2 6.57082 6.47 2.09082 12 2.09082ZM15.85 8.80082C15.96 8.45082 15.64 8.12082 15.29 8.23082L10.17 9.83082C9.96 9.90082 9.79 10.0608 9.73 10.2708L8.13 15.4008C8.02 15.7408 8.35 16.0708 8.69 15.9608L13.79 14.3608C14 14.3008 14.17 14.1308 14.23 13.9208L15.85 8.80082Z" fill="white" fill-opacity="0.7"/>
                                    </svg>
                                </div>
                                <p class="menu__text">Wiki</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="arrow-container">
                <button class="arrow-btn"><img class="arrow" src="./img/svg/arrow.svg" alt="arrow"></button>
            </div>
            `;

            // insert in containers
            navContainer.append(nav);
        },
    },
    navActive:{
        init: function(){
            const nav = document.querySelector('.nav');
            const avatarCont = document.querySelector('.avatar')
            const avatarImg = document.querySelector('.avatar__img');
            const logo = document.querySelector('.nav-logo');
            const texts = document.querySelectorAll('.menu__text');
            const arrow = document.querySelector('.arrow-btn');
            const personName = document.querySelector('.person-name');
            
            // open - true, close - false 
            if(localStorage.status !== undefined){
                if(localStorage.status === 'true'){
                    classManipulation('remove');
                } else if (localStorage.status === 'false'){
                    classManipulation('add');
                }
            } else {
                localStorage.status = 'true';
            }
            let flag = localStorage.status;
            nav.addEventListener('click', function(){
                flag = flag === 'true' ? 'false' : 'true';
                classManipulation('toggle');
                localStorage.status = flag;
            })

            function classManipulation(value){
                nav.classList[`${value}`]('nav-no-active');
                logo.classList[`${value}`]('nav-logo-no-active');
                arrow.classList[`${value}`]('arrow-btn-reverse')
                personName.classList[`${value}`]('opacity-zero');
                avatarCont.classList[`${value}`]('avatar-minimized');
                avatarImg.classList[`${value}`]('avatar__img-minimized');
                for(let i = 0; i < texts.length; i++){
                    texts[i].classList[`${value}`]('opacity-zero');
                }
                // sidebar.classList.toggle('sidebar-no-active');
            }
        }
    },
    getSurveyItems:{
        init: function(){
            this.getItems();
        },
        getItems: function(){
            if(document.body.dataset.page === 'main'){
                const data = [
                    {id: '0', value: 'Да'},
                    {id: '1', value: 'Все супер!'},
                    {id: '2', value: 'Ну такое'},
                    {id: '3', value: 'Не понравилось'},
                ]
                const container = document.querySelector('.survey__answers');

                for(let i = 0; i < data.length; i++){
                    let flag = false;
                    const item = document.createElement('div');
                    item.classList.add('survey__item');
                    item.innerHTML = `
                        <input type="radio" name="survey" id="survey_${data[i].id}-answer" class="survey-radio-btn hidden" ${data.length > 2 && i === 1 ? 'checked' : ''} ${data.length === 2 && i === 0 ? 'checked' : ''}>
                        <label for="survey_${data[i].id}-answer" class="surve__label"><span class="surve__checkbox"><span class="surve__checkbox-inside"></span></span><span class="surve__answer">${data[i].value}</span></label>
                    `;
                    container.append(item);
                }

            }
        }
    },
    getUserProgress: {
        init: function(){
            this.getProgress();
        },
        getProgress: function(){
            if(document.body.dataset.page === 'profile'){
                const dataProgress = [
                    {name: 'Проекты', info: 'Проектов пока нет'},
                    {name: 'Моя техника и ПО', info: 'Проектов пока нет'},
                    {name: 'Мой мерч', info: 'Полученный мерч не найден'},
                    {name: 'Мои книги', info: 'Выданные книги отсутствуют'},
                ];
                const dataPosition = [
                    {position: 'UX / UI Designer', dateStart: '12 Ноя 2022', dateFinish: '13 Июл 2022'},
                ];
                // get progress
                const containerProgress = document.querySelector('.user-progress-container');

                for(let i = 0; i < dataProgress.length; i++){
                    const el = document.createElement('div');
                    el.classList.add('user-progress-item');
                    el.innerHTML = `
                        <div class="user-progress-heading">${dataProgress[i].name}</div>
                        <div class="user-progress-info">${dataProgress[i].info}</div>
                    `;
                    containerProgress.append(el);
                }

                // position history
                const containerPosition = document.querySelector('.user-progress-role-in-company');

                for(let i = 0; i < dataPosition.length; i++){
                    const el = document.createElement('div');
                    el.classList.add('user-position');
                    el.innerHTML = `
                        <div class="user-progress-info-role">${dataPosition[i].position}</div>
                        <div class="user-progress-info-date-start">${dataPosition[i].dateStart}</div>
                        <div class="user-progress-info-date-finish">${dataPosition[i].dateFinish}</div>
                    `;
                    containerPosition.append(el);
                }
                
            }
        },
    },
    fieldСleaning: {
        init: function(){
            this.cleaning();
        },
        cleaning: function(){
            const containers = document.querySelectorAll('[data-field-container]');
            for(let i = 0; i < containers.length; i++){
                containers[i].querySelector('[data-field]').addEventListener('input', function(){
                    if(containers[i].querySelector('[data-field]').value !== ''){
                        containers[i].querySelector('[data-btn-field-clean]').classList.remove('hidden');
                    } else {
                        containers[i].querySelector('[data-btn-field-clean]').classList.add('hidden');
                    }
                })
                containers[i].querySelector('[data-field]').addEventListener('click', function(){
                    if(containers[i].querySelector('[data-field]').value !== ''){
                        containers[i].querySelector('[data-btn-field-clean]').classList.remove('hidden');
                    }
                })
            }
            for(let i = 0; i < containers.length; i++){
                containers[i].querySelector('[data-btn-field-clean]').addEventListener('click', function(){
                    containers[i].querySelector('[data-field]').value = '';
                    containers[i].querySelector('[data-btn-field-clean]').classList.add('hidden');        
                    containers[i].querySelector('[data-field]').focus();
                })
            }
        }
    },
    calendarOpen: {
        init: function(){
            this.calendarOpenBlock();
        },
        calendarOpenBlock: function(){
            const calendarsContainers = document.querySelectorAll('[data-calendar-container]');
            for(let i = 0; i < calendarsContainers.length; i++){
                // При нажатии на кнопку появляется календарь
                calendarsContainers[i].querySelector('[data-calendar-btn]').addEventListener('click', function(e){
                    e.stopPropagation();
                    calendarsContainers[i].querySelector('.calendar').classList.remove('hidden');
                });
                // Запрет вспылтия кликов
                calendarsContainers[i].querySelector('.calendar').addEventListener('click', function(e){
                    e.stopPropagation();
                })
                // По клику закрываетс календарь
                window.addEventListener('click', function(){
                    calendarsContainers[i].querySelector('.calendar').classList.add('hidden');
                })
                // Появление иконки календаря, которая открывает его
                calendarsContainers[i].querySelector('[data-field]').addEventListener('input', function(){
                    // if(this.value === ''){
                        calendarsContainers[i].querySelector('[data-calendar-btn]').classList.add('hidden');
                    // } 
                })
                // При нажатии на крестик появлялся календарь
                calendarsContainers[i].querySelector('[data-btn-field-clean]').addEventListener('click', function(){
                    calendarsContainers[i].querySelector('[data-calendar-btn]').classList.remove('hidden')
                })
            }
            // Все календари
            const calendars = document.querySelectorAll('.calendar');
            // Получаем дату сегодняшнего дня
            let nowDate = new Date();
            // Создаем новую дату, она будет по сути, начинаться с перовго числа, указанного месяца и года, без часов и тд
            let data = new Date(nowDate.getFullYear(), nowDate.getMonth())
            if(calendars.length){
                for(let x = 0; x < calendars.length; x++){
                    // Переменная для инпута
                    let value = new Date (nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());

                    Calendar(data.getFullYear(), data.getMonth(), nowDate.getDate(), nowDate.getFullYear(), nowDate.getMonth());

                    function Calendar(year, month, day, nowYear, nowMonth){
                        // Создаем внутреннюю дату, с которой будем работать
                        let functDate = new Date(year, month)

                        // Создаем таблицу
                        // Плюсуем месяцу единицу, чтобы выводился правильно
                        let table = `
                        <div class="calendar-layout">
                                        <div class="calendar-header">
                                            <div class="calendar-controls">
                                                <img src="./img/calendar/double-arrow.svg" class="calendar-btn-prev-year">
                                                <img src="./img/calendar/arrow.svg" class="calendar-btn-prev">
                                            </div>
                                            <div class="calendar-display">${functDate.getMonth()+1} ${functDate.getFullYear()}</div>
                                            <div class="calendar-controls calendar-controls-reverse">
                                                <img src="./img/calendar/arrow.svg" class="calendar-btn-next">
                                                <img src="./img/calendar/double-arrow.svg" class="calendar-btn-next-year">
                                            </div>
                                        </div>
                        <div class="calendar-body-wrapper">

                            <div class="hidden">${functDate.getMonth()+1}, ${functDate.getFullYear()}</div>
                            <table id="calendar">
                                <tr>
                                    <th>Пн</th>
                                    <th>Вт</th>
                                    <th>Ср</th>
                                    <th>Чт</th>
                                    <th>Пт</th>
                                    <th>Сб</th>
                                    <th>Вс</th>
                                </tr>
                                <tr>
                        `;

                        // Делаем начало отсчёта, например, если у нас текущий день недели суббота - это 6 день недели,
                        // то по сути суббота должна начинаться не с начала недели в календаре, у нее есть свое место, чтобы заполнить предыдущие
                        // дни нужно отнять от текущей даты номер субботы(6), то есть текущая дата 01.07 - 6, то получится, что начало календаря с 26 числа(это понедельник)
                        functDate.setDate(functDate.getDate() - getDay(functDate))

                        // Здесь прогоняем по всем ячейкам календаря их 42
                        for(let i = 0; i < 6; i++){
                            for(let j = 0; j < 7; j++){
                                // Смотрим если текущаяя дата из текущего месяца задаем один стиль, если не из текущего то другой
                                if(functDate.getMonth() === month){
                                    if(functDate.getDate() === day && functDate.getFullYear() === nowYear && functDate.getMonth() === nowMonth){
                                        table += `<td class="now-day mark" data-use-day>${functDate.getDate()}</td>`;
                                    } else {
                                        table += `<td class="active-day" data-use-day>${functDate.getDate()}</td>`;
                                    }
                                    
                                    
                                } else {
                                    table += `<td class="no-active-day">${functDate.getDate()}</td>`;
                                }
                                functDate.setDate(functDate.getDate() + 1)
                            }
                            table += `</tr>`
                        }
                        table += `
                                </table>
                            </div>
                            <div class="calendar-footer">
                                <button type="button" class="calendar-btn-confirm">OK</button>
                            </div>
                        </div>
                        `
                        // Внедрение календаря в контейнер
                        calendars[x].innerHTML = table;

                        let days = calendars[x].querySelectorAll('[data-use-day]');
                        for(let i = 0; i < days.length; i++){
                            days[i].addEventListener('click', function(){
                                days.forEach(el => el.classList.remove('mark'));
                                value = new Date (data.getFullYear(), data.getMonth(), days[i].innerText);
                                days[i].classList.add('mark')
                            })
                        }


                        const btnNext = calendars[x].querySelector('.calendar-btn-next');
                        const btnPrev = calendars[x].querySelector('.calendar-btn-prev');
                        const btnNextYear= calendars[x].querySelector('.calendar-btn-next-year');
                        const btnPrevYear= calendars[x].querySelector('.calendar-btn-prev-year');
                        const btnConfirm = calendars[x].querySelector('.calendar-btn-confirm');
                        const calendarInput = calendars[x].closest('[data-calendar-container]').querySelector('[data-field]');

                        btnConfirm.addEventListener('click', function(){
                            // Сохранение выбранной даты в инпуте
                            calendars[x].closest('[data-calendar-container]').querySelector('[data-field]').value = value.toLocaleDateString();
                            // Прячем сам календарь
                            calendars[x].classList.add('hidden')
                            // Прячем кнопку календаря, выводится крестик
                            calendars[x].closest('[data-calendar-container]').querySelector('[data-calendar-btn]').classList.add('hidden');
                            // Показываем крестик
                            calendars[x].closest('[data-calendar-container]').querySelector('[data-btn-field-clean]').classList.remove('hidden');
                        })
                        btnNext.addEventListener('click', function(){
                            console.log('NEXT');
                            data.setMonth(data.getMonth() + 1)
                            
                            Calendar(data.getFullYear(), data.getMonth(), nowDate.getDate(), nowDate.getFullYear(), nowDate.getMonth());
                        });
                        btnPrev.addEventListener('click', function(){
                            console.log('PREV')
                            data.setMonth(data.getMonth() - 1)
                            
                            Calendar(data.getFullYear(), data.getMonth(), nowDate.getDate(), nowDate.getFullYear(), nowDate.getMonth());
                        });

                        btnNextYear.addEventListener('click', function(){
                            console.log(123)
                            data.setFullYear(data.getFullYear() + 1)
                            Calendar(data.getFullYear(), data.getMonth(), nowDate.getDate(), nowDate.getFullYear(), nowDate.getMonth());
                        });
                        btnPrevYear.addEventListener('click', function(){
                            data.setFullYear(data.getFullYear() - 1)
                            
                            Calendar(data.getFullYear(), data.getMonth(), nowDate.getDate(), nowDate.getFullYear(), nowDate.getMonth());
                        });

                        calendarInput.addEventListener('input', function(){
                            if(calendarInput.value === ''){
                                calendars[x].closest('[data-calendar-container]').querySelector('[data-calendar-btn]').classList.remove('hidden');
                            }
                        })
                    }

                    // Получение нормального порядка дней
                    function getDay(value){
                        if(value.getDay() === 0){ return 6 }
                        return value.getDay() - 1;
                    }      
                }
            }
            
        }
    },
    modalWindow: {
        init: function(){
            this.openWindow();
        },
        openWindow: function(){
            // Контейнер с модальными окнами
            const modalWindowContainer = document.querySelector('.modal-window-container');
            // Кнопки, при клике на которые открывается окно
            const buttons = document.querySelectorAll('[data-modal-window-open]');
            if(modalWindowContainer && buttons){
                // Сколько пикселей скролл бар
                let widthScrollBar = window.innerWidth - document.body.clientWidth;
                // Изначальный падинг блока .content
                let contentPaddingRight = parseInt(getComputedStyle(document.querySelector('.content')).paddingRight);

                for(let i = 0; i < buttons.length; i++){
                    buttons[i].addEventListener('click', function(e){
                        e.preventDefault();
                        // Модальное окно, которое привязано к кнопке
                        let modalWindow = modalWindowContainer.querySelector(buttons[i].dataset.modalWindowOpen);
                        // Открываем контейнер с модальными окнами
                        modalWindowContainer.classList.add('modal-window-container-open');
                        modalWindow.classList.remove('hidden');
                        // 
                        if(modalWindowContainer.classList.contains('modal-window-container-open')){
                            // Убираем прокрутку у body
                            document.body.style.overflowY = 'hidden';
                            // Открываем привязанное модальное окно
                            modalWindow.style.display = 'block';
                            // Добавление паддинга справа, чтобы страница не скакала
                            document.querySelector('.profile-content').style.paddingRight = contentPaddingRight + widthScrollBar + 'px';
                        } else {
                            // Возвращаем прокрутку у body
                            document.body.style.overflowY = 'auto';
                            // Закрываем привязанное модальное окно
                            modalWindow.style.display = 'none';
                            // Восстановление предыдущего паддинга
                            document.querySelector('.profile-content').style.paddingRight = contentPaddingRight + 'px';
                        }
                        // Все кнопки, которые отвечают за закрытие модального окна
                        const buttonsCancel = document.querySelectorAll('[data-modal-widnow-cancel]');
                        if(buttonsCancel){
                            for(let j = 0; j < buttonsCancel.length; j++){
                                buttonsCancel[j].addEventListener('click', function(){
                                    modalWindowContainer.classList.remove('modal-window-container-open');
                                    modalWindow.classList.add('hidden');
                                    // Очищение всех полей
                                    if(modalWindow.querySelectorAll('input')){
                                        modalWindow.querySelectorAll('input[type="text"]').forEach(el => el.value = '');
                                        // Ищем все календари и стираем там данные
                                        document.querySelectorAll('.calendar').forEach(el => el.innerHTML = '');
                                        // Обноваляем календари на странице
                                        portal.calendarOpen.init();
                                        // Если 
                                        if(document.body.dataset.page === "profile"){
                                            if(modalWindow.querySelectorAll('[data-btn-field-clean]')){
                                                modalWindow.querySelectorAll('[data-btn-field-clean]').forEach(el => el.classList.add('hidden'));
                                            }
                                            if(modalWindow.querySelectorAll('[data-calendar-btn]')){
                                                modalWindow.querySelectorAll('[data-calendar-btn]').forEach(el => el.classList.remove('hidden'));
                                            }
                                        }
                                    }
                                })
                            }
                        }

                    })
                }
            }
        }
    },
    tabs: {
        init: function(){
            this.tabsActive();
        },
        tabsActive: function(){
            const containersWithInitiators = document.querySelectorAll('[data-tab-container]');
            if(containersWithInitiators){
                for(let i = 0; i < containersWithInitiators.length; i++){
                    const container = document.querySelector(containersWithInitiators[i].dataset.tabContainer)
                    const btnInitiators = containersWithInitiators[i].querySelectorAll('[data-tab-initiator]')
                    console.log(btnInitiators)
                    for(let j = 0; j < btnInitiators.length; j++){
                        btnInitiators[j].addEventListener('click', function(){
                            let items = container.querySelectorAll('[data-tab-content]')
                            for(let q = 0; q < items.length; q++){
                                items[q].classList.remove('_active');
                            }
                            items[j].classList.add('_active');
                        })
                    }
                }
            }
        }
    }
}

portal.init();