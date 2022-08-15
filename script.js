let facultades = puntos.filter( x => x.tipo === 'f' );
let puertas = puntos.filter( x => x.tipo === 'p' );

let importante = [...puertas,...facultades];
console.log(importante);

//* funcion para calcular la distancia entre 2 puntos
const distanciaCord = (pi,pf)=>{
    let dis = Math.sqrt( 
        Math.pow(pi.lat - pf.lat,2) + Math.pow(pi.lng - pf.lng,2)
    );
    return dis;
}

//* ALGORITMO A STAR
//!=====================================================================
//!=====================================================================

const busquedaAStar = (nodoInicial, nodoFinal) => {
    let abierta = []; 
    let cerrada = []; 
    let ruta = [];
    let elegidos = [];

    ruta.push(nodoInicial);
    cerrada.push(nodoInicial);

    let nodo_elegido = {
        nodo : nodoInicial,
        nodoPadre : undefined,
        dis: 0
    };

    elegidos.push(nodo_elegido);

    let encontrado = false;

    let nodoActual = nodoInicial;
    let nodoPadre;
  
    let cont = 0;
   
    while(!encontrado && cont <500){
        cont++;
        let f_menor = 9999999;

        cerrada.push(nodoActual);

        if(ruta[ruta.length - 1] !== nodoPadre && ruta[ruta.length - 1] !== nodoInicial){
            if(ruta.some(r => r === nodoPadre)){
                let z= 0;
                while(ruta[ruta.length - 1] !== nodoPadre && z<30){
                    ruta.pop();
                    z++;
                }
            }else{
                let reconstruccion = [];
                reconstruccion.push(nodo_elegido);
                let re = 0 ;
                let nfill = nodo_elegido.nodoPadre;
                while(!(ruta.some(r => r === reconstruccion[0].nodo)) && re < 100){
                    let nodoAux = elegidos.filter(e => e.nodo === nfill);
                    let nAux = nodoAux[nodoAux.length - 1];
                    nfill = nAux.nodoPadre;
                    reconstruccion.unshift(nAux);
                    re++;
                }
                re = 0
                while(ruta[ruta.length - 1] !== reconstruccion[0].nodo && re < 100){
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
            }
            
        }
        ruta.push(nodoActual);
           

        nodoActual.nodos.forEach(n => {
            if(puntos[n] === nodoFinal){
                encontrado = true;
            }

            let n_abierto = {
                nodo : puntos[n],
                nodoPadre : nodoActual,
                dis: nodo_elegido.dis + distanciaCord(nodoActual,puntos[n]),
            }

            if(
                n_abierto.nodo !== nodoActual && 
                n_abierto.nodo !== nodoPadre
            )
            {
                abierta.push(n_abierto);
            }
            
        });

        abierta.forEach(n => {

            if(
                n.nodo !== nodoActual && 
                n.nodo.nodos.length > 1 && 
                n.nodo !== nodoPadre && 
                !(cerrada.some(c => c === n.nodo)) 
            ){
                let g = distanciaCord(n.nodoPadre,n.nodo);
                let h = distanciaCord(n.nodo,nodoFinal);
                let f = n.dis + h;
                if(f < f_menor){
                    f_menor = f;
                    nodo_elegido = n;
                }
            }
        });
        elegidos.push(nodo_elegido);
        nodoPadre = nodo_elegido.nodoPadre;
        nodoActual = nodo_elegido.nodo;
    }
    cerrada.push(nodoFinal);
    ruta.push(nodoFinal);
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


    let rutaBorrado =  [{ lat: 0, lng: 0 }];


    //creamos la lista de facultades en la barar izquierda 
    const list_facultades = document.getElementById('lista_facultades');
    const cont_fac = [...document.querySelectorAll('.cont_inter')];
    const btn_ocultar = [...document.querySelectorAll('.btn_ocultar_lista')];
    const btn_total = document.getElementById('btn_ocultar_cont');
    const s_origen = document.getElementById('s_origen');
    const s_destino = document.getElementById('s_destino');
    const s_destino_ub = document.getElementById('s_destino_ubc');
    const alert_od = document.getElementById('aler-od'); 

    const btn_genera_ruta = document.getElementById('btn_genera_ruta');
      //? para simular la ubicacion 
      const check_ub = document.getElementById('check_ub');
      const btn_mst_ubc = document.getElementById('btn_mostrar_ubc');
      const inp_lat = document.getElementById('inp_lat');
      const inp_lng = document.getElementById('inp_lng');
      const aler_ubc = document.getElementById('aler-ubc');

      const btn_ruta_ubc = document.getElementById('btn_genera_ruta_ubc');
      const aler_ub = document.getElementById('alert_ub'); 
      const aler_d_ub = document.getElementById('aler-d-od');
      const text_rub = document.getElementById('text_rub');
      const aler_ub_r = document.getElementById('aler-ub-r');

      const check_mover = document.getElementById('check_mover');
      const alert_mover = document.getElementById('alert_mover');
      const text_mover = document.getElementById('text_mover');
      const aler_ub_mover = document.getElementById('aler-ub-mover');


    let pos = 0;
    let fragment = document.createDocumentFragment();
    let frag_opt =  document.createDocumentFragment();
    let frag_opt2 = document.createDocumentFragment();
    let frag_opt3 = document.createDocumentFragment();
    let contador = 0;
    importante.forEach(f => {
        let li_fac = document.createElement('li');
        let o_fac = document.createElement('option');
        let o_fac2 = document.createElement('option');
        let o_fac3 = document.createElement('option');

        li_fac.classList.add('li_facultad');
        li_fac.textContent = f.name;

        o_fac.textContent = f.name;
        o_fac.value = f.id;
        o_fac.setAttribute('data-mark',contador);

        o_fac2.textContent = f.name;
        o_fac2.value = f.id;
        o_fac2.setAttribute('data-mark',contador);

        o_fac3.textContent = f.name;
        o_fac3.value = f.id;
        o_fac3.setAttribute('data-mark',contador);

        li_fac.setAttribute('data-index',f.id);
        li_fac.setAttribute('data-mark',contador);
        contador++;

        li_fac.addEventListener('click',()=>{
            borrarLinea();
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
        frag_opt3.append(o_fac3);
    });



list_facultades.append(fragment);
s_origen.append(frag_opt);
s_destino.append(frag_opt2);
s_destino_ub.append(frag_opt3);

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
        strokeColor: "#ecb10d",
        strokeOpacity: 1.0,
        strokeWeight: 6,
      });

    const borrarLinea = ()=>{
        flightPath.setPath(rutaBorrado);

        flightPath.setMap(null);
        flightPath.setMap(map);
    }

    s_origen.addEventListener('change',()=> alert_od.classList.add('d-none'));
    s_destino.addEventListener('change',()=> alert_od.classList.add('d-none'));

 
    

    btn_genera_ruta.addEventListener('click',()=>{
        
        p_origen = s_origen.value;
        p_destino = s_destino.value;
        

        

        marcadores.forEach(m =>{
            m.info.close();
        })

       
        if( p_origen >= 0 && p_destino >= 0){

            marcadores[s_origen.selectedOptions[0].dataset.mark].info.open(map,marcadores[s_origen.selectedOptions[0].dataset.mark].mark);
            marcadores[s_destino.selectedOptions[0].dataset.mark].info.open(map,marcadores[s_destino.selectedOptions[0].dataset.mark].mark);
    

            rutaPath = busquedaAStar(puntos[ p_origen],puntos [p_destino]);

                flightPath.setPath(rutaPath);

              flightPath.setMap(null);
              flightPath.setMap(map);
        }else{
            console.log(alert_od);
            alert_od.classList.remove('d-none')
        }
        
    });



      inp_lat.addEventListener('change',()=>{
        aler_ubc.classList.add('d-none');
        aler_ub_mover.classList.add('d-none');
      })

      inp_lng.addEventListener('change',()=>{
        aler_ubc.classList.add('d-none');
        aler_ub_mover.classList.add('d-none');
      })

      check_ub.addEventListener('change',()=>{
        if(check_ub.checked){
            inp_lat.removeAttribute('disabled');
            inp_lng.removeAttribute('disabled');
        }else{
            inp_lat.setAttribute('disabled',true);
            inp_lng.setAttribute('disabled',true);
        }
      });

      let cordUser = {
        lat: 0,
        lng: 0
      }

    var markerUser = new google.maps.Marker({
        position: cordUser , //? coordenadas del marker
        map: map, //? mapa donde se ubica el marcador
        icon: './sources/img/persona.png'
    });

      btn_mst_ubc.addEventListener('click',()=>{
        marcadores.forEach(m =>{
            m.info.close();
        })
        borrarLinea();
        if(check_ub.checked){
            console.log('latitud: ',inp_lat.value);
            console.log('longitud: ',inp_lng.value);
            if(inp_lat.value && inp_lng.value){
                cordUser.lat = parseFloat(inp_lat.value);
                cordUser.lng = parseFloat(inp_lng.value);
                console.log(cordUser);
                map.setCenter(cordUser);
                markerUser.setPosition(cordUser);
            }else{
                aler_ubc.classList.remove('d-none');
            }
            
        }else{
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position)=>{
                        console.log(position);
                        cordUser.lat = position.coords.latitude;
                        cordUser.lng = position.coords.longitude;
                        console.log(cordUser);
                        map.setCenter(cordUser);
                        markerUser.setPosition(cordUser);
                    },
                    ()=>{
                        alert('error al obtener la posicion');
                    }

                );
            }else{
                alert('el navegador no cuenta con geolocalizacion');
            }
        }
      });

    


      s_destino_ub.addEventListener('change',()=> {
        aler_ub.classList.add('d-none');
        aler_d_ub.classList.add('d-none');
        aler_ub_r.classList.add('d-none');
      });

      btn_ruta_ubc.addEventListener('click',()=>{
        aler_ub.classList.add('d-none');
        aler_d_ub.classList.add('d-none');
        aler_ub_r.classList.add('d-none');
       
        let nodoCercano ;
        let distanciaMenor = 999999;

        if(s_destino_ub.value >= 0){
            
            if(check_ub.checked){

                if(inp_lat.value  && inp_lng.value){
                    text_rub.textContent = 'el sistema usara la ubicacion simulada';
                    aler_ub.classList.remove('d-none');

                    if(cordUser.lat == 0 && cordUser.lng == 0){
                        cordUser.lat = parseFloat(inp_lat.value);
                        cordUser.lng = parseFloat(inp_lng.value);
                    }
                   
                    map.setCenter(cordUser);
                    markerUser.setPosition(cordUser);
    
                    puntos.forEach(p => {
                        let disAux = distanciaCord(cordUser,p);
                        if(disAux < distanciaMenor){
                            distanciaMenor = disAux;
                            nodoCercano = p;
                        }
                    });
        
                    console.log('NODO CERCANO: ',nodoCercano);
                    let rutaAux = busquedaAStar(nodoCercano,puntos[s_destino_ub.value]);
                    rutaAux.unshift(cordUser);
                    flightPath.setPath(rutaAux);
        
                    flightPath.setMap(null);
                    flightPath.setMap(map);
                }else{
                    aler_ub_r.classList.remove('d-none');
                }
                

            }else{
                text_rub.textContent = 'el sistema usara su ubicacion';
                aler_ub.classList.remove('d-none');
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(
                        (position)=>{
                            cordUser.lat = position.coords.latitude;
                            cordUser.lng = position.coords.longitude;
                            console.log(cordUser);
                            map.setCenter(cordUser);
                            markerUser.setPosition(cordUser);

                            puntos.forEach(p => {
                                let disAux = distanciaCord(cordUser,p);
                                if(disAux < distanciaMenor){
                                    distanciaMenor = disAux;
                                    nodoCercano = p;
                                }
                            });
                
                            console.log('NODO CERCANO: ',nodoCercano);
                            let rutaAux = busquedaAStar(nodoCercano,puntos[s_destino_ub.value]);
                            rutaAux.unshift(cordUser);
                            flightPath.setPath(rutaAux);
                
                            flightPath.setMap(null);
                            flightPath.setMap(map);

                        },
                        ()=>{
                            alert('error al obtener la posicion');
                        }

                    );
                }else{
                    alert('el navegador no cuenta con la geolocalizacion');
                }
            }
        }else{
            aler_d_ub.classList.remove('d-none');
        }
            

            

            marcadores.forEach(m =>{
                m.info.close();
            })
    
            marcadores[s_destino_ub.selectedOptions[0].dataset.mark].info.open(map,marcadores[s_destino_ub.selectedOptions[0].dataset.mark].mark);
      });


      check_mover.addEventListener('change',()=>{
        console.log(check_mover.checked);
        if(check_mover.checked){
            if(check_ub.checked){

                if(inp_lat.value && inp_lng.value){
                    cordUser.lat = parseFloat(inp_lat.value);
                    cordUser.lng = parseFloat(inp_lng.value);
                    markerUser.setPosition(cordUser);
                    text_mover.textContent = `El sistema usara la ubicación simualada, lat: ${cordUser.lat}, lng: ${cordUser.lng}`;
                    alert_mover.classList.remove('d-none');
                }else{
                    aler_ub_mover.classList.remove('d-none');
                    check_mover.checked = false;
                }
                
            }else{

                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(
                        (position)=>{
                            cordUser.lat = position.coords.latitude;
                            cordUser.lng = position.coords.longitude;
                            console.log(cordUser);
                            map.setCenter(cordUser);
                            markerUser.setPosition(cordUser);

         
                            text_mover.textContent = `El sistema usara la ubicación real, lat: ${cordUser.lat}, lng: ${cordUser.lng}`;
                            alert_mover.classList.remove('d-none');

                        },
                        ()=>{
                            alert('error al obtener la posicion');
                        }

                    );
                }else{
                    alert('el navegador no cuenta con la geolocalizacion');
                }
            }
        }else{

        }
      })

      document.addEventListener("keydown", (event) => {
        if(check_mover.checked){
            if (event.key == "a"){
                cordUser.lng = cordUser.lng - 0.00001;
            } else if (event.key == "w"){
                cordUser.lat = cordUser.lat + 0.00001;
            } else if (event.key == "d"){
                cordUser.lng = cordUser.lng + 0.00001;
            } else if (event.key == "s"){
                cordUser.lat = cordUser.lat - 0.00001;
            }
    
            markerUser.setPosition(cordUser);
        }
        
    });

}
