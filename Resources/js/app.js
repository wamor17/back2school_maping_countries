
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
				"title": "Costa Rica (modelo híbrido)",
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
				"title": "Ecuador (modelo híbrido)",
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
				"title": "España (modelo híbrido)",
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
				"title": "Finlandia (modelo convencional)",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "FR",
				"title": "Francia",
				"description": "<div class='countrie-description'> Fecha de retorno a clase: 00/00/0000 <br> Modelo: Híbrido <br> </div>",
				"descriptionWindowWidth": "300",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "GA",
				"title": "Gabón",
				"color": "rgba(255, 255, 255, 1)"
			},
			{
				"id": "GB",
				"title": "Reino Unido (modelo híbrido)",
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
				"title": "Guatemala (modelo híbrido)",
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
				"title": "Irlanda (modelo híbrido)",
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
				"title": "Japón (modelo híbrido)",
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
				"title": "Corea del Sur (modelo híbrido)",
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
				"title": "Israel (modelo híbrido)",
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
				"title": "Países Bajos (modelo híbrido)",
				"color": "rgba(0, 24, 75, 1)"
			},
			{
				"id": "NO",
				"title": "Noruega (modelo híbrido)",
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
				"title": "Perú (modelo híbrido)",
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
				"title": "Paraguay (modelo híbrido)",
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
				"title": "Suecia (modelo híbrido)",
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
				"balloonText": "Estados Unidos	",
				"description": "<div class='countrie-description'> Fecha de retorno a clase: 00/00/0000 <br> Modelo: Híbrido <br> </div>",
				"descriptionWindowWidth": "300",
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
