'use strict'
let nodoMonths = document.querySelector( '#months' );
// QUIERO PINTAR EN LA WEB TODOS LOS MESES DEL AÑO CON SUS SEMANAS Y DÍAS CORRESPONDIENTES.
let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log( months );
// Quiero una función que me devuelva los numeros que tiene cada mes.
let diaEnCurso = 6; // Empieza en Lunes

function getDays( month_number ){
    switch( month_number ){
        case 3:
        case 5:
        case 8:
        case 10:
            return 30;
            // break;
        case 0: // ENERO
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            return 31;
        case 1:
            return 28;
    }
}
function eachMonth( month_number){
    // Quiero acceder al nombre de cada mes por su index.
    let nombre_mes = months[ month_number ];
    // Quiero saber el numero de días de cada mes:
    let limiteDeDias = getDays( month_number );
    // Quiero un objeto con su nombre del mes y su numero de dias correspondiente.
    let month = {
        limiteDeDias: limiteDeDias,
        nombre_mes: nombre_mes
    }
    console.log( month );
    // Quiero iuna función que me recorra todos los dias de cada mes desde donde acabó el mes anterior y lo guarde en una cadena de texto actualizada
    // let str_html_cada_mes = "";
    let str_html_cada_mes = '<div class="main__month"><h2 class="main__h2">' + nombre_mes + '</h2><ul class="main__weekdays"><li class="main__day enunciate">Mon</li><li class="main__day enunciate">Tue</li><li class="main__day enunciate">Wed</li><li class="main__day enunciate">Thu</li><li class="main__day enunciate">Fri</li><li class="main__day enunciate">Sat</li><li class="main__day enunciate">Sun</li>';
    for( let i = 1; i <= limiteDeDias; i++ ){ // CADA DIA
        console.log( months[ i ]);
        console.log( "Pinto el dia ", i );

        if( i===1 ){
            str_html_cada_mes = str_html_cada_mes + '<li class="main__day" style="grid-column-start: '+diaEnCurso+'">' + i + '</li>';

        }else{
            str_html_cada_mes = str_html_cada_mes + '<li class="main__day">' + i + '</li>';
        }

        diaEnCurso++;
        if ( diaEnCurso === 8 ){
            diaEnCurso = 1;
        }
    }
    str_html_cada_mes = str_html_cada_mes + '</ul></div>';
    return str_html_cada_mes;
}
// console.log( 'mira', eachMonth( 3 ) );
// let mes0 = eachMonth(1);
// pintaMe( mes0 );
let eachmes = "";

// eachMonth( i );
// eachMonth( i + 1)
for( let i = 0; i < months.length; i++ ){
    eachmes = eachmes + eachMonth( i );
    console.log(eachmes);
}
pintaMe( eachmes );





function pintaMe(parametro){
    let nodoPainting = document.querySelector( '#painting' );
    nodoPainting.innerHTML = parametro;
}
// for( let i = 0; i < months.length; i++ ){
//     mes0 = pintaMe(months[i]);
// }
// // Array con dias de cada mes:
// console.log( 'mira', eachMonth( 3 ) );

// // Quiero iuna función que me recorra todos los dias de cada mes desde donde acabó el mes anterior
// let everyMonth = []; 
// for( let i = 1; i <= limiteDeDias; i++ ){
// console.log( months[ i ]);

// console.log( "Pinto el dia ", i );
// }
// return everyMonth;



// Pintar 
// let str_html = '';
// let str_html = '<div class="main__months" id="months"></div><div class="main__months"><div class="main__month"><h2 class="main__h2">January</h2><ul class="main__weekdays"><li class="main__day enunciate">Mon</li><li class="main__day enunciate">Tue</li><li class="main__day enunciate">Wed</li><li class="main__day enunciate">Thu</li><li class="main__day enunciate">Fri</li><li class="main__day enunciate">Sat</li><li class="main__day enunciate">Sun</li>




// str_html = str_html + '<li class="main__day">' + i + '</li>';

// function pintaMe(){
//     let nodoPainting = document.querySelector( '#painting' );
//     nodoPainting.innerHTML = '';
// }
// pintaMe(i);
