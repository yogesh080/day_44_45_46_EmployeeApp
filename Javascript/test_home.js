let empPayrollList
window.addEventListener('DOMContentLoaded',(event) =>{
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList')?
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : []
}

const createInnerHtml = () =>{
    // if (empPayrollList.length == 0) return;
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>"

    // let empPayrollData = createEmplooyeePayrollJSON();
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmplooyeePayrollJSON()
    for (const empPayrollData of empPayrollList){
        innerHtml =`${innerHtml}

              <tr>
                <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>

                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                <img name="${empPayrollData._id}" onclick= "remove(this)" alt="delete" src="./asserts/icons8-delete-30.png">
                <img name="${empPayrollData._id}" onclick= "update(this)" alt="edit" src="./asserts/icons8-edit-30.png">
                </td>
              </tr>
              `;
            }
              document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmplooyeePayrollJSON = () =>{
    let empPayrollListLocal =[
        {
            _name : 'Yogesh yadav',
            _gender:'male',
            _department:[
                'Engineering',
                'Finance'
            ],
            _salary:'500000',
            _startDate: '29 Oct 2019',
            _note:'',
            _id: new Date().getTime(),
            _profilePic:'./asserts/elon.jpg'
        },
        {
            _name : 'Raj shekhar',
            _gender:'male',
            _department:[
                'Engineering',
                'HR'
            ],
            _salary:'500000',
            _startDate: '29 Oct 2019',
            _note:'',
            _id: new Date().getTime(),
            _profilePic:'./asserts/jeff.jpg'

        },
        {
            _name : 'Mary Barra',
            _gender:'Female',
            _department:[
                'Engineering',
                'Finance',
                'HR'
            ],
            _salary:'800000',
            _startDate: '29 Oct 2020',
            _note:'',
            _id: new Date().getTime(),
            _profilePic:'./asserts/mary.jpg'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class ='dept-label'>${dept}</div>`
    }
    return deptHtml
}