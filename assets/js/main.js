/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu');
        });
    };

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu');
        });
    }
    
    

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== DAY COUNTER FOR CHRISTMAS ===============*/
const titleData = document.getElementById('title-data'),
      numberData = document.getElementById('number-data'),
      textData = document.getElementById('text-data'),
      msgChristmas = document.getElementById('msg-christmas')

      const christmasCountdown = () => {
        let now = new Date();
        let currentMonth = now.getMonth() + 1;
        let currentDay = now.getDate();
    
        let nextChristmasYear = now.getFullYear();
        if (currentMonth === 12 && currentDay > 25) {
            nextChristmasYear += 1;
        }
    
        let nextChristmasDate = `${nextChristmasYear}-12-25T00:00:00`;
        let christmasDay = new Date(nextChristmasDate);
        let timeleft = christmasDay - now;
    
        let days = 0,
            hours = 0,
            minutes = 0,
            seconds = 0;
    
        if (currentMonth !== 12 || (currentMonth === 12 && currentDay !== 25)) {
            days = Math.floor(timeleft / 1000 / 60 / 60 / 24);
            hours = Math.floor((timeleft / 1000 / 60 / 60) % 24);
            minutes = Math.floor((timeleft / 1000 / 60) % 60);
            seconds = Math.floor((timeleft / 1000) % 60);
        }
    
        if (currentDay !== 24) {
            numberData.innerHTML = days < 10 ? `0${days}` : days;
            textData.innerHTML = 'Days';
        } else {
            if (hours > 0) {
                numberData.innerHTML = hours < 10 ? `0${hours}` : hours;
                textData.innerHTML = 'hours';
            } else if (minutes > 0) {
                numberData.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
                textData.innerHTML = 'minutes';
            } else if (seconds > 0) {
                numberData.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
                textData.innerHTML = 'seconds';
        }
               }

        if(currentMonth == 12 && currentDay ==25){
            titleData.style.display = 'none'
            msgChristmas.style.display = 'block'
            msgChristmas.innerHTML = 'Today is Dec 25 , Merry Christmas'
        }
};


    
    setInterval(christmasCountdown, 1000);
    