import { count } from "../util/number-functions.js";
import { getRandomInt } from "../util/random.js";
const minId = 100000;
const maxId = 1000000
//TODO by using setTimeout update the companyService code that
//each public method returns Promise that after some timeout 
//in the resolved state
export default class CompanyService {
    #employees
    #isUpdated

    constructor() {
        this.#employees = {};
    }

    async addEmployee(employee) {
        const id = this.#getId();
        console.log(id)
        this.#employees[id] = { ...employee, id };
        this.#isUpdated = true;
        return getPromise(this.#employees[id], 10);
    }

    #getId() {
        let id;
        do {
            id = getRandomInt(minId, maxId)
        } while (this.#employees[id])
        return id;
    }

    async getStatistics(field, interval) {
        let array = Object.values(this.#employees);
        const currentYear = new Date().getFullYear();
        if (field == 'birthYear') {
            array = array.map(e => ({ 'age': currentYear - e.birthYear }));
            field = 'age';
        }
        const statisticsObj = count(array, field, interval);
        const obj = Object.entries(statisticsObj).map(e => {
            const min = e[0] * interval;
            const max = min + interval - 1;
            return { min, max, count: e[1] }
        })
        return  getPromise(obj, 2000);
    }

    async getAllEmployees() {
        const time = this.#isUpdated ? 4000 : 20;
        this.#isUpdated = false;
        return getPromise(Object.values(this.#employees), time)
    }
}

function getPromise(state, timeout) {
    return new Promise(resolve => {
        setTimeout(() => resolve(state), timeout)
    })
}
