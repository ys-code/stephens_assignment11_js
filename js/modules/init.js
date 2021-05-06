fetch('/data/employees.json')
    .then( returnedData => returnedData.json() )
    .then( data=>buildGrid(data))
    .catch( e => console.log(e.message) )

function buildGrid(data){
    for (let employee of data.employees) {
        let tbody = document.createElement('tbody');
            tbody.innerHTML += 
             `
            <tr>
                <td>${employee.ID}</td>
                <td>${employee.Name}</td>
                <td>${employee.Ext}</td>
                <td><a href="mailto:${employee.Email}">${employee.Email}</a></td>
                <td>${employee.Department}</td>
                <td><button class="btn btn-sm btn-danger delete">X</button></td>
            </tr>
            `
        empTable.appendChild(tbody);
        empCount.value = `(${empTable.rows.length - 1})`;
        }

    }