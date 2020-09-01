import React from 'react';
import {render} from 'react-dom';

/* Importando libreria */
import 'bootstrap/dist/css/bootstrap.css';
/* Llamando componentes */
import App from './routes/App';

const container = document.getElementById('root');

render(<App/>,container);

