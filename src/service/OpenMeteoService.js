export default class OpenMeteoService{
    #baseUrl;
    constructor(baseUrl){
        this.#baseUrl = baseUrl;
    }

    #getUrl(lat, long, startDate, endDate){
        console.log(endDate);
        return `${this.#baseUrl}latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&start_date=${startDate}&end_date=${endDate}`;
    }

    #getDataForHours(array, hourFrom, hourTo){
        return array.filter((_, index) => {
            const rem = index % 24;
            return rem >= hourFrom && rem <=hourTo
        })
    }
    async getTemperatures(lat, long, startDate, endDate, hourFrom, hourTo){
        const url = this.#getUrl(lat, long, startDate, endDate);
        const response = await fetch(url);
        const data = await response.json();
        const times = this.#getDataForHours(data.hourly.time, hourFrom, hourTo);
        const temperatures = this.#getDataForHours(data.hourly.temperature_2m, hourFrom, hourTo);
        const apparentTemperatures = this.#getDataForHours(data.hourly.apparent_temperature, hourFrom, hourTo);
    
        return times.map((d, index) => {
            const token = d.split('T');
            const date = token[0];
            const time = token[1];
            return {date, time, temperature: temperatures[index], apparentTemperature: apparentTemperatures[index]}}
            );
    }

}