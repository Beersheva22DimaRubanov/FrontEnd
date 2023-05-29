export default class Statistics{
    #employees
    #agesStat

    constructor(){
        this.#employees = [];
        this.#agesStat =[
            
        ]
        
    }

    addEmployee(employee){
        this.#employees.push(employee);
        console.log(this.#employees)
    }

    getAgeStatistics(){
        this.#agesStat = [
            {min: 20, max: 29, count: 0},
            {min: 30, max: 39, count: 0},
            {min: 40, max: 49, count: 0},
            {min: 50, max: 59, count: 0},
        ]
        this.#employees.map((emp, index) => {
            const date = new Date();
            const age = date.getFullYear() - +emp.birthYear;
            if(age >= 20 && age<= 29){
                this.#agesStat[0].count += 1;
            } else if(age >= 30 && age<= 39){
                this.#agesStat[1].count += 1;
            } else if(age >= 40 && age<= 49){
                this.#agesStat[2].count += 1;
            }else if(age >= 50 && age<= 59){
                this.#agesStat[3].count += 1;
            }
        })
      console.log(this.#agesStat)
        return this.#agesStat
    }
}