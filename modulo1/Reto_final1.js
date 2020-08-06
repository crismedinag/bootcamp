/* Dada esta lista de libros : Ready player one, El nombre del viente, El temor de un hombre sabio, Cien años de soledad, Origen.
Imprímelos por pantalla y entre corchetes el número de
letras que contiene su nombre (ej.: Origen [6] ). Además,
debes poner el que sea más largo en negrita.

Imprímelos por pantalla y entre corchetes el número de
letras que contiene su nombre (ej.: Origen [6] ). Además,
debes poner el que sea más largo en negrita.
*/

var libros = ["Ready player one", "El nombre del viento", "El temor de un hombre sabio", "Cien años de soledad", "Origen"];

document.write(libros[0] + "&nbsp;" + "[" + libros[0].length + "]" + "<br>" + libros[1] + "&nbsp;" + "[" + libros[1].length + "]" + "<br>" + libros[2].bold() + "&nbsp;" + "[" + libros[2].length + "]" + "<br>" + libros[3] + "&nbsp;" + "[" + libros[3].length + "]" + "<br>" + libros[4] + "&nbsp;" + "[" + libros[4].length + "]" + "<br>")