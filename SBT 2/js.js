// Sample data (you can replace this with your actual data)
let i = 1;
const data = [
 // add data here
[i++,"***", "Amita 2", "./SBT2/Amita 2/1.bmp", "./SBT2/Amita 2/1.bmp", "./SBT2/Amita 2/1.bmp", "./SBT2/Amita 2/1.bmp", "./SBT2/Amita 2/1.bmp"],
  [i++, "SBT2 Priyanka", "81259580", "./SBT2/SBT2 Priyanka 81259580/1.bmp", "./SBT2/SBT2 Priyanka 81259580/2.bmp", "./SBT2/SBT2 Priyanka 81259580/3.bmp", "./SBT2/SBT2 Priyanka 81259580/4.bmp", "./SBT2/SBT2 Priyanka 81259580/5.bmp"],
  [i++, "Mamta 10", "***", "./SBT2/Mamta 10/1.bmp", "./SBT2/Mamta 10/2.bmp", "./SBT2/Mamta 10/3.bmp", "./SBT2/Mamta 10/4.bmp", "./SBT2/Mamta 10/5.bmp"],
  [i++, "Mamta 126", "***","./SBT2/Mamta 126/1.bmp", "./SBT2/Mamta 126/2.bmp", "./SBT2/Mamta 126/3.bmp", "./SBT2/Mamta 126/4.bmp", "./SBT2/Mamta 126/5.bmp"],
  [i++, "Neha Singh", "***", "./SBT2/Neha Singh/1.bmp", "./SBT2/Neha Singh/2.bmp", "./SBT2/Neha Singh/3.bmp", "./SBT2/Neha Singh/4.bmp", "./SBT2/Neha Singh/5.bmp"],
  [i++, "Pratibha 1", "./SBT2/Pratibha 1/1.bmp", "./SBT2/Pratibha 1/2.bmp", "./SBT2/Pratibha 1/3.bmp", "./SBT2/Pratibha 1/4.bmp", "./SBT2/Pratibha 1/5.bmp"],
  [i++, "SBT AMITA","./SBT2/SBT AMITA/1.bmp", "./SBT2/SBT AMITA/2.bmp", "./SBT2/SBT AMITA/3.bmp", "./SBT2/SBT AMITA/4.bmp", "./SBT2/SBT AMITA/5.bmp"],
  [i++, "SBT AMITA 61","./SBT2/SBT AMITA 61/1.bmp", "./SBT2/SBT AMITA 61/2.bmp", "./SBT2/SBT AMITA 61/3.bmp", "./SBT2/SBT AMITA 61/4.bmp", "./SBT2/SBT AMITA 61/5.bmp"],
  [i++, "SBT KUSUM 25","./SBT2/SBT KUSUM 25/1.bmp", "./SBT2/SBT KUSUM 25/2.bmp", "./SBT2/SBT KUSUM 25/3.bmp", "./SBT2/SBT KUSUM 25/4.bmp", "./SBT2/SBT KUSUM 25/5.bmp"],
  [i++, "SBT Preeti 121","./SBT2/SBT Preeti 121/1.bmp", "./SBT2/SBT Preeti 121/2.bmp", "./SBT2/SBT Preeti 121/3.bmp", "./SBT2/SBT Preeti 121/4.bmp", "./SBT2/SBT Preeti 121/5.bmp"],
  [i++, "SBT SHIVANI 1","./SBT2/SBT SHIVANI 1/1.bmp", "./SBT2/SBT SHIVANI 1/2.bmp", "./SBT2/SBT SHIVANI 1/3.bmp", "./SBT2/SBT SHIVANI 1/4.bmp", "./SBT2/SBT SHIVANI 1/5.bmp"],
  [i++, "SBT SHIVANI 58","./SBT2/SBT SHIVANI 58/1.bmp", "./SBT2/SBT SHIVANI 58/2.bmp", "./SBT2/SBT SHIVANI 58/3.bmp", "./SBT2/SBT SHIVANI 58/4.bmp", "./SBT2/SBT SHIVANI 58/5.bmp"],
  [i++, "SBT_TRAINER-REETA DEVI","./SBT2/SBT_TRAINER-REETA DEVI/1.bmp", "./SBT2/SBT_TRAINER-REETA DEVI/2.bmp", "./SBT2/SBT_TRAINER-REETA DEVI/3.bmp", "./SBT2/SBT_TRAINER-REETA DEVI/4.bmp", "./SBT2/SBT_TRAINER-REETA DEVI/5.bmp"],
  [i++, "SBT2 Amita", "27673274", "./SBT2/SBT2 Amita 27673274/1.bmp", "./SBT2/SBT2 Amita 27673274/2.bmp", "./SBT2/SBT2 Amita 27673274/3.bmp", "./SBT2/SBT2 Amita 27673274/4.bmp", "./SBT2/SBT2 Amita 27673274/5.bmp"],
  [i++, "SBT2 Amita", "58018238", "./SBT2/SBT2 Amita 58018238/1.bmp", "./SBT2/SBT2 Amita 58018238/2.bmp", "./SBT2/SBT2 Amita 58018238/3.bmp", "./SBT2/SBT2 Amita 58018238/4.bmp", "./SBT2/SBT2 Amita 58018238/5.bmp"],
  [i++, "SBT2 Arti", "64966949", "./SBT2/SBT2 Arti 64966949/1.bmp", "./SBT2/SBT2 Arti 64966949/2.bmp", "./SBT2/SBT2 Arti 64966949/3.bmp", "./SBT2/SBT2 Arti 64966949/4.bmp", "./SBT2/SBT2 Arti 64966949/5.bmp"],
  [i++, "SBT2 Kajal", "26563804", "./SBT2/SBT2 Kajal 26563804/1.bmp", "./SBT2/SBT2 Kajal 26563804/2.bmp", "./SBT2/SBT2 Kajal 26563804/3.bmp", "./SBT2/SBT2 Kajal 26563804/4.bmp", "./SBT2/SBT2 Kajal 26563804/5.bmp"],
  [i++, "SBT2 Kavita Gupta", "33318038", "./SBT2/SBT2 KavitaGupta 33318038/1.bmp", "./SBT2/SBT2 KavitaGupta 33318038/2.bmp", "./SBT2/SBT2 KavitaGupta 33318038/3.bmp", "./SBT2/SBT2 KavitaGupta 33318038/4.bmp", "./SBT2/SBT2 KavitaGupta 33318038/5.bmp"],
  [i++, "SBT2 Kusum", "55368293", "./SBT2/SBT2 Kusum 55368293/1.bmp", "./SBT2/SBT2 Kusum 55368293/2.bmp", "./SBT2/SBT2 Kusum 55368293/3.bmp", "./SBT2/SBT2 Kusum 55368293/4.bmp", "./SBT2/SBT2 Kusum 55368293/5.bmp"],
  [i++, "SBT2 Mamta", "41494661", "./SBT2/SBT2 Mamta 41494661/1.bmp", "./SBT2/SBT2 Mamta 41494661/2.bmp", "./SBT2/SBT2 Mamta 41494661/3.bmp", "./SBT2/SBT2 Mamta 41494661/4.bmp", "./SBT2/SBT2 Mamta 41494661/5.bmp"],
  [i++, "SBT2 Mithilesh", "80992546", "./SBT2/SBT2 Mithilesh 80992546/1.bmp", "./SBT2/SBT2 Mithilesh 80992546/2.bmp", "./SBT2/SBT2 Mithilesh 80992546/3.bmp", "./SBT2/SBT2 Mithilesh 80992546/4.bmp", "./SBT2/SBT2 Mithilesh 80992546/5.bmp"],
  [i++, "SBT2 NehaSingh", "4422637", "./SBT2/SBT2 NehaSingh 4422637/1.bmp", "./SBT2/SBT2 NehaSingh 4422637/2.bmp", "./SBT2/SBT2 NehaSingh 4422637/3.bmp", "./SBT2/SBT2 NehaSingh 4422637/4.bmp", "./SBT2/SBT2 NehaSingh 4422637/5.bmp"],
  [i++, "SBT2 Poornima Yadav", "06366715", "./SBT2/SBT2 PoornimaYadav 06366715/1.bmp", "./SBT2/SBT2 PoornimaYadav 06366715/2.bmp", "./SBT2/SBT2 PoornimaYadav 06366715/3.bmp", "./SBT2/SBT2 PoornimaYadav 06366715/4.bmp", "./SBT2/SBT2 PoornimaYadav 06366715/5.bmp"],
  [i++, "SBT2 PratibhaMaurya", "93798102", "./SBT2/SBT2 PratibhaMaurya 93798102/1.bmp", "./SBT2/SBT2 PratibhaMaurya 93798102/2.bmp", "./SBT2/SBT2 PratibhaMaurya 93798102/3.bmp", "./SBT2/SBT2 PratibhaMaurya 93798102/4.bmp", "./SBT2/SBT2 PratibhaMaurya 93798102/5.bmp"],
  [i++, "SBT2 Preeti", "63820498", "./SBT2/SBT2 Preeti 63820498/1.bmp", "./SBT2/SBT2 Preeti 63820498/2.bmp", "./SBT2/SBT2 Preeti 63820498/3.bmp", "./SBT2/SBT2 Preeti 63820498/4.bmp", "./SBT2/SBT2 Preeti 63820498/5.bmp"],
  [i++, "SBT2 Preksha", "86329672", "./SBT2/SBT2 Preksha 86329672/1.bmp", "./SBT2/SBT2 Preksha 86329672/2.bmp", "./SBT2/SBT2 Preksha 86329672/3.bmp", "./SBT2/SBT2 Preksha 86329672/4.bmp", "./SBT2/SBT2 Preksha 86329672/5.bmp"],
  [i++, "SBT2 RakhiSingh", "22053652", "./SBT2/SBT2 RakhiSingh 22053652/1.bmp", "./SBT2/SBT2 RakhiSingh 22053652/2.bmp", "./SBT2/SBT2 RakhiSingh 22053652/3.bmp", "./SBT2/SBT2 RakhiSingh 22053652/4.bmp", "./SBT2/SBT2 RakhiSingh 22053652/5.bmp"],
  [i++, "SBT2 SadhanaMaurya", "51010008", "./SBT2/SBT2 SadhanaMaurya 51010008/1.bmp", "./SBT2/SBT2 SadhanaMaurya 51010008/2.bmp", "./SBT2/SBT2 SadhanaMaurya 51010008/3.bmp", "./SBT2/SBT2 SadhanaMaurya 51010008/4.bmp", "./SBT2/SBT2 SadhanaMaurya 51010008/5.bmp"],
  [i++, "SBT2 Saloni Yadav", "63058991", "./SBT2/SBT2 SaloniYadav 63058991/1.bmp", "./SBT2/SBT2 SaloniYadav 63058991/2.bmp", "./SBT2/SBT2 SaloniYadav 63058991/3.bmp", "./SBT2/SBT2 SaloniYadav 63058991/4.bmp", "./SBT2/SBT2 SaloniYadav 63058991/5.bmp"],
  [i++, "SBT2 SarlaDevi", "57833198", "./SBT2/SBT2 SarlaDevi 57833198/1.bmp", "./SBT2/SBT2 SarlaDevi 57833198/2.bmp", "./SBT2/SBT2 SarlaDevi 57833198/3.bmp", "./SBT2/SBT2 SarlaDevi 57833198/4.bmp", "./SBT2/SBT2 SarlaDevi 57833198/5.bmp"],
  [i++, "SBT2 ShahinBano", "08561241", "./SBT2/SBT2 ShahinBano 08561241/1.bmp", "./SBT2/SBT2 ShahinBano 08561241/2.bmp", "./SBT2/SBT2 ShahinBano 08561241/3.bmp", "./SBT2/SBT2 ShahinBano 08561241/4.bmp", "./SBT2/SBT2 ShahinBano 08561241/5.bmp"],
  [i++, "SBT2 Shanti", "49529786", "./SBT2/SBT2 Shanti 49529786/1.bmp", "./SBT2/SBT2 Shanti 49529786/2.bmp", "./SBT2/SBT2 Shanti 49529786/3.bmp", "./SBT2/SBT2 Shanti 49529786/4.bmp", "./SBT2/SBT2 Shanti 49529786/5.bmp"],
  [i++, "SBT2 Shivani", "93571070", "./SBT2/SBT2 Shivani 10392919/1.bmp", "./SBT2/SBT2 Shivani 10392919/2.bmp", "./SBT2/SBT2 Shivani 10392919/3.bmp", "./SBT2/SBT2 Shivani 10392919/4.bmp", "./SBT2/SBT2 Shivani 10392919/5.bmp"],
  [i++, "SBT2 ShraddhaPandey", "44343088", "./SBT2/SBT2 ShraddhaPandey 44343088/1.bmp", "./SBT2/SBT2 ShraddhaPandey 44343088/2.bmp", "./SBT2/SBT2 ShraddhaPandey 44343088/3.bmp", "./SBT2/SBT2 ShraddhaPandey 44343088/4.bmp", "./SBT2/SBT2 ShraddhaPandey 44343088/5.bmp"],
  [i++, "SBT2 Sonal", "89541939", "./SBT2/SBT2 Sonal 89541939/1.bmp", "./SBT2/SBT2 Sonal 89541939/2.bmp", "./SBT2/SBT2 Sonal 89541939/3.bmp", "./SBT2/SBT2 Sonal 89541939/4.bmp", "./SBT2/SBT2 Sonal 89541939/5.bmp"],
  [i++, "SBT2 Sushma", "76575571", "./SBT2/SBT2 Sushma 76575571/1.bmp", "./SBT2/SBT2 Sushma 76575571/2.bmp", "./SBT2/SBT2 Sushma 76575571/3.bmp", "./SBT2/SBT2 Sushma 76575571/4.bmp", "./SBT2/SBT2 Sushma 76575571/5.bmp"],
  [i++, "SBT2 Swati", "73349996", "./SBT2/SBT2 Swati 73349996/1.bmp", "./SBT2/SBT2 Swati 73349996/2.bmp", "./SBT2/SBT2 Swati 73349996/3.bmp", "./SBT2/SBT2 Swati 73349996/4.bmp", "./SBT2/SBT2 Swati 73349996/5.bmp"],
  [i++, "SBT2 Vandna", "2793900", "./SBT2/SBT2 Vandna 2793900/1.bmp", "./SBT2/SBT2 Vandna 2793900/2.bmp", "./SBT2/SBT2 Vandna 2793900/3.bmp", "./SBT2/SBT2 Vandna 2793900/4.bmp", "./SBT2/SBT2 Vandna 2793900/5.bmp"],
  [i++, "SBT2 SHIVANI","10392919","./SBT2/SHIVANI/1.bmp", "./SBT2/SHIVANI/2.bmp", "./SBT2/SHIVANI/3.bmp", "./SBT2/SHIVANI/4.bmp", "./SBT2/SHIVANI/5.bmp"],
  [i++, "SMI SHIVANI SINGH", "95", "./SMI SHIVANI SINGH 95/1.bmp", "./SMI SHIVANI SINGH 95/2.bmp", "./SMI SHIVANI SINGH 95/3.bmp", "./SMI SHIVANI SINGH 95/4.bmp", "./SMI SHIVANI SINGH 95/5.bmp"],


         // 1-30 are done....
// adding more rows..

];


let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toString().toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 3 && index <= 7) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = 'invert(100%)'; // Color invert
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}
