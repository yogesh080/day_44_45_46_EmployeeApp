window.addEventListener('DOMContentLoaded',(event) =>{
    createInnerHtml();
});

createInnerHtml = () =>{

    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>"

    let empPayrollData = createEmplooyeePayrollJSON()[0];
    const innerHtml = `${headerHtml}
    <tr>
                
              </tr>
              <tr>
                <td><img class="profile" alt="" src="./asserts/elon.jpg"></td>
                <td>Yogesh</td>
                <td>Male</td>
                <td><div class='dept-label'>HR</div>
                    <div class="dept-label">Finance</div>
                </td>
                <td>500000</td>
                <td>18 September 2020</td>
                <td><img id="1" onclick= "remove(this)" alt="delete" src="./asserts/icons8-delete-30.png">
                  <img id="1" onclick= "update(this)" alt="edit" src="./asserts/icons8-edit-30.png"></td>
              </tr>
              `;
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

        }
    ];
    return empPayrollListLocal;
}