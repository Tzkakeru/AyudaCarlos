let arreglo = {
  "tareas": [
  ]
}

const fetchData = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetch(url);
      const json = await data.json();
      resolve(json);
    } catch (error) {
      reject(error);
    }
  });
}

const getDataUrl = () => {
  async function getData() {
    const apiUrl = `http://localhost/ep3Backend/API/`;
    const ENDPOINT_TAREAS = 'tareas.php';
    try {
      const dataData = await fetchData(`${apiUrl}${ENDPOINT_TAREAS}`);
      createTable(dataData)
    } catch (error) {
      console.log(error);
    }
  }
  getData()
}

getDataUrl()


const createTable = (data) => {

  let contentRows = document.getElementById("content2")

  if (data.tareas.length > 0) {
    data.tareas.forEach((element, index) => {
      let rowTable = ""
      if (element) {

        rowTable =
          `
        <div class="content-row" style="background-color: white; padding:10px; border-radius:10px; ">
          <input id=${element.descripcion} class="input-check" type="checkbox">
          <label class="input-label" for=${element.descripcion}/>
          ${element.descripcion}
          </label>
          <button onClick="deleteElemenet(${index})" class="eliminar"><i class="fa-solid fa-trash"></i></button>
          <button class="editar"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
          `
      }

      let rowTableContent = document.createElement('div')
      rowTableContent.innerHTML = rowTable

      contentRows.appendChild(rowTableContent)
    })
  } else {
    let rowTableEmpty = document.createElement('div')
    rowTableEmpty.textContent = "No hay Tareas"
    contentRows.appendChild(rowTableEmpty)
  }
}

const addWork = () => {
  let value = document.getElementById("newtarea").value
  arreglo.tareas.push(value)
  let contentRows = document.getElementById("content")
  document.getElementById("empty").style.display = "none"
  if (arreglo.tareas.length > 0) {
    let rowTableContent = document.createElement('div')
    rowTableContent.id = "contenedor"
    rowTableContent.innerHTML =
      `
    <div class="content-row" style="background-color: white; padding:10px; border-radius:10px; ">
      <input id=${value} class="input-check" type="checkbox" >
      <label class="input-label" for=${value}/>
      ${value}
      </label>
      <button onClick="deleteElemenet()" class="eliminar"><i class="fa-solid fa-trash"></i></button>
      <button class="editar"><i class="fa-solid fa-pen-to-square"></i></button>
    </div>
      `
    contentRows.appendChild(rowTableContent)
  }
}

const emptyTable = () => {

  if (arreglo.tareas.length === 0) {
    let contentRows = document.getElementById("content")
    let rowTableEmpty = document.createElement('div')
    rowTableEmpty.innerHTML = "<p id='empty'>No hay tareas por Realizar</p>"
    contentRows.appendChild(rowTableEmpty)
  } else {

  }
}
emptyTable()
