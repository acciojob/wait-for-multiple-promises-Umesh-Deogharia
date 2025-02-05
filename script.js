//your JS code here. If required.


document.addEventListener("DOMContentLoaded", CreationOfTable);

function CreationOfTable() {
    let output = document.querySelector("#output");

    function CreationOfPromise(name) {
        return new Promise((resolve) => {
          let delay = (Math.random() * 2 + 1) * 1000;
          setTimeout(() => {
            resolve({name,delay: delay.toFixed()});
          }, delay);
        });
    }
    
    let promise1 = CreationOfPromise("promise1");
    let promise2 = CreationOfPromise("promise2");
    let promise3 = CreationOfPromise("promise3");

    Promise.all([promise1, promise2, promise3]).then((value) => {
        //   console.log(value.length);
      
      output.innerHTML = "";
          let maxTime = Math.max(...value.map(value => value.delay));
      value.forEach((value)=>{
          let row = document.createElement("tr");

          let nameCell = document.createElement("td");
          nameCell.textContent = value.name;

          let timeCell = document.createElement("td");
          timeCell.textContent = value.delay;

          row.appendChild(nameCell);
          row.appendChild(timeCell);
          output.appendChild(row);
          
        //   console.log(maxTime)

        
      })
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

};