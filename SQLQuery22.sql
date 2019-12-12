

select idPersona_Pasajero_Contratacion, nombre_persona
from Cliente inner join Personas 
on Personas.id_Persona = Cliente.idPersona_cliente
inner join Contratacion 
inner join Contratacion_pasajeros on Contratacion_pasajeros.idContra_Contratacion_pasajeros = Contratacion.idContratacion 
on Contratacion.idCliente_Contratacion = Cliente.idPersona_cliente  and Contratacion.idContratacion = Contratacion_pasajeros.idContra_Contratacion_pasajeros


select distinct id_Persona ,nombre_persona, Pasajero.fechaNacimiento_pasajero, Tipo.rangoEdad, Tour.nombre_tour 
from 
Personas inner join Contratacion_pasajeros 
on Personas.id_Persona = Contratacion_pasajeros.idPersona_Pasajero_Contratacion
inner join Contratacion on Contratacion.idContratacion = Contratacion_pasajeros.idContra_Contratacion_pasajeros
inner join Pasajero on Pasajero.idPersona_pasajero = Contratacion_pasajeros.idPersona_Pasajero_Contratacion
inner join Tour on Tour.idInterno_tour = Contratacion.idTour_Contratacion 
inner join Precio on Precio.idInternoTour = Tour.idInterno_tour
inner join Tipo on Tipo.id_tipo = Precio.idTipo
where Pasajero.fechaNacimiento_pasajero > '2008-01-01' and Tipo.rangoEdad ='0-11' 
