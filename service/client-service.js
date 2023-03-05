
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());
  
  
//PEDAZO DE CODIGO REMPLAZADO POR  return fetch("http://localhost:3000/perfil").then(respuesta => {
 //  return respuesta.json();
 // }); :

  /*const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/perfil");
    http.send(); //enviar la petición
    //onload = ejecutar el pedido
    http.onload = () => {
      const response = JSON.parse(http.response);
      if (http.status >= 400) {
        reject(response)
      } else { 
        resolve(response)
      }
    };
  })
  return promise;*/

  export const clienteServices = {
    listaClientes,
  }; 