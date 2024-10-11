const getTenData = () => {
    fetch('https://forbes400.onrender.com/api/forbes400?limit=10')
        .then(res => res.json())
        .then(data => displayTenData(data))
}

const displayTenData = (data) => {
    data.forEach(element => {
        const tableDataContainer = document.getElementById('table-row-data');
        const tr = document.createElement('tr');
        tr.innerHTML = `
  <td class="w-2/12 lg:w-[250px]">
    ${element.personName}
    <i class="fa-regular fa-eye"></i>
  </td>
  <td class="text-lg w-2/12 lg:w-[250px]">${element.countryOfCitizenship}</td>
  <td class="text-lg w-2/12 lg:w-[250px]">${element.industries[0]}</td>
  <td class="text-lg w-2/12 lg:w-[250px] pl-4">${element.rank}</td>
  <td class="text-lg w-2/12 lg:w-[250px]">${element.finalWorth}</td>
`;
        tableDataContainer.appendChild(tr);
    });

}





// function call
getTenData();