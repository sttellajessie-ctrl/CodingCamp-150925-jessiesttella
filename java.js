function addTask() {
  const task = document.getElementById("taskInput").value;
  const date = document.getElementById("dateInput").value;
  if (task === "" || date === "") {
    alert("Task dan Date harus diisi!");
    return;
  }

  const table = document.getElementById("taskTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  // Kolom Task
  const cell1 = newRow.insertCell(0);
  cell1.textContent = task;

  // Kolom Date
  const cell2 = newRow.insertCell(1);
  cell2.textContent = date;

  // Kolom Status
  const cell3 = newRow.insertCell(2);
  const statusBtn = document.createElement("button");
  statusBtn.textContent = "Pending";
  statusBtn.style.backgroundColor = "orange";
  statusBtn.onclick = function () {
    if (statusBtn.textContent === "Pending") {
      statusBtn.textContent = "Done";
      statusBtn.style.backgroundColor = "green";
      cell1.classList.add("done");
    } else {
      statusBtn.textContent = "Pending";
      statusBtn.style.backgroundColor = "orange";
      cell1.classList.remove("done");
    }
  };
  cell3.appendChild(statusBtn);

  // Kolom Action
  const cell4 = newRow.insertCell(3);
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function () {
    newRow.remove();
  };
  cell4.appendChild(delBtn);

  // Reset input
  document.getElementById("taskInput").value = "";
  document.getElementById("dateInput").value = "";
}

function deleteAll() {
  const tbody = document.getElementById("taskTable").getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
}