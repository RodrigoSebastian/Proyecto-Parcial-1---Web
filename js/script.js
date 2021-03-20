let filasTotales = 0;

let load =()=>{

        var codigos = []
        var nombres = []
        var precios = []
        var cantidades = []
        var totales = []

    let actualizarTotal = (elemento) => {
        let id = elemento.id;
        let idNum = id.substring(9,id.length);
        console.log(idNum)
        console.log(filasTotales);
        console.log(idNum <=filasTotales)
        let codigo   = document.getElementById('codigoTxt' + idNum).value;
        let nombre   = document.getElementById('nombreTxt' + idNum).value;
        let precio   = document.getElementById('cantidNum' + idNum).value;
        let cantidad = document.getElementById('precioNum' + idNum).value;
        let total    = document.getElementById('totalNum' + idNum);
       
        if(idNum >totales.length){
            
            if(codigo != '' && nombre != '' && precio != null && cantidad != null) {
                let totalNum = precio * cantidad;
                total.value = totalNum;            
                precios.push(precio)    
                totales.push(totalNum)
            }
            codigos.push(codigo)
            nombres.push(nombre)        
            cantidades.push(cantidad)
            console.log("Primer if")
        //Solo actualizamos
        }else{
            let totalNum = precio * cantidad;
            total.value = totalNum; 
            codigos[idNum-1]=codigo;
            nombres[idNum-1]=nombre;
            precios[idNum-1]=precio;
            cantidades[idNum-1]=cantidad;
            totales[idNum-1]=totalNum;
            console.log("Segundo if");
        }
        console.log(totales);
    }
    let actualizarTotalQuitar = (id)=>{
        codigos[id-1]=0;
        nombres[id-1]=0;
        precios[id-1]=0;
        cantidades[id-1]=0;
        totales[id-1]=0;
    }
    let eliminarFila = (elemento)=>{
        let index = elemento.parentElement.parentElement.rowIndex;
        let tabla = document.getElementById("bodyTabla").parentElement;
        actualizarTotalQuitar(index)
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


    let crearNota = () => {
        let table = document.createElement("table")
        let thead = document.createElement("thead")
        let tbody = document.createElement("tbody")
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        let div = document.createElement("div")       
        
        let container = document.getElementById("contenedor")
        let n = codigos.length
        console.log(n)

        div.setAttribute("class", "ticket")

        let img = document.createElement('img')
        img.setAttribute("src", "img/Oxxo_Logo.png")
        let txt1 = document.createElement('h4')
        txt1.textContent = "Mexico-Acapulco, México 95D Real del Puente, 62790 Mor."
        txt1.setAttribute("class", "centrado")
        let txt2 = document.createElement('h3')
        txt2.textContent = "-------------------------------------------"
        txt2.setAttribute("class", "centrado")

        div.appendChild(img)
        div.appendChild(txt1)
        div.appendChild(txt2)
        div.appendChild(table)

        let thead1 = document.createElement("text")
        thead1.textContent = "Codigo "
        let thead2 = document.createElement("text")
        thead2.textContent = "Nombre "
        let thead3 = document.createElement("text")
        thead3.textContent = "Cantidad "
        let thead4 = document.createElement("text")
        thead4.textContent = "Precio "
        let thead5 = document.createElement("text")
        thead5.textContent = "Total "
        thead.appendChild(thead1)
        thead.appendChild(thead2)
        thead.appendChild(thead3)
        thead.appendChild(thead4)
        thead.appendChild(thead5)

        table.appendChild(thead)

        table.appendChild(tbody)
     
            for(let i=0; i<n; i++){
                let tr = document.createElement("tr")
                tbody.appendChild(tr)

                    for(let j=0; j<5; j++){
                        let td = document.createElement("td")
    
                        switch(j){
                            case 0:
                                let text1 = document.createElement("text")
                                text1.textContent = codigos[i]
                                tr.appendChild(td).appendChild(text1)
                            break;
                            case 1:
                                let text2 = document.createElement("text")
                                text2.textContent = nombres[i]
                                tr.appendChild(td).appendChild(text2)
                            break;
                            case 2:
                                let text3 = document.createElement("text")
                                text3.textContent = cantidades[i]
                                tr.appendChild(td).appendChild(text3)
                            break;
                            case 3:
                                let text4 = document.createElement("text")
                                text4.textContent = precios[i]
                                tr.appendChild(td).appendChild(text4)
                            break;
                            case 4:
                                let text5 = document.createElement("text")
                                text5.textContent = totales[i]
                                tr.appendChild(td).appendChild(text5)
                            break;
    
                        }
                    }

            }

        let txt3 = document.createElement('text')
        txt3.textContent = "Subtotal $ "
        let sub = document.createElement('text')
        sub.textContent = subtotal(...totales)
        console.log(sub)
        
        let txt4 = document.createElement('text')
        txt4.textContent = "IVA $ "
        let iva = document.createElement('text')
        iva.textContent = calcularIVA(...totales)
        console.log(iva)
        
        let txt5 = document.createElement('text')
        txt5.textContent = "Total $ "
        let total = document.createElement('text')
        total.textContent = tot(...totales)
        console.log(total)

        div.appendChild(txt3).appendChild(sub)
        div.appendChild(td).appendChild(txt4).appendChild(iva)
        div.appendChild(txt5).appendChild(total)

            table.setAttribute("id", "ticket")

            if(container.childElementCount>0){
                let oldTable = document.getElementById("ticket")
                container.removeChild(oldTable)
            }

        container.appendChild(div)
    }

    let subtotal = (...argumentos) =>{
        let n = argumentos.length
        let suma = 0
        for(i=0; i<n; i++){
            suma += argumentos[i]
        }
        return suma
    }

    let calcularIVA = (...argumentos) =>{
        let n = argumentos.length
        let suma = 0
        for(i=0; i<n; i++){
            suma += argumentos[i]
        }
        let iva = suma * .16
        return iva
    }

    let tot = (...argumentos) => {
        let n = argumentos.length
        let suma = 0
        for(i=0; i<n; i++){
            suma += argumentos[i]
        }
        let iva = suma * .16
        let total = suma + iva
        return total
    }

    let boton = document.getElementById("crearNotaBtn")
    boton.addEventListener('click', crearNota)
}
addEventListener('DOMContentLoaded', load)