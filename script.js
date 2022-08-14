let facultades = puntos.filter( x => x.tipo === 'f' );
let puertas = puntos.filter( x => x.tipo === 'p' );

let importante = [...puertas,...facultades];
console.log(importante);

//* funcion para calcular la distancia entre 2 puntos
const distanciaCord = (pi,pf)=>{

    let dis = Math.sqrt( Math.pow(pi.lat - pf.lat,2) + Math.pow(pi.lng - pf.lng,2));
    return dis;

}

//* ALGORITMO A STAR
//!=====================================================================
//!=====================================================================

const busquedaAStar = (nodoInicial, nodoFinal) => {
    console.log(nodoInicial);
    console.log(nodoFinal);

    let abierta = []; // posibles caminos
    let cerrada = []; // nodos ya revisado
    let ruta = [];
    let elegidos = [];

    ruta.push(nodoInicial);
    cerrada.push(nodoInicial);

    let nodo_elegido = {
        nodo : nodoInicial,
        nodoPadre : undefined,
        // dis: 0
    };

    elegidos.push(nodo_elegido);

    let encontrado = false;

    let nodoActual = nodoInicial;
    let nodoPadre;
  
    let cont = 0;
   
    while(!encontrado && cont <50){
        cont++;
        let f_menor = 9999999;



        console.log('padre: ',nodoPadre);
        console.log('cerrada: ',cerrada[cerrada.length - 1] );


        cerrada.push(nodoActual);
   
        if(ruta[ruta.length - 1] !== nodoPadre && ruta[ruta.length - 1] !== nodoInicial){
            console.log('no es el nodo padre');
            console.log('padre: ',nodoPadre);
            console.log('cerrada: ',ruta[ruta.length - 1] );

            

            if(ruta.some(r => r === nodoPadre)){
                let z= 0;
                while(ruta[ruta.length - 1] !== nodoPadre && z<30){
                    console.log('quitando: ',ruta[ruta.length - 1]);
                    ruta.pop();
                    z++;
                }
            }else{
                // console.log('------------- RECONSTRUYENDO ------------');
                let reconstruccion = [];
                reconstruccion.push(nodo_elegido);
                let re = 0 ;
                // console.log('------------- BUSCANDO');
                let nfill = nodo_elegido.nodoPadre;
                while(ruta.some(r => r !== reconstruccion[0].nodo) && re < 10){
                    // console.log('primer while de busqueda');
                    let nodoAux = elegidos.filter(e => e.nodo === nfill);
                    let nAux = nodoAux[nodoAux.length - 1];
                    console.log('nodoAux: ',nodoAux);
                    console.log('nAux: ', nAux);
                    nfill = nAux.nodoPadre;
                    reconstruccion.unshift(nAux);
                    re++;
                }
                console.log(ruta);
                console.log('rec: ',reconstruccion);
                // console.log('------------- ELIMINANDO');
                re = 0
                while(ruta[ruta.length - 1] !== reconstruccion[0].nodo && re < 10){
                    // console.log('segundo while de eliminacion');
                    ruta.pop();
                    re++;
                }
                
                ruta.pop();
                let recAux = [];
                reconstruccion.forEach(r => {
                    recAux.push(r.nodo);
                });

                ruta.push(...recAux);
                console.log(ruta);
                // return ruta;
            }
            
        }
        ruta.push(nodoActual);
           

        nodoActual.nodos.forEach(n => {
            if(puntos[n] === nodoFinal){
                // console.log('.........ENCONTRADO.............');
                encontrado = true;
            }

            let n_abierto = {
                nodo : puntos[n],
                nodoPadre : nodoActual,
                // dis: nodo_elegido.dis + distanciaCord(nodoActual,puntos[n])
            }

            if(
                n_abierto.nodo !== nodoActual && 
                n_abierto.nodo !== nodoPadre
            )
            {
                abierta.push(n_abierto);
            }
            
        });

        // console.log('ABIERTA: ', abierta);

        // filtro debe ir aqui

        abierta.forEach(n => {

            if(
                n.nodo !== nodoActual && 
                n.nodo.nodos.length > 1 && 
                n.nodo !== nodoPadre && 
                !(cerrada.some(c => c === n.nodo)) 
            ){
                let g = distanciaCord(n.nodoPadre,n.nodo);
                let h = distanciaCord(n.nodo,nodoFinal);
                let f = g + h;
                if(f < f_menor){
                    f_menor = f;
                    nodo_elegido = n;
                    // console.log('------------->> elegido: ', nodo_elegido);
                }
            }
           
            
        });

        // console.log('cambio');
        elegidos.push(nodo_elegido);
        console.log('ELEGIDO: ',nodo_elegido);
        nodoPadre = nodo_elegido.nodoPadre;
        nodoActual = nodo_elegido.nodo;
        // cerrada.push(nodoActual);
        console.log('--------------------------------');
    }

    cerrada.push(nodoFinal);
    ruta.push(nodoFinal);

    console.log(ruta);
    console.log(cerrada);

    return ruta;
}


