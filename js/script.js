let filasTotales = 0;

let load =()=>{
    let actualizarTotal = (elemento) => {
        let id = elemento.id;
        let idNum = id.substring(9,id.length);

        let codigo   = document.getElementById('codigoTxt' + idNum).value;
        let nombre   = document.getElementById('nombreTxt' + idNum).value;
        let precio   = document.getElementById('cantidNum' + idNum).value;
        let cantidad = document.getElementById('precioNum' + idNum).value;
        let total    = document.getElementById('totalNum' + idNum);
        
        if(codigo != '' && nombre != '' && precio != null && cantidad != null) {
            let totalNum = precio * cantidad;
            total.value = totalNum;    
        }
    }   

    let eliminarFila = (elemento)=>{
        let index = elemento.parentElement.parentElement.rowIndex;
        let tabla = document.getElementById("bodyTabla").parentElement;

        tabla.deleteRow(index);
    }

    let crearFila = (elemento) => {
        let index = elemento.parentElement.parentElement.rowIndex;
        let tabla = document.getElementById("bodyTabla").parentElement;
        let nuevaFila = tabla.insertRow(index+1);

        filasTotales++;
        let info = [];
        for(let i = 0; i < 5 ; i++){
            info.push(document.createElement("input"));
            switch(i){
                case 0:
                    info[i].setAttribute("id","codigoTxt" + filasTotales);
                    info[i].setAttribute("name","codigo");
                    info[i].setAttribute("type","text");
                break;
                case 1:
                    info[i].setAttribute("id","nombreTxt" + filasTotales);
                    info[i].setAttribute("name","nombre");
                    info[i].setAttribute("type","text");
                break;
                case 2:
                    info[i].setAttribute("id","cantidNum" + filasTotales);
                    info[i].addEventListener('focusout',function(){
                        actualizarTotal(info[i]);
                    },false);
                    info[i].setAttribute("name","cantidad");
                    info[i].setAttribute("type","number");
                    info[i].setAttribute("min","0");
                break;
                case 3:
                    info[i].setAttribute("id","precioNum" + filasTotales);
                    info[i].addEventListener('focusout',function(){
                        actualizarTotal(info[i]);
                    },false);
                    info[i].setAttribute("name","precio");
                    info[i].setAttribute("type","number");
                    info[i].setAttribute("min","0");
                break;
                case 4:
                    info[i].setAttribute("id","totalNum" + filasTotales);
                    info[i].setAttribute("name","total");
                    info[i].setAttribute("type","number");
                    info[i].setAttribute("disabled", true);
                break;
            }
        }

        info.push(document.createElement("button"));
        info.push(document.createElement("button"));

        info[5].setAttribute("id","agregarBtn" + filasTotales);
        info[5].setAttribute("name","agregar")
        info[5].textContent = '+';
        info[5].addEventListener('click',function(){
            crearFila(info[5]);
        },false);
        
        info[6].setAttribute("id","quitarBtn" + filasTotales);
        info[6].addEventListener('click',function(){
            eliminarFila(info[6])
        },false);
        info[6].setAttribute("name","quitar");
        info[6].textContent = '-';

        let td = [];
        nuevaFila.setAttribute("id","fila"+filasTotales);
                
        for(let i = 0; i < 6; i++) {
            td.push(document.createElement("td"));
            td[i].appendChild(info[i]);
            if (i==5) {
                td[i].appendChild(info[i+1]);
            }
            nuevaFila.appendChild(td[i]);
        }
    }

    // document.getElementById('precioNum0').addEventListener('focusout',function(){
    //     actualizarTotal(document.getElementById('precioNum0'));
    // },false);

    // document.getElementById('cantidNum0').addEventListener('focusout',function(){
    //     actualizarTotal(document.getElementById('cantidNum0'));
    // },false);

    document.getElementById('agregarBtnInicial').addEventListener('click', function(){
        crearFila(document.getElementById('agregarBtnInicial'));
    },false);

    // document.getElementById('quitarBtn0').addEventListener('click', function(){
    //     eliminarFila(document.getElementById('quitarBtn0'));
    // },false);
}
addEventListener('DOMContentLoaded', load)