//Desarrollo de las visualizaciones
import { setChartHeight } from '../modules/height';
import { setChartCanvas, setChartCanvasImage, setCustomCanvas, setChartCustomCanvasImage } from '../modules/canvas-image';
import { setRRSSLinks } from '../modules/rrss';
import { setFixedIframeUrl } from './chart_helpers';

export function initChart(iframe) {
    //Desarrollo del gráfico > Mapa a desarrollar por Joaquín y/o Julia > No hay desarrollo en este JS

    //Iframe
    setFixedIframeUrl('informe_perfil_mayores_2022_demografia_1_8','mapa_municipios_personas_mayores');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('mapa_municipios_personas_mayores');

    //Captura de pantalla de la visualización
    setChartCanvas();
    setCustomCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('mapa_municipios_personas_mayores');
        setChartCustomCanvasImage('mapa_municipios_personas_mayores');
    });

    //Altura del frame
    setChartHeight(iframe);
}