// ----------------------------API data fetching and showing data-----------------------------------------



async function getData() {
  const data =await fetch('http://localhost:3000/employees')
  const records=await data.json()
  console.log(records)
  showData(records)
  }
  // ----------------------function to show fetched data---------------
  async function showData(data) {
  let tab=''
  data.forEach((employees) =>{
       tab +=`<tr>
       <td>${employees.no}</td>
       <td>${employees.firstName}</td>
       <td>${employees.email}</td>
       <td>${employees.phone}</td>
       <td>${employees.gender}</td>
       <td>${employees.dob}</td>
       <td>${employees.country}</td>
       </tr>`
       document.getElementById('tabl').innerHTML=tab
  })
  }

document.addEventListener('DOMContentLoaded', () => {




  
  const butto = document.getElementById('addEmployeeBtn');
  const modal = document.getElementById('employeeModal');
  const closeModalButton = document.getElementById('closeModalbutton');

  butto.addEventListener("click",() => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
  //   document.body.style.overflow = '';
  });

})















