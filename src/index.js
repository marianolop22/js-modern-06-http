import * as CRUD from './js/crud-provider';
// import { init } from "./js/chistes-page";
// import { init as initUsuarios } from "./js/usuarios-page";
import { init } from "./js/archivos-page";

import './styles.css';

/* 
fetch( jokeUrl )
    .then(resp => resp.json())
    .then( ({id, value}) => {
        console.log(id);
        console.log(value);
    });
 */


// init();
// initUsuarios();
/* 
CRUD.getUsuario(2).then(console.log);

CRUD.crearUsuario ({
    name: 'Mariano',
    job: 'Teacher'
}).then(console.log);

CRUD.updateUsuario ( 1, {
    name: 'Pepe',
    job: 'frulea'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log);
 */

init();
