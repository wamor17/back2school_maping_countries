
AmCharts.makeChart("map",{
	"type": "map",
	"pathToImages": "http://www.amcharts.com/lib/3/images/",
	"addClassNames": true,
	"fontSize": 15,
	"color": "#000000",
	"projection": "miller",
	"backgroundAlpha": 1,
	"backgroundColor": "rgba(148, 204, 244, 0.2)",
	"dataProvider": {
		"map": "worldLow",
		"getAreasFromMap": true,
		"images": [
			{
				"top": 40,
				"left": 60,
				"width": 80,
				"height": 40,
				"pixelMapperLogo": true,
				"imageURL": "http://pixelmap.amcharts.com/static/img/logo-black.svg no-active",
				"url": "http://www.amcharts.com"
			}
		],
		"areas": [
			{
				"id": "AE",
				"title": "Emiratos Árabes Unidos",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "DE",
				"title": " ",
				"balloonText": "Alemania",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Alemania</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Marzo 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td>No disponible</td> <td></td> <td></td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'>Clases en grupos reducidos, preestablecidos para asegurar el mínimo de contagios. Profesores toman cursos en materia de educación a distancia para mejorar la educación a distancia. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'>Uso obligatorio de cubrebocas en pasillos, escaleras y comedor.</td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "AF",
				"title": "Afganistán",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "AL",
				"title": "Albania",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "AM",
				"title": "Armenia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "AO",
				"title": "Angola",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "AR",
				"title": " ",
				"balloonText": "Argentina",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Argentina</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Febrero 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td>Protocolo Marco</td> <td></td> <td></td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'>Calendario escolar diferenciado por jurisdicción, generar espacios de trabajo alternativo y tutoriales, valoración de la salud emocional y se privilegia el uso de espacios al aire libre. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'>Pensar en alternativas para la organización o habilitación de espacios no escolares de intercambio de la comunidad y espacios de encuentro de estudiantes. El regreso a clases es según la situación epidemiológica de cada localidad.</td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"descriptionWindowBottom": "50",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "AT",
				"title": "Austria",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "AU",
				"title": " ",
				"balloonText": "Australia",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Australia</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>27 enero, 1 y 3 de febrero 2021</td> <td><strong>Modelo:</strong></td> <td>Normal</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td>No disponible</td> <td></td> <td></td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> El regreso a clases será de manera escalonada en diferentes fechas dependiendo del estado y su administración, para todos los niveles de educación. Las clases se realizarán de manera normal, como se hacia antes de la pandemia. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> El 100% de alumnos, profesores y trabajadores se integrarán a las actividades académicas normales, siguiendo las medidas de distanciamiento social, uso de mascarilla en caso de tener tener síntomas respiratorios y el uso de desinfectante a base de alcohol.</td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"descriptionWindowBottom": "50",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "AZ",
				"title": "Azerbaiyán",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "BA",
				"title": "Bosnia y Herzegovina",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "BD",
				"title": "Bangladesh",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "BE",
				"title": " ",
				"balloonText": "Bélgica",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Bélgica</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Septiembre 2020</td> <td><strong>Modelo:</strong></td> <td>Normal</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>No disponible</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Preescolar, primaria y secundaria volvieron a clases presenciales el 1 de septiembre del 2020. A tiempo pleno primaria y 1 er grado de secundaria de forma simultánea, los cinco días de la semana y sin restricciones de alumnos por clase; los restantes grados de este nivel lo hicieron con capacidad al 50%. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Salidas escalonadas a recreo,  padres, madres y cuidadores deberán mantener distancia física y acudir solamente un adulto a llevar al educando. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "BF",
				"title": "Burkina Faso",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "BG",
				"title": "Bulgaria",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "BI",
				"title": "Burundi",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "BJ",
				"title": "Benin",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "BO",
				"title": " ",
				"balloonText": "Bolivia",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Bolivia</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>1 de febrero 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-blue'>info</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td>Año por la Recuperación del Derecho a la Educación</td> <td></td> <td></td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Según cada región, las clases serán presenciales, semipresenciales o a través de internet. En la presencial se realiza el curso normal, pero con normas de bioseguridad; en semipresencial hay alternancia en la asistencia de estudiantes a la unidad educativa, con la finalidad de evitar las aglomeraciones. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> La modalidad a distancia a distancia se implementa en lugares donde los niveles de contagio son críticos, por ejemplo en las grandes ciudades. La modalidad presencial  se realiza con distanciamiento dentro de las aulas, uso permanente de cubrebocas (barbijo) y sanitizador de alcohol rebajado con agua o alcohol en gel para las manos. Además del barbijo y gell, muchos niños asisten con máscaras de placas transparentes. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"descriptionWindowBottom": "100",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "BR",
				"title": " ",
				"balloonText": "Brasil",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Brasil</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>febrero 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>Marco de acción y recomendaciones para la reapertura de escuelas</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Restricciones para recibir hasta un 35 % de sus alumnos, Las clases se han dividido en grupos, los cuales se irán rotando semanalmente para respetar el aforo limitado, se compaginará con el sistema de educación telemática. Desarrollar calendarios académicos alternativas, basadas en diferentes escenarios salud pública y teniendo en cuenta las modalidades que se utilizarán para la educación a distancia. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Para retomar la docencia presencial, los lineamientos de los especialistas son la adopción de medidas como el uso de máscaras, la distancia social de al menos 1,5 metros, la medición de la temperatura y el uso de alcohol en gel </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"descriptionWindowBottom": "100",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "BT",
				"title": "Bután",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "BW",
				"title": "Botswana",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "BY",
				"title": "Bielorrusia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "BZ",
				"title": "Belice",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "CA",
				"title": " ",
				"balloonText": "Canadá",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Canadá</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Agosto 2020</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>No disponible</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Seleccionando una fracción reducida de estudiantes para clases presenciales, mientras la otra fracción de estudiantes será por educación a distancia. Las juntas deberían considerar proporcionar a los estudiantes con un alto nivel de necesidades de educación especial, para quienes el aprendizaje remoto puede ser un desafío, la opción de asistir a la escuela todos los días. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Por grupo se permitirá tener un máximo de 15 alumnos en una clase normal, siguiendo medidas de sana distancia. Estudiantes y maestros deberán permanecer en su salón de clases y moverse como grupo a las entradas, salidas u otros espacios dentro de la escuela. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "CD",
				"title": "República Democrática del Congo",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "CF",
				"title": "República Centroafricana",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "CG",
				"title": "República del Congo",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "CH",
				"title": "Suiza",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "CI",
				"title": "Costa de Marfil",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "CL",
				"title": " ",
				"balloonText": "Chile",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Chile</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Marzo 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>No Sigamos aprendiendo / Paso a paso abramos las escuelas / Chile recupera y aprende / Escuelas arriba</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> El Plan Paso a Paso es una estrategia gradual para enfrentar la pandemia según la situación sanitaria de cada zona en particular. Se trata de 4 escenarios o pasos graduales, que van desde la Cuarentena hasta la Apertura Avanzada, con restricciones y obligaciones específicas. El avance o retroceso de un paso particular a otro está sujeta a indicadores epidemiológicos, red asistencial y trazabilidad. 1) cuarentena 2) transición 3) preparación 4) apertura inicial </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Por grupo se permitirá tener un máximo de 15 alumnos en una clase normal, siguiendo medidas de sana distancia. Estudiantes y maestros deberán permanecer en su salón de clases y moverse como grupo a las entradas, salidas u otros espacios dentro de la escuela. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"descriptionWindowBottom": "100",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "CM",
				"title": "Camerún",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "CN",
				"title": "China",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "CO",
				"title": " ",
				"balloonText": "Colombia",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Colombia</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Enero 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>Plan de alternancia</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Se autorizó que entre la tercera semana de enero y la primera de febrero realizará el regreso progresivo y gradual a las aulas, sin dejar de lado las clases virtuales y la educación en casa. No hay una fecha de regreso a clases determinada y cada región establece su propio calendario académico. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> No se especifica </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"descriptionWindowBottom": "100",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "CR",
				"title": " ",
				"balloonText": "Costa Rica",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Costa Rica</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Febrero 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>Yo me cuido, yo te cuido, la comunidad se cuida</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Para poder abordar esa nueva realidad, se fortalece el modelo pedagógico, que tiene como meta los aprendizajes esperados y las habilidades, a partir de dimensiones como: maneras de pensar, formas de vivir en el mundo, formas de relacionarse con otras personas, herramientas para integrarse al mundo. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Buen lavado de manos, uso de mascarillas, distanciamiento de 1,8 metros, limpieza de superficies, no compartir pertenencias y todo lo que está contemplado en los protocolos sanitarios. El regreso a clases incluye la alternancia, la cual se dará dependiendo de la capacidad de aforo y matrícula, en un formato 3/2 (asistir tres días al centro educativo y trabajar a distancia los dos días restantes) o 2/3 (asistir dos días a la institución y continuar con su proceso educativo a distancia tres días a la semana). </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"descriptionWindowBottom": "100",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "CU",
				"title": "Cuba",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "CZ",
				"title": "República Checa",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "DK",
				"title": "Dinamarca",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "DO",
				"title": "República Dominicana",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "DZ",
				"title": "Argelia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "EC",
				"title": " ",
				"balloonText": "Ecuador",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Ecuador</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Marzo 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>Aprendemos juntos en casa</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> 30% de matricula en escuelas,  principalmente en zonas rurales donde ya se aplico un programa piloto. La jornada se mantendrá de manera regular de lunes a viernes de manera extendida, que son ocho horas de asistencia. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Cubrebocas, zonas de lavado de manos, aplicación de gel antibacterial y no prestar material. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"descriptionWindowBottom": "100",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "EE",
				"title": "Estonia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "EG",
				"title": "Egipto",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "EH",
				"title": "Sahara Occidental",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "ER",
				"title": "Eritrea",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "ES",
				"title": " ",
				"balloonText": "España",
				"description": "<div class='countries-description'> <strong class='title-country-table'>España</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Enero 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>Aprendemos juntos en casa</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Comunidad Autónoma de Madrid. Las escuelas han reabierto y cerrado ya varias ocasiones, el cierre de las mismas esta condicionado al desarrollo epidemiológico local. Los niños de 0 a 3 años asistirán todos los alumnos de manera presencial. Para el resto de educación básica se reduce el número de alumnos a grupos estables de máximo 20 personas. Modelo híbrido semipresencial. Modelos de rotación (burbujas de trabajo). </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Se crea un coodinador COVID-19 por centro escolar. Se realizan pruebas PCR a niños y personal de educación al inicio del curso escolar. Se toma la temperatura a la entrada. Mascarilla obligatoria para los alumnos a partir de 6 años, cuando la pandemia evolucione de una manera favorable el límite de edad se elevará a 11 años. Se suministrará mascarillas y gel entre alumnos y profesores. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"descriptionWindowBottom": "55",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "ET",
				"title": "Etiopía",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "FK",
				"title": "Islas Malvinas",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "FI",
				"title": " ",
				"balloonText": "Finlandia",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Finlandia</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Mayo 2020</td> <td><strong>Modelo:</strong></td> <td>Normal</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>No disponible</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Solamente dos meses permanecieron cerradas las escuelas, retornaron la segunda quincena de mayo de forma escalonada y con restricciones de aforo. Finlandia reabrió el 14 de mayo las escuelas para educación primaria y secundaria a pesar del coronavirus. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Los educandos fueron divididos por grupos separados unos de otros, se intensificaron las medidas de higiene y se escalonaron las clases, los horarios de comidas y las entradas y salidas de los colegios. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "FR",
				"title": " ",
				"balloonText": "Francia",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Francia</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Mayo 2020</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>No disponible</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> En el caso de los colegios, se tienen un protocolo más flexible, cuando el distanciamiento social sea materialmente imposible en las aulas, talleres, bibliotecas y cafeterías deja de ser obligatorio. Los espacios deben estar organizados de tal forma qu pueda haber la mayor distancia posible entre los alumnos . En los espacios al aire libre, por ejemplo, en los patios de recreación, esta queda descartada desde el maternal hasta la primaria. En preeescolar, el uso de tapabocas está prohibido, en primaria solo se tendrán tapabocas a disposición en caso de que un alumno presente síntomas y sea evacuado de las instalaciones. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Distanciamiento de 2 metros entre grupos en la cafetería y el uso de mascarillas categoría 1 (quirúrgico) son requisito, dentro y fuera de cada establecimiento dentro y fuera de de cada establecimiento tanto para los estudiantes como para el personal. Solo a los alumnos de preescolar se les exime del uso de tapabocas. En cuanto al distanciamiento físico, se pide a la hora del almuerzo los alumnos de un mismo curso permanecen en grupo y no se mezclan con estudiantes de otros cursos. Se suma una ventilación de los espacios mucho más frecuente. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"descriptionWindowBottom": "80",
				"descriptionWindowLeft": "200",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "GA",
				"title": "Gabón",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "GB",
				"title": " ",
				"balloonText": "Reino Unido",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Reino Unido</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td> Marzo 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'> Back to School </td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Enseñar un plan de estudios amplio y ambicioso en todas las materias. Cuando proceda, se debe priorizar el tiempo de enseñanza para abordar las lagunas más importantes en el conocimiento de los alumnos. Debe asegurarse de que la planificación del plan de estudios se base tanto en una evaluación de los puntos de partida de los alumnos como en las lagunas en sus conocimientos, y una comprensión de cuál es el contenido más crítico para la progresión. Para lograr esto, es posible que deba realizar modificaciones sustanciales en su plan de estudios y debe hacer un uso efectivo de la evaluación formativa regular evitando la introducción de sistemas de seguimiento innecesarios. Puede utilizar las flexibilidades existentes para crear tiempo para cubrir el contenido más importante en el que los alumnos aún no están seguros. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> La principal diferencia son las medidas de seguridad adicionales implementadas. Estos incluyen arranques y descansos escalonados, escritorios mirando hacia adelante, higiene adicional y ventilación. Los niños en las escuelas secundarias ahora también usarán cubiertas para la cara a menos que estén exentos o donde pueda dificultar el aprendizaje, como para los alumnos sordos. Además, cada alumno de la escuela secundaria tendrá tres pruebas en las primeras dos semanas, luego el personal y los alumnos harán pruebas semanales con regularidad </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"descriptionWindowBottom": "100",
				"descriptionWindowLeft": "200",
				"color": "rgb(0, 24, 71, 1)"
			},
			{
				"id": "GE",
				"title": "Georgia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "GF",
				"title": "Guyana Francesa",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "GH",
				"title": "Ghana",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "GL",
				"title": "Groenlandia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "GM",
				"title": "Gambia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "GN",
				"title": "Guinea",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "GQ",
				"title": "Guinea Ecuatorial",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "GR",
				"title": "Grecia",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "GT",
				"title": " ",
				"balloonText": "Guatemala",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Guatemala</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Enero 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>Juntos por un regreso a clases seguro / Aprendo en casa y en clase</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Cuenten con protocolos de bioseguridad  y que en las aulas haya materiales de apoyo psicosocial y guías de aprendizaje. Concientización con la comunidad educativa por parte del docente, apoyo emocional a estudiantes, organización física de ambientes seguros y las divisiones en burbujas (cohortes). </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Mantener a las personas sintomáticas en casa, lavado de manos, distanciamiento físico y social, disponibilidad de agua, saneamiento, higiene y ventilación. El docente debe utilizar permanentemente y de forma correcta la mascarilla asegurándose de cubrir por completo la boca y nariz. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"descriptionWindowBottom": "100",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "GW",
				"title": "Guinea-Bissau",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "GY",
				"title": "Guyana",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "HN",
				"title": "Honduras",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "HR",
				"title": "Croacia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "HT",
				"title": "Haití",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "HU",
				"title": "Hungría",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "ID",
				"title": "Indonesia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "IE",
				"title": " ",
				"balloonText": "Irlanda",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Irlanda</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Marzo 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>De vuelta a escuela</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Se inicio con clases en los niveles primario y postprimario, el Gobierno ha decidido un regreso gradual de los estudiantes a la educación en la escuela. Etapas: El lunes 1 de marzo, los cuatro primeros grupos de clases del nivel primario - Infantes de primer y último año, primera y segunda clase - y los alumnos del Leaving Certificate de último año volverán a la oferta escolar. Esta fase también verá un regreso a la asistencia total para los niños en las escuelas especiales, así como para los niños en las clases preescolares de inicio temprano y las clases especiales de intervención temprana para los niños con autismo o discapacidad auditiva. El lunes 15 de marzo es la fecha límite para el regreso a la oferta escolar del resto de los niños de la escuela primaria - estudiantes de tercer a sexto curso y quinto año del Leaving Certificate. Esta fecha se revisará durante el período posterior al 1 de marzo. El lunes 12 de abril, después de las vacaciones de Semana Santa, es la fecha límite para el regreso a la educación escolar del resto de estudiantes de posprimaria, estudiantes de primero a cuarto año. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Filtros escolares, estretegias y acuerdos con los transportistas esolares, listas/pasos para incorporarse con padres de familia y alumnos (Hoja de ruta al regreso a la escuelas) </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"descriptionWindowBottom": "100",
				"descriptionWindowLeft": "200",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "IN",
				"title": "India",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "IQ",
				"title": "Irak",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "IR",
				"title": "Irán",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "IS",
				"title": "Islandia",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "IT",
				"title": "Italia",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "JO",
				"title": "Jordania",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "JM",
				"title": "Jamaica",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "BS",
				"title": "Bahamas",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "JP",
				"title": " ",
				"balloonText": "Japón",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Japón</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Junio 2020</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>La educación en Japón más allá de la crisis del covid-19. No dejar a nadie atrás </td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Se le da preferencia a conocimientos fundamentales, se reduce la carga docente, se pierden actividades físicas, se asignan maestros e instructores adicionales. Se contratan más docentes (instructores y asistentes de maestros se contratan docentes retirados y estudianres de grados superiores por tiempo parcial). </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Se toma la temperatura, se asigan fondos a cada escuela para que compre insumos (termómetro, desinfectantes, teléfonos celulares, etc.) </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"descriptionWindowBottom": "100",
				"color": "rgb(0, 24, 71, 1)"
			},
			{
				"id": "KE",
				"title": "Kenya",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "KG",
				"title": "Kirguistán",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "KH",
				"title": "Camboya",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "KP",
				"title": "Corea del Norte",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "KR",
				"title": " ",
				"balloonText": "Corea del Sur",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Corea del Sur</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Octubre 2020</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-blue'>info</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>No disponible</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Prioridad al último año de bachillerato. Se limita el número de estudiantes. Sistema rotatorio con clases presenciales y a distancia. Los escritorios están separados por láminas, los alumnos deben portar mascarillas permanentemente y mantener un metro entre ellos. Control de la temperatura corporal antes de entrar y continuar durante el día. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> En función del número de contagios locales. Cada colegio establece sus horarios. Un tercio es la capacidad máxima del aula. Ingreso ordenado por turnos. Los estudiantes deben pasar por un detector térmico. Los pupitres se separaron por medio de láminas y el uso del cubre bocas es obligatorio en todo momento. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "500",
				"descriptionWindowBottom": "100",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "PR",
				"title": "Puerto Rico",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "XK",
				"title": "Kosovo",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "KZ",
				"title": "Kazajstán",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "LA",
				"title": "República Democrática Popular Lao",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "IL",
				"title": " ",
				"balloonText": "Israel",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Israel</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Febrero 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>Plan de sanidad</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Se inició con alumnos de preescolar y de los primeros cuatro cursos de primaria. 20% del alumnado, el 80% restante (1,9 millones de estudiantes) seguirá con clases virtuales, y su vuelta se hará en varias fases para evitar un nuevo pico de infecciones. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Es el segundo intento de reincoporación, la primera fue en agosto 2020. El Ministerio de Educación había dado instrucciones de seguridad: los cubrebocas debían ser usados por los estudiantes a partir de cuarto grado, las ventanas tenían que estar abiertas, debían lavarse las manos con frecuencia y los estudiantes tenían que mantener una distancia de dos metros siempre que fuera posible. Para la reincorporación a clases en el año 2021 se utilizará el modelo 10-4 desarrollado por los científicos Uri Alon y Ron Milo, y se basa en el período de latencia del virus, es decir, el lapso que transcurre entre que una persona se contagia y pasa a ser contagiosa para los demás. Ese tiempo se calcula en tres días y de ahí surge el modelo: 4 días en la escuela (de lunes a jueves) y 10 días de confinamiento, lo que da oportunidad para ingresar a un nuevo grupo de alumnos y se reduzca la posibilidad de segregación de la enfermedad </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"descriptionWindowBottom": "100",
				"color": "rgb(0, 24, 71, 1)"
			},
			{
				"id": "LK",
				"title": "Sri Lanka",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "LR",
				"title": "Liberia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "LS",
				"title": "Lesoto",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "LT",
				"title": "Lituania",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "LU",
				"title": "Luxemburgo",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "TT",
				"title": "Trinidad y Tobago",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "LV",
				"title": "Letonia",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "LY",
				"title": "Libia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "MA",
				"title": "Marruecos",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "MD",
				"title": "Moldavia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "ME",
				"title": "Montenegro",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "MG",
				"title": "Madagascar",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "MK",
				"title": "Macedonia del Norte",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "ML",
				"title": "Mali",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "MM",
				"title": "Myanmar",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "MN",
				"title": "Mongolia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "MR",
				"title": "Mauritania",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "MW",
				"title": "Malawi",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "TF",
				"title": "Tierras Australes y Antárticas Francesas",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "MX",
				"title": "México",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "MY",
				"title": "Malasia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "MZ",
				"title": "Mozambique",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "NA",
				"title": "Namibia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "NE",
				"title": "Niger",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "NG",
				"title": "Nigeria",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "NI",
				"title": "Nicaragua",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "NL",
				"title": " ",
				"balloonText": "Países Bajos",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Países Bajos</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td> 8 de febrero, 1 de marzo 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-blue'>info</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'> No disponible </td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Todos los alumnos reciben educación en la escuela.   Secundaria: todos asisten a la escuela al menos un día a la semana; Hay una atención especial para para los alumnos en exámenes, alumnos en un posición vulnerable y clases prácticas; los días en que están no están en la escuela  reciben educación a distancia Media Superior. La escuela está abierta para la realización de exámenes, educación práctica y para los estudiantes en un posición vulnerable. Para que una pasantía continúe depende del sector / industria. Ed. Sup: Los estudiantes reciben educación a distancia; sin embargo, la educación superior está abierto para tomar pruebas y exámenes, educación práctica y orientación de las personas vulnerables. Para que una pasantía continúe depende del sector / industria. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> 1. Los niños se quedan en casa cuando tienen un resfriado. Incluso si se trata de molestias menores, como estornudos o mocos. 2. Para los grupos 1 a 6, un padre / tutor puede traer y recoger al niño. Se quedan fuera de la escuela y mantienen una distancia de 1,5 metros. Usar mascarilla bucal. Los niños de los grupos 7 y 8 vienen a la escuela ellos mismos tanto como sea posible. 3. Para limitar el número de contactos, habrá horas de inicio y finalización escalonadas y descansos escalonados.4. Como siempre, el personal educativo se mantiene a una distancia de 1,5 metros entre sí. No es obligatorio mantener una distancia de 1,5 metros entre los estudiantes y entre los estudiantes y el personal. Siempre que sea posible, se crean rutas a pie de un solo sentido en la escuela. 5. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"descriptionWindowBottom": "100",
				"descriptionWindowLeft": "200",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "NO",
				"title": " ",
				"balloonText": "Noruega",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Noruega</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Abril 2020</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'> No disponible </td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Plan de ingreso paulatino, iniciando con una de cada cuatro clases, de forma escalonada y con restricciones. Atienden a su Semáforo Nacional para la apertura o cierre de escuelas. Los niños y jóvenes con necesidades especiales pueden asistir físicamente a la escuela todos los días tanto en el nivel rojo como en el amarillo. Para los adolescentes de 16 años, grado 10 , y aquellos que están en la escuela secundaria (hasta 19 años), pueden optar por pasar clases a distancia. Y las escuelas pueden definir esta modalidad si el maestro está en cuarentena, o si hay un brote de virus en el centro educativo. Las universidades y colegios de formación profesional terciaria pasan clases virtuales y deben abstenerse de impartir conferencias para grandes grupos de estudiantes. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Contacto mínimo, aulas con 15 educandos y bancas separadas, recomendaciones satinarias de lavado de manos. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "NP",
				"title": "Nepal",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "NZ",
				"title": "Nueva Zelanda",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "OM",
				"title": "Omán",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "PA",
				"title": "Panamá",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "PE",
				"title": " ",
				"balloonText": "Perú",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Perú</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td> 15 de abril, 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'> Sigamos aprendiendo </td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> El retorno debe ser seguro, es decir, que garantice un conjunto de medidas sanitarias, epidemiológicas y protocolos de prevención de bioseguridad, y flexible, que facilite adaptarse a los cambios tomando en cuenta las consideraciones pedagógicas, socioemocionales, de gestión escolar y los tipos de servicio. Se evaluan a los estudiantes por medio de una evaluación diagnóstica, el portafolio del estudiante, la información registrada en el SIAGIE y la carpeta de recuperación y pueden suceder dos escenarios: el estudiante supera los niveles de logro para su grado entonces continúa con las acciones según las competencias seleccionadas en el marco de la emergencia sanitaria; si el estudiante requiere de un tiempo adicional para alcanzar el nivel esperado se iniciará el periodo de consolidación para el desarrollo de competencias seleccionadas, estos cursos remediales durarán hasta junio 2021. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> En el marco de lo dispuesto en la RM 121-2021-MINEDU, comunica (el Minedu) que a partir del 19 de abril las IIEE y programas educativos podrán brindar el servicio educativo con algún nivel de presencialidad. El retorno será seguro, flexible, gradual y voluntario. “El Ministerio de Educación, en coordinación con los gobiernos regionales y locales, desarrolla acciones de articulación intergubernamental e intersectorial para asegurar las mejores condiciones de salud y seguridad para todos los estudiantes, docentes y administrativos. Así, niñas, niños y adolescentes seguirán aprendiendo con el objetivo de continuar con sus trayectorias educativas y su formación como ciudadanos </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"descriptionWindowBottom": "100",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "PG",
				"title": "Papúa Nueva Guinea",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "PH",
				"title": "Filipinas",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "PL",
				"title": "Polonia",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "PK",
				"title": "Pakistán",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "PT",
				"title": "Portugal",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "PY",
				"title": " ",
				"balloonText": "Paraguay",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Paraguay</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Marzo 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'> Retorno seguro a clases 2021 </td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> Los padres através de una app deciden si sus hijos asisten de manera presencial o no. Para las clases presenciales se crean grupos que asistiran de manera intercalada. Cada grupo estará conformada por máximo 15 personas. Los días de clases presenciales serán por grupos. APP para control de los grupos, distanciamiento social en el aula, uso de cubre bocas obligatorio. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> Se crea una APP para el control de los asistentes de cada grupos escolar. Distanciamiento social en el aula, uso de cubre bocas obligatorio, higiene de manos mediante uso de gel antibacterial antes del ingreso, antes y despues del receso, antes y despues de manipulación de objetos y de consumir alimentos, ventilación: puertas  y ventanas siempre abiertas aun con aire acondicionado. Zonas de circulación señalizadas en el piso, horarios escalonados de entreda, recreo y salida </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"descriptionWindowBottom": "100",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "RO",
				"title": "Rumania",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "RS",
				"title": "Serbia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "RU",
				"title": "Rusia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "RW",
				"title": "Rwanda",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "SA",
				"title": "Arabia Saudita",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "SD",
				"title": "Sudan",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "SE",
				"title": " ",
				"balloonText": "Suecia",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Suecia</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td> Septiembre 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'> No disponible </td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> El país no confinó a su población y dejó abierta la educación infantil, primaria y secundaria, cerrando bachillerato y universidad.  Algunas ciudades implementaron un sistema híbrido, a libre elección. </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> En Suecia no es obligatorio el uso de mascarillas, es por elección.  Mantienen el distanciamiento social entre estudiantes y el lavado constante de manos. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"descriptionWindowLeft": "200",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "SI",
				"title": "Eslovenia",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "SJ",
				"title": "Svalbard y Jan Mayen",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "SK",
				"title": "Eslovaquia",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "SL",
				"title": "Sierra Leona",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "SN",
				"title": "Senegal",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "SO",
				"title": "Somalia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "SR",
				"title": "Suriname",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "SS",
				"title": "Sudán del Sur",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "SV",
				"title": "El Salvador",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "SY",
				"title": "Siria",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "SZ",
				"title": "Swazilandia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "FJ",
				"title": "Fiyi",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "LS",
				"title": "Lesotho",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "NC",
				"title": "Nueva Caledonia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "SB",
				"title": "Islas Solomon",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "TD",
				"title": "Chad",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "TG",
				"title": "Togo",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "TH",
				"title": "Tailandia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "TJ",
				"title": "Tayikistán",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "TM",
				"title": "Turkmenistán",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "TN",
				"title": "Túnez",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "TR",
				"title": "Turquía",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "TW",
				"title": "Taiwán",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "TZ",
				"title": "Tanzania",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "UA",
				"title": "Ucrania",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "UG",
				"title": "Uganda",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "US",
				"title": " ",
				"balloonText": "Estados Unidos",
				"description": "<div class='countries-description'> <strong class='title-country-table'>Estados Unidos</strong> <table> <tbody> <tr> <td><strong>Fecha de regreso a clases:</strong></td> <td>Febrero 2021</td> <td><strong>Modelo:</strong></td> <td>Híbrido</td> </tr> <tr> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación voluntaria</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-green'>check</i></div> <div class='check-value-country'> Reincorporación gradual</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Docentes vacunados</div> </div> </td> <td> <div class='label_countries_check'> <div><i class='small material-icons icon-color-red'>close</i></div> <div class='check-value-country'> Alumnos vacunados</div> </div> </td> </tr> <tr> <td><strong>Nombre de la estrategia:</strong></td> <td colspan='3'>Hoja de ruta para la reapertura de las escuelas</td> </tr> <tr> <td><strong>Actividades presenciales</strong></td> <td colspan='3'> El Centro para el Control y Prevención de Enfermedades (CDC por sus siglas en inglés) elaboró una estrategia operativa para la enseñanza segura de manera presencial en las escuelas K-12, a través de la integración de un paquete de componentes de prevención y control, estas escuelas van desde el preescolar hasta el 12vo grado, haciendo especial hincapié en que la enseñanza presencial debe tener prioridad sobre las actividades extracurriculares, incluidos los deportes y los eventos escolares, para minimizar el riesgo de transmisión en las escuelas y proteger el aprendizaje presencial </td> </tr> <tr> <td><strong>Aforos y filtros sanitarios:</strong> </td> <td colspan='3'> El Centros para el Control y la Prevención de Enfermedades de Estados Unidos recomienda medidas como el lavado de manos, la desinfección de las instalaciones escolares, la aplicación de pruebas de diagnóstico y el rastreo de contactos para detectar nuevos contagios, así como separar a las personas infectadas del resto de la gente en una escuela. </td> </tr> </tbody> </table> </div>",
				"descriptionWindowWidth": "550",
				"descriptionWindowBottom": "80",
				"color": "rgba(0, 24, 75, 1)",
			},
			{
				"id": "UY",
				"title": "Uruguay",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "UZ",
				"title": "Uzbekistán",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "VE",
				"title": "Venezuela",
				"color": "rgba(200, 200, 200, 1)"
			},
			{
				"id": "VN",
				"title": "Vietnam",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "YE",
				"title": "Yemen",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "ZA",
				"title": "Sudáfrica",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "ZM",
				"title": "Zambia",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "ZW",
				"title": "Zimbabwe",
				"color": "rgba(255, 255, 255, 1)"
			}
		]
	},
	"balloon": {
		"horizontalPadding": 15,
		"borderAlpha": 0,
		"borderThickness": 1,
		"verticalPadding": 15
	},
	"areasSettings": {
		"color": "rgba(189,189,189,1)",
		"outlineColor": "rgba(108, 108, 108, 1)",
		"rollOverOutlineColor": "rgba(208, 208, 208, 1)",
		"rollOverBrightness": 10,
		"selectedBrightness": 10,
		"selectable": true,
		"unlistedAreasAlpha": 0,
		"unlistedAreasOutlineAlpha": 0
	},
	"imagesSettings": {
		"alpha": 1,
		"color": "rgba(189,189,189,1)",
		"outlineAlpha": 0,
		"rollOverOutlineAlpha": 0,
		"outlineColor": "rgba(208,208,208,0.12)",
		"rollOverBrightness": 20,
		"selectedBrightness": 20,
		"selectable": true
	},
	"linesSettings": {
		"color": "rgba(189, 189, 189, 1)",
		"selectable": true,
		"rollOverBrightness": 20,
		"selectedBrightness": 20
	},
	"zoomControl": {
		"zoomControlEnabled": true,
		"homeButtonEnabled": true,
		"panControlEnabled": false,
		"right": 38,
		"bottom": 30,
		"minZoomLevel": 0.25,
		"gridHeight": 100,
		"gridAlpha": 0.1,
		"gridBackgroundAlpha": 0,
		"gridColor": "#FFFFFF",
		"draggerAlpha": 1,
		"buttonCornerRadius": 2
	}
});
