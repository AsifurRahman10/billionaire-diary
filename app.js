const getTenData = (double = false, limit = '10') => {
  fetch(`https://forbes400.onrender.com/api/forbes400?limit=${limit}`)
    .then(res => res.json())
    .then(data => {
      displayTenData(data, double)

    })
}

const allRichList = () => {
  document.getElementById('total-id').innerHTML = '';
  document.getElementById('total-id').classList.remove('border-t-2');
  const tableData = document.getElementsByClassName('table-row-id');
  for (const element of tableData) {
    element.innerHTML = '';
  }
  getTenData(false, '')

}
const doubleIt = () => {
  document.getElementById('total-id').innerHTML = '';
  document.getElementById('total-id').classList.remove('border-t-2');
  getTenData(true);
}



let total = [];


const displayTenData = (data, double) => {
  const tableDataContainer = document.getElementById('table-row-data');
  if (double) {
    let tdTags = Array.from(document.getElementsByTagName('td'));
    for (const td of tdTags) {
      td.parentElement.removeChild(td);
    }
  }
  data.forEach(element => {
    const totalMan = element.finalWorth;
    let fixedNum = parseFloat(totalMan.toFixed(2));  // Convert to a number after fixing the decimal places
    total.push(fixedNum);

    const tr = document.createElement('tr');
    tr.classList = 'table-row-id'
    tr.innerHTML = `
  <td class="w-2/12 lg:w-[250px]">
    ${element.personName}
    <i class="fa-regular fa-eye"></i>
  </td>
  <td class="text-lg w-2/12 lg:w-[250px]">${element.countryOfCitizenship}</td>
  <td class="text-lg w-2/12 lg:w-[250px]">${element.industries[0]}</td>
  <td class="text-lg w-2/12 lg:w-[250px] pl-4">${element.rank}</td>
  <td class="text-lg w-2/12 lg:w-[250px]" id = "wealth">${(double) ? element.finalWorth * 2 : element.finalWorth}</td>
  `
    tableDataContainer.appendChild(tr);
  });
  totalMoney();
}
const totalMoney = () => {
  const totalMoney = total.reduce((prev, current) => prev + current, 0)
  // document.getElementById('total').innerText = totalMoney;
  const tableDataContainer = document.getElementById('table-row-data');
  const div = document.createElement('div');
  div.id = "total-id"
  div.classList = 'flex justify-between w-10/12 border-t-2 border-black mt-5'
  div.innerHTML = `
                  <p class= "text-xl font-bold">Total</p>
                  <p class = "pr-5 text-xl font-bold">${totalMoney.toFixed(4)}</p>
  `
  tableDataContainer.appendChild(div);
}






// function call
getTenData();

