import Statistics from "./service/Statistics.js";
import AplicationBar from "./ui/ApplicationBar.js"
import DataGrid from "./ui/DataGrid.js";
import EmployeeForm from "./ui/EmployeeForm.js";
import { getRandomEmployee } from "./util/random.js";

//employee model
//{id: number of 9 digits, name: string, birthYear: number, 
//gender: female | male, salary: number, department: QA, Development, Accounting}
const sections = [
    {title: "Employees", id: "employees-table-place"},
    {title: "Add Employee", id: "employees-form-place"},
    {title: "Statistics", id: "statistics-place"}
]

const employeeColumns = [
    {field: 'id', headerName: 'ID'},
    {field: 'name', headerName: 'Name'},
    {field: 'birthYear', headerName:"Birth Year"},
    {field: 'gender', headerName:"Gender"},
    {field: 'salary', headerName:"Salary"},
    {field: 'department', headerName:"Department"},
]

const ageStatisticsColumns = [
    {field: 'min', headerName:'Min Age'},
    {field: 'max', headerName:'Max Age'},
    {field: 'count', headerName:'Count'}
]

const statistics = new Statistics();
const statisticsTable = new DataGrid("statistics-place", ageStatisticsColumns);
const menu = new AplicationBar("menu-place", sections, (index) => {
    if(index == 2){
       statisticsTable.fillData(statistics.getAgeStatistics())
    }
});
const employeeForm = new EmployeeForm("employees-form-place");
const employeeTable = new DataGrid("employees-table-place", employeeColumns);
async function run(){
    while(true){
        await employeeForm.buttonHasPressed();
       const employee = getRandomEmployee();
       statistics.addEmployee(employee);
       employeeTable.insertRow(employee);
        
        console.log("button pressed");
    }
}

run();
