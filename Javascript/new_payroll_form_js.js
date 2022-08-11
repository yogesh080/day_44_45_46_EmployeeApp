window.addEventListener('DOMContentLoaded',(event) =>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name= name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent=e;
        }
    });

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function(){
    output.textContent = salary.value;
});
});

const save = () =>{
    try {
        let employeePayrollData = createEmplooyeePayroll();
        createAndUpdateStorage(employeePayrollData)
    } catch (e) {
        return;
        
    }
}
function createAndUpdateStorage(employeePayrollData){
    
    let employeePayrollList= JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList!=undefined)
    {
        employeePayrollList.push(employeePayrollData);
    }
    else
    {
        employeePayrollList=[employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

const createEmplooyeePayroll = () =>{
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValuebyId('#name');
    } catch (e) {
        setTextValue('.text-error',e)
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValuebyId('#salary');
    employeePayrollData.note = getInputValuebyId('#notes');
    let date = getInputValuebyId('#day')+" " +getInputValuebyId('#month') + " " +getInputValuebyId('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item =>{
        if(item.checked) setItems.push(item.value);
    });
    return setItems;

}

const getInputValuebyId=(id) =>{
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue =(id) => {
    let value = document.getElementById(id).value;
    return value
}



const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1')
    setValue('#month','January')
    setValue('#year','2020')

}
const unsetSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const serTextValue = (id, value) =>{
    const element = document.querySelector(id);
    element.value = value;
}

const setValue =(id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