//!=====================================================================
//!====================================================================


//creamos la funcion que inicia la posicion
function iniciarMap(){
    //variable que contendra latitud y longitud
    var coord = {lat:-12.056444575340228 ,lng:-77.08451069875066};

    //* Creamos una variable de google maps en el 
    //* elemento que creamos
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16, //? el zoom con el que aparecera el mapa
      center: coord, //? coordenados donde se ubicara el centro
      mapId: '4ae3e9bf9f6364c2'
    });


    let rutaIcon = '';
    let marcadores = [];
    importante.forEach( p => {

        if(p.tipo == 'f'){
            rutaIcon = './sources/img/edificio.png';
        }else{
            rutaIcon = './sources/img/puerta.png';
        }

        var cord_p = {lat: p.lat, lng: p.lng  }
        var marker = new google.maps.Marker({
            position: cord_p , //? coordenadas del marker
            map: map, //? mapa donde se ubica el marcador
            icon: rutaIcon
        });

        let infoWindow = new  google.maps.InfoWindow();
        let html = `<h6>${p.name}</h6>`
        infoWindow.setContent(html);

        let marcadorInd = {
            mark : marker,
            info : infoWindow
        }

        marcadores.push(marcadorInd);
    })





    //creamos la lista de facultades en la barar izquierda 
    const list_facultades = document.getElementById('lista_facultades');
    const cont_fac = [...document.querySelectorAll('.cont_inter')];
    const btn_ocultar = [...document.querySelectorAll('.btn_ocultar_lista')];
    const btn_total = document.getElementById('btn_ocultar_cont');
    const s_origen = document.getElementById('s_origen');
    const s_destino = document.getElementById('s_destino');

    let pos = 1;
    let fragment = document.createDocumentFragment();
    let frag_opt =  document.createDocumentFragment();
    let frag_opt2 = document.createDocumentFragment();
    let contador = 0;
    importante.forEach(f => {
        let li_fac = document.createElement('li');
        let o_fac = document.createElement('option');
        let o_fac2 = document.createElement('option');
        li_fac.classList.add('li_facultad');
        li_fac.textContent = f.name;
        o_fac.textContent = f.name;
        o_fac.value = f.id;
        o_fac2.textContent = f.name;
        o_fac2.value = f.id;
        li_fac.setAttribute('data-index',f.id);
        li_fac.setAttribute('data-mark',contador);
        contador++;

        li_fac.addEventListener('click',()=>{
            console.log(puntos[li_fac.dataset.index]);
            let p  =  puntos[li_fac.dataset.index];
            map.setCenter(p);

            marcadores.forEach(m =>{
                m.info.close();
            })

            let m = marcadores[li_fac.dataset.mark]
            console.log('marcador seleccionado: ',m);
            m.info.open(map,m.mark);
        });

        fragment.append(li_fac);    
        frag_opt.append(o_fac);
        frag_opt2.append(o_fac2);
    });



list_facultades.append(fragment);
s_origen.append(frag_opt);
s_destino.append(frag_opt2);

    btn_ocultar.forEach(b=>{
        b.addEventListener('click',()=>{
            cont_fac[pos].classList.add('ocultar');
            btn_ocultar[pos].classList.remove('active');
            pos = b.dataset.in;
            cont_fac[pos].classList.remove('ocultar');
            btn_ocultar[pos].classList.add('active');
        });
    });

    btn_total.addEventListener('click',()=>{
        cont_fac.forEach(c => {
            c.classList.add('ocultar');
        })
        btn_ocultar.forEach(b=>{
            b.classList.remove('active');
        })
    })


    let p_origen ;
    let p_destino ;
    let rutaPath = []
    let flightPath = new google.maps.Polyline({
        path: rutaPath,
        geodesic: true,
        strokeColor: "#2549c0b4",
        strokeOpacity: 1.0,
        strokeWeight: 4,
      });


    const btn_genera_ruta = document.getElementById('btn_genera_ruta');

    btn_genera_ruta.addEventListener('click',()=>{
        
        p_origen = document.getElementById('s_origen').value;
        p_destino = document.getElementById('s_destino').value;

        if( p_origen >= 0 && p_destino >= 0){
            rutaPath = busquedaAStar(puntos[ p_origen],puntos [p_destino]);

                flightPath.setPath(rutaPath);

              flightPath.setMap(null);
              flightPath.setMap(map);
        }else{
            alert('debe elegir una punto de orige y de destino');
        }
        
    });


    

}
