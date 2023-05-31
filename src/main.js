import CompanyService from "./service/CompanyService.js";
import AplicationBar from "./ui/ApplicationBar.js"
import DataGrid from "./ui/DataGrid.js";
import EmployeeForm from "./ui/EmployeeForm.js";
import { getRandomEmployee } from "./util/random.js";
import employeesConfig from "./config/employees-config.json" assert{type: 'json'}
import statisticsConfig from "./config/statistics-config.json" assert{type: 'json'}
import { range } from "./util/number-functions.js";
import Spinner from "./ui/Spinner.js";

const N_EMPLOYEES = 100;

//employee model
//{id: number of 9 digits, name: string, birthYear: number, 
//gender: female | male, salary: number, department: QA, Development, Accounting}
const sections = [
    { title: "Employees", id: "employees-table-place" },
    { title: "Add Employee", id: "employees-form-place" },
    { title: "Statistics", id: "statistics-place" }
]

const { minSalary, maxSalary, departments, minYear, maxYear } = employeesConfig;
const { age, salary } = statisticsConfig;
const statisticsIndex = sections.findIndex(s => s.title == 'Statistics')
const employeesIndex = sections.findIndex(s => s.title == 'Employees')

const employeeColumns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'birthYear', headerName: "Birth Year" },
    { field: 'gender', headerName: "Gender" },
    { field: 'salary', headerName: "Salary" },
    { field: 'department', headerName: "Department" },
]

const statisticsColumns = [
    { field: 'min', headerName: 'Min Value' },
    { field: 'max', headerName: 'Max Value' },
    { field: 'count', headerName: 'Count' }
]

const menu = new AplicationBar("menu-place", sections, statisticsHandler);
const companyService = new CompanyService();
const employeeForm = new EmployeeForm("employees-form-place");
const employeeTable = new DataGrid("employees-table-place", employeeColumns);
const ageStatistics = new DataGrid("age-statistics-place", statisticsColumns)
const salaryStatistics = new DataGrid("salary-statistics-place", statisticsColumns);
const spinner = new Spinner();

async function statisticsHandler(index) {
    spinner.start();
    if (index == statisticsIndex) {
        ageStatistics.fillData(await companyService.getStatistics("birthYear", 10));
        salaryStatistics.fillData(await companyService.getStatistics("salary", 10000));
    } else if (index == employeesIndex) {
        employeeTable.fillData(await companyService.getAllEmployees())
    }
    spinner.stop()
}
async function run() {
    while (true) {
        await employeeForm.buttonHasPressed();
        const employee = getRandomEmployee(minSalary, maxSalary, minYear, maxYear, departments);
        const employeeAdded = companyService.addEmployee(employee);
    }
}

async function getEmployees(){
    spinner.start()
    for(let i = 0; i < N_EMPLOYEES; i++){
        await companyService.addEmployee(getRandomEmployee(minSalary, maxSalary, minYear,
            maxYear, departments));
    }
    spinner.stop()
    // range(0, N_EMPLOYEES).forEach(async () =>
    // await companyService.addEmployee(getRandomEmployee(minSalary, maxSalary, minYear,
    //     maxYear, departments)));
}

// run();
getEmployees();
run();
