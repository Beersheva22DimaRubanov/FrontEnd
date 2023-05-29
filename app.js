// async function getTemperatures(lat, long){
//     const response = 
//     await fetch(`https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&timezone=IST`);
//     return response.json();
// }

// getTemperatures(31.89, 34.81).then((data) => console.log(data)).catch((error) => console.log(error));

async function getTemperatures(lat, long, startDate, days, hourFrom, hourTo) {
    // parameters: lat - latitude, long - longitude, startDate - ISO date of forecast, days - forecast days, 
    // hourFrom - hourTo - range og the hours for each day 
    // returns: 
    // array of objects {date: <string containing date YYYY-MM-DD with no time>, time: <hour number from the given range>, 
    // temperature: <number>}
    const endDate = getEndDate(startDate, days);
    const response = await fetch(getUrl(lat, long, startDate, endDate));
    const data = await response.json();
    const times = getDataForHours(data.hourly.time, hourFrom, hourTo);
    const temperatures = getDataForHours(data.hourly.temperature_2m, hourFrom, hourTo);

    return times.map((d, index) => {
        const token = d.split('T');
        const date = token[0];
        const time = token[1];
        return {date, time, temperature: temperatures[index]}}
        );
}

function getEndDate(startDateStr, days){
    const start = new Date(startDateStr);
   return new Date(start.setDate(start.getDate() + days)).toISOString().substring(0, 10);
}

function getUrl(lat, long, startDate, endDate){
    return `https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${long}&hourly=temperature_2m&start_date=${startDate}&end_date=${endDate}`;
}

function getDataForHours(array, hourFrom, hourTo){
    return array.filter((_, index) => {
        const rem = index % 24;
        return rem >= hourFrom && rem <=hourTo
    })
}
console.log(getTemperatures(31.89, 34.81, "2023-05-16", 7, 10, 15).then(x => console.log(x)));
