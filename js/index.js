const meals = [
    { name: "breakfast", time: "7:00 a.m" },
    { name: "lunch", time: "12:00 p.m" },
    { name: "dinner", time: "7:00 p.m" }
];

function parseTime(timeString) {
    const [hours, minutes, peri] = timeString.split(/:| /);
    const hour = parseInt(hours);
    const minute = parseInt(minutes);
    const totalMinutes = (hour % 12 + (peri.toLowerCase() === "p.m" ? 12 : 0)) * 60 + minute;
    return totalMinutes;
}

function nextMeal(currentTime) {
    const currentMinutes = parseTime(currentTime);
    let minTimeDifference = 24 * 60;
    let nextMealTitle = "";

    for (const meal of meals) {
        const mealMinutes = parseTime(meal.time);
        const timeDifference = (mealMinutes - currentMinutes + 24 * 60) % (24 * 60);
        if (timeDifference < minTimeDifference) {
            minTimeDifference = timeDifference;
            nextMealTitle = meal.name;
        }
    }
    const hours = Math.floor(minTimeDifference / 60);
    const minutes = minTimeDifference % 60;
    console.log(`${hours} hours ${minutes} minutes to the next meal: ${nextMealTitle}`);
}

nextMeal("5:50 a.m");
nextMeal("2:00 p.m");
nextMeal("12:00 p.m");
