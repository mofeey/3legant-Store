function offerCounter() {

    const endDate = new Date('Dec 31, 2024, 24:00:00');

    const daysElement = document.querySelector('#days');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const secondsElement = document.querySelector('#seconds');

    let timerInterval;

    function updateTimer() {
        const today = new Date();
        const timeDifference = endDate - today;

        if (timeDifference <= 0) {
            daysElement.innerHTML = 0;
            hoursElement.innerHTML = 0;
            minutesElement.innerHTML = 0;
            secondsElement.innerHTML = 0;

            clearInterval(timerInterval);
            return
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysElement.innerHTML = days;
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;
    };
    
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

export default offerCounter;