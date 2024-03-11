// Sample data (you can replace this with your actual data)
let i = 1;
const data = [
 // add data here
[i++, "SBT1 AANSHI", "12720433", "./SBT1/SBT1 AANSHI 12720433/1.bmp", "./SBT1/SBT1 AANSHI 12720433/2.bmp", "./SBT1/SBT1 AANSHI 12720433/3.bmp", "./SBT1/SBT1 AANSHI 12720433/4.bmp", "./SBT1/SBT1 AANSHI 12720433/5.bmp"],
  [i++, "SBT1 ANCHALPRAJAPATI", "05330527", "./SBT1/SBT1 ANCHALPRAJAPATI 05330527/1.bmp", "./SBT1/SBT1 ANCHALPRAJAPATI 05330527/2.bmp", "./SBT1/SBT1 ANCHALPRAJAPATI 05330527/3.bmp", "./SBT1/SBT1 ANCHALPRAJAPATI 05330527/4.bmp", "./SBT1/SBT1 ANCHALPRAJAPATI 05330527/5.bmp"],
  [i++, "SBT1 ANEESHA", "30125454", "./SBT1/SBT1 ANEESHA 30125454/1.bmp", "./SBT1/SBT1 ANEESHA 30125454/2.bmp", "./SBT1/SBT1 ANEESHA 30125454/3.bmp", "./SBT1/SBT1 ANEESHA 30125454/4.bmp", "./SBT1/SBT1 ANEESHA 30125454/5.bmp"],
  [i++, "SBT1 ANTIMA", "15665033", "./SBT1/SBT1 ANTIMA 15665033/1.bmp", "./SBT1/SBT1 ANTIMA 15665033/2.bmp", "./SBT1/SBT1 ANTIMA 15665033/3.bmp", "./SBT1/SBT1 ANTIMA 15665033/4.bmp", "./SBT1/SBT1 ANTIMA 15665033/5.bmp"],
  [i++, "SBT1 ASTHA", "24165796", "./SBT1/SBT1 ASTHA 24165796/1.bmp", "./SBT1/SBT1 ASTHA 24165796/2.bmp", "./SBT1/SBT1 ASTHA 24165796/3.bmp", "./SBT1/SBT1 ASTHA 24165796/4.bmp", "./SBT1/SBT1 ASTHA 24165796/5.bmp"],
  [i++, "SBT1 DIPIKA", "60421635", "./SBT1/SBT1 DIPIKA 60421635/1.bmp", "./SBT1/SBT1 DIPIKA 60421635/2.bmp", "./SBT1/SBT1 DIPIKA 60421635/3.bmp", "./SBT1/SBT1 DIPIKA 60421635/4.bmp", "./SBT1/SBT1 DIPIKA 60421635/5.bmp"],
  [i++, "SBT1 JYOTI", "75182090", "./SBT1/SBT1 JYOTI 75182090/1.bmp", "./SBT1/SBT1 JYOTI 75182090/2.bmp", "./SBT1/SBT1 JYOTI 75182090/3.bmp", "./SBT1/SBT1 JYOTI 75182090/4.bmp", "./SBT1/SBT1 JYOTI 75182090/5.bmp"],
  [i++, "SBT1 JYOTISHUKLA", "56288739", "./SBT1/SBT1 JYOTISHUKLA 56288739/1.bmp", "./SBT1/SBT1 JYOTISHUKLA 56288739/2.bmp", "./SBT1/SBT1 JYOTISHUKLA 56288739/3.bmp", "./SBT1/SBT1 JYOTISHUKLA 56288739/4.bmp", "./SBT1/SBT1 JYOTISHUKLA 56288739/5.bmp"],
  [i++, "SBT1 Keshkumari", "59951236", "./SBT1/SBT1 Keshkumari 59951236/1.bmp", "./SBT1/SBT1 Keshkumari 59951236/2.bmp", "./SBT1/SBT1 Keshkumari 59951236/3.bmp", "./SBT1/SBT1 Keshkumari 59951236/4.bmp", "./SBT1/SBT1 Keshkumari 59951236/5.bmp"],
  [i++, "SBT1 KHUSHBOO", "88986952", "./SBT1/SBT1 KHUSHBOO 88986952/1.bmp", "./SBT1/SBT1 KHUSHBOO 88986952/2.bmp", "./SBT1/SBT1 KHUSHBOO 88986952/3.bmp", "./SBT1/SBT1 KHUSHBOO 88986952/4.bmp", "./SBT1/SBT1 KHUSHBOO 88986952/5.bmp"],
  [i++, "SBT1 KHUSHBOOSHAHU", "70926876", "./SBT1/SBT1 KHUSHBOOSHAHU 70926876/1.bmp", "./SBT1/SBT1 KHUSHBOOSHAHU 70926876/2.bmp", "./SBT1/SBT1 KHUSHBOOSHAHU 70926876/3.bmp", "./SBT1/SBT1 KHUSHBOOSHAHU 70926876/4.bmp", "./SBT1/SBT1 KHUSHBOOSHAHU 70926876/5.bmp"],
  [i++, "SBT1 KOMALMAURYA", "55962712", "./SBT1/SBT1 KOMALMAURYA 55962712/1.bmp", "./SBT1/SBT1 KOMALMAURYA 55962712/2.bmp", "./SBT1/SBT1 KOMALMAURYA 55962712/3.bmp", "./SBT1/SBT1 KOMALMAURYA 55962712/4.bmp", "./SBT1/SBT1 KOMALMAURYA 55962712/5.bmp"],
  [i++, "SBT1 MAHAKMAURYA", "70955467", "./SBT1/SBT1 MAHAKMAURYA 70955467/1.bmp", "./SBT1/SBT1 MAHAKMAURYA 70955467/2.bmp", "./SBT1/SBT1 MAHAKMAURYA 70955467/3.bmp", "./SBT1/SBT1 MAHAKMAURYA 70955467/4.bmp", "./SBT1/SBT1 MAHAKMAURYA 70955467/5.bmp"],
  [i++, "SBT1 MANISHAYADAV", "52748085", "./SBT1/SBT1 MANISHAYADAV 52748085/1.bmp", "./SBT1/SBT1 MANISHAYADAV 52748085/2.bmp", "./SBT1/SBT1 MANISHAYADAV 52748085/3.bmp", "./SBT1/SBT1 MANISHAYADAV 52748085/4.bmp", "./SBT1/SBT1 MANISHAYADAV 52748085/5.bmp"],
  [i++, "SBT1 MOHINIMAURYA", "72637194", "./SBT1/SBT1 MOHINIMAURYA 72637194/1.bmp", "./SBT1/SBT1 MOHINIMAURYA 72637194/2.bmp", "./SBT1/SBT1 MOHINIMAURYA 72637194/3.bmp", "./SBT1/SBT1 MOHINIMAURYA 72637194/4.bmp", "./SBT1/SBT1 MOHINIMAURYA 72637194/5.bmp"],
  [i++, "SBT1 MONI", "54543112", "./SBT1/SBT1 MONI 54543112/1.bmp", "./SBT1/SBT1 MONI 54543112/2.bmp", "./SBT1/SBT1 MONI 54543112/3.bmp", "./SBT1/SBT1 MONI 54543112/4.bmp", "./SBT1/SBT1 MONI 54543112/5.bmp"],
  [i++, "SBT1 NANDANISINGH", "99294681", "./SBT1/SBT1 NANDANISINGH 99294681/1.bmp", "./SBT1/SBT1 NANDANISINGH 99294681/2.bmp", "./SBT1/SBT1 NANDANISINGH 99294681/3.bmp", "./SBT1/SBT1 NANDANISINGH 99294681/4.bmp", "./SBT1/SBT1 NANDANISINGH 99294681/5.bmp"],
  [i++, "SBT1 POOJAMAURYA", "36485466", "./SBT1/SBT1 POOJAMAURYA 36485466/1.bmp", "./SBT1/SBT1 POOJAMAURYA 36485466/2.bmp", "./SBT1/SBT1 POOJAMAURYA 36485466/3.bmp", "./SBT1/SBT1 POOJAMAURYA 36485466/4.bmp", "./SBT1/SBT1 POOJAMAURYA 36485466/5.bmp"],
  [i++, "SBT1 POOJAYADAV", "25157279", "./SBT1/SBT1 POOJAYADAV 25157279/1.bmp", "./SBT1/SBT1 POOJAYADAV 25157279/2.bmp", "./SBT1/SBT1 POOJAYADAV 25157279/3.bmp", "./SBT1/SBT1 POOJAYADAV 25157279/4.bmp", "./SBT1/SBT1 POOJAYADAV 25157279/5.bmp"],
  [i++, "SBT1 PRIYA", "66024356", "./SBT1/SBT1 PRIYA 66024356/1.bmp", "./SBT1/SBT1 PRIYA 66024356/2.bmp", "./SBT1/SBT1 PRIYA 66024356/3.bmp", "./SBT1/SBT1 PRIYA 66024356/4.bmp", "./SBT1/SBT1 PRIYA 66024356/5.bmp"],
  [i++, "SBT1 PRIYANKACHAUHAN", "03027453", "./SBT1/SBT1 PRIYANKACHAUHAN 03027453/1.bmp", "./SBT1/SBT1 PRIYANKACHAUHAN 03027453/2.bmp", "./SBT1/SBT1 PRIYANKACHAUHAN 03027453/3.bmp", "./SBT1/SBT1 PRIYANKACHAUHAN 03027453/4.bmp", "./SBT1/SBT1 PRIYANKACHAUHAN 03027453/5.bmp"],
  [i++, "SBT1 RAMAVATI", "02412889", "./SBT1/SBT1 RAMAVATI 02412889/1.bmp", "./SBT1/SBT1 RAMAVATI 02412889/2.bmp", "./SBT1/SBT1 RAMAVATI 02412889/3.bmp", "./SBT1/SBT1 RAMAVATI 02412889/4.bmp", "./SBT1/SBT1 RAMAVATI 02412889/5.bmp"],
  [i++, "SBT1 SANIYA", "04148364", "./SBT1/SBT1 SANIYA 04148364/1.bmp", "./SBT1/SBT1 SANIYA 04148364/2.bmp", "./SBT1/SBT1 SANIYA 04148364/3.bmp", "./SBT1/SBT1 SANIYA 04148364/4.bmp", "./SBT1/SBT1 SANIYA 04148364/5.bmp"],
  [i++, "SBT1 SHIVANIVISHWAKARMA", "83757088", "./SBT1/SBT1 SHIVANIVISHWAKARMA 83757088/1.bmp", "./SBT1/SBT1 SHIVANIVISHWAKARMA 83757088/2.bmp", "./SBT1/SBT1 SHIVANIVISHWAKARMA 83757088/3.bmp", "./SBT1/SBT1 SHIVANIVISHWAKARMA 83757088/4.bmp", "./SBT1/SBT1 SHIVANIVISHWAKARMA 83757088/5.bmp"],
  [i++, "SBT1 SONAMKASHYAP", "75792780", "./SBT1/SBT1 SONAMKASHYAP 75792780/1.bmp", "./SBT1/SBT1 SONAMKASHYAP 75792780/2.bmp", "./SBT1/SBT1 SONAMKASHYAP 75792780/3.bmp", "./SBT1/SBT1 SONAMKASHYAP 75792780/4.bmp", "./SBT1/SBT1 SONAMKASHYAP 75792780/5.bmp"],
  [i++, "SBT1 SONI", "60750447", "./SBT1/SBT1 SONI 60750447/1.bmp", "./SBT1/SBT1 SONI 60750447/2.bmp", "./SBT1/SBT1 SONI 60750447/3.bmp", "./SBT1/SBT1 SONI 60750447/4.bmp", "./SBT1/SBT1 SONI 60750447/5.bmp"],
  [i++, "SBT1 SUMANSHARMA", "24826705", "./SBT1/SBT1 SUMANSHARMA 24826705/1.bmp", "./SBT1/SBT1 SUMANSHARMA 24826705/2.bmp", "./SBT1/SBT1 SUMANSHARMA 24826705/3.bmp", "./SBT1/SBT1 SUMANSHARMA 24826705/4.bmp", "./SBT1/SBT1 SUMANSHARMA 24826705/5.bmp"],
  [i++, "SBT1 VIBHASHUKLA", "75292568", "./SBT1/SBT1 VIBHASHUKLA 75292568/1.bmp", "./SBT1/SBT1 VIBHASHUKLA 75292568/2.bmp", "./SBT1/SBT1 VIBHASHUKLA 75292568/3.bmp", "./SBT1/SBT1 VIBHASHUKLA 75292568/4.bmp", "./SBT1/SBT1 VIBHASHUKLA 75292568/5.bmp"],
  [i++, "SBT1 vineeta", "17862956", "./SBT1/SBT1 vineeta 17862956/1.bmp", "./SBT1/SBT1 vineeta 17862956/2.bmp", "./SBT1/SBT1 vineeta 17862956/3.bmp", "./SBT1/SBT1 vineeta 17862956/4.bmp", "./SBT1/SBT1 vineeta 17862956/5.bmp"]


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
        const filteredData = data.filter(row => row.some(cell => cell.toLowerCase().includes(searchTerm)));
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
