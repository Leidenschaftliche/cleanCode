function startTimer(duration/*, display*/) {
    var timer = duration, days, hours, minutes, seconds;

    const my_interval = setInterval(timerSeconds, 1000);
    function timerSeconds() {

        seconds = parseInt(timer % 60, 10);
        minutes = parseInt(timer / 60, 10);
        hours = parseInt(minutes / 60, 10);
        minutes = parseInt(minutes % 60, 10);
        days = parseInt(hours / 24, 10);
        hours = parseInt(hours % 24, 10);
        
        function time_to_str(time){
            return (time < 10 ? "0" : "") + time;
        }

        let str_days    = time_to_str(days)
        let str_hours   = time_to_str(hours)
        let str_minutes = time_to_str(minutes)
        let str_seconds = time_to_str(seconds)

        
        //display.textContent = minutes + ":" + seconds;
        console.log(`${str_days} days : ${str_hours} hours : ${str_minutes} minutes : ${str_seconds} seconds`)

        if (--timer < 0) {
            timer = duration;
            clearInterval(my_interval)
        }
    }

}

function main() {
    startTimer(333303);
};

main()
// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript