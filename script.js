//your JS code here. If required.

document.addEventListener("DOMContentLoaded", CreationOfTable);

function CreationOfTable() {
  let output = document.querySelector("#output");

  output.innerHTML = `<tr id="loading"><td colspan="2">Loading...</td></tr>`;
//   creation of the promises
  function CreationOfPromise(name) {
    return new Promise((resolve) => {
        // the delay to give inside the setTimeout function
      let delay = Number(Math.random() * 2 + 1).toFixed(3); 
      setTimeout(() => {
        resolve({ name:name, delay: delay});
      }, delay * 1000);
    });
  }

  //   creation of the promises with names promise1, promise2 and promise3.
  let promise1 = CreationOfPromise("promise1");
  let promise2 = CreationOfPromise("promise2");
  let promise3 = CreationOfPromise("promise3");

  Promise.all([promise1, promise2, promise3]).then((value) => {
    //   console.log(value.length);

    document.querySelector("#loading")?.remove();
    // output.innerHTML = "";
    let maxTime = Math.max(...value.map((Maxvalue) => Maxvalue.delay));
    value.forEach((value) => {
      let row = document.createElement("tr");

      let nameCell = document.createElement("td");
      nameCell.textContent = value.name;

      let timeCell = document.createElement("td");
      timeCell.textContent = value.delay;

      row.appendChild(nameCell);
      row.appendChild(timeCell);
      output.appendChild(row);

      //   console.log(maxTime)
    });
    let totalRow = document.createElement("tr");

    let totalName = document.createElement("td");
    totalName.textContent = "Total";

    let totalTime = document.createElement("td");
    totalTime.textContent = maxTime;

    totalRow.appendChild(totalName);
    totalRow.appendChild(totalTime);
    output.appendChild(totalRow);
    //   column.innerHTML
  });
}
